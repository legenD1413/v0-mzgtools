import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

// 数据文件路径
const DATA_FILE_PATH = path.join(process.cwd(), "data", "quote-requests.json")

export async function GET() {
  try {
    console.log("API: 尝试读取表单数据")

    // 检查文件是否存在
    try {
      await fs.access(DATA_FILE_PATH)
    } catch (error) {
      console.log("API: 数据文件不存在，返回空数组")
      return NextResponse.json({ requests: [] })
    }

    // 读取数据文件
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8")
    console.log("API: 成功读取数据文件")

    // 解析 JSON 数据
    const requests = JSON.parse(data)
    console.log(`API: 解析了 ${requests.length} 条记录`)

    return NextResponse.json({ requests })
  } catch (error) {
    console.error("API 错误:", error)
    return NextResponse.json({ error: "获取表单数据失败" }, { status: 500 })
  }
}
