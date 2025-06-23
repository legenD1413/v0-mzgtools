import { NextRequest, NextResponse } from "next/server"
import { login } from "@/lib/auth-mzg"
import { initializeTables } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    // 确保数据库表已初始化
    await initializeTables()

    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ 
        success: false, 
        message: "用户名和密码不能为空" 
      }, { status: 400 })
    }

    const result = await login(username, password)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        user: result.user
      })
    } else {
      return NextResponse.json({
        success: false,
        message: result.message
      }, { status: 401 })
    }
  } catch (error) {
    console.error("登录API错误:", error)
    return NextResponse.json({ 
      success: false, 
      message: "登录过程中发生错误" 
    }, { status: 500 })
  }
} 