import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

// 获取指定页面的FAQ列表（前端使用）
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageUrl = searchParams.get("page_url")
    const category = searchParams.get("category")
    const showInPopular = searchParams.get("show_in_popular")

    console.log("FAQ API: 查询参数", { pageUrl, category, showInPopular })

    // 检查表是否存在以及字段结构
    let hasNewStructure = false
    try {
      const tableInfo = await sql`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'faqs' AND column_name IN ('page_urls', 'categories', 'page_url', 'category')
      `
      
      const hasPageUrls = tableInfo.some(col => col.column_name === "page_urls")
      const hasCategories = tableInfo.some(col => col.column_name === "categories")
      hasNewStructure = hasPageUrls && hasCategories
      
      console.log("FAQ API: 表结构检查", { hasPageUrls, hasCategories, hasNewStructure })
    } catch (error) {
      console.error("FAQ API: 表结构检查失败", error)
    }

    let faqs = []

    if (hasNewStructure) {
      // 使用新的多值结构
      let query = "SELECT * FROM faqs WHERE is_active = true"
      
      if (pageUrl) {
        query += ` AND page_urls @> '["${pageUrl}"]'`
      }
      
      if (category) {
        query += ` AND categories @> '["${category}"]'`
      }
      
      if (showInPopular === "true") {
        query += ` AND show_in_popular = true`
      }
      
      query += ` ORDER BY sort_order ASC, created_at DESC`
      
      console.log("FAQ API: 执行查询", query)
      faqs = await sql.query(query)
    } else {
      // 兼容旧的单值结构
      let conditions = ["is_active = true"]
      
      if (pageUrl) {
        conditions.push(`page_url = '${pageUrl}'`)
      }
      
      if (category) {
        conditions.push(`category = '${category}'`)
      }
      
      if (showInPopular === "true") {
        // 检查是否有show_in_popular字段
        try {
          const hasShowInPopular = await sql`
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name = 'faqs' AND column_name = 'show_in_popular'
          `
          
          if (hasShowInPopular.length > 0) {
            conditions.push("show_in_popular = true")
          }
        } catch (error) {
          console.log("FAQ API: show_in_popular字段检查失败", error)
        }
      }
      
      const whereClause = conditions.join(" AND ")
      const query = `SELECT * FROM faqs WHERE ${whereClause} ORDER BY sort_order ASC, created_at DESC`
      
      console.log("FAQ API: 执行兼容查询", query)
      faqs = await sql.query(query)
      
      // 转换为新格式以保持前端兼容性
      faqs = faqs.map(faq => ({
        ...faq,
        page_urls: faq.page_url ? [faq.page_url] : [],
        categories: faq.category ? [faq.category] : [],
        showInPopular: faq.show_in_popular || false
      }))
    }

    console.log("FAQ API: 查询结果", { count: faqs.length })

    return NextResponse.json({
      faqs: faqs,
      success: true
    })
  } catch (error) {
    console.error("FAQ API: 获取FAQ失败:", error)
    return NextResponse.json(
      { 
        error: "获取FAQ失败", 
        details: error instanceof Error ? error.message : String(error),
        success: false 
      },
      { status: 500 }
    )
  }
} 