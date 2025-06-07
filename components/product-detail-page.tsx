"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"
import { MarkdownTable } from "@/components/markdown-table"

interface ProductDetailPageProps {
  product: Product
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  // 确保产品图片数组存在
  const productImages = product.images || []

  const [activeImage, setActiveImage] = useState<string>(
    productImages.find((img) => img.isPrimary)?.url ||
      product.modelImageUrl ||
      (productImages.length > 0 ? productImages[0].url : "/placeholder.svg"),
  )

  // Convert mainCategory and subCategory to proper format for display and URLs
  const mainCategory = (product.mainCategory || product.main_category || "").toString()
  const subCategory = (product.subCategory || product.sub_category || "").toString()
  const productCode = (product.productCode || product.product_code || "").toString()

  // Format performance features as an array if it exists
  const performanceFeatures = product.performanceFeatures || product.performance_features
  const featuresArray = performanceFeatures
    ? performanceFeatures
        .split("\n")
        .map((f) => f.trim())
        .filter((f) => f.length > 0)
    : []

  // 确保技术图数组存在
  const technicalDrawings = product.technicalDrawings || []

  // Breadcrumb path
  const breadcrumbPath = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/standard-tools" },
    { name: mainCategory, path: `/standard-tools/${mainCategory.toLowerCase()}` },
    {
      name: subCategory,
      path: `/standard-tools/${mainCategory.toLowerCase()}/${subCategory.toLowerCase().replace(/\s+/g, "-")}`,
    },
  ]

  // Function to sort parameters in the desired display order
  const sortedParameters = () => {
    if (!product.parameters || product.parameters.length === 0) return []

    const orderMap = {
      D: 1,
      df: 2,
      H: 3,
      d: 4,
      l1: 5,
      L: 6,
      T: 7,
      Series: 8,
      Page: 9,
    }

    return [...product.parameters].sort((a, b) => {
      const aName = a.name.split(":")[0].trim()
      const bName = b.name.split(":")[0].trim()
      return (orderMap[aName] || 100) - (orderMap[bName] || 100)
    })
  }

  return (
    <div className="bg-white">
      {/* Large Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="flex items-center text-sm mb-4">
            {breadcrumbPath.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
                {index === breadcrumbPath.length - 1 ? (
                  <span className="text-gray-300">{item.name}</span>
                ) : (
                  <Link href={item.path} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-300 mb-6">Product Code: {productCode}</p>
              <p className="text-lg md:text-xl max-w-3xl mb-8">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Request Quote</Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Download Technical Data
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Specifications</h3>
                <ul className="space-y-2">
                  {product.parameters?.some((p) => p.name.includes("D:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">D:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("D:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("df:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">df:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("df:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("H:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">H:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("H:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("d:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">d:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("d:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("l1:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">l1:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("l1:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("L:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">L:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("L:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.parameters?.some((p) => p.name.includes("T:")) && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">T:</span>
                      <span className="font-medium">
                        {product.parameters.find((p) => p.name.includes("T:"))?.value}
                      </span>
                    </li>
                  )}
                  {product.series && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Series:</span>
                      <span className="font-medium">{product.series}</span>
                    </li>
                  )}
                  {product.productCode && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Page:</span>
                      <span className="font-medium">{product.productCode}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Product Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {featuresArray.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {featuresArray.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-1 text-green-600">
                            <Check className="h-4 w-4" />
                          </div>
                          <p className="text-sm">{feature.replace(/^-\s*/, "")}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Product Images</h4>
                <div className="grid grid-cols-5 gap-2">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-16 bg-white rounded cursor-pointer border-2 ${
                        activeImage === image.url ? "border-red-600" : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(image.url)}
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt || `${product.name} View ${index + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ))}
                  {product.modelImageUrl && !productImages.some((img) => img.url === product.modelImageUrl) && (
                    <div
                      className={`relative h-16 bg-white rounded cursor-pointer border-2 ${
                        activeImage === product.modelImageUrl ? "border-red-600" : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(product.modelImageUrl)}
                    >
                      <Image
                        src={product.modelImageUrl || "/placeholder.svg"}
                        alt={`${product.name} Model Image`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        {(product.application || product.application) && (
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line">{product.application || product.application}</div>
            </div>
          </div>
        )}

        {/* Technical Parameters */}
        {product.parameters && product.parameters.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Parameters</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-3 px-4 text-left">Parameter</th>
                    <th className="py-3 px-4 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedParameters().map((param, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{param.name}</td>
                      <td className="py-3 px-4 border-b">{param.value}</td>
                    </tr>
                  ))}
                  {product.series && (
                    <tr className={product.parameters.length % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">Series</td>
                      <td className="py-3 px-4 border-b">{product.series}</td>
                    </tr>
                  )}
                  {product.productCode && (
                    <tr
                      className={
                        (product.parameters.length + (product.series ? 1 : 0)) % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="py-3 px-4 border-b">Page</td>
                      <td className="py-3 px-4 border-b">{product.productCode}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technical Information */}
        {(product.technicalInfo || product.technical_info) && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Information</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none">
                {/* Use the MarkdownTable component to render the technical information */}
                <MarkdownTable markdown={product.technicalInfo || product.technical_info || ""} />
              </div>
            </div>
          </div>
        )}

        {/* Technical Drawings */}
        {technicalDrawings.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Drawings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalDrawings.map((drawing, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="relative h-48 bg-white">
                    <Image
                      src={drawing.url || "/placeholder.svg"}
                      alt={drawing.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{drawing.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{drawing.fileType.toUpperCase()}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" /> Download Drawing
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Need More Information?</h2>
              <p className="text-gray-300">
                Our technical experts can help you select the right product for your specific application.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Request Quote</Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Share this product:</span>
            <Button variant="outline" size="sm" className="rounded-full w-9 h-9 p-0">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
