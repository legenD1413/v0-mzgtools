import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TemplatesIndexPage() {
  const templates = [
    {
      name: "简约商业模板",
      path: "/productdetails/templates/minimalist",
      description: "简洁优雅的设计，黑白配色方案，清晰的信息层次结构，适合各类产品的通用展示。",
      image: "/placeholder-1b6s7.png",
    },
    {
      name: "现代图像焦点模板",
      path: "/productdetails/templates/modern-image",
      description: "强调产品的视觉展示，大型英雄区域，突出显示产品图库，适合需要强调产品外观的高端产品。",
      image: "/placeholder-foues.png",
    },
    {
      name: "技术规格焦点模板",
      path: "/productdetails/templates/technical-specs",
      description: "专注于技术细节和规格，使用选项卡组织不同类型的产品信息，适合工业工具和专业设备。",
      image: "/placeholder-rp289.png",
    },
    {
      name: "产品比较模板",
      path: "/productdetails/templates/comparison",
      description: "支持产品比较功能，以表格形式展示产品规格对比，包含相关产品推荐区域，适合需要对比选择的产品系列。",
      image: "/placeholder-spqfd.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">产品详情页模板</h1>
      <p className="text-gray-600 mb-8">选择适合您产品的详情页模板</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((template, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-gray-100">
              <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{template.name}</h2>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <p className="text-sm font-mono text-gray-700">{template.path}</p>
              </div>
              <Link href={template.path}>
                <Button className="w-full">预览模板</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">如何使用模板</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>在产品编辑页面找到"产品详情参照样板地址(路径或URL)"字段</li>
          <li>
            输入您想使用的模板路径，例如：
            <code className="bg-gray-100 px-2 py-1 rounded">/productdetails/templates/minimalist</code>
          </li>
          <li>保存产品信息</li>
          <li>在产品列表页面点击"Generate Detail Page"按钮</li>
          <li>系统将使用选定的模板生成产品详情页</li>
        </ol>
      </div>
    </div>
  )
}
