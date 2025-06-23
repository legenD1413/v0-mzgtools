import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取指定表的记录数据
export async function GET(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const tableName = searchParams.get('table')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    if (!tableName) {
      return NextResponse.json({
        success: false,
        message: "缺少表名参数"
      }, { status: 400 })
    }

    // 验证表名，防止SQL注入
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

    // 计算偏移量
    const offset = (page - 1) * limit

    try {
      // 获取总记录数 - 使用query方法
      const countQuery = `SELECT COUNT(*) as total_count FROM "${tableName}"`
      const countResult = await sql.query(countQuery)
      const totalCount = Number(countResult[0]?.total_count || 0)

      // 获取表的字段信息
      const columns = await sql`
        SELECT column_name, data_type
        FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = ${tableName}
        ORDER BY ordinal_position
      `

      // 检查表是否有id字段
      const hasIdColumn = await sql`
        SELECT COUNT(*) as count
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = ${tableName} 
        AND column_name = 'id'
      `
      
      // 获取分页数据 - 根据是否有id字段选择不同的排序方式
      let recordsQuery
      if (Number(hasIdColumn[0].count) > 0) {
        recordsQuery = `SELECT * FROM "${tableName}" ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`
      } else {
        // 如果没有id字段，尝试使用第一个字段排序
        const firstColumn = columns[0]?.column_name || 'product_code'
        recordsQuery = `SELECT * FROM "${tableName}" ORDER BY "${firstColumn}" LIMIT ${limit} OFFSET ${offset}`
      }
      
      console.log(`执行查询: ${recordsQuery}`)
      const records = await sql.query(recordsQuery)

      // 计算分页信息
      const totalPages = Math.ceil(totalCount / limit)
      const hasNext = page < totalPages
      const hasPrev = page > 1

      return NextResponse.json({
        success: true,
        data: {
          tableName,
          columns: columns.map(col => ({
            name: col.column_name,
            type: col.data_type
          })),
          records,
          pagination: {
            currentPage: page,
            totalPages,
            totalCount,
            limit,
            hasNext,
            hasPrev
          }
        }
      })

    } catch (error) {
      console.error(`查询表 ${tableName} 记录失败:`, error)
      return NextResponse.json({
        success: false,
        message: "查询表记录失败",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

  } catch (error) {
    console.error("获取表记录API错误:", error)
    return NextResponse.json({
      success: false,
      message: "API请求失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 