import { NextResponse } from "next/server"
import { verifyCredentials, setAuthCookie } from "@/lib/auth-service"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    // 验证凭据
    if (!verifyCredentials(username, password)) {
      return NextResponse.json({ success: false, message: "用户名或密码不正确" }, { status: 401 })
    }

    // 设置认证 Cookie
    setAuthCookie()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "登录过程中发生错误" }, { status: 500 })
  }
}
