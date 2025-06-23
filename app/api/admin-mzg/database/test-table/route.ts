import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 创建测试表
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    // 只有超级管理员可以创建测试表
    if (user.role !== 'super_admin') {
      return NextResponse.json({ 
        success: false, 
        message: "只有超级管理员可以创建测试表" 
      }, { status: 403 })
    }

    // 创建测试表
    await sql`
      CREATE TABLE IF NOT EXISTS test_delete_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 插入一些测试数据
    await sql`
      INSERT INTO test_delete_table (name, description) VALUES 
      ('测试记录1', '这是第一条测试记录'),
      ('测试记录2', '这是第二条测试记录'),
      ('测试记录3', '这是第三条测试记录')
      ON CONFLICT DO NOTHING
    `

    console.log('测试表创建成功: test_delete_table')

    return NextResponse.json({
      success: true,
      message: "测试表 test_delete_table 创建成功",
      data: {
        tableName: "test_delete_table",
        recordsInserted: 3
      }
    })

  } catch (error) {
    console.error("创建测试表错误:", error)
    return NextResponse.json({
      success: false,
      message: "创建测试表失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 