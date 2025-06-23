"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, Database, CheckCircle } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dbStatus, setDbStatus] = useState<"unknown" | "checking" | "success" | "error">("unknown")
  const router = useRouter()

  // 检查数据库连接状态
  const checkDatabaseStatus = async () => {
    setDbStatus("checking")
    try {
      const response = await fetch("/api/admin-mzg/init-db")
      const data = await response.json()
      
      if (data.success) {
        setDbStatus("success")
      } else {
        setDbStatus("error")
      }
    } catch (error) {
      console.error("数据库连接检查失败:", error)
      setDbStatus("error")
    }
  }

  // 初始化数据库
  const initializeDatabase = async () => {
    setDbStatus("checking")
    try {
      const response = await fetch("/api/admin-mzg/init-db", {
        method: "POST"
      })
      const data = await response.json()
      
      if (data.success) {
        setDbStatus("success")
        alert("数据库初始化成功！")
      } else {
        setDbStatus("error")
        alert("数据库初始化失败: " + data.message)
      }
    } catch (error) {
      console.error("数据库初始化失败:", error)
      setDbStatus("error")
      alert("数据库初始化失败")
    }
  }

  // 处理登录
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/admin-mzg/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (data.success) {
        console.log("登录成功")
        router.push("/admin-mzg")
      } else {
        console.log("登录失败:", data.message)
        setError(data.message || "登录失败")
      }
    } catch (err) {
      console.error("登录错误:", err)
      setError("登录过程中发生错误，请重试")
    } finally {
      setIsLoading(false)
    }
  }

  // 在组件挂载时检查数据库状态
  React.useEffect(() => {
    checkDatabaseStatus()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4">
        {/* 数据库状态卡片 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Database className="mr-2 h-5 w-5" />
              数据库状态
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {dbStatus === "checking" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {dbStatus === "success" && <CheckCircle className="mr-2 h-4 w-4 text-green-600" />}
                {dbStatus === "error" && <div className="mr-2 h-4 w-4 rounded-full bg-red-600" />}
                <span className="text-sm">
                  {dbStatus === "checking" && "检查中..."}
                  {dbStatus === "success" && "连接正常"}
                  {dbStatus === "error" && "连接失败"}
                  {dbStatus === "unknown" && "未知状态"}
                </span>
              </div>
              {(dbStatus === "error" || dbStatus === "unknown") && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={initializeDatabase}
                  disabled={dbStatus === "checking"}
                >
                  初始化数据库
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 登录卡片 */}
        <Card>
          <CardHeader>
            <div className="flex flex-col items-center justify-center">
              <Image 
                src="/images/mzg-logo.png" 
                alt="MZG Tools" 
                width={100} 
                height={40} 
                className="mb-4 h-auto" 
              />
              <CardTitle className="text-2xl">MZG 管理系统</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-4 text-red-600">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">用户名</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="请输入用户名"
                  required
                  disabled={isLoading || dbStatus !== "success"}
                />
              </div>

              <div>
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  required
                  disabled={isLoading || dbStatus !== "success"}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || dbStatus !== "success"}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    登录中...
                  </>
                ) : (
                  "登录"
                )}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                默认用户名: <strong>admin</strong> | 默认密码: <strong>mzgtools2024</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 