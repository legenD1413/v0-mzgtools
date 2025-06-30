import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { snakeToCamel } from "@/lib/database"

// PUT - 更新图片
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { pagePath, imageUrl, title, description, sortOrder, isActive } = body

    if (!pagePath || !imageUrl) {
      return NextResponse.json(
        { success: false, message: "页面路径和图片URL是必填项" },
        { status: 400 }
      )
    }

    const result = await sql`
      UPDATE product_gallery 
      SET 
        page_path = ${pagePath},
        image_url = ${imageUrl},
        title = ${title || null},
        description = ${description || null},
        sort_order = ${sortOrder || 0},
        is_active = ${isActive !== false},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "图片不存在" },
        { status: 404 }
      )
    }

    const updatedImage = snakeToCamel(result[0])

    return NextResponse.json({
      success: true,
      message: "图片更新成功",
      image: updatedImage
    })
  } catch (error) {
    console.error("更新图片失败:", error)
    return NextResponse.json(
      { success: false, message: "更新图片失败" },
      { status: 500 }
    )
  }
}

// DELETE - 删除图片
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    const result = await sql`
      DELETE FROM product_gallery 
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, message: "图片不存在" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "图片删除成功"
    })
  } catch (error) {
    console.error("删除图片失败:", error)
    return NextResponse.json(
      { success: false, message: "删除图片失败" },
      { status: 500 }
    )
  }
} 