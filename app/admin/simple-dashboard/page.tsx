"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface QuoteRequest {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  requirements: string
  createdAt: string
  status: string
}

export default function SimpleDashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([])
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // 检查是否已登录
    const isAuthenticated = localStorage.getItem("mzg-admin-auth") === "true"
    if (!isAuthenticated) {
      console.log("未登录，重定向到登录页面")
      router.push("/admin/login")
      return
    }

    // 获取表单数据
    async function fetchData() {
      try {
        console.log("获取表单数据")
        const response = await fetch("/api/admin/quote-requests")

        if (!response.ok) {
          throw new Error("获取数据失败")
        }

        const data = await response.json()
        console.log("获取到的表单数据:", data)
        setQuoteRequests(data.requests || [])
      } catch (err) {
        console.error("获取数据错误:", err)
        setError("无法加载表单数据，请刷新页面重试")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [router])

  function handleLogout() {
    localStorage.removeItem("mzg-admin-auth")
    router.push("/admin/login")
  }

  // 格式化日期
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("zh-CN")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center">
            <Image src="/images/mzg-logo.png" alt="MZG Tools" width={60} height={24} className="mr-3 h-auto" />
            <h1 className="text-2xl font-bold">表单提交管理</h1>
          </div>
          <button onClick={handleLogout} className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
            退出登录
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <p>加载中...</p>
          </div>
        ) : quoteRequests.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <p>暂无表单提交记录</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b p-4 text-left">提交时间</th>
                  <th className="border-b p-4 text-left">姓名</th>
                  <th className="border-b p-4 text-left">公司</th>
                  <th className="border-b p-4 text-left">邮箱</th>
                  <th className="border-b p-4 text-left">状态</th>
                  <th className="border-b p-4 text-left">操作</th>
                </tr>
              </thead>
              <tbody>
                {quoteRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="border-b p-4">{formatDate(request.createdAt)}</td>
                    <td className="border-b p-4">{request.name}</td>
                    <td className="border-b p-4">{request.company || "-"}</td>
                    <td className="border-b p-4">{request.email}</td>
                    <td className="border-b p-4">
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">{request.status}</span>
                    </td>
                    <td className="border-b p-4">
                      <button
                        onClick={() => alert("查看详情: " + request.id)}
                        className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                      >
                        查看
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
