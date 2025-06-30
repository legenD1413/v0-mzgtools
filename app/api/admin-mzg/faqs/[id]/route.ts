import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyAdminToken } from "@/lib/auth-mzg"

// 获取单个FAQ
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证管理员权限
    const user = await verifyAdminToken(request)
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "无效的FAQ ID" }, { status: 400 })
    }

    const faqs = await sql`
      SELECT * FROM faqs WHERE id = ${id}
    `

    if (faqs.length === 0) {
      return NextResponse.json({ error: "FAQ不存在" }, { status: 404 })
    }

    return NextResponse.json({ faq: faqs[0] })
  } catch (error) {
    console.error("获取FAQ失败:", error)
    return NextResponse.json({ error: "获取FAQ失败" }, { status: 500 })
  }
}

// 更新FAQ
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证管理员权限
    const user = await verifyAdminToken(request)
    if (!user) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      )
    }

    const id = parseInt(params.id)
    if (!id) {
      return NextResponse.json(
        { error: '无效的FAQ ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { page_urls, question, answer, categories, sort_order = 0, show_in_popular = false } = body

    // 验证必填字段
    if (!page_urls || !Array.isArray(page_urls) || page_urls.length === 0) {
      return NextResponse.json(
        { error: '请至少选择一个页面地址' },
        { status: 400 }
      )
    }

    if (!question || !answer) {
      return NextResponse.json(
        { error: '问题和答案不能为空' },
        { status: 400 }
      )
    }

    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      return NextResponse.json(
        { error: '请至少选择一个分类' },
        { status: 400 }
      )
    }

    // 检查FAQ是否存在
    const existingFaq = await sql`
      SELECT id FROM faqs WHERE id = ${id}
    `

    if (existingFaq.length === 0) {
      return NextResponse.json(
        { error: 'FAQ不存在' },
        { status: 404 }
      )
    }

    // 更新FAQ - 只使用新的字段结构
    const result = await sql`
      UPDATE faqs 
      SET page_urls = ${JSON.stringify(page_urls)}, 
          question = ${question}, 
          answer = ${answer}, 
          categories = ${JSON.stringify(categories)}, 
          sort_order = ${sort_order}, 
          show_in_popular = ${show_in_popular},
          updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, page_urls, question, answer, categories, sort_order, is_active, show_in_popular, created_at, updated_at
    `

    return NextResponse.json({
      message: 'FAQ更新成功',
      faq: result[0]
    })
  } catch (error) {
    console.error('更新FAQ失败:', error)
    return NextResponse.json(
      { error: '更新FAQ失败' },
      { status: 500 }
    )
  }
}

// 删除FAQ
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证管理员权限
    const user = await verifyAdminToken(request)
    if (!user) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      )
    }

    const id = parseInt(params.id)
    if (!id) {
      return NextResponse.json(
        { error: '无效的FAQ ID' },
        { status: 400 }
      )
    }

    // 检查FAQ是否存在
    const existingFaq = await sql`
      SELECT id FROM faqs WHERE id = ${id}
    `

    if (existingFaq.length === 0) {
      return NextResponse.json(
        { error: 'FAQ不存在' },
        { status: 404 }
      )
    }

    // 删除FAQ
    await sql`DELETE FROM faqs WHERE id = ${id}`

    return NextResponse.json({
      message: 'FAQ删除成功'
    })
  } catch (error) {
    console.error('删除FAQ失败:', error)
    return NextResponse.json(
      { error: '删除FAQ失败' },
      { status: 500 }
    )
  }
} 