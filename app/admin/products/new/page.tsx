import { ProductForm } from "@/components/admin/product-form"

export const metadata = {
  title: "添加产品 - MZG Tools 管理后台",
}

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">添加产品</h1>
        <p className="text-muted-foreground">创建新产品并添加产品信息、图片和技术图纸</p>
      </div>

      <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
        <ProductForm />
      </div>
    </div>
  )
}
