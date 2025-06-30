const { neon } = require("@neondatabase/serverless");

// 创建数据库连接
const sql = neon(process.env.DATABASE_URL);

async function addSampleFAQs() {
  try {
    console.log("开始添加示例FAQ数据...");

    // 示例FAQ数据
    const sampleFAQs = [
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "什么是直角平面铣刀？它有什么特点？",
        answer: "直角平面铣刀是一种具有平底和锐利90度拐角的专业铣削工具。其特点包括：\n\n1. 90度锐角设计，确保平面铣削的精度\n2. 平底设计适合创建平整表面\n3. 可用于平面铣削、沟槽加工和台阶面创建\n4. 提供HRC45-65度材料的涂层版本\n5. 针对铜、铝等有色金属提供无涂层版本",
        category: "产品信息",
        sort_order: 1
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "如何选择合适的刃数配置？",
        answer: "刃数选择应根据材料和加工要求确定：\n\n• 2刃：适用于软材料和需要更大排屑空间的场合\n• 3刃：专为有色金属（铜、铝）设计，平衡切削效率和表面质量\n• 4刃：适用于较硬材料，提供更高的刚性和更好的表面光洁度\n\n选择原则：软材料选择少刃数，硬材料选择多刃数",
        category: "技术参数",
        sort_order: 2
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "涂层和无涂层版本有什么区别？",
        answer: "涂层版本与无涂层版本的主要区别：\n\n**纳米涂层版本（HRC60°-65°）：**\n• 优异的耐磨性和热稳定性\n• 适用于钢材、铸铁、不锈钢\n• 更长的工具寿命\n• 可承受更高的切削参数\n\n**无涂层版本：**\n• 专为铜、铝等有色金属设计\n• 抛光刃口防止积屑瘤形成\n• 在粘性材料中获得优异表面光洁度",
        category: "技术参数",
        sort_order: 3
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "如何正确使用直角平面铣刀？",
        answer: "正确使用步骤：\n\n1. **工件固定**：确保工件牢固夹紧，避免振动\n2. **刀具安装**：确保刀具正确安装，检查跳动\n3. **参数设置**：根据材料硬度选择合适的转速和进给\n4. **冷却润滑**：使用适当的冷却液提高加工效果\n5. **进刀方式**：建议采用顺铣方式，获得更好的表面质量\n6. **检查磨损**：定期检查刀具磨损情况，及时更换",
        category: "使用方法",
        sort_order: 4
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "推荐的切削参数是什么？",
        answer: "推荐切削参数（参考值）：\n\n**HRC45° 钢材：**\n• 转速：800-1200 RPM\n• 进给：0.1-0.15 mm/齿\n• 轴向切深：0.5-1.0 mm\n• 径向切深：0.2-0.4 mm\n\n**HRC60° 不锈钢：**\n• 转速：600-1000 RPM\n• 进给：0.08-0.12 mm/齿\n• 轴向切深：0.3-0.8 mm\n• 径向切深：0.15-0.3 mm\n\n**铝合金：**\n• 转速：1500-2500 RPM\n• 进给：0.15-0.25 mm/齿\n• 轴向切深：1.0-2.0 mm\n• 径向切深：0.3-0.6 mm\n\n*具体参数应根据机床性能和工件情况调整",
        category: "使用方法",
        sort_order: 5
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "如何订购MZG直角平面铣刀？",
        answer: "订购流程：\n\n1. **规格确定**：确定所需的直径、长度、刃数等规格\n2. **材料匹配**：根据加工材料选择合适的硬度等级和涂层\n3. **数量确认**：确定采购数量和交期要求\n4. **联系方式**：\n   • 在线报价：通过网站报价表单提交需求\n   • 电话咨询：联系技术销售团队\n   • 邮件询价：发送详细规格清单\n5. **技术支持**：我们的技术团队可提供选型建议和切削参数推荐",
        category: "订购流程",
        sort_order: 6
      },
      {
        page_url: "/standard-tools/milling/right-angle-flat",
        question: "MZG提供哪些售后服务？",
        answer: "完善的售后服务体系：\n\n**技术支持：**\n• 免费切削参数咨询\n• 加工工艺优化建议\n• 问题故障排除指导\n\n**质量保证：**\n• 产品质量保证期\n• 质量问题快速响应\n• 不合格产品退换服务\n\n**培训服务：**\n• 产品使用培训\n• 维护保养指导\n• 最新技术分享\n\n**物流配送：**\n• 快速发货服务\n• 包装损坏赔偿\n• 物流跟踪服务",
        category: "售后服务",
        sort_order: 7
      }
    ];

    // 插入FAQ数据
    for (const faq of sampleFAQs) {
      await sql`
        INSERT INTO faqs (page_url, question, answer, category, sort_order)
        VALUES (
          ${faq.page_url}, 
          ${faq.question}, 
          ${faq.answer}, 
          ${faq.category}, 
          ${faq.sort_order}
        )
      `;
      console.log(`已添加FAQ: ${faq.question.substring(0, 20)}...`);
    }

    console.log("示例FAQ数据添加完成！");
    console.log(`总共添加了 ${sampleFAQs.length} 条FAQ记录`);

  } catch (error) {
    console.error("添加示例FAQ数据失败:", error);
  }
}

// 运行脚本
addSampleFAQs(); 