import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { verifyAdminToken } from "@/lib/auth-mzg"

// 初始化FAQ表和示例数据
export async function POST(request: NextRequest) {
  try {
    // 验证管理员权限
    const user = await verifyAdminToken(request)
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    console.log("开始初始化FAQ数据...")

    // 检查FAQ表是否存在，如果不存在则创建
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS faqs (
          id SERIAL PRIMARY KEY,
          page_url VARCHAR(500) NOT NULL,
          question TEXT NOT NULL,
          answer TEXT NOT NULL,
          category VARCHAR(100) NOT NULL,
          sort_order INTEGER DEFAULT 0,
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        )
      `
      console.log("FAQ表确认存在")
    } catch (error) {
      console.error("创建FAQ表失败:", error)
      return NextResponse.json({ error: "创建FAQ表失败" }, { status: 500 })
    }

    // 检查是否已有示例数据
    const existingFaqs = await sql`SELECT COUNT(*) as count FROM faqs`
    
    if (parseInt(existingFaqs[0].count) > 0) {
      return NextResponse.json({ 
        message: "FAQ数据已存在", 
        count: existingFaqs[0].count 
      })
    }

    // 插入测试数据
    const testFaqs = [
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "什么是直角平底铣刀？",
        answer: "直角平底铣刀是一种用于铣削加工的刀具，具有平底和直角边缘，适用于加工平面、槽和轮廓。",
        category: "产品信息",
        sort_order: 1
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "直角平底铣刀的主要应用领域是什么？",
        answer: "主要应用于机械加工、模具制造、汽车零部件加工、航空航天等领域的精密铣削加工。",
        category: "产品信息",
        sort_order: 2
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "如何选择合适的直角平底铣刀规格？",
        answer: "选择铣刀规格需要考虑工件材料、加工深度、表面粗糙度要求、机床功率等因素。建议咨询我们的技术人员获得专业建议。",
        category: "技术参数",
        sort_order: 3
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "直角平底铣刀的使用寿命如何？",
        answer: "使用寿命取决于加工材料、切削参数、冷却条件等因素。在正常使用条件下，我们的铣刀具有优异的耐用性。",
        category: "技术参数",
        sort_order: 4
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "如何正确使用直角平底铣刀？",
        answer: "使用时需要注意正确的切削参数设置、充分的冷却润滑、合适的装夹方式，避免过载和振动。详细使用说明请参考产品手册。",
        category: "使用方法",
        sort_order: 5
      },
      {
        page_url: "/standard-tools/milling/deep-ditch",
        question: "深沟铣刀的特点是什么？",
        answer: "深沟铣刀具有深槽设计，能够有效排屑，适用于深槽加工和高效铣削。",
        category: "产品信息",
        sort_order: 1
      }
    ]

    // 批量插入数据
    let addedCount = 0
    for (const faq of testFaqs) {
      try {
        await sql`
          INSERT INTO faqs (page_url, question, answer, category, sort_order)
          VALUES (
            ${faq.page_url}, 
            ${faq.question}, 
            ${faq.answer}, 
            ${faq.category}, 
            ${faq.sort_order}
          )
        `
        addedCount++
        console.log(`已添加FAQ: ${faq.question.substring(0, 20)}...`)
      } catch (error) {
        console.error(`添加FAQ失败: ${faq.question}`, error)
      }
    }

    // 验证插入结果
    const finalCount = await sql`SELECT COUNT(*) as count FROM faqs`

    return NextResponse.json({
      message: "FAQ数据初始化成功",
      inserted: testFaqs.length,
      total: finalCount[0].count
    })

  } catch (error) {
    console.error("初始化FAQ数据失败:", error)
    return NextResponse.json({
      error: "初始化FAQ数据失败",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 