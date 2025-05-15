import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

// 在实际应用中，这些值应该存储在环境变量或数据库中
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "mzgtools2024"
const AUTH_COOKIE_NAME = "mzg-admin-auth"

// 验证用户凭据
export function verifyCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

// 设置认证 Cookie
export function setAuthCookie(): void {
  cookies().set({
    name: AUTH_COOKIE_NAME,
    value: "authenticated",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 24小时
  })
}

// 清除认证 Cookie
export function clearAuthCookie(): void {
  cookies().delete(AUTH_COOKIE_NAME)
}

// 检查用户是否已认证
export function isAuthenticated(): boolean {
  const authCookie = cookies().get(AUTH_COOKIE_NAME)
  return authCookie?.value === "authenticated"
}

// 保护路由的辅助函数
export function protectRoute() {
  if (!isAuthenticated()) {
    redirect("/admin/login")
  }
}

// 中间件使用的认证函数
export function authMiddleware(req: NextRequest): boolean {
  return isAuthenticated()
}
