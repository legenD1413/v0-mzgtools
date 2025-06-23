import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取单个用户详情
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查管理员权限
    const admin = await getCurrentUser()
    if (!admin) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const resolvedParams = await params
    const userId = parseInt(resolvedParams.id)
    if (isNaN(userId)) {
      return NextResponse.json({
        success: false,
        message: "无效的用户ID"
      }, { status: 400 })
    }

    // 获取用户详情
    const user = await sql`
      SELECT 
        id, username, email, first_name, last_name, company, phone,
        address, city, state, country, postal_code, avatar_url, bio,
        user_type, subscription_level, credit_limit, is_active,
        email_verified, last_login, login_count, created_at, updated_at
      FROM users 
      WHERE id = ${userId}
    `

    if (user.length === 0) {
      return NextResponse.json({
        success: false,
        message: "用户不存在"
      }, { status: 404 })
    }

    // 获取用户活动日志（最近20条）
    const activityLogs = await sql`
      SELECT action, details, ip_address, created_at
      FROM user_activity_logs
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 20
    `

    // 获取用户会话信息
    const sessions = await sql`
      SELECT device_info, ip_address, created_at, expires_at
      FROM user_sessions
      WHERE user_id = ${userId} AND expires_at > NOW()
      ORDER BY created_at DESC
    `

    return NextResponse.json({
      success: true,
      data: {
        user: user[0],
        activityLogs,
        activeSessions: sessions
      }
    })

  } catch (error) {
    console.error('获取用户详情失败:', error)
    return NextResponse.json({
      success: false,
      message: "获取用户详情失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

// 更新用户信息
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查管理员权限
    const admin = await getCurrentUser()
    if (!admin) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const resolvedParams = await params
    const userId = parseInt(resolvedParams.id)
    if (isNaN(userId)) {
      return NextResponse.json({
        success: false,
        message: "无效的用户ID"
      }, { status: 400 })
    }

    const body = await request.json()
    const {
      username,
      email,
      firstName,
      lastName,
      company,
      phone,
      address,
      city,
      state,
      country,
      postalCode,
      userType,
      subscriptionLevel,
      creditLimit,
      isActive,
      emailVerified
    } = body

    // 检查用户是否存在
    const existingUser = await sql`
      SELECT id FROM users WHERE id = ${userId}
    `

    if (existingUser.length === 0) {
      return NextResponse.json({
        success: false,
        message: "用户不存在"
      }, { status: 404 })
    }

    // 检查用户名和邮箱唯一性（排除当前用户）
    if (username || email) {
      let checkQuery = 'SELECT id FROM users WHERE id != $1'
      const checkParams = [userId]
      let paramIndex = 2

      if (username) {
        checkQuery += ` AND username = $${paramIndex}`
        checkParams.push(username)
        paramIndex++
      }

      if (email) {
        if (username) {
          checkQuery += ' OR email = $' + paramIndex
        } else {
          checkQuery += ' AND email = $' + paramIndex
        }
        checkParams.push(email)
      }

      const duplicate = await sql.unsafe(checkQuery) as unknown as any[]

      if (duplicate.length > 0) {
        return NextResponse.json({
          success: false,
          message: "用户名或邮箱已被其他用户使用"
        }, { status: 400 })
      }
    }

    // 更新用户信息
    const updatedUser = await sql`
      UPDATE users SET
        username = COALESCE(${username}, username),
        email = COALESCE(${email}, email),
        first_name = COALESCE(${firstName}, first_name),
        last_name = COALESCE(${lastName}, last_name),
        company = COALESCE(${company}, company),
        phone = COALESCE(${phone}, phone),
        address = COALESCE(${address}, address),
        city = COALESCE(${city}, city),
        state = COALESCE(${state}, state),
        country = COALESCE(${country}, country),
        postal_code = COALESCE(${postalCode}, postal_code),
        user_type = COALESCE(${userType}, user_type),
        subscription_level = COALESCE(${subscriptionLevel}, subscription_level),
        credit_limit = COALESCE(${creditLimit}, credit_limit),
        is_active = COALESCE(${isActive}, is_active),
        email_verified = COALESCE(${emailVerified}, email_verified),
        updated_at = NOW()
      WHERE id = ${userId}
      RETURNING id, username, email, first_name, last_name, company, user_type, updated_at
    `

    // 记录活动日志
    await sql`
      INSERT INTO user_activity_logs (user_id, action, details)
      VALUES (${userId}, 'user_updated', ${JSON.stringify({ 
        updatedBy: admin.username,
        updatedFields: Object.keys(body)
      })})
    `

    return NextResponse.json({
      success: true,
      message: "用户信息更新成功",
      data: updatedUser[0]
    })

  } catch (error) {
    console.error('更新用户失败:', error)
    return NextResponse.json({
      success: false,
      message: "更新用户失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

// 删除用户
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查管理员权限
    const admin = await getCurrentUser()
    if (!admin) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const resolvedParams = await params
    const userId = parseInt(resolvedParams.id)
    if (isNaN(userId)) {
      return NextResponse.json({
        success: false,
        message: "无效的用户ID"
      }, { status: 400 })
    }

    // 检查用户是否存在
    const existingUser = await sql`
      SELECT id, username FROM users WHERE id = ${userId}
    `

    if (existingUser.length === 0) {
      return NextResponse.json({
        success: false,
        message: "用户不存在"
      }, { status: 404 })
    }

    // 删除相关数据（级联删除）
    await sql`DELETE FROM user_sessions WHERE user_id = ${userId}`
    await sql`DELETE FROM user_activity_logs WHERE user_id = ${userId}`

    // 删除用户
    await sql`DELETE FROM users WHERE id = ${userId}`

    return NextResponse.json({
      success: true,
      message: `用户 ${existingUser[0].username} 删除成功`
    })

  } catch (error) {
    console.error('删除用户失败:', error)
    return NextResponse.json({
      success: false,
      message: "删除用户失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 