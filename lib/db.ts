import { neon } from "@neondatabase/serverless"

// 创建数据库连接
export const sql = neon(process.env.DATABASE_URL!)

// 辅助函数：将蛇形命名转换为驼峰命名
export function snakeToCamel(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    // 将蛇形命名的键转换为驼峰命名
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    result[camelKey] = obj[key]
  }

  return result
}

// 辅助函数：将驼峰命名转换为蛇形命名
export function camelToSnake(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    // 将驼峰命名的键转换为蛇形命名
    const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    result[snakeKey] = obj[key]
  }

  return result
}
