import Link from "next/link"
import { Plus } from "lucide-react"
import { ProductsTable } from "@/components/admin/products-table"
import { getAllProducts } from "@/app/actions/product-actions"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">产品管理</h1>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          添加产品
        </Link>
      </div>

      <ProductsTable products={products} />
    </div>
  )
}
