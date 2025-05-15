"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define product types
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
  product?: {
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
    flute?: string
    hrc?: string
    modelImageUrl?: string
  }
}

// Sample product data
const sampleProduct = {
  id: "sample-1",
  name: "High Performance End Mill",
  description:
    "This high-performance end mill is suitable for precision machining of various materials. Made from premium carbide material, it offers excellent durability and cutting performance.",
  productCode: "2F45C",
  mainCategory: "MILLING",
  subCategory: "End Mills",
  parameters: [
    { name: "Diameter", value: "10mm" },
    { name: "Cutting Length", value: "30mm" },
    { name: "Overall Length", value: "75mm" },
    { name: "Number of Flutes", value: "4" },
    { name: "Helix Angle", value: "30°" },
    { name: "Material", value: "Carbide" },
  ],
  images: [
    { url: "/images/2F45C-JST.png", alt: "End Mill Front View", isPrimary: true },
    { url: "/placeholder-1b6s7.png", alt: "End Mill Side View", isPrimary: false },
    { url: "/placeholder-foues.png", alt: "End Mill Application", isPrimary: false },
  ],
  technicalDrawings: [
    { url: "/placeholder-rp289.png", title: "Technical Drawing", fileType: "PDF" },
    { url: "/placeholder-spqfd.png", title: "Dimension Drawing", fileType: "DWG" },
  ],
  application:
    "Suitable for precision milling of steel, stainless steel, cast iron, non-ferrous metals, and other materials.\nEspecially suitable for cavity machining, contour milling, chamfer milling, and other processes.",
  performanceFeatures:
    "- High-hardness carbide material for exceptional durability\n- Optimized cutting edge design ensures smooth cutting\n- Special coating treatment improves heat and wear resistance\n- Precision ground cutting edges guarantee machining accuracy",
  material: "Tungsten Carbide",
  technicalInfo:
    "Recommended cutting parameters:\n- Cutting speed: 80-120m/min\n- Feed rate: 0.05-0.1mm/tooth\n- Cutting depth: Maximum up to 0.5x diameter",
  series: "JST Series",
  flute: "4",
  hrc: "45-50",
  modelImageUrl: "/images/2F45C-JST.png",
}

export default function ModernImageTemplate({ product = sampleProduct }: ProductTemplateProps) {
  const [activeImage, setActiveImage] = useState<string>(
    product.images.find((img) => img.isPrimary)?.url ||
      product.modelImageUrl ||
      product.images[0]?.url ||
      "/placeholder.svg",
  )

  // Breadcrumb path
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
              <p className="text-xl text-gray-300 mb-6">Product Code: {product.productCode}</p>
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
                  {product.flute && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Flutes:</span>
                      <span className="font-medium">{product.flute}</span>
                    </li>
                  )}
                  {product.material && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Material:</span>
                      <span className="font-medium">{product.material}</span>
                    </li>
                  )}
                  {product.hrc && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Hardness (HRC):</span>
                      <span className="font-medium">{product.hrc}</span>
                    </li>
                  )}
                  {product.series && (
                    <li className="flex justify-between">
                      <span className="text-gray-300">Series:</span>
                      <span className="font-medium">{product.series}</span>
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
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {product.performanceFeatures && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.performanceFeatures.split("\n").map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-1 text-green-600">
                            <Check className="h-4 w-4" />
                          </div>
                          <p className="text-sm">{feature.trim()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Product Images</h4>
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-16 bg-gray-100 rounded cursor-pointer border-2 ${
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
                  {product.modelImageUrl && (
                    <div
                      className={`relative h-16 bg-gray-100 rounded cursor-pointer border-2 ${
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
        {product.application && (
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line">{product.application}</div>
            </div>
          </div>
        )}

        {/* Technical Parameters */}
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
                {product.parameters.map((param, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 border-b">{param.name}</td>
                    <td className="py-3 px-4 border-b">{param.value}</td>
                  </tr>
                ))}
                {product.parameters.length === 0 && (
                  <tr>
                    <td className="py-3 px-4 border-b" colSpan={2}>
                      No parameters available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Information */}
        {product.technicalInfo && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Information</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none">
                <div className="whitespace-pre-line">{product.technicalInfo}</div>
              </div>
            </div>
          </div>
        )}

        {/* Technical Drawings */}
        {product.technicalDrawings && product.technicalDrawings.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Drawings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.technicalDrawings.map((drawing, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="relative h-48 bg-gray-100">
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
