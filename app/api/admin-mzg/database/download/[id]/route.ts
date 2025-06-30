import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const backupId = params.id
    console.log('下载备份文件:', backupId)
    
    // 获取备份记录
    const backup = await sql`
      SELECT * FROM backup_history WHERE id = ${backupId}
    `
    
    if (backup.length === 0) {
      return NextResponse.json(
        { success: false, message: '备份文件不存在' },
        { status: 404 }
      )
    }
    
    const backupRecord = backup[0]
    
    // 尝试读取文件
    try {
      const fs = require('fs')
      const path = require('path')
      const filePath = path.join(process.cwd(), 'public', backupRecord.file_path)
      
      if (!fs.existsSync(filePath)) {
        return NextResponse.json(
          { success: false, message: '备份文件不存在于服务器' },
          { status: 404 }
        )
      }
      
      // 读取文件内容
      const fileContent = fs.readFileSync(filePath)
      
      // 确定MIME类型
      const mimeType = backupRecord.format === 'json' 
        ? 'application/json' 
        : 'text/csv'
      
      // 返回文件
      return new Response(fileContent, {
        headers: {
          'Content-Type': mimeType,
          'Content-Disposition': `attachment; filename="${backupRecord.original_filename}"`,
          'Content-Length': fileContent.length.toString(),
          'Cache-Control': 'no-cache'
        }
      })
      
    } catch (fileError) {
      console.error('读取文件失败:', fileError)
      return NextResponse.json(
        { success: false, message: '文件读取失败' },
        { status: 500 }
      )
    }
    
  } catch (err) {
    console.error('下载备份文件失败:', err)
    const errorMessage = err instanceof Error ? err.message : '未知错误'
    return NextResponse.json(
      { success: false, message: `下载失败: ${errorMessage}` },
      { status: 500 }
    )
  }
} 