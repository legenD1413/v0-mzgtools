import { sql } from "./database"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const SESSION_COOKIE_NAME = "mzg-admin-session"
const SESSION_EXPIRES_HOURS = 24

// 用户接口
export interface AdminUser {
  id: number
  username: string
  email?: string
  role: string
  isActive: boolean
}

// 验证用户凭据
export async function verifyCredentials(username: string, password: string): Promise<AdminUser | null> {
  try {
    // 简单密码哈希对比（生产环境应使用bcrypt）
    const passwordHash = Buffer.from(password).toString('base64')
    
    const users = await sql`
      SELECT id, username, email, role, is_active
      FROM admin_users 
      WHERE username = ${username} 
      AND password_hash = ${passwordHash} 
      AND is_active = true
    `

    if (users.length === 0) {
      return null
    }

    const user = users[0]
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      isActive: user.is_active
    }
  } catch (error) {
    console.error("验证用户凭据错误:", error)
    return null
  }
}

// 创建会话
export async function createSession(userId: number): Promise<string> {
  try {
    // 生成会话令牌
    const token = generateSessionToken()
    const expiresAt = new Date(Date.now() + SESSION_EXPIRES_HOURS * 60 * 60 * 1000)

    // 清理过期会话
    await sql`
      DELETE FROM admin_sessions 
      WHERE expires_at < NOW()
    `

    // 清理用户的旧会话
    await sql`
      DELETE FROM admin_sessions 
      WHERE user_id = ${userId}
    `

    // 创建新会话
    await sql`
      INSERT INTO admin_sessions (user_id, token, expires_at)
      VALUES (${userId}, ${token}, ${expiresAt})
    `

    return token
  } catch (error) {
    console.error("创建会话错误:", error)
    throw error
  }
}

// 验证会话
export async function validateSession(token: string): Promise<AdminUser | null> {
  try {
    const sessions = await sql`
      SELECT s.user_id, s.expires_at, u.id, u.username, u.email, u.role, u.is_active
      FROM admin_sessions s
      JOIN admin_users u ON s.user_id = u.id
      WHERE s.token = ${token} 
      AND s.expires_at > NOW()
      AND u.is_active = true
    `

    if (sessions.length === 0) {
      return null
    }

    const session = sessions[0]
    return {
      id: session.id,
      username: session.username,
      email: session.email,
      role: session.role,
      isActive: session.is_active
    }
  } catch (error) {
    console.error("验证会话错误:", error)
    return null
  }
}

// 删除会话
export async function deleteSession(token: string): Promise<void> {
  try {
    await sql`
      DELETE FROM admin_sessions 
      WHERE token = ${token}
    `
  } catch (error) {
    console.error("删除会话错误:", error)
  }
}

// 设置认证Cookie
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_EXPIRES_HOURS * 60 * 60, // 24小时
    sameSite: "strict"
  })
}

// 清除认证Cookie
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

// 获取当前用户
export async function getCurrentUser(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value

    if (!sessionToken) {
      return null
    }

    return await validateSession(sessionToken)
  } catch (error) {
    console.error("获取当前用户错误:", error)
    return null
  }
}

// 检查用户是否已认证
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return user !== null
}

// 保护路由的辅助函数
export async function protectRoute() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect("/admin-mzg/login")
  }
}

// 生成会话令牌
function generateSessionToken(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// 登录功能
export async function login(username: string, password: string): Promise<{ success: boolean; message: string; user?: AdminUser }> {
  try {
    const user = await verifyCredentials(username, password)
    
    if (!user) {
      return { success: false, message: "用户名或密码不正确" }
    }

    const sessionToken = await createSession(user.id)
    await setAuthCookie(sessionToken)

    return { success: true, message: "登录成功", user }
  } catch (error) {
    console.error("登录错误:", error)
    return { success: false, message: "登录过程中发生错误" }
  }
}

// 退出登录功能
export async function logout(): Promise<void> {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value

    if (sessionToken) {
      await deleteSession(sessionToken)
    }

    await clearAuthCookie()
  } catch (error) {
    console.error("退出登录错误:", error)
  }
}

// 验证API请求的管理员令牌
export async function verifyAdminToken(request: Request): Promise<AdminUser | null> {
  try {
    // 从请求中获取cookie
    const cookieHeader = request.headers.get('cookie')
    if (!cookieHeader) {
      return null
    }

    // 解析cookie获取会话令牌
    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(cookie => cookie.split('='))
    )
    
    const sessionToken = cookies[SESSION_COOKIE_NAME]
    if (!sessionToken) {
      return null
    }

    // 验证会话
    return await validateSession(sessionToken)
  } catch (error) {
    console.error("验证管理员令牌错误:", error)
    return null
  }
} 