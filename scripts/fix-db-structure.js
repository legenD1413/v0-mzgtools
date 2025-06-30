// 加载环境变量
require('dotenv').config({ path: '.env.local' });

const { neon } = require('@neondatabase/serverless');

async function fixDatabaseStructure() {
  try {
    console.log('🔧 连接到数据库...');
    const sql = neon(process.env.DATABASE_URL);
    
    // 测试连接
    await sql`SELECT NOW()`;
    console.log('✅ 数据库连接成功');

    console.log('\n🔄 开始修复表结构...');
    
    // 1. 添加 page_urls 字段
    console.log('📝 添加 page_urls 字段...');
    try {
      await sql`ALTER TABLE faqs ADD COLUMN page_urls JSONB DEFAULT '[]'`;
      console.log('✅ page_urls 字段添加成功');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('ℹ️  page_urls 字段已存在');
      } else {
        throw error;
      }
    }

    // 2. 添加 categories 字段
    console.log('📝 添加 categories 字段...');
    try {
      await sql`ALTER TABLE faqs ADD COLUMN categories JSONB DEFAULT '[]'`;
      console.log('✅ categories 字段添加成功');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('ℹ️  categories 字段已存在');
      } else {
        throw error;
      }
    }

    console.log('\n🔄 迁移现有数据...');
    
    // 3. 迁移现有数据：将 page_url 转换为 page_urls 数组
    console.log('📝 迁移 page_url -> page_urls...');
    const result1 = await sql`
      UPDATE faqs 
      SET page_urls = CASE 
        WHEN page_url IS NOT NULL AND page_url != '' THEN jsonb_build_array(page_url)
        ELSE '[]'::jsonb
      END
      WHERE page_urls = '[]'::jsonb OR page_urls IS NULL
    `;
    console.log(`✅ 迁移了 ${result1.count || 0} 条 page_url 记录`);

    // 4. 迁移现有数据：将 category 转换为 categories 数组
    console.log('📝 迁移 category -> categories...');
    const result2 = await sql`
      UPDATE faqs 
      SET categories = CASE 
        WHEN category IS NOT NULL AND category != '' THEN jsonb_build_array(category)
        ELSE '[]'::jsonb
      END
      WHERE categories = '[]'::jsonb OR categories IS NULL
    `;
    console.log(`✅ 迁移了 ${result2.count || 0} 条 category 记录`);

    console.log('\n🔍 验证修复结果...');
    
    // 5. 验证修复结果
    const columns = await sql`
      SELECT column_name, data_type
      FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = 'faqs'
      AND column_name IN ('page_urls', 'categories')
    `;
    
    console.log('新增的字段:');
    columns.forEach(col => {
      console.log(`  ✅ ${col.column_name}: ${col.data_type}`);
    });

    // 6. 检查数据
    const sampleData = await sql`
      SELECT id, page_url, page_urls, category, categories 
      FROM faqs 
      LIMIT 3
    `;
    
    console.log('\n📊 数据迁移示例:');
    sampleData.forEach(row => {
      console.log(`  ID ${row.id}:`);
      console.log(`    page_url: "${row.page_url}" -> page_urls: ${JSON.stringify(row.page_urls)}`);
      console.log(`    category: "${row.category}" -> categories: ${JSON.stringify(row.categories)}`);
    });

    console.log('\n🎉 数据库结构修复完成！');
    console.log('\n📋 接下来的步骤:');
    console.log('1. 重新测试FAQ管理功能');
    console.log('2. 如果一切正常，可以考虑删除旧的 page_url 和 category 字段');
    console.log('3. 访问 http://localhost:3000/admin-mzg/faqs 测试功能');

  } catch (error) {
    console.error('❌ 修复失败:', error.message);
    console.error('详细错误:', error);
  }
}

// 运行修复
fixDatabaseStructure().then(() => {
  process.exit(0);
}).catch(error => {
  console.error('脚本执行失败:', error);
  process.exit(1);
}); 