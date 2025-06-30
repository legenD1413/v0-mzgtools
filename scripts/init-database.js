const { neon } = require("@neondatabase/serverless");

// 创建数据库连接
const sql = neon(process.env.DATABASE_URL);

async function initializeDatabase() {
  try {
    console.log("开始初始化数据库...");

    // 创建FAQ表
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
    `;

    console.log("FAQ表创建成功");

    // 检查是否已有数据
    const existingFaqs = await sql`SELECT COUNT(*) as count FROM faqs`;
    console.log(`当前FAQ数量: ${existingFaqs[0].count}`);

    console.log("数据库初始化完成！");

  } catch (error) {
    console.error("数据库初始化失败:", error);
  }
}

// 运行脚本
initializeDatabase(); 