import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 导出表数据
export async function GET(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const tableName = searchParams.get('table')
    const format = searchParams.get('format') || 'json' // json, csv
    const limit = parseInt(searchParams.get('limit') || '1000')

    if (!tableName) {
      return NextResponse.json({
        success: false,
        message: "缺少表名参数"
      }, { status: 400 })
    }

    // 验证表名存在
    const validTables = await sql`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public' AND tablename = ${tableName}
    `

    if (validTables.length === 0) {
      return NextResponse.json({
        success: false,
        message: "表不存在"
      }, { status: 404 })
    }

    try {
      // 获取表的字段信息
      const columns = await sql`
        SELECT column_name, data_type
        FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = ${tableName}
        ORDER BY ordinal_position
      `

      // 获取数据
      const recordsQuery = `SELECT * FROM "${tableName}" LIMIT ${limit}`
      const records = await sql.unsafe(recordsQuery)

      if (format === 'csv') {
        // 生成CSV格式
        const csvHeaders = columns.map(col => col.column_name).join(',')
        const csvRows = records.map(record => 
          columns.map(col => {
            const value = record[col.column_name]
            if (value === null) return ''
            if (typeof value === 'object') return `"${JSON.stringify(value).replace(/"/g, '""')}"`
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`
            }
            return value
          }).join(',')
        ).join('\n')
        
        const csvContent = `${csvHeaders}\n${csvRows}`
        
        return new NextResponse(csvContent, {
          headers: {
            'Content-Type': 'text/csv; charset=utf-8',
            'Content-Disposition': `attachment; filename="${tableName}_${new Date().toISOString().split('T')[0]}.csv"`
          }
        })
      } else {
        // JSON格式
        const exportData = {
          tableName,
          exportTime: new Date().toISOString(),
          totalRecords: records.length,
          columns: columns.map(col => ({
            name: col.column_name,
            type: col.data_type
          })),
          records
        }

        return new NextResponse(JSON.stringify(exportData, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': `attachment; filename="${tableName}_${new Date().toISOString().split('T')[0]}.json"`
          }
        })
      }

    } catch (error) {
      console.error(`导出表 ${tableName} 数据失败:`, error)
      return NextResponse.json({
        success: false,
        message: "导出数据失败",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

  } catch (error) {
    console.error("数据导出API错误:", error)
    return NextResponse.json({
      success: false,
      message: "API请求失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 