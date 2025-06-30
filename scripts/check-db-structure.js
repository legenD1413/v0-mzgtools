// 加载环境变量
require('dotenv').config({ path: '.env.local' });

const { neon } = require('@neondatabase/serverless');

async function checkDatabaseStructure() {
  try {
    console.log('🔧 加载环境变量...');
    console.log('DATABASE_URL 配置状态:', process.env.DATABASE_URL ? '✅ 已配置' : '❌ 未配置');
    
    // 检查环境变量
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL 环境变量未设置');
      console.log('请在项目根目录创建 .env.local 文件并添加:');
      console.log('DATABASE_URL="postgresql://username:password@host/database"');
      return;
    }

    console.log('🔍 连接到PostgreSQL数据库...');
    const sql = neon(process.env.DATABASE_URL);
    
    // 测试连接
    const timeResult = await sql`SELECT NOW() as current_time`;
    console.log('✅ 数据库连接成功，当前时间:', timeResult[0].current_time);

    // 检查faqs表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'faqs'  
      ) as exists
    `;

    if (!tableExists[0].exists) {
      console.log('❌ faqs表不存在');
      console.log('💡 需要创建faqs表，请运行数据库初始化');
      return;
    }

    console.log('✅ faqs表存在');

    // 检查表结构
    console.log('\n📋 检查faqs表结构:');
    const columns = await sql`
      SELECT 
        column_name, 
        data_type, 
        is_nullable, 
        column_default
      FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = 'faqs'
      ORDER BY ordinal_position
    `;

    console.log('当前表结构:');
    columns.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type} ${col.is_nullable === 'YES' ? '(可空)' : '(非空)'} ${col.column_default ? `默认: ${col.column_default}` : ''}`);
    });

    // 检查必需字段
    const columnNames = columns.map(col => col.column_name);
    const requiredColumns = [
      'id', 'page_urls', 'question', 'answer', 'categories', 
      'sort_order', 'is_active', 'show_in_popular', 'created_at', 'updated_at'
    ];

    console.log('\n🔍 字段检查结果:');
    const missingColumns = [];
    
    requiredColumns.forEach(col => {
      if (columnNames.includes(col)) {
        console.log(`  ✅ ${col} - 存在`);
      } else {
        console.log(`  ❌ ${col} - 缺失`);
        missingColumns.push(col);
      }
    });

    // 检查旧字段
    const oldColumns = ['page_url', 'category'];
    console.log('\n🔍 旧字段检查:');
    oldColumns.forEach(col => {
      if (columnNames.includes(col)) {
        console.log(`  ⚠️  ${col} - 旧字段存在，需要迁移`);
      }
    });

    if (missingColumns.length > 0) {
      console.log('\n💡 解决方案:');
      console.log('1. 访问 http://localhost:3000/debug/db-status 查看详细状态');
      console.log('2. 点击"修复表结构"按钮自动修复');
      console.log('3. 或者手动执行以下SQL命令:');
      
      missingColumns.forEach(col => {
        switch(col) {
          case 'page_urls':
            console.log(`   ALTER TABLE faqs ADD COLUMN page_urls JSONB DEFAULT '[]';`);
            break;
          case 'categories':
            console.log(`   ALTER TABLE faqs ADD COLUMN categories JSONB DEFAULT '[]';`);
            break;
          case 'show_in_popular':
            console.log(`   ALTER TABLE faqs ADD COLUMN show_in_popular BOOLEAN DEFAULT false;`);
            break;
          case 'sort_order':
            console.log(`   ALTER TABLE faqs ADD COLUMN sort_order INTEGER DEFAULT 0;`);
            break;
          case 'is_active':
            console.log(`   ALTER TABLE faqs ADD COLUMN is_active BOOLEAN DEFAULT true;`);
            break;
          case 'created_at':
            console.log(`   ALTER TABLE faqs ADD COLUMN created_at TIMESTAMP DEFAULT NOW();`);
            break;
          case 'updated_at':
            console.log(`   ALTER TABLE faqs ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();`);
            break;
        }
      });
    } else {
      console.log('\n✅ 所有必需字段都存在！');
    }

    // 检查数据
    console.log('\n📊 数据统计:');
    const countResult = await sql`SELECT COUNT(*) as count FROM faqs`;
    console.log(`总记录数: ${countResult[0].count}`);

  } catch (error) {
    console.error('❌ 数据库检查失败:', error.message);
    
    if (error.message.includes('connect')) {
      console.log('💡 连接问题可能的原因:');
      console.log('1. DATABASE_URL 配置错误');
      console.log('2. 数据库服务器未运行');
      console.log('3. 网络连接问题');
      console.log('4. 防火墙阻止连接');
    } else if (error.message.includes('authentication')) {
      console.log('💡 认证问题，请检查用户名和密码');
    } else if (error.message.includes('database') && error.message.includes('does not exist')) {
      console.log('💡 数据库不存在，请先创建数据库');
    }
  }
}

// 运行检查
checkDatabaseStructure().then(() => {
  console.log('\n🏁 检查完成');
  process.exit(0);
}).catch(error => {
  console.error('脚本执行失败:', error);
  process.exit(1);
}); 