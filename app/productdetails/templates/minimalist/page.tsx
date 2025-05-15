"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, Download, Mail, Phone } from "lucide-react"
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

export default function MinimalistTemplate({ product = sampleProduct }: ProductTemplateProps) {
  const [activeImage, setActiveImage] = useState<string>(
    product.images.find((img) => img.isPrimary)?.url ||
      product.modelImageUrl ||
      product.images[0]?.url ||
      "/placeholder.svg",
  )

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <Link href="/products" className="hover:text-gray-900">
              Products
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side images */}
          <div>
            <div className="bg-gray-50 rounded-lg mb-6">
              <div className="relative aspect-square">
                <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square bg-gray-50 rounded-md cursor-pointer border ${
                    activeImage === image.url ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(image.url)}
                >
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt || `${product.name} View ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
              {product.modelImageUrl && (
                <div
                  className={`relative aspect-square bg-gray-50 rounded-md cursor-pointer border ${
                    activeImage === product.modelImageUrl ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(product.modelImageUrl)}
                >
                  <Image
                    src={product.modelImageUrl || "/placeholder.svg"}
                    alt={`${product.name} Model Image`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right side information */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-4">Product Code: {product.productCode}</p>
              <div className="prose prose-gray max-w-none mb-6">
                <p>{product.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button className="bg-black hover:bg-gray-800 text-white">Request Quote</Button>
                <Button variant="outline" className="border-gray-300">
                  <Download className="h-4 w-4 mr-2" /> Download Specs
                </Button>
              </div>
            </div>

            {/* Main Specifications */}
            <div className="border-t border-b py-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Main Specifications</h2>
              <div className="grid grid-cols-2 gap-y-3">
                {product.flute && (
                  <>
                    <div className="text-gray-600">Number of Flutes</div>
                    <div>{product.flute}</div>
                  </>
                )}
                {product.material && (
                  <>
                    <div className="text-gray-600">Material</div>
                    <div>{product.material}</div>
                  </>
                )}
                {product.hrc && (
                  <>
                    <div className="text-gray-600">Hardness (HRC)</div>
                    <div>{product.hrc}</div>
                  </>
                )}
                {product.series && (
                  <>
                    <div className="text-gray-600">Series</div>
                    <div>{product.series}</div>
                  </>
                )}
                {product.parameters.slice(0, 4).map((param, index) => (
                  <React.Fragment key={index}>
                    <div className="text-gray-600">{param.name}</div>
                    <div>{param.value}</div>
                  </React.Fragment>
                ))}
              </div>
              {product.parameters.length > 4 && (
                <Button variant="link" className="mt-3 p-0 h-auto text-black">
                  View All Specifications <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              )}
            </div>

            {/* Performance Features */}
            {product.performanceFeatures && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Performance Features</h2>
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line">{product.performanceFeatures}</div>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.application && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Applications</h2>
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line">{product.application}</div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Need Help?</h2>
              <p className="text-gray-600 mb-4">Our product specialists are ready to assist you with any questions.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <a href="mailto:info@example.com" className="text-gray-900 hover:underline">
                    info@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <a href="tel:+1234567890" className="text-gray-900 hover:underline">
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Parameters */}
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Parameters</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left border-b-2 border-gray-200 bg-gray-50 font-semibold text-gray-900">
                    Parameter
                  </th>
                  <th className="py-3 px-4 text-left border-b-2 border-gray-200 bg-gray-50 font-semibold text-gray-900">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.parameters.map((param, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{param.name}</td>
                    <td className="py-3 px-4 text-gray-900">{param.value}</td>
                  </tr>
                ))}
                {product.parameters.length === 0 && (
                  <tr>
                    <td className="py-3 px-4 text-gray-500" colSpan={2}>
                      No parameters available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Drawings */}
        {product.technicalDrawings && product.technicalDrawings.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Drawings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.technicalDrawings.map((drawing, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="relative h-48 bg-gray-50">
                    <Image
                      src={drawing.url || "/placeholder.svg"}
                      alt={drawing.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-1">{drawing.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{drawing.fileType.toUpperCase()}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Information */}
        {product.technicalInfo && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Information</h2>
            <div className="prose prose-gray max-w-none">
              <div className="whitespace-pre-line">{product.technicalInfo}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
