"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Package, 
  FileText, 
  Users, 
  Settings, 
  Database, 
  LogOut, 
  Loader2,
  Shield,
  Images,
  HelpCircle
} from "lucide-react"
import { AdminUser } from "@/lib/auth-mzg"

interface AdminNavigationProps {
  user: AdminUser
}

export default function AdminNavigation({ user }: AdminNavigationProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const response = await fetch("/api/admin-mzg/logout", { 
        method: "POST" 
      })
      
      if (response.ok) {
        router.push("/admin-mzg/login")
        router.refresh()
      } else {
        console.error("退出登录失败")
        alert("退出登录失败，请重试")
      }
    } catch (error) {
      console.error("退出登录错误:", error)
      alert("退出登录失败，请重试")
    } finally {
      setIsLoggingOut(false)
    }
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navItems = [
    {
      name: "仪表板",
      href: "/admin-mzg",
      icon: Home,
      exact: true
    },
    {
      name: "产品管理",
      href: "/admin-mzg/products",
      icon: Package
    },
    {
      name: "产品展示图",
      href: "/admin-mzg/product-gallery",
      icon: Images
    },
    {
      name: "报价请求",
      href: "/admin-mzg/quotes",
      icon: FileText
    },
    {
      name: "FAQ管理",
      href: "/admin-mzg/faqs",
      icon: HelpCircle
    },
    {
      name: "用户管理",
      href: "/admin-mzg/users",
      icon: Users
    },
    {
      name: "管理员账户",
      href: "/admin-mzg/manage-users",
      icon: Shield
    },
    {
      name: "数据库管理",
      href: "/admin-mzg/database",
      icon: Database
    },
    {
      name: "系统设置",
      href: "/admin-mzg/settings",
      icon: Settings
    }
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="flex flex-col h-full">
        {/* 头部 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Image 
              src="/images/mzg-logo.png" 
              alt="MZG Tools" 
              width={40} 
              height={16} 
              className="mr-3" 
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">MZG 管理</h2>
              <p className="text-sm text-gray-600">管理系统</p>
            </div>
          </div>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = item.exact 
                ? pathname === item.href 
                : isActive(item.href)
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${active ? "text-red-600" : "text-gray-500"}`} />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* 用户信息和退出 */}
        <div className="p-4 border-t border-gray-200">
          <div className="mb-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{user.username}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            variant="outline"
            className="w-full justify-start"
          >
            {isLoggingOut ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <LogOut className="mr-2 h-4 w-4" />
            )}
            {isLoggingOut ? "退出中..." : "退出登录"}
          </Button>
        </div>
      </div>
    </div>
  )
} 