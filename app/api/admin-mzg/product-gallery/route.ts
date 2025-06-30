import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { snakeToCamel } from "@/lib/database"

// GET - 获取图片列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pagePath = searchParams.get("pagePath")

    let result
    if (pagePath) {
      result = await sql`
        SELECT * FROM product_gallery 
        WHERE is_active = true AND page_path = ${pagePath}
        ORDER BY sort_order ASC, created_at DESC
      `
    } else {
      result = await sql`
        SELECT * FROM product_gallery 
        WHERE is_active = true
        ORDER BY sort_order ASC, created_at DESC
      `
    }
    
    // 转换字段名为驼峰命名
    const images = result.map(row => snakeToCamel(row))

    return NextResponse.json({
      success: true,
      images
    })
  } catch (error) {
    console.error("获取图片列表失败:", error)
    return NextResponse.json(
      { success: false, message: "获取图片列表失败" },
      { status: 500 }
    )
  }
}

// POST - 添加新图片
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pagePath, imageUrl, title, description, sortOrder, isActive } = body

    if (!pagePath || !imageUrl) {
      return NextResponse.json(
        { success: false, message: "页面路径和图片URL是必填项" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO product_gallery (
        page_path, 
        image_url, 
        title, 
        description, 
        sort_order, 
        is_active
      ) VALUES (
        ${pagePath}, 
        ${imageUrl}, 
        ${title || null}, 
        ${description || null}, 
        ${sortOrder || 0}, 
        ${isActive !== false}
      )
      RETURNING *
    `

    const newImage = snakeToCamel(result[0])

    return NextResponse.json({
      success: true,
      message: "图片添加成功",
      image: newImage
    })
  } catch (error) {
    console.error("添加图片失败:", error)
    return NextResponse.json(
      { success: false, message: "添加图片失败" },
      { status: 500 }
    )
  }
} 