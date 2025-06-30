const { sql } = require('../lib/database');

const faqs = [
  // General Questions
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What is a Right Angle Flat End Mill?",
    answer: "A Right Angle Flat End Mill is a cutting tool designed with 90-degree corner geometry for precision machining of flat surfaces, grooves, and stepped surfaces. These end mills feature sharp corners that create clean, square edges in workpieces.",
    category: "General",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat", 
    question: "What materials can be machined with these end mills?",
    answer: "Our Right Angle Flat End Mills are available in different hardness ranges (HRC45-65) and can machine various materials including general steel, hardened steel, stainless steel, cast iron, copper, aluminum, and other non-ferrous metals depending on the specific coating and configuration.",
    category: "General",
    sort_order: 2
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What's the difference between coated and uncoated versions?",
    answer: "Coated versions (nano-coated for HRC60°+ materials) provide superior wear resistance and longer tool life when machining harder materials. Uncoated versions are optimized for softer materials like aluminum, copper, and non-ferrous metals where coating might interfere with surface finish.",
    category: "General",
    sort_order: 3
  },

  // Technical Specifications
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What flute configurations are available?",
    answer: "We offer 2-flute, 3-flute, and 4-flute configurations:\n- 2-flute: Better chip evacuation, ideal for softer materials and deeper cuts\n- 3-flute: Balanced performance for non-ferrous metals\n- 4-flute: Higher surface finish quality, better for harder materials and finishing operations",
    category: "Technical",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What hardness ranges are available?",
    answer: "Our Right Angle Flat End Mills are available in multiple hardness ranges:\n- HRC45°: General steel machining\n- HRC50°: Medium hardness steel\n- HRC55°: Harder steel applications\n- HRC60°: High hardness steel and stainless steel (nano-coated)\n- HRC65°: Extremely hard steel, quenched steel, and mold prehardened steel (nano-coated)",
    category: "Technical", 
    sort_order: 2
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What are the recommended cutting parameters?",
    answer: "Cutting parameters vary by material and tool configuration. Generally:\n- Use lower speeds for harder materials\n- Increase feed rates with more flutes\n- Maintain proper coolant flow\n- Adjust depth of cut based on material hardness\nContact our technical team for specific parameter recommendations for your application.",
    category: "Technical",
    sort_order: 3
  },

  // Applications
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What are the main applications for Right Angle Flat End Mills?",
    answer: "Primary applications include:\n- Plane milling for flat surface creation\n- Groove machining with precise square corners\n- Stepped surface machining\n- Shoulder milling operations\n- Square corner profiling\n- Slot cutting with sharp corners",
    category: "Applications",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "Can these end mills be used for finishing operations?",
    answer: "Yes, especially the 4-flute configurations which provide excellent surface finish quality. The nano-coated versions are particularly suitable for finishing operations on harder materials, providing both precision and surface quality.",
    category: "Applications",
    sort_order: 2
  }
];

async function checkAndAddFAQs() {
  try {
    // 首先检查FAQ表是否存在
    console.log('检查FAQ表...');
    try {
      const result = await sql`SELECT COUNT(*) FROM faqs`;
      console.log('✅ FAQ表存在，当前记录数:', result[0].count);
    } catch (error) {
      console.log('❌ FAQ表不存在，需要先初始化数据库');
      return;
    }

    // 检查是否已经有这个页面的FAQ
    const existingFaqs = await sql`
      SELECT COUNT(*) FROM faqs 
      WHERE page_url = '/standard-tools/milling/right-angle-flat'
    `;
    
    if (existingFaqs[0].count > 0) {
      console.log(`⚠️  页面已有 ${existingFaqs[0].count} 个FAQ，是否要继续添加？`);
    }

    // 添加FAQ数据
    console.log('开始添加FAQ数据...');
    for (const faq of faqs) {
      try {
        await sql`
          INSERT INTO faqs (page_url, question, answer, category, sort_order, is_active, created_at, updated_at)
          VALUES (${faq.page_url}, ${faq.question}, ${faq.answer}, ${faq.category}, ${faq.sort_order}, true, NOW(), NOW())
        `;
        console.log(`✅ 已添加: ${faq.question}`);
      } catch (error) {
        console.error(`❌ 添加失败: ${faq.question}`, error.message);
      }
    }

    // 验证添加结果
    const finalCount = await sql`
      SELECT COUNT(*) FROM faqs 
      WHERE page_url = '/standard-tools/milling/right-angle-flat'
    `;
    console.log(`🎉 完成！页面现有 ${finalCount[0].count} 个FAQ`);

  } catch (error) {
    console.error('❌ 操作失败:', error);
  }
}

// 运行脚本
checkAndAddFAQs(); 