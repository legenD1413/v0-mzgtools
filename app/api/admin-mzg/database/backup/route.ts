import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

// POST - 创建数据库备份
export async function POST(request: NextRequest) {
  try {
    console.log('开始创建数据库备份...')
    
    // 获取请求参数
    const body = await request.json()
    const { tables, format = 'json', includeSchema = true } = body
    
    console.log('备份参数:', { tables, format, includeSchema })
    
    // 获取所有表信息（如果没有指定特定表）
    let tablesToBackup = tables
    if (!tablesToBackup || tablesToBackup.length === 0) {
      const allTablesResult = await sql`
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
        ORDER BY tablename
      `
      tablesToBackup = allTablesResult.map(row => row.tablename)
    }
    
    console.log('要备份的表:', tablesToBackup)
    
    const backup: {
      metadata: {
        timestamp: string
        database: string
        format: string
        includeSchema: boolean
        version: string
        tables: string[]
      }
      schema: Record<string, any>
      data: Record<string, any>
    } = {
      metadata: {
        timestamp: new Date().toISOString(),
        database: 'neondb',
        format,
        includeSchema,
        version: '1.0.0',
        tables: tablesToBackup
      },
      schema: {},
      data: {}
    }
    
    // 备份每个表的结构和数据
    for (const tableName of tablesToBackup) {
      try {
        console.log(`备份表: ${tableName}`)
        
        // 获取表结构
        if (includeSchema) {
          const columnsResult = await sql`
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
          
          // 获取索引信息
          const indexesResult = await sql`
            SELECT 
              indexname,
              indexdef
            FROM pg_indexes 
            WHERE schemaname = 'public' AND tablename = ${tableName}
          `
          
          // 获取约束信息
          const constraintsResult = await sql`
            SELECT 
              constraint_name,
              constraint_type
            FROM information_schema.table_constraints 
            WHERE table_schema = 'public' AND table_name = ${tableName}
          `
          
          backup.schema[tableName] = {
            columns: columnsResult,
            indexes: indexesResult,
            constraints: constraintsResult
          }
        }
        
        // 获取表数据
        const dataResult = await sql.unsafe(`SELECT * FROM ${tableName}`)
        const dataArray = Array.isArray(dataResult) ? dataResult : []
        backup.data[tableName] = dataArray
        
        console.log(`表 ${tableName} 备份完成，${dataArray.length} 条记录`)
        
      } catch (tableError) {
        console.error(`备份表 ${tableName} 时出错:`, tableError)
        // 继续备份其他表，不因为单个表失败而停止
        const errorMessage = tableError instanceof Error ? tableError.message : '未知错误'
        backup.data[tableName] = { error: `备份失败: ${errorMessage}` }
      }
    }
    
    // 生成备份文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0]
    const timeStamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `database-backup-${timestamp}.${format}`
    const uniqueFilename = `database-backup-${timeStamp}.${format}`
    
    console.log('备份完成，文件名:', filename)
    
    // 准备文件内容
    let fileContent = ''
    let fileSize = 0
    
    if (format === 'json') {
      fileContent = JSON.stringify(backup, null, 2)
      fileSize = Buffer.byteLength(fileContent, 'utf8')
          } else {
        // CSV格式（简化版，只包含数据）
        let csvContent = ''
        
        for (const [tableName, tableData] of Object.entries(backup.data)) {
          if (Array.isArray(tableData) && tableData.length > 0) {
            csvContent += `\n# Table: ${tableName}\n`
            const headers = Object.keys(tableData[0])
            csvContent += headers.join(',') + '\n'
            
            for (const row of tableData) {
              const values = headers.map(header => {
                const value = row[header]
                if (value === null) return 'NULL'
                if (typeof value === 'string') return `"${value.replace(/"/g, '""')}"`
                return String(value)
              })
              csvContent += values.join(',') + '\n'
            }
          }
        }
        
        fileContent = csvContent
        fileSize = Buffer.byteLength(csvContent, 'utf8')
      }
      
      // 保存文件到服务器
      try {
        const fs = require('fs')
        const path = require('path')
        
        // 创建备份目录
        const backupDir = path.join(process.cwd(), 'public', 'backups')
        if (!fs.existsSync(backupDir)) {
          fs.mkdirSync(backupDir, { recursive: true })
        }
        
        // 保存文件
        const filePath = path.join(backupDir, uniqueFilename)
        fs.writeFileSync(filePath, fileContent, 'utf8')
        
        console.log('备份文件已保存:', filePath)
        
        // 记录到数据库
        await sql`
          INSERT INTO backup_history (
            filename, 
            original_filename, 
            file_path, 
            file_size, 
            format, 
            include_schema, 
            table_count, 
            tables_included,
            created_by,
            description
          ) VALUES (
            ${uniqueFilename},
            ${filename},
            ${'backups/' + uniqueFilename},
            ${fileSize},
            ${format},
            ${includeSchema},
            ${tablesToBackup.length},
            ${tablesToBackup},
            ${'admin'},
            ${'数据库完整备份'}
          )
        `
        
        console.log('备份记录已保存到数据库')
        
      } catch (saveError) {
        console.error('保存备份文件失败:', saveError)
        // 如果保存失败，仍然返回文件供下载，但不记录到数据库
      }
      
      // 返回备份文件供下载
      if (format === 'json') {
        return new Response(fileContent, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Cache-Control': 'no-cache'
          }
        })
      } else {
        return new Response(fileContent, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Cache-Control': 'no-cache'
          }
        })
      }
    
  } catch (err) {
    console.error('数据库备份失败:', err)
    const errorMessage = err instanceof Error ? err.message : '未知错误'
    return NextResponse.json(
      { success: false, message: `备份失败: ${errorMessage}` },
      { status: 500 }
    )
  }
}

// GET - 获取备份信息/状态
export async function GET(request: NextRequest) {
  try {
    // 获取数据库基本信息
    const dbInfo = await sql`
      SELECT 
        current_database() as database_name,
        current_user as current_user,
        version() as version,
        NOW() as current_time
    `
    
    // 获取所有表信息
    const tables = await sql`
      SELECT 
        t.tablename,
        t.tableowner,
        COALESCE(s.n_tup_ins, 0) as row_count,
        pg_size_pretty(pg_total_relation_size(c.oid)) as table_size
      FROM pg_tables t
      LEFT JOIN pg_stat_user_tables s ON s.relname = t.tablename
      LEFT JOIN pg_class c ON c.relname = t.tablename
      WHERE t.schemaname = 'public'
      ORDER BY t.tablename
    `
    
    return NextResponse.json({
      success: true,
      database: dbInfo[0],
      tables: tables,
      backupInfo: {
        availableFormats: ['json', 'csv'],
        supportedFeatures: ['schema', 'data', 'selective-tables'],
        recommendedFormat: 'json'
      }
    })
    
  } catch (err) {
    console.error('获取备份信息失败:', err)
    const errorMessage = err instanceof Error ? err.message : '未知错误'
    return NextResponse.json(
      { success: false, message: `获取信息失败: ${errorMessage}` },
      { status: 500 }
    )
  }
} 