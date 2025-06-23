import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取指定表的详细信息
export async function GET(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const tableName = searchParams.get('table')

    if (!tableName) {
      return NextResponse.json({
        success: false,
        message: "缺少表名参数"
      }, { status: 400 })
    }

    // 获取表的字段信息
    const columns = await sql`
      SELECT 
        column_name,
        data_type,
        is_nullable,
        column_default,
        character_maximum_length,
        numeric_precision,
        numeric_scale
      FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = ${tableName}
      ORDER BY ordinal_position
    `

    // 获取表的索引信息
    const indexes = await sql`
      SELECT 
        indexname as index_name,
        indexdef as index_definition
      FROM pg_indexes 
      WHERE schemaname = 'public' AND tablename = ${tableName}
      ORDER BY indexname
    `

    // 获取表的约束信息
    const constraints = await sql`
      SELECT 
        tc.constraint_name,
        tc.constraint_type,
        ccu.column_name
      FROM information_schema.table_constraints tc
      JOIN information_schema.constraint_column_usage ccu
        ON tc.constraint_name = ccu.constraint_name
      WHERE tc.table_schema = 'public' AND tc.table_name = ${tableName}
      ORDER BY tc.constraint_type, tc.constraint_name
    `

    // 获取表的大小信息
    const tableSize = await sql`
      SELECT 
        pg_size_pretty(pg_total_relation_size(quote_ident(${tableName}))) as total_size,
        pg_size_pretty(pg_relation_size(quote_ident(${tableName}))) as table_size,
        pg_size_pretty(pg_total_relation_size(quote_ident(${tableName})) - pg_relation_size(quote_ident(${tableName}))) as index_size
    `

    // 获取表的注释
    const tableComment = await sql`
      SELECT obj_description(oid) as comment
      FROM pg_class 
      WHERE relname = ${tableName} AND relkind = 'r'
    `

    return NextResponse.json({
      success: true,
      data: {
        tableName,
        columns,
        indexes,
        constraints,
        size: tableSize[0] || null,
        comment: tableComment[0]?.comment || null
      }
    })

  } catch (error) {
    console.error("获取表详细信息失败:", error)
    return NextResponse.json({
      success: false,
      message: "获取表详细信息失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 