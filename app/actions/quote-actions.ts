"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"

// 定义表单数据验证模式
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  requirements: z.string().min(10, { message: "Please provide more details about your requirements." }),
  company: z.string().optional(),
  phone: z.string().optional(),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

// 定义存储的报价请求类型
export type QuoteRequest = QuoteFormData & {
  id: string
  createdAt: string
  status: "new" | "viewed" | "contacted" | "completed" | "archived"
}

// 数据存储路径
const DATA_FILE_PATH = path.join(process.cwd(), "data", "quote-requests.json")

// 确保数据目录存在
async function ensureDataDirectory() {
  const dir = path.dirname(DATA_FILE_PATH)
  try {
    await fs.access(dir)
  } catch (error) {
    console.log("创建数据目录:", dir)
    await fs.mkdir(dir, { recursive: true })
  }
}

// 读取所有报价请求
export async function getAllQuoteRequests(): Promise<QuoteRequest[]> {
  try {
    await ensureDataDirectory()

    try {
      const data = await fs.readFile(DATA_FILE_PATH, "utf-8")
      return JSON.parse(data)
    } catch (error) {
      // 如果文件不存在或为空，返回空数组
      console.log("读取表单数据失败，返回空数组:", error)
      return []
    }
  } catch (error) {
    console.error("Error reading quote requests:", error)
    throw new Error("Failed to read quote requests")
  }
}

// 保存报价请求
export async function saveQuoteRequest(formData: QuoteFormData): Promise<QuoteRequest> {
  try {
    console.log("保存表单数据:", formData)

    // 验证表单数据
    const validatedData = quoteFormSchema.parse(formData)

    // 获取现有请求
    const existingRequests = await getAllQuoteRequests()

    // 创建新请求
    const newRequest: QuoteRequest = {
      ...validatedData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: "new",
    }

    console.log("创建新请求:", newRequest)

    // 添加到列表并保存
    const updatedRequests = [newRequest, ...existingRequests]
    await ensureDataDirectory()

    console.log(`保存 ${updatedRequests.length} 条记录到文件:`, DATA_FILE_PATH)
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updatedRequests, null, 2))

    console.log("表单数据保存成功")
    return newRequest
  } catch (error) {
    console.error("Error saving quote request:", error)
    if (error instanceof z.ZodError) {
      throw new Error("Invalid form data")
    }
    throw new Error("Failed to save quote request")
  }
}

// 更新报价请求状态
export async function updateQuoteRequestStatus(
  id: string,
  status: QuoteRequest["status"],
): Promise<QuoteRequest | null> {
  try {
    const existingRequests = await getAllQuoteRequests()
    const updatedRequests = existingRequests.map((request) => (request.id === id ? { ...request, status } : request))

    await ensureDataDirectory()
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updatedRequests, null, 2))

    const updatedRequest = updatedRequests.find((request) => request.id === id)
    return updatedRequest || null
  } catch (error) {
    console.error("Error updating quote request status:", error)
    return null
  }
}

// 删除报价请求
export async function deleteQuoteRequest(id: string): Promise<boolean> {
  try {
    const existingRequests = await getAllQuoteRequests()
    const updatedRequests = existingRequests.filter((request) => request.id !== id)

    await ensureDataDirectory()
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updatedRequests, null, 2))

    return true
  } catch (error) {
    console.error("Error deleting quote request:", error)
    return false
  }
}

// 生成唯一ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
