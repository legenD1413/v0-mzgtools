import { NextResponse } from "next/server"
import { sql } from "@/lib/database"

export async function GET() {
  try {
    // 测试数据库连接
    console.log("Testing database connection...")
    
    // 检查表是否存在
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'faqs'
      );
    `
    
    console.log("Table exists result:", tableExists)
    
    if (!tableExists[0]?.exists) {
      return NextResponse.json({
        status: "error",
        message: "FAQ表不存在",
        details: "需要先初始化数据库"
      })
    }
    
    // 检查表结构
    const tableStructure = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'faqs'
      ORDER BY ordinal_position;
    `
    
    console.log("Table structure:", tableStructure)
    
    // 检查是否有数据
    const rowCount = await sql`SELECT COUNT(*) as count FROM faqs`
    console.log("Row count:", rowCount)
    
    return NextResponse.json({
      status: "success",
      tableExists: tableExists[0]?.exists,
      tableStructure,
      rowCount: rowCount[0]?.count || 0,
      message: "数据库连接正常"
    })
    
  } catch (error) {
    console.error("Database test failed:", error)
    return NextResponse.json({
      status: "error",
      message: "数据库连接失败",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 