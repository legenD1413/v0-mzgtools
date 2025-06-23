import type { Metadata } from "next"
import { getCurrentUser } from "@/lib/auth-mzg"
import AdminNavigation from "@/components/admin-mzg/admin-navigation"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "MZG 管理系统",
  description: "MZG Tools 管理后台",
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 获取当前用户信息（如果已登录）
  const user = await getCurrentUser()

  return (
    <div className="min-h-screen bg-gray-50">
      {user && <AdminNavigation user={user} />}
      <main className={user ? "ml-64" : ""}>
        {children}
      </main>
      <Toaster />
    </div>
  )
} 