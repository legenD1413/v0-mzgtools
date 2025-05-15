import type { Metadata } from "next"
import { getAllQuoteRequests } from "@/app/actions/quote-actions"
import QuoteRequestsTable from "@/components/admin/quote-requests-table"
import { protectRoute } from "@/lib/auth-service"

export const metadata: Metadata = {
  title: "Quote Requests | Admin Dashboard",
  description: "Manage custom quote requests",
}

export default async function QuoteRequestsPage() {
  // 保护路由
  protectRoute()

  const quoteRequests = await getAllQuoteRequests()

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Custom Quote Requests</h1>

      {quoteRequests.length === 0 ? (
        <div className="rounded-md border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">No quote requests found.</p>
        </div>
      ) : (
        <QuoteRequestsTable requests={quoteRequests} />
      )}
    </div>
  )
}
