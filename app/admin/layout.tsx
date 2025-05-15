"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Home, FileText, Settings, LogOut, Loader2, BookOpen, Package } from "lucide-react"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
      alert("Failed to logout. Please try again.")
    } finally {
      setIsLoggingOut(false)
    }
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Admin Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/admin" className="text-xl font-bold">
              MZG Tools Admin
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Home className="mr-1 h-4 w-4" />
              View Site
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              {isLoggingOut ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <LogOut className="mr-1 h-4 w-4" />}
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Admin Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-gray-50">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className={`flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive("/admin") &&
                    !isActive("/admin/blog") &&
                    !isActive("/admin/quote-requests") &&
                    !isActive("/admin/settings") &&
                    !isActive("/admin/products")
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                >
                  <Home className="mr-2 h-5 w-5" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/blog"
                  className={`flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive("/admin/blog") ? "bg-gray-200 font-medium" : ""
                  }`}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/products"
                  className={`flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive("/admin/products") ? "bg-gray-200 font-medium" : ""
                  }`}
                >
                  <Package className="mr-2 h-5 w-5" />
                  产品管理
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/quote-requests"
                  className={`flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive("/admin/quote-requests") ? "bg-gray-200 font-medium" : ""
                  }`}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Quote Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/settings"
                  className={`flex items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive("/admin/settings") ? "bg-gray-200 font-medium" : ""
                  }`}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white">{children}</main>
      </div>
    </div>
  )
}
