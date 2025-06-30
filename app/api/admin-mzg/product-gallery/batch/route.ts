import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"

// POST - 批量添加图片
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pagePath, imageNames, sortOrderStart, isActive } = body

    if (!pagePath || !imageNames) {
      return NextResponse.json(
        { success: false, message: "页面路径和图片名称列表是必填项" },
        { status: 400 }
      )
    }

    // 解析图片名称列表（按行分割）
    const imageNameList = imageNames
      .split('\n')
      .map((name: string) => name.trim())
      .filter((name: string) => name.length > 0)

    if (imageNameList.length === 0) {
      return NextResponse.json(
        { success: false, message: "请至少输入一个图片名称" },
        { status: 400 }
      )
    }

    let addedCount = 0
    const startOrder = parseInt(sortOrderStart) || 0

    // 批量插入图片
    for (let i = 0; i < imageNameList.length; i++) {
      const imageName = imageNameList[i]
      const imageUrl = imageName.startsWith('/images/') ? imageName : `/images/${imageName}`
      const sortOrder = startOrder + i

      try {
        await sql`
          INSERT INTO product_gallery (
            page_path, 
            image_url, 
            sort_order, 
            is_active
          ) VALUES (
            ${pagePath}, 
            ${imageUrl}, 
            ${sortOrder}, 
            ${isActive !== false}
          )
        `
        addedCount++
      } catch (error) {
        console.error(`添加图片 ${imageName} 失败:`, error)
        // 继续处理下一张图片
      }
    }

    return NextResponse.json({
      success: true,
      message: `批量上传完成，成功添加 ${addedCount} 张图片`,
      count: addedCount,
      total: imageNameList.length
    })
  } catch (error) {
    console.error("批量上传失败:", error)
    return NextResponse.json(
      { success: false, message: "批量上传失败" },
      { status: 500 }
    )
  }
} 