import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取数据库基本信息和表列表
export async function GET(request: NextRequest) {
  try {
    console.log('数据库API被调用')
    
    // 检查用户是否已认证
    const user = await getCurrentUser()
    console.log('当前用户:', user ? `${user.username}(${user.role})` : '未认证')
    
    if (!user) {
      console.log('用户未认证，返回401')
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const action = searchParams.get('action')
    console.log('请求动作:', action)

    if (action === 'test') {
      // 测试数据库连接
      console.log('开始执行数据库连接测试...')
      try {
        console.log('执行SQL查询: SELECT NOW() as current_time')
        const timeResult = await sql`SELECT NOW() as current_time`
        console.log('时间查询成功，结果:', timeResult[0])
        
        console.log('执行SQL查询: SELECT version() as db_version')
        const versionResult = await sql`SELECT version() as db_version`
        console.log('版本查询成功，结果:', versionResult[0])
        
        const responseData = {
          success: true,
          message: "数据库连接正常",
          data: {
            currentTime: timeResult[0].current_time,
            version: versionResult[0].db_version,
            status: "connected"
          }
        }
        console.log('返回成功响应:', responseData)
        return NextResponse.json(responseData)
      } catch (error) {
        console.error("数据库连接测试失败:", error)
        const errorResponse = {
          success: false,
          message: "数据库连接失败",
          error: error instanceof Error ? error.message : String(error)
        }
        console.log('返回错误响应:', errorResponse)
        return NextResponse.json(errorResponse, { status: 500 })
      }
    }

    if (action === 'tables') {
      // 获取数据库表列表
      try {
        console.log('开始获取表列表...')
        
        // 使用 information_schema 来获取表列表，这样可以保持原始的表名大小写
        const tables = await sql`
          SELECT 
            t.table_schema as schemaname,
            t.table_name as tablename,
            t.table_type,
            COALESCE(pt.tableowner, 'unknown') as tableowner,
            COALESCE(pt.hasindexes, false) as hasindexes,
            COALESCE(pt.hasrules, false) as hasrules,
            COALESCE(pt.hastriggers, false) as hastriggers
          FROM information_schema.tables t
          LEFT JOIN pg_tables pt ON pt.tablename = LOWER(t.table_name) AND pt.schemaname = 'public'
          WHERE t.table_schema = 'public'
          AND t.table_type = 'BASE TABLE'
          ORDER BY t.table_name
        `
        console.log('找到的表:', tables.map(t => t.tablename))

        // 获取每个表的行数
        const tablesWithCounts = await Promise.all(
          tables.map(async (table) => {
            try {
              // 使用 sql.query() 方法获取行数，因为它返回正确的格式
              const countQuery = `SELECT COUNT(*) as row_count FROM "${table.tablename}"`
              console.log(`正在查询表 "${table.tablename}" 的行数...`)
              const countResult = await sql.query(countQuery)
              // sql.query() 返回数组格式，不是 {rows: [...]}
              const rowCount = Number(countResult[0]?.row_count || 0)
              console.log(`表 "${table.tablename}" 有 ${rowCount} 行`)
              return {
                ...table,
                rowCount
              }
            } catch (error) {
              console.error(`获取表 ${table.tablename} 行数失败:`, error)
              // 如果查询失败，尝试使用统计信息作为备选方案
              try {
                const stats = await sql`
                  SELECT COALESCE(n_tup_ins - n_tup_del, 0) as estimated_count
                  FROM pg_stat_user_tables 
                  WHERE relname = ${table.tablename}
                `
                const estimatedCount = stats.length > 0 ? Number(stats[0].estimated_count || 0) : 0
                console.log(`表 "${table.tablename}" 使用统计信息估计 ${estimatedCount} 行`)
                return {
                  ...table,
                  rowCount: estimatedCount
                }
              } catch (fallbackError) {
                console.error(`获取表 ${table.tablename} 统计信息也失败:`, fallbackError)
                return {
                  ...table,
                  rowCount: 0
                }
              }
            }
          })
        )

        return NextResponse.json({
          success: true,
          data: tablesWithCounts
        })
      } catch (error) {
        console.error("获取数据库表列表失败:", error)
        return NextResponse.json({
          success: false,
          message: "获取表列表失败",
          error: error instanceof Error ? error.message : String(error)
        }, { status: 500 })
      }
    }

    // 默认返回数据库基本信息
    try {
      const dbInfo = await sql`
        SELECT 
          current_database() as database_name,
          current_user as current_user,
          version() as version,
          NOW() as current_time
      `

      return NextResponse.json({
        success: true,
        data: dbInfo[0]
      })
    } catch (error) {
      console.error("获取数据库信息失败:", error)
      return NextResponse.json({
        success: false,
        message: "获取数据库信息失败",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

  } catch (error) {
    console.error("数据库管理API错误:", error)
    return NextResponse.json({
      success: false,
      message: "API请求失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

// 删除数据表
export async function DELETE(request: NextRequest) {
  console.log('=== 删除表API被调用 ===')
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    console.log('当前用户:', user ? `${user.username}(${user.role})` : '未认证')
    
    if (!user) {
      console.log('用户未认证，返回401')
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    // 只有超级管理员可以删除表
    if (user.role !== 'super_admin') {
      console.log('用户不是超级管理员，返回403')
      return NextResponse.json({ 
        success: false, 
        message: "只有超级管理员可以删除数据表" 
      }, { status: 403 })
    }

    const body = await request.json()
    console.log('请求body:', body)
    const { tableName, confirmText, safetyCode } = body

    // 验证必填字段
    console.log('验证必填字段...')
    if (!tableName || !confirmText || !safetyCode) {
      console.log('缺少必要参数:', { tableName, confirmText, safetyCode })
      return NextResponse.json({
        success: false,
        message: "缺少必要参数：表名、确认文本和安全码"
      }, { status: 400 })
    }

    // 安全验证：确认文本必须完全匹配
    const expectedConfirmText = `DELETE TABLE ${tableName}`
    console.log('验证确认文本:', { expected: expectedConfirmText, actual: confirmText })
    if (confirmText !== expectedConfirmText) {
      console.log('确认文本不匹配')
      return NextResponse.json({
        success: false,
        message: `确认文本不正确，请输入：${expectedConfirmText}`
      }, { status: 400 })
    }

    // 安全验证：固定安全码
    const expectedSafetyCode = "DELETE-CONFIRM-2024"
    console.log('验证安全码:', { expected: expectedSafetyCode, actual: safetyCode })
    if (safetyCode !== expectedSafetyCode) {
      console.log('安全码不匹配')
      return NextResponse.json({
        success: false,
        message: "安全码不正确"
      }, { status: 400 })
    }

    // 检查表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = ${tableName}
      )
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({
        success: false,
        message: "表不存在"
      }, { status: 404 })
    }

    // 检查是否为核心系统表（禁止删除）
    const coreSystemTables = [
      'admin_users',
      'admin_sessions',
      'users',
      'user_sessions',
      'user_activity_logs',
      'products',
      'product_categories', 
      'product_series',
      'quote_requests'
    ]

    if (coreSystemTables.includes(tableName)) {
      return NextResponse.json({
        success: false,
        message: "不能删除核心系统表，此操作被禁止"
      }, { status: 403 })
    }

    // 获取表信息用于日志记录
    const tableInfo = await sql`
      SELECT 
        schemaname,
        tablename,
        tableowner,
        hasindexes,
        hasrules,
        hastriggers
      FROM pg_tables 
      WHERE schemaname = 'public' AND tablename = ${tableName}
    `

    // 获取表的行数
    let rowCount = 0
    try {
      const countResult = await sql.query(`SELECT COUNT(*) as row_count FROM "${tableName}"`)
      rowCount = Number(countResult[0]?.row_count || 0)
    } catch (error) {
      console.error(`获取表 ${tableName} 行数失败:`, error)
    }

    // 执行删除操作
    console.log(`准备删除表: ${tableName}`)
    try {
      console.log(`执行SQL: DROP TABLE "${tableName}" CASCADE`)
      await sql.unsafe(`DROP TABLE "${tableName}" CASCADE`)
      
      // 记录删除操作日志
      console.log(`✅ 表删除成功: ${tableName}`)
      console.log(`删除操作者: ${user.username} (${user.role})`)
      console.log(`删除时间: ${new Date().toISOString()}`)
      console.log(`表信息: ${JSON.stringify({ ...tableInfo[0], rowCount })}`)

      const successResponse = {
        success: true,
        message: `表 "${tableName}" 删除成功`,
        data: {
          deletedTable: tableName,
          deletedBy: user.username,
          deletedAt: new Date().toISOString(),
          rowsDeleted: rowCount
        }
      }
      
      console.log('返回成功响应:', successResponse)
      return NextResponse.json(successResponse)

    } catch (deleteError) {
      console.error(`❌ 删除表 ${tableName} 失败:`, deleteError)
      const errorResponse = {
        success: false,
        message: `删除表失败: ${deleteError instanceof Error ? deleteError.message : String(deleteError)}`
      }
      console.log('返回错误响应:', errorResponse)
      return NextResponse.json(errorResponse, { status: 500 })
    }

  } catch (error) {
    console.error("删除表API错误:", error)
    return NextResponse.json({
      success: false,
      message: "删除操作失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 