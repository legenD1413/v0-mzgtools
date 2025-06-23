import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/database"
import { getCurrentUser } from "@/lib/auth-mzg"

// 获取单个管理员信息
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查当前用户权限
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    // 只有超级管理员可以查看其他管理员信息，普通管理员只能查看自己的信息
    const resolvedParams = await params
    const adminId = parseInt(resolvedParams.id)
    if (currentUser.role !== 'super_admin' && currentUser.id !== adminId) {
      return NextResponse.json({ error: "权限不足" }, { status: 403 })
    }

    const admin = await sql`
      SELECT id, username, email, role, is_active, created_at, updated_at
      FROM admin_users 
      WHERE id = ${adminId}
    `

    if (admin.length === 0) {
      return NextResponse.json({ error: "管理员不存在" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: admin[0]
    })
  } catch (error) {
    console.error("获取管理员信息错误:", error)
    return NextResponse.json({ 
      success: false, 
      error: "获取管理员信息失败" 
    }, { status: 500 })
  }
}

// 更新管理员信息
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查当前用户权限
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    const resolvedParams = await params
    const adminId = parseInt(resolvedParams.id)
    const body = await request.json()
    const { username, email, role, isActive, password } = body

    // 权限检查：只有超级管理员可以修改其他管理员，普通管理员只能修改自己的部分信息
    const isSuperAdmin = currentUser.role === 'super_admin'
    const isSelfUpdate = currentUser.id === adminId

    if (!isSuperAdmin && !isSelfUpdate) {
      return NextResponse.json({ error: "权限不足" }, { status: 403 })
    }

    // 获取当前管理员信息
    const existingAdmin = await sql`
      SELECT * FROM admin_users WHERE id = ${adminId}
    `

    if (existingAdmin.length === 0) {
      return NextResponse.json({ error: "管理员不存在" }, { status: 404 })
    }

    // 简化更新逻辑 - 分别处理不同的更新情况
    if (isSelfUpdate && !isSuperAdmin) {
      // 普通管理员只能更新自己的邮箱和密码
      if (password) {
        const passwordHash = Buffer.from(password).toString('base64')
        await sql`
          UPDATE admin_users 
          SET password_hash = ${passwordHash}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }
      
      if (email !== undefined) {
        // 检查邮箱是否被其他用户使用
        if (email) {
          const emailExists = await sql`
            SELECT id FROM admin_users WHERE email = ${email} AND id != ${adminId}
          `
          if (emailExists.length > 0) {
            return NextResponse.json({
              success: false,
              message: "邮箱已被其他用户使用"
            }, { status: 400 })
          }
        }
        
        await sql`
          UPDATE admin_users 
          SET email = ${email}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }
    } else if (isSuperAdmin) {
      // 超级管理员可以更新所有字段
      if (username && username !== existingAdmin[0].username) {
        // 检查用户名是否已存在
        const usernameExists = await sql`
          SELECT id FROM admin_users WHERE username = ${username} AND id != ${adminId}
        `
        if (usernameExists.length > 0) {
          return NextResponse.json({
            success: false,
            message: "用户名已存在"
          }, { status: 400 })
        }
        
        await sql`
          UPDATE admin_users 
          SET username = ${username}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }

      if (email !== undefined && email !== existingAdmin[0].email) {
        // 检查邮箱是否已存在
        if (email) {
          const emailExists = await sql`
            SELECT id FROM admin_users WHERE email = ${email} AND id != ${adminId}
          `
          if (emailExists.length > 0) {
            return NextResponse.json({
              success: false,
              message: "邮箱已存在"
            }, { status: 400 })
          }
        }
        
        await sql`
          UPDATE admin_users 
          SET email = ${email}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }

      if (role && role !== existingAdmin[0].role) {
        await sql`
          UPDATE admin_users 
          SET role = ${role}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }

      if (isActive !== undefined && isActive !== existingAdmin[0].is_active) {
        await sql`
          UPDATE admin_users 
          SET is_active = ${isActive}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }

      if (password) {
        const passwordHash = Buffer.from(password).toString('base64')
        await sql`
          UPDATE admin_users 
          SET password_hash = ${passwordHash}, updated_at = NOW()
          WHERE id = ${adminId}
        `
      }
    }

    // 获取更新后的管理员信息
    const updatedAdmin = await sql`
      SELECT id, username, email, role, is_active, created_at, updated_at
      FROM admin_users 
      WHERE id = ${adminId}
    `

    return NextResponse.json({
      success: true,
      message: "管理员信息更新成功",
      data: updatedAdmin[0]
    })
  } catch (error) {
    console.error("更新管理员信息错误:", error)
    return NextResponse.json({
      success: false,
      message: "更新管理员信息失败"
    }, { status: 500 })
  }
}

// 删除管理员
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 检查当前用户权限
    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== 'super_admin') {
      return NextResponse.json({ error: "权限不足" }, { status: 403 })
    }

    const resolvedParams = await params
    const adminId = parseInt(resolvedParams.id)

    // 不能删除自己
    if (currentUser.id === adminId) {
      return NextResponse.json({
        success: false,
        message: "不能删除当前登录的管理员账户"
      }, { status: 400 })
    }

    // 检查管理员是否存在
    const existingAdmin = await sql`
      SELECT * FROM admin_users WHERE id = ${adminId}
    `

    if (existingAdmin.length === 0) {
      return NextResponse.json({ error: "管理员不存在" }, { status: 404 })
    }

    // 检查是否是最后一个超级管理员
    if (existingAdmin[0].role === 'super_admin') {
      const superAdminCount = await sql`
        SELECT COUNT(*) as count FROM admin_users WHERE role = 'super_admin' AND is_active = true
      `
      
      if (parseInt(superAdminCount[0].count as string) <= 1) {
        return NextResponse.json({
          success: false,
          message: "不能删除最后一个超级管理员"
        }, { status: 400 })
      }
    }

    // 删除相关会话
    await sql`
      DELETE FROM admin_sessions WHERE user_id = ${adminId}
    `

    // 删除管理员
    await sql`
      DELETE FROM admin_users WHERE id = ${adminId}
    `

    return NextResponse.json({
      success: true,
      message: "管理员删除成功"
    })
  } catch (error) {
    console.error("删除管理员错误:", error)
    return NextResponse.json({
      success: false,
      message: "删除管理员失败"
    }, { status: 500 })
  }
} 