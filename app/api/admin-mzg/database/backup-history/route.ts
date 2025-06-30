import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

// GET - 获取备份历史列表
export async function GET(request: NextRequest) {
  try {
    console.log('获取备份历史列表...')
    
    // 确保备份历史表存在
    await sql`
      CREATE TABLE IF NOT EXISTS backup_history (
        id SERIAL PRIMARY KEY,
        filename VARCHAR(255) NOT NULL,
        original_filename VARCHAR(255) NOT NULL,
        file_path VARCHAR(500) NOT NULL,
        file_size BIGINT NOT NULL,
        format VARCHAR(10) NOT NULL,
        include_schema BOOLEAN NOT NULL DEFAULT true,
        table_count INTEGER NOT NULL DEFAULT 0,
        tables_included TEXT[],
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        created_by VARCHAR(100),
        description TEXT,
        status VARCHAR(20) DEFAULT 'completed'
      )
    `
    
    // 获取备份历史记录
    const backups = await sql`
      SELECT 
        id,
        filename,
        original_filename,
        file_path,
        file_size,
        format,
        include_schema,
        table_count,
        tables_included,
        created_at,
        created_by,
        description,
        status
      FROM backup_history 
      ORDER BY created_at DESC
      LIMIT 50
    `
    
    // 格式化数据
    const formattedBackups = backups.map(backup => ({
      ...backup,
      file_size_mb: (backup.file_size / (1024 * 1024)).toFixed(2),
      created_at_formatted: new Date(backup.created_at).toLocaleString('zh-CN'),
      tables_included: backup.tables_included || []
    }))
    
    return NextResponse.json({
      success: true,
      backups: formattedBackups,
      total: backups.length
    })
    
  } catch (error) {
    console.error('获取备份历史失败:', error)
    return NextResponse.json(
      { success: false, message: `获取备份历史失败: ${error.message}` },
      { status: 500 }
    )
  }
}

// DELETE - 删除备份记录和文件
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const backupId = searchParams.get('id')
    
    if (!backupId) {
      return NextResponse.json(
        { success: false, message: '缺少备份ID参数' },
        { status: 400 }
      )
    }
    
    console.log('删除备份记录:', backupId)
    
    // 获取备份记录
    const backup = await sql`
      SELECT * FROM backup_history WHERE id = ${backupId}
    `
    
    if (backup.length === 0) {
      return NextResponse.json(
        { success: false, message: '备份记录不存在' },
        { status: 404 }
      )
    }
    
    // 删除数据库记录
    await sql`
      DELETE FROM backup_history WHERE id = ${backupId}
    `
    
    // 尝试删除物理文件（如果存在）
    try {
      const fs = require('fs')
      const path = require('path')
      const filePath = path.join(process.cwd(), 'public', backup[0].file_path)
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        console.log('物理文件已删除:', filePath)
      }
    } catch (fileError) {
      console.warn('删除物理文件失败:', fileError.message)
      // 即使物理文件删除失败，也继续删除数据库记录
    }
    
    return NextResponse.json({
      success: true,
      message: '备份记录删除成功'
    })
    
  } catch (error) {
    console.error('删除备份记录失败:', error)
    return NextResponse.json(
      { success: false, message: `删除失败: ${error.message}` },
      { status: 500 }
    )
  }
} 