import { notFound } from "next/navigation"
import { ProductForm } from "@/components/admin/product-form"
import { getProductById } from "@/app/actions/product-actions"

interface ProductEditPageProps {
  params: {
    id: string
  }
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">编辑产品</h1>
      <ProductForm product={product} isEdit={true} />
    </div>
  )
}
