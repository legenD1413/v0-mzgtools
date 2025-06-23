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
    const { tableName, columns, options = {} } = body

    console.log('创建自定义表请求:', { tableName, columns, options })

    // 验证必填字段
    if (!tableName || !columns || !Array.isArray(columns) || columns.length === 0) {
      return NextResponse.json({
        success: false,
        message: "缺少必要参数：表名和字段定义不能为空"
      }, { status: 400 })
    }

    // 验证表名（避免SQL注入）
    if (!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(tableName)) {
      return NextResponse.json({
        success: false,
        message: "表名只能包含字母、数字、下划线和连字符，且必须以字母开头"
      }, { status: 400 })
    }

    // 检查表是否已存在
    const existingTable = await sql`
      SELECT tablename FROM pg_tables 
      WHERE schemaname = 'public' AND tablename = ${tableName}
    `
    
    if (existingTable.length > 0) {
      return NextResponse.json({
        success: false,
        message: `表 "${tableName}" 已存在，请使用不同的表名`
      }, { status: 400 })
    }

    // 构建CREATE TABLE语句
    let createTableSQL = `CREATE TABLE "${tableName}" (\n`
    
    // 是否添加自动ID字段
    const addAutoId = options.addAutoId !== false
    if (addAutoId) {
      createTableSQL += '  id SERIAL PRIMARY KEY,\n'
    }
    
    // 添加自定义字段
    const columnDefinitions = columns.map((col: any, index: number) => {
      const { 
        name, 
        type, 
        maxLength, 
        precision, 
        scale, 
        nullable = true, 
        defaultValue,
        primaryKey = false,
        unique = false,
        comment 
      } = col
      
      // 验证字段名
      if (!name || typeof name !== 'string') {
        throw new Error(`第 ${index + 1} 个字段缺少字段名`)
      }
      
      if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
        throw new Error(`字段名 "${name}" 无效，只能包含字母、数字和下划线，且必须以字母开头`)
      }
      
      let columnDef = `  "${name}"`
      
      // 根据类型设置字段定义
      switch (type) {
        case 'varchar':
          const length = maxLength || 255
          if (length < 1 || length > 65535) {
            throw new Error(`VARCHAR长度必须在1-65535之间，当前为: ${length}`)
          }
          columnDef += ` VARCHAR(${length})`
          break
        case 'char':
          const charLength = maxLength || 1
          if (charLength < 1 || charLength > 255) {
            throw new Error(`CHAR长度必须在1-255之间，当前为: ${charLength}`)
          }
          columnDef += ` CHAR(${charLength})`
          break
        case 'text':
          columnDef += ` TEXT`
          break
        case 'integer':
          columnDef += ` INTEGER`
          break
        case 'bigint':
          columnDef += ` BIGINT`
          break
        case 'smallint':
          columnDef += ` SMALLINT`
          break
        case 'decimal':
          const prec = precision || 10
          const scal = scale || 2
          if (prec < 1 || prec > 65 || scal < 0 || scal > 30) {
            throw new Error(`DECIMAL精度(${prec})和标度(${scal})超出有效范围`)
          }
          columnDef += ` DECIMAL(${prec},${scal})`
          break
        case 'numeric':
          const numPrec = precision || 10
          const numScale = scale || 2
          columnDef += ` NUMERIC(${numPrec},${numScale})`
          break
        case 'real':
          columnDef += ` REAL`
          break
        case 'double':
          columnDef += ` DOUBLE PRECISION`
          break
        case 'boolean':
          columnDef += ` BOOLEAN`
          break
        case 'date':
          columnDef += ` DATE`
          break
        case 'time':
          columnDef += ` TIME`
          break
        case 'timestamp':
          columnDef += ` TIMESTAMP`
          break
        case 'timestamptz':
          columnDef += ` TIMESTAMPTZ`
          break
        case 'json':
          columnDef += ` JSON`
          break
        case 'jsonb':
          columnDef += ` JSONB`
          break
        case 'uuid':
          columnDef += ` UUID`
          break
        case 'serial':
          columnDef += ` SERIAL`
          break
        case 'bigserial':
          columnDef += ` BIGSERIAL`
          break
        default:
          throw new Error(`不支持的字段类型: ${type}`)
      }
      
      // 添加主键约束
      if (primaryKey && !addAutoId) {
        columnDef += ' PRIMARY KEY'
      }
      
      // 添加唯一约束
      if (unique) {
        columnDef += ' UNIQUE'
      }
      
      // 添加NOT NULL约束
      if (!nullable) {
        columnDef += ' NOT NULL'
      }
      
      // 添加默认值
      if (defaultValue !== undefined && defaultValue !== null && defaultValue !== '') {
        if (type === 'varchar' || type === 'text' || type === 'char') {
          columnDef += ` DEFAULT '${defaultValue.toString().replace(/'/g, "''")}'`
        } else if (type === 'boolean') {
          columnDef += ` DEFAULT ${defaultValue ? 'TRUE' : 'FALSE'}`
        } else if (type === 'timestamp' || type === 'timestamptz') {
          if (defaultValue.toLowerCase() === 'now' || defaultValue.toLowerCase() === 'current_timestamp') {
            columnDef += ' DEFAULT NOW()'
          } else {
            columnDef += ` DEFAULT '${defaultValue}'`
          }
        } else {
          columnDef += ` DEFAULT ${defaultValue}`
        }
      }
      
      return columnDef
    }).join(',\n')

    createTableSQL += columnDefinitions

    // 是否添加时间戳字段
    const addTimestamps = options.addTimestamps !== false
    if (addTimestamps) {
      createTableSQL += ',\n  created_at TIMESTAMP DEFAULT NOW()'
      createTableSQL += ',\n  updated_at TIMESTAMP DEFAULT NOW()'
    }

    createTableSQL += '\n)'

    // 添加表注释
    if (options.comment) {
      createTableSQL += `;\nCOMMENT ON TABLE "${tableName}" IS '${options.comment.replace(/'/g, "''")}'`
    }

    console.log('执行SQL:', createTableSQL)

    // 执行创建表的SQL
    await sql.unsafe(createTableSQL)

    // 创建字段注释
    for (const col of columns) {
      if (col.comment) {
        try {
          await sql.unsafe(`COMMENT ON COLUMN "${tableName}"."${col.name}" IS '${col.comment.replace(/'/g, "''")}'`)
        } catch (error) {
          console.warn(`添加字段注释失败: ${col.name}`, error)
        }
      }
    }

    console.log(`✅ 表创建成功: ${tableName}`)

    // 立即验证表是否存在
    try {
      console.log('验证表是否成功创建...')
      
      // 使用 information_schema 查询（保留原始大小写）
      const infoSchemaCheck = await sql`
        SELECT table_name FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = ${tableName}
      `
      console.log('information_schema 查询结果:', infoSchemaCheck)
      
      // 使用 pg_tables 查询（可能转换为小写）
      const pgTablesCheck = await sql`
        SELECT tablename FROM pg_tables 
        WHERE schemaname = 'public' AND tablename = ${tableName}
      `
      console.log('pg_tables 查询结果:', pgTablesCheck)
      
      // 使用小写版本查询
      const lowerCaseCheck = await sql`
        SELECT tablename FROM pg_tables 
        WHERE schemaname = 'public' AND tablename = ${tableName.toLowerCase()}
      `
      console.log('小写查询结果:', lowerCaseCheck)
      
      // 获取所有表名进行比较
      const allTablesInfo = await sql`
        SELECT table_name FROM information_schema.tables 
        WHERE table_schema = 'public' 
        ORDER BY table_name
      `
      console.log('所有表(information_schema):', allTablesInfo.map(t => t.table_name))
      
      const allTablesPg = await sql`
        SELECT tablename FROM pg_tables 
        WHERE schemaname = 'public' 
        ORDER BY tablename
      `
      console.log('所有表(pg_tables):', allTablesPg.map(t => t.tablename))
      
    } catch (verifyError) {
      console.error('验证表存在时出错:', verifyError)
    }

    return NextResponse.json({
      success: true,
      message: `表 "${tableName}" 创建成功`,
      data: {
        tableName,
        columns: columns.length,
        sql: createTableSQL,
        options
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