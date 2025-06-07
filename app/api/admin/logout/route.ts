import { NextResponse } from "next/server"
import { clearAuthCookie } from "@/lib/auth-service"

export async function POST() {
  try {
    // 清除认证 Cookie
    clearAuthCookie()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ success: false, message: "登出过程中发生错误" }, { status: 500 })
  }
}
