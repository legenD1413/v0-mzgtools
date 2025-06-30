import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

// 检查PostgreSQL数据库连接和表结构
export async function GET(request: NextRequest) {
  try {
    console.log('开始检查PostgreSQL数据库连接...')
    
    // 检查环境变量
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { 
          error: '数据库连接失败',
          details: 'DATABASE_URL 环境变量未设置'
        },
        { status: 500 }
      )
    }

    // 测试数据库连接
    const result = await sql`SELECT NOW() as current_time`
    console.log('数据库连接成功:', result[0])

    // 检查faqs表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'faqs'
      ) as exists
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({
        status: 'error',
        message: 'FAQ表不存在',
        database_time: result[0].current_time,
        table_exists: false,
        suggestions: ['需要创建FAQ表']
      })
    }

    // 检查faqs表的列结构
    const columns = await sql`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = 'faqs'
      ORDER BY ordinal_position
    `

    const columnNames = columns.map(col => col.column_name)
    const requiredColumns = ['id', 'page_urls', 'question', 'answer', 'categories', 'sort_order', 'is_active', 'show_in_popular', 'created_at', 'updated_at']
    const missingColumns = requiredColumns.filter(col => !columnNames.includes(col))
    const hasOldStructure = columnNames.includes('page_url') || columnNames.includes('category')

    return NextResponse.json({
      status: missingColumns.length === 0 ? 'success' : 'warning',
      message: missingColumns.length === 0 ? '数据库结构正常' : '表结构需要更新',
      database_time: result[0].current_time,
      table_exists: true,
      columns: columns,
      column_names: columnNames,
      missing_columns: missingColumns,
      has_old_structure: hasOldStructure,
      database_url_configured: !!process.env.DATABASE_URL
    })
  } catch (error) {
    console.error('数据库连接检查失败:', error)
    
    return NextResponse.json(
      { 
        error: '数据库连接失败',
        details: error instanceof Error ? error.message : '未知错误',
        database_url_configured: !!process.env.DATABASE_URL
      },
      { status: 500 }
    )
  }
} 