import type { Metadata } from "next"
import { protectRoute } from "@/lib/auth-service"

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Configure system settings and preferences",
}

export default function SettingsPage() {
  // 保护路由
  protectRoute()

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <div className="space-y-8">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">系统设置</h2>
          <p className="text-gray-500">目前没有可用的设置选项。</p>
        </div>
      </div>
    </div>
  )
}
