import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取用户列表
export async function GET(request: NextRequest) {
  try {
    // 检查管理员权限
    const admin = await getCurrentUser()
    if (!admin) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''
    const userType = searchParams.get('userType') || ''
    const status = searchParams.get('status') || ''

    const offset = (page - 1) * limit

    // 构建查询条件
    let whereConditions = []

    if (search) {
      const searchPattern = search.replace(/'/g, "''") // 防止SQL注入
      whereConditions.push(`(username ILIKE '%${searchPattern}%' OR email ILIKE '%${searchPattern}%' OR first_name ILIKE '%${searchPattern}%' OR last_name ILIKE '%${searchPattern}%' OR company ILIKE '%${searchPattern}%')`)
    }

    if (userType) {
      whereConditions.push(`user_type = '${userType.replace(/'/g, "''")}'`)
    }

    if (status) {
      const isActive = status === 'active'
      whereConditions.push(`is_active = ${isActive}`)
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : ''

    // 获取用户列表 - 改用标准查询而不是unsafe
    let users
    let countResult
    
    if (whereConditions.length === 0) {
      // 没有筛选条件的情况
      users = await sql`
        SELECT 
          id, username, email, first_name, last_name, company, phone,
          user_type, subscription_level, credit_limit, is_active,
          email_verified, last_login, login_count, created_at, updated_at
        FROM users 
        ORDER BY created_at DESC 
        LIMIT ${limit} OFFSET ${offset}
      `
      
      countResult = await sql`SELECT COUNT(*) as total FROM users`
    } else {
      // 有筛选条件的情况，使用unsafe查询
      const usersQuery = `
        SELECT 
          id, username, email, first_name, last_name, company, phone,
          user_type, subscription_level, credit_limit, is_active,
          email_verified, last_login, login_count, created_at, updated_at
        FROM users 
        ${whereClause}
        ORDER BY created_at DESC 
        LIMIT ${limit} OFFSET ${offset}
      `

      const countQuery = `SELECT COUNT(*) as total FROM users ${whereClause}`
      
      // 确保unsafe查询返回数组
      const usersResult = await sql.unsafe(usersQuery)
      const countResults = await sql.unsafe(countQuery)
      
      users = Array.isArray(usersResult) ? usersResult : [usersResult]
      countResult = Array.isArray(countResults) ? countResults : [countResults]
    }
    const total = parseInt(countResult[0]?.total || '0')

    // 获取统计数据
    const stats = await sql`
      SELECT 
        COUNT(*) as total_users,
        COUNT(*) FILTER (WHERE is_active = true) as active_users,
        COUNT(*) FILTER (WHERE is_active = false) as inactive_users,
        COUNT(*) FILTER (WHERE user_type = 'customer') as customers,
        COUNT(*) FILTER (WHERE user_type = 'partner') as partners,
        COUNT(*) FILTER (WHERE user_type = 'vendor') as vendors,
        COUNT(*) FILTER (WHERE email_verified = true) as verified_users,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days') as new_users_30d
      FROM users
    `

    return NextResponse.json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1
        },
        stats: stats[0]
      }
    })

  } catch (error) {
    console.error('获取用户列表失败:', error)
    return NextResponse.json({
      success: false,
      message: "获取用户列表失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

// 创建新用户
export async function POST(request: NextRequest) {
  try {
    // 检查管理员权限
    const admin = await getCurrentUser()
    if (!admin) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const body = await request.json()
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      company,
      phone,
      address,
      city,
      state,
      country,
      postalCode,
      userType = 'customer',
      subscriptionLevel = 'basic',
      creditLimit = 0,
      isActive = true
    } = body

    // 验证必填字段
    if (!username || !email || !password) {
      return NextResponse.json({
        success: false,
        message: "用户名、邮箱和密码为必填项"
      }, { status: 400 })
    }

    // 检查用户名和邮箱是否已存在
    const existing = await sql`
      SELECT id FROM users WHERE username = ${username} OR email = ${email}
    `

    if (existing.length > 0) {
      return NextResponse.json({
        success: false,
        message: "用户名或邮箱已存在"
      }, { status: 400 })
    }

    // 简单密码哈希（生产环境应使用bcrypt）
    const passwordHash = Buffer.from(password).toString('base64')

    // 创建用户
    const newUser = await sql`
      INSERT INTO users (
        username, email, password_hash, first_name, last_name,
        company, phone, address, city, state, country, postal_code,
        user_type, subscription_level, credit_limit, is_active
      ) VALUES (
        ${username}, ${email}, ${passwordHash}, ${firstName}, ${lastName},
        ${company}, ${phone}, ${address}, ${city}, ${state}, ${country}, ${postalCode},
        ${userType}, ${subscriptionLevel}, ${creditLimit}, ${isActive}
      ) RETURNING id, username, email, first_name, last_name, company, user_type, created_at
    `

    // 记录活动日志
    await sql`
      INSERT INTO user_activity_logs (user_id, action, details)
      VALUES (${newUser[0].id}, 'user_created', ${JSON.stringify({ createdBy: admin.username })})
    `

    return NextResponse.json({
      success: true,
      message: "用户创建成功",
      data: newUser[0]
    })

  } catch (error) {
    console.error('创建用户失败:', error)
    return NextResponse.json({
      success: false,
      message: "创建用户失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 