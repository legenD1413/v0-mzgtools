import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 导入表数据
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const tableName = formData.get('tableName') as string
    const mode = formData.get('mode') as string || 'append' // append, replace, update

    if (!file || !tableName) {
      return NextResponse.json({
        success: false,
        message: "缺少文件或表名参数"
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
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = ${tableName}
        ORDER BY ordinal_position
      `

      const fileContent = await file.text()
      let records = []

      // 解析文件内容
      if (file.name.endsWith('.json')) {
        try {
          const jsonData = JSON.parse(fileContent)
          records = Array.isArray(jsonData) ? jsonData : jsonData.records || [jsonData]
        } catch (error) {
          return NextResponse.json({
            success: false,
            message: "JSON文件格式错误"
          }, { status: 400 })
        }
      } else if (file.name.endsWith('.csv')) {
        // 解析CSV
        const lines = fileContent.split('\n').filter(line => line.trim())
        if (lines.length < 2) {
          return NextResponse.json({
            success: false,
            message: "CSV文件格式错误，至少需要标题行和一行数据"
          }, { status: 400 })
        }

        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
        records = lines.slice(1).map(line => {
          const values: string[] = []
          let current = ''
          let inQuotes = false
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i]
            if (char === '"') {
              if (inQuotes && line[i + 1] === '"') {
                current += '"'
                i++
              } else {
                inQuotes = !inQuotes
              }
            } else if (char === ',' && !inQuotes) {
              values.push(current.trim())
              current = ''
            } else {
              current += char
            }
          }
          values.push(current.trim())

          const record: any = {}
          headers.forEach((header, index) => {
            let value = values[index] || ''
            
            // 移除外围引号
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1)
            }
            
            // 简化类型处理：优先保持字符串，只处理明确的特殊情况
            if (value === '' || value.toLowerCase() === 'null') {
              record[header] = null
            } else if (value.toLowerCase() === 'true') {
              record[header] = true
            } else if (value.toLowerCase() === 'false') {
              record[header] = false
            } else if (value.startsWith('{') || value.startsWith('[')) {
              // 只对明确的JSON格式进行解析
              try {
                record[header] = JSON.parse(value)
              } catch {
                record[header] = value
              }
            } else {
              // 对于所有其他情况，保持为字符串（包括数字字符串）
              record[header] = value
            }
          })
          return record
        })
      } else {
        return NextResponse.json({
          success: false,
          message: "不支持的文件格式，请使用JSON或CSV文件"
        }, { status: 400 })
      }

      if (records.length === 0) {
        return NextResponse.json({
          success: false,
          message: "文件中没有找到有效数据"
        }, { status: 400 })
      }

      // 验证数据字段
      const tableColumns = columns.map(col => col.column_name)
      const requiredColumns = columns.filter(col => 
        col.is_nullable === 'NO' && 
        col.column_default === null && 
        col.column_name !== 'id' // 假设id是自增字段
      ).map(col => col.column_name)

      let successCount = 0
      let errorCount = 0
      const errors = []

      // 如果是替换模式，先清空表
      if (mode === 'replace') {
        const deleteQuery = `DELETE FROM "${tableName}"`
        await sql.unsafe(deleteQuery)
      }

      // 插入数据
      for (const [index, record] of records.entries()) {
        try {
          // 检查必需字段
          const missingRequired = requiredColumns.filter(col => 
            !(col in record) || record[col] === null || record[col] === ''
          )
          
          if (missingRequired.length > 0) {
            errors.push(`行 ${index + 1}: 缺少必需字段 ${missingRequired.join(', ')}`)
            errorCount++
            continue
          }

          // 只选择表中存在的字段
          const validRecord: any = {}
          for (const [key, value] of Object.entries(record)) {
            if (tableColumns.includes(key)) {
              validRecord[key] = value
            }
          }

          if (Object.keys(validRecord).length === 0) {
            errors.push(`行 ${index + 1}: 没有找到匹配的字段`)
            errorCount++
            continue
          }

                    // 构建插入SQL
          const keys = Object.keys(validRecord)
          const values = Object.values(validRecord)
          
          // 使用Neon SQL tagged template方式，构建动态插入
          try {
            if (mode === 'update') {
              // 对于更新模式（冲突时更新）
              const keysList = keys.map(k => `"${k}"`).join(', ')
              const valuesList = values.map(v => typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : (v === null ? 'NULL' : String(v))).join(', ')
              const updatePairs = keys.filter(k => k !== 'product_code').map(k => `"${k}" = EXCLUDED."${k}"`).join(', ')
              
              const upsertQuery = `
                INSERT INTO "${tableName}" (${keysList}) 
                VALUES (${valuesList})
                ON CONFLICT (product_code) DO UPDATE SET ${updatePairs}
                RETURNING *
              `
              const result = await sql.unsafe(upsertQuery)
              console.log(`  ✅ 更新/插入记录成功`)
            } else {
              // 对于追加模式，使用简单插入
              const keysList = keys.map(k => `"${k}"`).join(', ')
              const valuesList = values.map(v => {
                if (v === null || v === undefined) return 'NULL'
                if (typeof v === 'string') return `'${v.replace(/'/g, "''")}'`
                if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE'
                if (typeof v === 'object') return `'${JSON.stringify(v).replace(/'/g, "''")}'`
                return String(v)
              }).join(', ')
              
              const insertQuery = `
                INSERT INTO "${tableName}" (${keysList}) 
                VALUES (${valuesList})
              `
              await sql.unsafe(insertQuery)
              console.log(`  ✅ 插入记录成功: ${validRecord.product_code || 'unknown'}`)
            }
          } catch (sqlError) {
            console.error(`SQL执行错误:`, sqlError)
            throw sqlError
          }
          successCount++
        } catch (error) {
          console.error(`插入记录失败 (行 ${index + 1}):`, error)
          errors.push(`行 ${index + 1}: ${error instanceof Error ? error.message : String(error)}`)
          errorCount++
        }
      }

      return NextResponse.json({
        success: true,
        message: `导入完成: ${successCount} 成功, ${errorCount} 失败`,
        data: {
          successCount,
          errorCount,
          totalCount: records.length,
          errors: errors.slice(0, 10) // 只返回前10个错误
        }
      })

    } catch (error) {
      console.error(`导入表 ${tableName} 数据失败:`, error)
      return NextResponse.json({
        success: false,
        message: "导入数据失败",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

  } catch (error) {
    console.error("数据导入API错误:", error)
    return NextResponse.json({
      success: false,
      message: "API请求失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 