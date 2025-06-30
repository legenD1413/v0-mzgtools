import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyAdminToken } from "@/lib/auth-mzg"

// 获取FAQ列表
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const pageUrl = searchParams.get('page_url') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    // 构建查询条件 - 使用模板字符串拼接
    let whereConditions = ['is_active = true']

    // 添加搜索条件
    if (search) {
      const escapedSearch = search.replace(/'/g, "''") // 简单的SQL注入防护
      whereConditions.push(`(question ILIKE '%${escapedSearch}%' OR answer ILIKE '%${escapedSearch}%')`)
    }

    // 添加分类筛选
    if (category && category !== 'all') {
      const escapedCategory = category.replace(/'/g, "''")
      whereConditions.push(`categories @> '["${escapedCategory}"]'`)
    }

    // 添加页面地址筛选
    if (pageUrl && pageUrl !== 'all') {
      const escapedPageUrl = pageUrl.replace(/'/g, "''")
      whereConditions.push(`page_urls @> '["${escapedPageUrl}"]'`)
    }

    const whereClause = whereConditions.join(' AND ')

    // 执行查询
    const faqs = await sql`
      SELECT * FROM faqs 
      WHERE ${sql.unsafe(whereClause)}
      ORDER BY sort_order ASC, created_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `

    const totalResult = await sql`
      SELECT COUNT(*) as count FROM faqs 
      WHERE ${sql.unsafe(whereClause)}
    `
    const total = parseInt(totalResult[0].count)

    return NextResponse.json({
      faqs: faqs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error('获取FAQ列表失败:', error)
    return NextResponse.json(
      { error: '获取FAQ列表失败' },
      { status: 500 }
    )
  }
}

// 创建新FAQ
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

    // 创建FAQ - 只使用新的字段结构
    const result = await sql`
      INSERT INTO faqs (page_urls, question, answer, categories, sort_order, show_in_popular)
      VALUES (${JSON.stringify(page_urls)}, ${question}, ${answer}, ${JSON.stringify(categories)}, ${sort_order}, ${show_in_popular})
      RETURNING id, page_urls, question, answer, categories, sort_order, is_active, show_in_popular, created_at, updated_at
    `

    return NextResponse.json({
      message: 'FAQ创建成功',
      faq: result[0]
    })
      } catch (error) {
      console.error('创建FAQ失败:', error)
      
      // 提供更详细的错误信息
      let errorMessage = '创建FAQ失败'
      if (error instanceof Error) {
        errorMessage = `创建FAQ失败: ${error.message}`
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: error instanceof Error ? error.message : '未知错误'
        },
        { status: 500 }
      )
    }
} 