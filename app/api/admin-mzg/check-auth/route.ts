import { NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth-mzg"

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    
    if (!user) {
      return NextResponse.json({ error: "未授权访问" }, { status: 401 })
    }

    return NextResponse.json({ 
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: user.isActive
      }
    })
  } catch (error) {
    console.error("认证检查失败:", error)
    return NextResponse.json({ error: "认证检查失败" }, { status: 500 })
  }
} 