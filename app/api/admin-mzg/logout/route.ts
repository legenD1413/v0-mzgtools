import { NextResponse } from "next/server"
import { logout } from "@/lib/auth-mzg"

export async function POST() {
  try {
    await logout()
    
    return NextResponse.json({ 
      success: true, 
      message: "已成功退出登录" 
    })
  } catch (error) {
    console.error("退出登录API错误:", error)
    return NextResponse.json({ 
      success: false, 
      message: "退出登录过程中发生错误" 
    }, { status: 500 })
  }
} 