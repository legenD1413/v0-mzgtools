import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Settings, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllQuoteRequests } from "@/app/actions/quote-actions"
import { protectRoute } from "@/lib/auth-service"

export const metadata: Metadata = {
  title: "Admin Dashboard | MZG Tools",
  description: "Admin dashboard for MZG Tools website",
}

export default async function AdminDashboard() {
  // 保护路由
  protectRoute()

  const quoteRequests = await getAllQuoteRequests()

  // 计算不同状态的请求数量
  const newRequests = quoteRequests.filter((req) => req.status === "new").length
  const contactedRequests = quoteRequests.filter((req) => req.status === "contacted").length
  const completedRequests = quoteRequests.filter((req) => req.status === "completed").length

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Quote Requests</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quoteRequests.length}</div>
            <p className="text-xs text-gray-500">
              {newRequests} new, {contactedRequests} contacted, {completedRequests} completed
            </p>
            <div className="mt-4">
              <Link href="/admin/quote-requests" className="text-sm text-blue-600 hover:underline">
                View all requests
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-gray-500">Admin users with access</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Settings</CardTitle>
            <Settings className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-sm">Configure system settings and preferences</p>
            <div className="mt-4">
              <Link href="/admin/settings" className="text-sm text-blue-600 hover:underline">
                Manage settings
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
