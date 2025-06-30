import { neon } from "@neondatabase/serverless"

// 检查环境变量
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  console.error('❌ DATABASE_URL 环境变量未设置')
  console.error('请创建 .env.local 文件并添加：')
  console.error('DATABASE_URL=你的数据库连接字符串')
  throw new Error('DATABASE_URL 环境变量未设置')
}

console.log('✅ DATABASE_URL 已设置:', databaseUrl.substring(0, 30) + '...')

// 创建数据库连接
export const sql = neon(databaseUrl)

// 数据库表初始化
export async function initializeTables() {
  try {
    // 创建管理员用户表
    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(100),
        role VARCHAR(20) DEFAULT 'admin',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建产品分类表
    await sql`
      CREATE TABLE IF NOT EXISTS product_categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        parent_id INTEGER REFERENCES product_categories(id),
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建产品系列表
    await sql`
      CREATE TABLE IF NOT EXISTS product_series (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        code VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        category_id INTEGER REFERENCES product_categories(id),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建产品表
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        code VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        series_id INTEGER REFERENCES product_series(id),
        image_url VARCHAR(500),
        page_number VARCHAR(50),
        specifications JSONB,
        features JSONB,
        applications JSONB,
        is_active BOOLEAN DEFAULT true,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建报价请求表
    await sql`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        company VARCHAR(200),
        phone VARCHAR(20),
        requirements TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'new',
        priority VARCHAR(10) DEFAULT 'normal',
        notes TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建管理员会话表
    await sql`
      CREATE TABLE IF NOT EXISTS admin_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES admin_users(id),
        token VARCHAR(255) UNIQUE NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建前台用户表
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        company VARCHAR(200),
        phone VARCHAR(20),
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        country VARCHAR(100),
        postal_code VARCHAR(20),
        avatar_url VARCHAR(500),
        bio TEXT,
        user_type VARCHAR(20) DEFAULT 'customer',
        subscription_level VARCHAR(20) DEFAULT 'basic',
        credit_limit DECIMAL(12,2) DEFAULT 0.00,
        is_active BOOLEAN DEFAULT true,
        email_verified BOOLEAN DEFAULT false,
        last_login TIMESTAMP,
        login_count INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建用户会话表
    await sql`
      CREATE TABLE IF NOT EXISTS user_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        token VARCHAR(255) UNIQUE NOT NULL,
        device_info VARCHAR(500),
        ip_address VARCHAR(45),
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建用户活动日志表
    await sql`
      CREATE TABLE IF NOT EXISTS user_activity_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        action VARCHAR(100) NOT NULL,
        details JSONB,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 创建产品图片库表
    await sql`
      CREATE TABLE IF NOT EXISTS product_gallery (
        id SERIAL PRIMARY KEY,
        page_path VARCHAR(500) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        title VARCHAR(200),
        description TEXT,
        sort_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `
    // 创建FAQ表
    await sql`
      CREATE TABLE IF NOT EXISTS faqs (
        id SERIAL PRIMARY KEY,
        page_urls JSONB NOT NULL DEFAULT '[]',
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        categories JSONB NOT NULL DEFAULT '[]',
        sort_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        show_in_popular BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    // 数据迁移：如果表已存在但使用旧结构，进行迁移
    try {
      // 检查是否存在旧的字段
      const tableInfo = await sql`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'faqs' AND column_name IN ('page_url', 'category')
      `
      
      if (tableInfo.length > 0) {
        console.log('检测到FAQ表旧结构，开始迁移...')
        
        // 备份旧数据
        const oldData = await sql`
          SELECT id, page_url, category, question, answer, sort_order, is_active, show_in_popular, created_at, updated_at
          FROM faqs
        `
        
        // 添加新字段
        await sql`ALTER TABLE faqs ADD COLUMN IF NOT EXISTS page_urls JSONB DEFAULT '[]'`
        await sql`ALTER TABLE faqs ADD COLUMN IF NOT EXISTS categories JSONB DEFAULT '[]'`
        
        // 迁移数据：将单个值转换为数组
        for (const row of oldData) {
          const pageUrls = row.page_url ? [row.page_url] : []
          const categories = row.category ? [row.category] : []
          
          await sql`
            UPDATE faqs 
            SET page_urls = ${JSON.stringify(pageUrls)}, 
                categories = ${JSON.stringify(categories)}
            WHERE id = ${row.id}
          `
        }
        
        // 删除旧字段
        await sql`ALTER TABLE faqs DROP COLUMN IF EXISTS page_url`
        await sql`ALTER TABLE faqs DROP COLUMN IF EXISTS category`
        
        console.log('FAQ表迁移完成')
      }
    } catch (error) {
      console.log('FAQ表迁移处理:', error)
    }

    // 添加show_in_popular字段（如果表已存在但字段不存在）
    try {
      await sql`
        ALTER TABLE faqs ADD COLUMN IF NOT EXISTS show_in_popular BOOLEAN DEFAULT false
      `
    } catch (error) {
      // 忽略字段已存在的错误
      console.log('FAQ表字段更新:', error)
    }

    // 插入默认管理员用户（如果不存在）
    const existingAdmin = await sql`
      SELECT id FROM admin_users WHERE username = 'admin'
    `

    if (existingAdmin.length === 0) {
      // 简单密码哈希（生产环境应使用bcrypt）
      const passwordHash = Buffer.from('mzgtools2024').toString('base64')
      
      await sql`
        INSERT INTO admin_users (username, password_hash, email, role)
        VALUES ('admin', ${passwordHash}, 'admin@mzgtools.com', 'super_admin')
      `
      console.log('默认管理员用户已创建')
    }

    console.log('数据库表初始化完成')
  } catch (error) {
    console.error('数据库初始化错误:', error)
    throw error
  }
}

// 验证数据库连接
export async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as current_time`
    console.log('数据库连接成功:', result[0].current_time)
    return true
  } catch (error) {
    console.error('数据库连接失败:', error)
    return false
  }
}

// 辅助函数：将蛇形命名转换为驼峰命名
export function snakeToCamel(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camelKey] = obj[key]
  }

  return result
}

// 辅助函数：将驼峰命名转换为蛇形命名
export function camelToSnake(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    result[snakeKey] = obj[key]
  }

  return result
} 
