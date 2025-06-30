import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyAdminToken } from "@/lib/auth-mzg"

// 数据库迁移 - 更新faqs表结构
export async function POST(request: NextRequest) {
  try {
    // 验证管理员权限
    const user = await verifyAdminToken(request)
    if (!user) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      )
    }

    console.log('开始数据库迁移...')

    // 检查faqs表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'faqs'
      ) as exists
    `

    if (!tableExists[0].exists) {
      // 创建全新的faqs表
      console.log('创建faqs表...')
      await sql`
        CREATE TABLE faqs (
          id SERIAL PRIMARY KEY,
          page_urls JSONB NOT NULL DEFAULT '[]',
          question TEXT NOT NULL,
          answer TEXT NOT NULL,
          categories JSONB NOT NULL DEFAULT '[]',
          sort_order INTEGER DEFAULT 0,
          is_active BOOLEAN DEFAULT true,
          show_in_popular BOOLEAN DEFAULT false,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        )
      `
      
      return NextResponse.json({
        message: '数据库迁移完成 - 创建了新的faqs表',
        actions: ['created_faqs_table']
      })
    }

    // 检查表结构
    const columns = await sql`
      SELECT column_name, data_type
      FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = 'faqs'
    `

    const columnNames = columns.map(col => col.column_name)
    const actions = []

    // 检查是否有旧结构需要迁移
    const hasOldPageUrl = columnNames.includes('page_url')
    const hasOldCategory = columnNames.includes('category')
    const hasNewPageUrls = columnNames.includes('page_urls')
    const hasNewCategories = columnNames.includes('categories')

    if ((hasOldPageUrl || hasOldCategory) && (!hasNewPageUrls || !hasNewCategories)) {
      console.log('检测到旧表结构，开始迁移...')
      
      // 备份数据
      const backupData = await sql`SELECT * FROM faqs`
      
      // 添加新列
      if (!hasNewPageUrls) {
        await sql`ALTER TABLE faqs ADD COLUMN page_urls JSONB DEFAULT '[]'`
        actions.push('added_page_urls_column')
      }
      
      if (!hasNewCategories) {
        await sql`ALTER TABLE faqs ADD COLUMN categories JSONB DEFAULT '[]'`
        actions.push('added_categories_column')
      }

      // 添加其他可能缺失的列
      if (!columnNames.includes('show_in_popular')) {
        await sql`ALTER TABLE faqs ADD COLUMN show_in_popular BOOLEAN DEFAULT false`
        actions.push('added_show_in_popular_column')
      }

      // 迁移数据
      for (const row of backupData) {
        const pageUrls = row.page_url ? [row.page_url] : []
        const categories = row.category ? [row.category] : []
        
        await sql`
          UPDATE faqs 
          SET page_urls = ${JSON.stringify(pageUrls)},
              categories = ${JSON.stringify(categories)}
          WHERE id = ${row.id}
        `
      }
      
      actions.push(`migrated_${backupData.length}_records`)

      // 删除旧列（可选 - 先注释掉以防万一）
      // if (hasOldPageUrl) {
      //   await sql`ALTER TABLE faqs DROP COLUMN page_url`
      //   actions.push('dropped_old_page_url_column')
      // }
      // 
      // if (hasOldCategory) {
      //   await sql`ALTER TABLE faqs DROP COLUMN category`
      //   actions.push('dropped_old_category_column')
      // }
      
    } else {
      // 检查是否缺少必需的列
      const requiredColumns = [
        { name: 'page_urls', type: 'JSONB', default: "'[]'" },
        { name: 'categories', type: 'JSONB', default: "'[]'" },
        { name: 'show_in_popular', type: 'BOOLEAN', default: 'false' },
        { name: 'sort_order', type: 'INTEGER', default: '0' },
        { name: 'is_active', type: 'BOOLEAN', default: 'true' }
      ]

      for (const col of requiredColumns) {
        if (!columnNames.includes(col.name)) {
          // 直接执行ALTER TABLE语句
          if (col.name === 'page_urls') {
            await sql`ALTER TABLE faqs ADD COLUMN page_urls JSONB DEFAULT '[]'`
          } else if (col.name === 'categories') {
            await sql`ALTER TABLE faqs ADD COLUMN categories JSONB DEFAULT '[]'`
          } else if (col.name === 'show_in_popular') {
            await sql`ALTER TABLE faqs ADD COLUMN show_in_popular BOOLEAN DEFAULT false`
          } else if (col.name === 'sort_order') {
            await sql`ALTER TABLE faqs ADD COLUMN sort_order INTEGER DEFAULT 0`
          } else if (col.name === 'is_active') {
            await sql`ALTER TABLE faqs ADD COLUMN is_active BOOLEAN DEFAULT true`
          }
          actions.push(`added_${col.name}_column`)
        }
      }
    }

    if (actions.length === 0) {
      return NextResponse.json({
        message: '数据库结构已是最新，无需迁移',
        actions: []
      })
    }

    return NextResponse.json({
      message: '数据库迁移完成',
      actions: actions
    })

  } catch (error) {
    console.error('数据库迁移失败:', error)
    return NextResponse.json(
      { 
        error: '数据库迁移失败',
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 