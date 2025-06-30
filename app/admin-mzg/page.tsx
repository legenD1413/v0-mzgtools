"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Package, FileText, Users, Settings, Database, Images, HelpCircle } from "lucide-react"

interface AdminUser {
  id: number
  username: string
  email?: string
  role: string
  isActive: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 检查用户认证状态
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin-mzg/check-auth')
        if (response.ok) {
          const userData = await response.json()
          setUser(userData.user)
        } else {
          router.push('/admin-mzg/login')
        }
      } catch (error) {
        console.error('认证检查失败:', error)
        router.push('/admin-mzg/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div className="container mx-auto py-10">加载中...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">MZG 管理系统</h1>
        <p className="text-gray-600 mt-2">欢迎回来，{user.username}！</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 产品管理 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">产品管理</CardTitle>
            <Package className="h-6 w-6 text-red-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">管理产品分类、系列和产品信息</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/products" className="block text-sm text-blue-600 hover:underline">
                管理所有产品
              </Link>
              <Link href="/admin-mzg/products/categories" className="block text-sm text-blue-600 hover:underline">
                产品分类管理
              </Link>
              <Link href="/admin-mzg/products/series" className="block text-sm text-blue-600 hover:underline">
                产品系列管理
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 产品展示图 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">产品展示图</CardTitle>
            <Images className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">管理各页面的产品展示图片</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/product-gallery" className="block text-sm text-blue-600 hover:underline">
                图片管理
              </Link>
              <Link href="/admin-mzg/product-gallery?view=grid" className="block text-sm text-blue-600 hover:underline">
                网格视图
              </Link>
              <Link href="/admin-mzg/product-gallery?view=list" className="block text-sm text-blue-600 hover:underline">
                列表视图
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 报价请求 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">报价请求</CardTitle>
            <FileText className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">查看和处理客户报价请求</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/quotes" className="block text-sm text-blue-600 hover:underline">
                查看所有请求
              </Link>
              <Link href="/admin-mzg/quotes?status=new" className="block text-sm text-blue-600 hover:underline">
                待处理请求
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* FAQ管理 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">FAQ管理</CardTitle>
            <HelpCircle className="h-6 w-6 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">管理各页面的常见问题和答案</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/faqs" className="block text-sm text-blue-600 hover:underline">
                管理所有FAQ
              </Link>
              <button 
                onClick={async () => {
                  try {
                    const response = await fetch('/api/admin-mzg/init-faqs', { method: 'POST' })
                    const data = await response.json()
                    if (response.ok) {
                      alert(`FAQ初始化成功！${data.message}`)
                    } else {
                      alert(`初始化失败: ${data.error}`)
                    }
                  } catch (error) {
                    alert('初始化失败，请检查网络连接')
                  }
                }}
                className="block text-sm text-green-600 hover:underline text-left"
              >
                初始化示例FAQ数据
              </button>
              <Link href="/admin-mzg/faqs?view=categories" className="block text-sm text-blue-600 hover:underline">
                按分类查看
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 用户管理 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">用户管理</CardTitle>
            <Users className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">管理前台用户会员信息和后台管理员账户</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/users" className="block text-sm text-blue-600 hover:underline">
                前台用户管理
              </Link>
              <Link href="/admin-mzg/manage-users" className="block text-sm text-blue-600 hover:underline">
                管理员账户管理
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 系统设置 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">系统设置</CardTitle>
            <Settings className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">配置系统参数和偏好设置</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/settings" className="block text-sm text-blue-600 hover:underline">
                通用设置
              </Link>
              <Link href="/admin-mzg/settings/appearance" className="block text-sm text-blue-600 hover:underline">
                外观设置
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 数据库管理 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">数据库管理</CardTitle>
            <Database className="h-6 w-6 text-orange-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">数据库状态和维护工具</p>
            <div className="space-y-2">
              <Link href="/admin-mzg/database" className="block text-sm text-blue-600 hover:underline">
                数据库状态
              </Link>
              <Link href="/admin-mzg/database/backup" className="block text-sm text-blue-600 hover:underline">
                数据备份
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 系统信息 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium">系统信息</CardTitle>
            <div className="h-6 w-6 rounded-full bg-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">当前用户:</span>
                <span className="font-medium">{user.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">用户角色:</span>
                <span className="font-medium">{user.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">系统版本:</span>
                <span className="font-medium">v1.0.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 