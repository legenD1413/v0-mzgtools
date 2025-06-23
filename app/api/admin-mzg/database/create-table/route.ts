import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 创建自定义数据库表
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    // 只有超级管理员可以创建表
    if (user.role !== 'super_admin') {
      return NextResponse.json({ 
        success: false, 
        message: "只有超级管理员可以创建数据库表" 
      }, { status: 403 })
    }

    const body = await request.json()
    const { tableName, columns } = body

    console.log('创建表请求:', { tableName, columns })

    // 验证必填字段
    if (!tableName || !columns || !Array.isArray(columns)) {
      return NextResponse.json({
        success: false,
        message: "缺少必要参数：表名和字段定义"
      }, { status: 400 })
    }

    // 验证表名（避免SQL注入，建议使用下划线而非连字符）
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(tableName)) {
      return NextResponse.json({
        success: false,
        message: "表名只能包含字母、数字和下划线，且必须以字母开头（不支持连字符以确保数据库兼容性）"
      }, { status: 400 })
    }

    // 构建CREATE TABLE语句（不使用双引号以确保兼容性）
    let createTableSQL = `CREATE TABLE ${tableName} (\n  id SERIAL PRIMARY KEY,\n`
    
    // 添加自定义字段
    const columnDefinitions = columns.map((col: any) => {
      const { name, type, maxLength, nullable = true } = col
      
      // 验证字段名
      if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
        throw new Error(`字段名 "${name}" 无效，只能包含字母、数字和下划线，且必须以字母开头`)
      }
      
      let columnDef = `  ${name}`
      
      // 根据类型设置字段定义
      switch (type) {
        case 'varchar':
          columnDef += ` VARCHAR(${maxLength || 255})`
          break
        case 'text':
          columnDef += ` TEXT`
          break
        case 'integer':
          columnDef += ` INTEGER`
          break
        case 'decimal':
          columnDef += ` DECIMAL(10,2)`
          break
        case 'boolean':
          columnDef += ` BOOLEAN`
          break
        case 'timestamp':
          columnDef += ` TIMESTAMP`
          break
        default:
          throw new Error(`不支持的字段类型: ${type}`)
      }
      
      // 添加NOT NULL约束
      if (!nullable) {
        columnDef += ' NOT NULL'
      }
      
      return columnDef
    }).join(',\n')

    createTableSQL += columnDefinitions + ',\n'
    createTableSQL += '  created_at TIMESTAMP DEFAULT NOW(),\n'
    createTableSQL += '  updated_at TIMESTAMP DEFAULT NOW()\n'
    createTableSQL += ')'

    console.log('执行SQL:', createTableSQL)

    // 执行创建表的SQL
    await sql.unsafe(createTableSQL)

    console.log(`✅ 表创建成功: ${tableName}`)

    return NextResponse.json({
      success: true,
      message: `表 "${tableName}" 创建成功`,
      data: {
        tableName,
        columns: columns.length,
        sql: createTableSQL
      }
    })

  } catch (error) {
    console.error("创建表错误:", error)
    return NextResponse.json({
      success: false,
      message: `创建表失败: ${error instanceof Error ? error.message : String(error)}`
    }, { status: 500 })
  }
} 