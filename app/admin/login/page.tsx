"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // 直接在客户端进行简单验证
      if (username === "admin" && password === "mzgtools2024") {
        console.log("登录凭据验证成功")

        // 设置本地存储标记已登录状态
        localStorage.setItem("mzg-admin-auth", "true")

        // 重定向到管理页面
        console.log("重定向到管理页面")
        router.push("/admin/simple-dashboard")
      } else {
        console.log("登录凭据验证失败")
        setError("用户名或密码不正确")
      }
    } catch (err) {
      console.error("登录错误:", err)
      setError("登录过程中发生错误，请重试")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
        <div className="mb-6 flex flex-col items-center justify-center">
          <Image src="/images/mzg-logo.png" alt="MZG Tools" width={100} height={40} className="mb-4 h-auto" />
          <h1 className="text-2xl font-bold">管理系统</h1>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="mb-1 block font-medium">
              用户名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="请输入用户名"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block font-medium">
              密码
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="请输入密码"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-blue-700 py-2 font-medium text-white hover:bg-blue-800 disabled:bg-blue-400"
          >
            {isLoading ? "登录中..." : "登录"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            默认用户名: <strong>admin</strong> | 默认密码: <strong>mzgtools2024</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
