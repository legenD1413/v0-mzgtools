"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define product type
interface ProductParameter {
  name: string
  value: string
}

interface ProductImage {
  url: string
  alt: string
  isPrimary: boolean
}

interface TechnicalDrawing {
  url: string
  title: string
  fileType: string
}

interface ProductTemplateProps {
  product: {
    id: string
    name: string
    description: string
    productCode: string
    mainCategory: string
    subCategory: string
    parameters: ProductParameter[]
    images: ProductImage[]
    technicalDrawings: TechnicalDrawing[]
    application?: string
    performanceFeatures?: string
    material?: string
    technicalInfo?: string
    series?: string
  }
  relatedProducts?: Array<{
    id: string
    name: string
    image: string
    code: string
    mainFeature: string
    price?: string
  }>
}

export default function ProductDetailsTemplate({ product, relatedProducts = [] }: ProductTemplateProps) {
  const [activeImage, setActiveImage] = useState<string>(
    product.images.find((img) => img.isPrimary)?.url || product.images[0]?.url || "/placeholder.svg",
  )

  // Group parameters by type for better organization
  const dimensions = product.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes("diameter") ||
      p.name.toLowerCase().includes("length") ||
      p.name.toLowerCase().includes("width") ||
      p.name.toLowerCase().includes("height"),
  )

  const performance = product.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes("speed") ||
      p.name.toLowerCase().includes("feed") ||
      p.name.toLowerCase().includes("cutting") ||
      p.name.toLowerCase().includes("power"),
  )

  const specifications = product.parameters.filter((p) => !dimensions.includes(p) && !performance.includes(p))

  // Breadcrumb path based on categories
  const breadcrumbPath = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.mainCategory, path: `/products/${product.mainCategory.toLowerCase()}` },
    {
      name: product.subCategory,
      path: `/products/${product.mainCategory.toLowerCase()}/${product.subCategory.toLowerCase()}`,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={product.images.find((img) => !img.isPrimary)?.url || activeImage || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover opacity-40"
            priority
          />
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
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span>{product.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-300 mb-6">Product Code: {product.productCode}</p>
          <p className="text-lg md:text-xl max-w-3xl mb-8">{product.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Request a Quote</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Download Technical Data
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Description */}
          <div className="lg:w-2/3">
            {/* Product Gallery */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">
                    Product Code: <span className="font-semibold">{product.productCode}</span>
                  </p>
                  <p className="mb-4">{product.description}</p>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-16 bg-gray-100 rounded cursor-pointer border-2 ${activeImage === image.url ? "border-red-600" : "border-transparent"}`}
                      onClick={() => setActiveImage(image.url)}
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt || `${product.name} view ${index + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features */}
            {product.performanceFeatures && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.performanceFeatures.split("\n").map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-green-600">
                          <Check className="h-5 w-5" />
                        </div>
                        <p>{feature.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Technical Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>

              {dimensions.length > 0 && (
                <>
                  <h4 className="font-bold mb-2">Dimensions</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Parameter</th>
                          <th className="border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dimensions.map((param, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2">{param.name}</td>
                            <td className="border px-4 py-2">{param.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {specifications.length > 0 && (
                <>
                  <h4 className="font-bold mb-2">Specifications</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Parameter</th>
                          <th className="border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.map((param, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2">{param.name}</td>
                            <td className="border px-4 py-2">{param.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {performance.length > 0 && (
                <>
                  <h4 className="font-bold mb-2">Performance Parameters</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Parameter</th>
                          <th className="border px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {performance.map((param, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2">{param.name}</td>
                            <td className="border px-4 py-2">{param.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>

            {/* Technical Drawings */}
            {product.technicalDrawings && product.technicalDrawings.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technical Drawings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.technicalDrawings.map((drawing, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="relative h-48 bg-gray-100">
                        <Image
                          src={drawing.url || "/placeholder.svg"}
                          alt={drawing.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold">{drawing.title}</h4>
                        <p className="text-sm text-gray-600">{drawing.fileType}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Information */}
            {product.application && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="whitespace-pre-line">{product.application}</p>
                </div>
              </div>
            )}

            {/* Technical Information */}
            {product.technicalInfo && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technical Information</h3>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line">{product.technicalInfo}</div>
                </div>
              </div>
            )}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Related Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedProducts.map((relatedProduct) => (
                    <div
                      key={relatedProduct.id}
                      className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-40 bg-gray-100">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors">
                          {relatedProduct.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">Code: {relatedProduct.code}</p>
                        <p className="text-sm mb-3">{relatedProduct.mainFeature}</p>
                        <div className="flex justify-between items-center">
                          {relatedProduct.price && (
                            <span className="font-bold text-red-600">{relatedProduct.price}</span>
                          )}
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Product Information</h3>

              {/* Quick Specs */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Quick Specifications</h4>
                <ul className="space-y-2">
                  {product.parameters.slice(0, 5).map((param, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{param.name}:</span>
                      <span className="font-medium">{param.value}</span>
                    </li>
                  ))}
                </ul>
                {product.parameters.length > 5 && (
                  <p className="text-sm text-gray-500 mt-2">* See full specifications below</p>
                )}
              </div>

              {/* Material Information */}
              {product.material && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Material</h4>
                  <p className="text-sm">{product.material}</p>
                </div>
              )}

              {/* Series Information */}
              {product.series && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Series</h4>
                  <p className="text-sm">{product.series}</p>
                </div>
              )}

              <div className="bg-white p-4 rounded border mb-6">
                <h4 className="font-bold mb-2">Need Help Selecting?</h4>
                <p className="text-sm mb-4">
                  Our technical experts can help you choose the right product for your specific application.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Contact Us</Button>
              </div>

              <div className="bg-gray-800 text-white p-4 rounded">
                <h4 className="font-bold mb-2">Custom Solutions</h4>
                <p className="text-sm mb-4">
                  Need a specialized solution? We can design and manufacture custom tools to meet your specific
                  requirements.
                </p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  Request Custom Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
