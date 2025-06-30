// 需要使用ES模块语法
import { sql } from './lib/database.js';

async function testFAQDatabase() {
  try {
    console.log('正在测试FAQ数据库...');
    
    // 检查表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'faqs'
      );
    `;
    
    console.log('表是否存在:', tableExists[0]?.exists);
    
    if (!tableExists[0]?.exists) {
      console.log('❌ FAQ表不存在，需要初始化');
      
      // 创建表
      console.log('正在创建FAQ表...');
      await sql`
        CREATE TABLE IF NOT EXISTS faqs (
          id SERIAL PRIMARY KEY,
          page_url VARCHAR(500) NOT NULL,
          question TEXT NOT NULL,
          answer TEXT NOT NULL,
          category VARCHAR(100) NOT NULL,
          sort_order INTEGER DEFAULT 0,
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      console.log('✅ FAQ表创建成功');
      
      // 添加示例数据
      console.log('正在添加示例FAQ数据...');
      const sampleFaqs = [
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '这款直角平底立铣刀适用于哪些材料？',
          answer: '我们的直角平底立铣刀系列适用于多种材料：\n- HRC45°系列：适用于硬度45度以下的钢材\n- HRC50°系列：适用于硬度50度以下的中等硬度钢材\n- HRC55°系列：适用于硬度55度以下的较硬钢材\n- HRC60°系列：适用于硬度60度的高硬度钢材和不锈钢\n- HRC65°系列：适用于极硬钢材、淬火钢、模具预硬钢和不锈钢\n- AL系列：专门用于铜、铝等有色金属',
          category: '产品信息',
          sort_order: 1
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '2刃和4刃立铣刀有什么区别？',
          answer: '2刃和4刃立铣刀各有优势：\n\n**2刃立铣刀：**\n- 排屑空间更大，适合深槽加工\n- 切削力相对较小\n- 适合较软材料和粗加工\n\n**4刃立铣刀：**\n- 表面光洁度更好\n- 加工效率更高\n- 适合精加工和硬材料\n- 刀具寿命通常更长',
          category: '技术参数',
          sort_order: 2
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '涂层和未涂层立铣刀如何选择？',
          answer: '选择涂层或未涂层立铣刀需要考虑加工材料：\n\n**涂层立铣刀（推荐用于）：**\n- 钢材、铸铁、不锈钢\n- 高速切削\n- 长时间连续加工\n- 提供更长的刀具寿命和更好的耐磨性\n\n**未涂层立铣刀（推荐用于）：**\n- 铝合金、铜等有色金属\n- 精密加工\n- 避免涂层剥落影响表面质量',
          category: '使用方法',
          sort_order: 3
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '如何确定合适的切削参数？',
          answer: '切削参数的选择需要综合考虑多个因素：\n\n**主轴转速：**\n- 根据刀具直径和材料硬度调整\n- 硬材料使用较低转速\n- 软材料可使用较高转速\n\n**进给速度：**\n- 粗加工：较大进给量\n- 精加工：较小进给量\n\n**切削深度：**\n- 径向切深：通常为刀具直径的10-50%\n- 轴向切深：根据刀具长度和刚性确定\n\n建议从保守参数开始，根据加工效果逐步优化。',
          category: '使用方法',
          sort_order: 4
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '如何订购和获取技术支持？',
          answer: '您可以通过以下方式订购产品和获取支持：\n\n**订购方式：**\n- 在线询价系统\n- 电话联系销售团队\n- 邮件发送需求清单\n\n**技术支持：**\n- 提供详细的技术参数表\n- 切削参数推荐\n- 应用案例分享\n- 售后技术指导\n\n**交付时间：**\n- 标准产品：1-3个工作日\n- 定制产品：根据具体要求确定',
          category: '订购流程',
          sort_order: 5
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '产品质量保证和售后服务如何？',
          answer: '我们提供全面的质量保证和售后服务：\n\n**质量保证：**\n- 严格的生产质量控制\n- 出厂前100%检测\n- 符合国际标准\n- 提供质量检测报告\n\n**售后服务：**\n- 产品使用指导\n- 切削参数优化建议\n- 技术问题快速响应\n- 不合格产品退换服务\n\n**技术支持：**\n- 专业技术团队\n- 现场应用指导\n- 定期技术培训',
          category: '售后服务',
          sort_order: 6
        },
        {
          page_url: '/standard-tools/milling/right-angle-flat',
          question: '是否提供定制服务？',
          answer: '是的，我们提供专业的定制服务：\n\n**定制范围：**\n- 特殊尺寸规格\n- 特殊涂层要求\n- 特殊几何角度\n- 特殊材料组合\n\n**定制流程：**\n1. 需求沟通和技术评估\n2. 设计方案确认\n3. 样品制作和测试\n4. 批量生产\n\n**交付周期：**\n- 样品：5-10个工作日\n- 批量：根据数量和复杂度确定\n\n请联系我们的技术团队详细讨论您的定制需求。',
          category: '其他',
          sort_order: 7
        }
      ];
      
      for (const faq of sampleFaqs) {
        await sql`
          INSERT INTO faqs (page_url, question, answer, category, sort_order)
          VALUES (${faq.page_url}, ${faq.question}, ${faq.answer}, ${faq.category}, ${faq.sort_order})
        `;
      }
      
      console.log('✅ 示例FAQ数据添加成功');
    }
    
    // 检查数据
    const rowCount = await sql`SELECT COUNT(*) as count FROM faqs`;
    console.log('FAQ数据条数:', rowCount[0]?.count);
    
    // 检查特定页面的FAQ
    const pageFaqs = await sql`
      SELECT id, question, category 
      FROM faqs 
      WHERE page_url = '/standard-tools/milling/right-angle-flat'
      ORDER BY sort_order
    `;
    
    console.log('该页面的FAQ:');
    pageFaqs.forEach((faq, index) => {
      console.log(`${index + 1}. [${faq.category}] ${faq.question}`);
    });
    
    console.log('✅ FAQ数据库测试完成');
    
  } catch (error) {
    console.error('❌ 数据库测试失败:', error);
  } finally {
    process.exit(0);
  }
}

testFAQDatabase(); 