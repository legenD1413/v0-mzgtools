import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取表结构详细信息
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

    try {
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

      // 获取表的详细字段信息
      const columns = await sql`
        SELECT 
          c.column_name,
          c.data_type,
          c.is_nullable,
          c.column_default,
          c.character_maximum_length,
          c.numeric_precision,
          c.numeric_scale,
          c.ordinal_position,
          CASE 
            WHEN pk.column_name IS NOT NULL THEN true 
            ELSE false 
          END as is_primary_key
        FROM information_schema.columns c
        LEFT JOIN (
          SELECT ku.column_name
          FROM information_schema.table_constraints tc
          INNER JOIN information_schema.key_column_usage ku
            ON tc.constraint_name = ku.constraint_name
            AND tc.table_schema = ku.table_schema
          WHERE tc.constraint_type = 'PRIMARY KEY'
            AND tc.table_schema = 'public'
            AND tc.table_name = ${tableName}
        ) pk ON c.column_name = pk.column_name
        WHERE c.table_schema = 'public' 
          AND c.table_name = ${tableName}
        ORDER BY c.ordinal_position
      `

      // 获取索引信息
      const indexes = await sql`
        SELECT 
          i.indexname,
          i.indexdef,
          CASE WHEN i.indexname LIKE '%_pkey' THEN true ELSE false END as is_primary,
          array_agg(a.attname ORDER BY a.attnum) as columns
        FROM pg_indexes i
        LEFT JOIN pg_class c ON c.relname = i.indexname
        LEFT JOIN pg_index ix ON ix.indexrelid = c.oid
        LEFT JOIN pg_attribute a ON a.attrelid = ix.indrelid AND a.attnum = ANY(ix.indkey)
        WHERE i.schemaname = 'public' 
          AND i.tablename = ${tableName}
        GROUP BY i.indexname, i.indexdef
        ORDER BY i.indexname
      `

      // 获取外键约束
      const foreignKeys = await sql`
        SELECT
          tc.constraint_name,
          kcu.column_name,
          ccu.table_name AS foreign_table_name,
          ccu.column_name AS foreign_column_name
        FROM information_schema.table_constraints AS tc
        JOIN information_schema.key_column_usage AS kcu
          ON tc.constraint_name = kcu.constraint_name
          AND tc.table_schema = kcu.table_schema
        JOIN information_schema.constraint_column_usage AS ccu
          ON ccu.constraint_name = tc.constraint_name
          AND ccu.table_schema = tc.table_schema
        WHERE tc.constraint_type = 'FOREIGN KEY'
          AND tc.table_schema = 'public'
          AND tc.table_name = ${tableName}
      `

      // 获取检查约束
      const checkConstraints = await sql`
        SELECT
          tc.constraint_name,
          cc.check_clause
        FROM information_schema.table_constraints tc
        JOIN information_schema.check_constraints cc
          ON tc.constraint_name = cc.constraint_name
        WHERE tc.constraint_type = 'CHECK'
          AND tc.table_schema = 'public'
          AND tc.table_name = ${tableName}
      `

      // 获取表注释
      const tableComment = await sql`
        SELECT obj_description(c.oid) as comment
        FROM pg_class c
        JOIN pg_namespace n ON n.oid = c.relnamespace
        WHERE n.nspname = 'public' AND c.relname = ${tableName}
      `

      // 获取表统计信息
      const tableStats = await sql`
        SELECT 
          schemaname,
          tablename,
          attname,
          n_distinct,
          most_common_vals,
          most_common_freqs
        FROM pg_stats
        WHERE schemaname = 'public' AND tablename = ${tableName}
        ORDER BY attname
      `

      return NextResponse.json({
        success: true,
        data: {
          tableName,
          comment: tableComment[0]?.comment || null,
          columns: columns.map(col => ({
            name: col.column_name,
            type: col.data_type,
            nullable: col.is_nullable === 'YES',
            default: col.column_default,
            maxLength: col.character_maximum_length,
            precision: col.numeric_precision,
            scale: col.numeric_scale,
            position: col.ordinal_position,
            isPrimaryKey: col.is_primary_key
          })),
          indexes: indexes.map(idx => ({
            name: idx.indexname,
            definition: idx.indexdef,
            isPrimary: idx.is_primary,
            columns: idx.columns
          })),
          foreignKeys: foreignKeys.map(fk => ({
            constraintName: fk.constraint_name,
            column: fk.column_name,
            referencedTable: fk.foreign_table_name,
            referencedColumn: fk.foreign_column_name
          })),
          checkConstraints: checkConstraints.map(cc => ({
            name: cc.constraint_name,
            definition: cc.check_clause
          })),
          statistics: tableStats.map(stat => ({
            column: stat.attname,
            distinctValues: stat.n_distinct,
            mostCommonValues: stat.most_common_vals,
            frequencies: stat.most_common_freqs
          }))
        }
      })

    } catch (error) {
      console.error(`获取表 ${tableName} 结构失败:`, error)
      return NextResponse.json({
        success: false,
        message: "获取表结构失败",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

  } catch (error) {
    console.error("表结构API错误:", error)
    return NextResponse.json({
      success: false,
      message: "API请求失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 