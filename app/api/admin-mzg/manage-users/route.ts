import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取管理员用户列表
export async function GET(request: NextRequest) {
  try {
    // 检查当前用户权限
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    // 只有超级管理员可以管理其他管理员
    if (currentUser.role !== 'super_admin') {
      return NextResponse.json({ error: "权限不足" }, { status: 403 })
    }

    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const role = searchParams.get('role') || ''
    const offset = (page - 1) * limit

    // 获取管理员列表（简化查询）
    let adminUsers
    if (search && role) {
      adminUsers = await sql`
        SELECT id, username, email, role, is_active, created_at, updated_at
        FROM admin_users 
        WHERE (username ILIKE ${`%${search}%`} OR email ILIKE ${`%${search}%`})
        AND role = ${role}
        ORDER BY created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (search) {
      adminUsers = await sql`
        SELECT id, username, email, role, is_active, created_at, updated_at
        FROM admin_users 
        WHERE username ILIKE ${`%${search}%`} OR email ILIKE ${`%${search}%`}
        ORDER BY created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else if (role) {
      adminUsers = await sql`
        SELECT id, username, email, role, is_active, created_at, updated_at
        FROM admin_users 
        WHERE role = ${role}
        ORDER BY created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    } else {
      adminUsers = await sql`
        SELECT id, username, email, role, is_active, created_at, updated_at
        FROM admin_users 
        ORDER BY created_at DESC
        LIMIT ${limit} OFFSET ${offset}
      `
    }

    // 获取总数
    const countResult = await sql`
      SELECT COUNT(*) as total
      FROM admin_users 
    `

    const total = parseInt(countResult[0].total as string)
    const totalPages = Math.ceil(total / limit)

    // 统计信息
    const stats = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE is_active = true) as active,
        COUNT(*) FILTER (WHERE role = 'super_admin') as super_admins,
        COUNT(*) FILTER (WHERE role = 'admin') as admins
      FROM admin_users
    `

    return NextResponse.json({
      success: true,
      data: adminUsers,
      pagination: {
        page,
        limit,
        total,
        totalPages
      },
      stats: stats[0]
    })
  } catch (error) {
    console.error("获取管理员用户列表错误:", error)
    return NextResponse.json({ 
      success: false, 
      error: "获取管理员用户列表失败" 
    }, { status: 500 })
  }
}

// 创建新管理员
export async function POST(request: NextRequest) {
  try {
    // 检查当前用户权限
    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== 'super_admin') {
      return NextResponse.json({ error: "权限不足" }, { status: 403 })
    }

    const body = await request.json()
    const { username, email, password, role = 'admin', isActive = true } = body

    // 验证必填字段
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        message: "用户名和密码为必填项"
      }, { status: 400 })
    }

    // 检查用户名是否已存在
    const existing = await sql`
      SELECT id FROM admin_users WHERE username = ${username}
    `

    if (existing.length > 0) {
      return NextResponse.json({
        success: false,
        message: "用户名已存在"
      }, { status: 400 })
    }

    // 如果提供了邮箱，检查邮箱是否已存在
    if (email) {
      const existingEmail = await sql`
        SELECT id FROM admin_users WHERE email = ${email}
      `

      if (existingEmail.length > 0) {
        return NextResponse.json({
          success: false,
          message: "邮箱已存在"
        }, { status: 400 })
      }
    }

    // 密码哈希
    const passwordHash = Buffer.from(password).toString('base64')

    // 创建管理员
    const newAdmin = await sql`
      INSERT INTO admin_users (username, password_hash, email, role, is_active)
      VALUES (${username}, ${passwordHash}, ${email}, ${role}, ${isActive})
      RETURNING id, username, email, role, is_active, created_at
    `

    return NextResponse.json({
      success: true,
      message: "管理员创建成功",
      data: newAdmin[0]
    })
  } catch (error) {
    console.error("创建管理员错误:", error)
    return NextResponse.json({
      success: false,
      message: "创建管理员失败"
    }, { status: 500 })
  }
} 