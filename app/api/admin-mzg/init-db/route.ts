import { NextResponse } from "next/server"
import { initializeTables, testConnection } from "@/lib/database"

export async function POST() {
  try {
    // 测试数据库连接
    const connectionTest = await testConnection()
    if (!connectionTest) {
      return NextResponse.json({ 
        success: false, 
        message: "数据库连接失败" 
      }, { status: 500 })
    }

    // 初始化表结构
    await initializeTables()

    return NextResponse.json({ 
      success: true, 
      message: "数据库初始化成功" 
    })
  } catch (error) {
    console.error("数据库初始化错误:", error)
    return NextResponse.json({ 
      success: false, 
      message: "数据库初始化失败: " + (error instanceof Error ? error.message : String(error)) 
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    const connectionTest = await testConnection()
    
    return NextResponse.json({ 
      success: connectionTest, 
      message: connectionTest ? "数据库连接正常" : "数据库连接失败" 
    })
  } catch (error) {
    console.error("数据库连接测试错误:", error)
    return NextResponse.json({ 
      success: false, 
      message: "数据库连接测试失败: " + (error instanceof Error ? error.message : String(error)) 
    }, { status: 500 })
  }
} 