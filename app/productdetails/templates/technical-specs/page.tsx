"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Download, FileText, Info, Settings, PenToolIcon as Tool, Ruler, Layers } from "lucide-react"
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

export default function TechnicalSpecsTemplate({ product = sampleProduct }: ProductTemplateProps) {
  const [activeImage, setActiveImage] = useState<string>(
    product.images.find((img) => img.isPrimary)?.url ||
      product.modelImageUrl ||
      product.images[0]?.url ||
      "/placeholder.svg",
  )

  // Group parameters for better organization
  const dimensionParams = product.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes("diameter") ||
      p.name.toLowerCase().includes("length") ||
      p.name.toLowerCase().includes("width") ||
      p.name.toLowerCase().includes("height") ||
      p.name.toLowerCase().includes("size") ||
      p.name.toLowerCase().includes("dimension"),
  )

  const performanceParams = product.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes("speed") ||
      p.name.toLowerCase().includes("feed") ||
      p.name.toLowerCase().includes("power") ||
      p.name.toLowerCase().includes("torque") ||
      p.name.toLowerCase().includes("force") ||
      p.name.toLowerCase().includes("rate"),
  )

  const materialParams = product.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes("material") ||
      p.name.toLowerCase().includes("coating") ||
      p.name.toLowerCase().includes("grade") ||
      p.name.toLowerCase().includes("composition"),
  )

  const otherParams = product.parameters.filter(
    (p) => !dimensionParams.includes(p) && !performanceParams.includes(p) && !materialParams.includes(p),
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link
              href={`/products/${product.mainCategory.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900"
            >
              {product.mainCategory}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link
              href={`/products/${product.mainCategory.toLowerCase()}/${product.subCategory.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900"
            >
              {product.subCategory}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Title */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600 mt-2">
                Product Code: <span className="font-medium text-gray-900">{product.productCode}</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">Request Quote</Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" /> Download Specs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative aspect-square">
                <Image src={activeImage || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
              </div>
              <div className="p-4 border-t">
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-14 bg-gray-100 rounded cursor-pointer border ${
                        activeImage === image.url ? "border-blue-600" : "border-gray-200"
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
                      className={`relative h-14 bg-gray-100 rounded cursor-pointer border ${
                        activeImage === product.modelImageUrl ? "border-blue-600" : "border-gray-200"
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

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" /> Quick Specifications
              </h3>
              <div className="space-y-3">
                {product.flute && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Number of Flutes:</span>
                    <span className="font-medium">{product.flute}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                )}
                {product.hrc && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hardness (HRC):</span>
                    <span className="font-medium">{product.hrc}</span>
                  </div>
                )}
                {product.series && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Series:</span>
                    <span className="font-medium">{product.series}</span>
                  </div>
                )}
              </div>
            </div>

            {product.technicalDrawings && product.technicalDrawings.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" /> Technical Documents
                </h3>
                <div className="space-y-3">
                  {product.technicalDrawings.map((drawing, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded mr-3">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{drawing.title}</p>
                          <p className="text-xs text-gray-500">{drawing.fileType.toUpperCase()}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="w-full grid grid-cols-5">
                <TabsTrigger value="specifications" className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" /> Specs
                </TabsTrigger>
                <TabsTrigger value="description" className="flex items-center">
                  <Info className="h-4 w-4 mr-2" /> Description
                </TabsTrigger>
                <TabsTrigger value="features" className="flex items-center">
                  <Tool className="h-4 w-4 mr-2" /> Features
                </TabsTrigger>
                <TabsTrigger value="applications" className="flex items-center">
                  <Layers className="h-4 w-4 mr-2" /> Applications
                </TabsTrigger>
                <TabsTrigger value="technical" className="flex items-center">
                  <Ruler className="h-4 w-4 mr-2" /> Technical
                </TabsTrigger>
              </TabsList>

              {/* Specifications Tab */}
              <TabsContent value="specifications" className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>

                {dimensionParams.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 pb-2 border-b">Dimensional Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {dimensionParams.map((param, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4 text-sm text-gray-700">{param.name}</td>
                              <td className="py-3 px-4 text-sm text-gray-900 font-medium">{param.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {materialParams.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 pb-2 border-b">Material Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {materialParams.map((param, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4 text-sm text-gray-700">{param.name}</td>
                              <td className="py-3 px-4 text-sm text-gray-900 font-medium">{param.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {performanceParams.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 pb-2 border-b">Performance Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {performanceParams.map((param, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4 text-sm text-gray-700">{param.name}</td>
                              <td className="py-3 px-4 text-sm text-gray-900 font-medium">{param.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {otherParams.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 pb-2 border-b">Other Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {otherParams.map((param, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4 text-sm text-gray-700">{param.name}</td>
                              <td className="py-3 px-4 text-sm text-gray-900 font-medium">{param.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Description Tab */}
              <TabsContent value="description" className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-6">Product Description</h2>
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                </div>
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features" className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-6">Performance Features</h2>
                {product.performanceFeatures ? (
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line">{product.performanceFeatures}</div>
                  </div>
                ) : (
                  <p className="text-gray-500">No performance features information available</p>
                )}
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications" className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-6">Applications</h2>
                {product.application ? (
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line">{product.application}</div>
                  </div>
                ) : (
                  <p className="text-gray-500">No application information available</p>
                )}
              </TabsContent>

              {/* Technical Tab */}
              <TabsContent value="technical" className="bg-white rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-6">Technical Information</h2>
                {product.technicalInfo ? (
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line">{product.technicalInfo}</div>
                  </div>
                ) : (
                  <p className="text-gray-500">No technical information available</p>
                )}
              </TabsContent>
            </Tabs>

            {/* Call to Action */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Need More Information?</h3>
                  <p className="text-blue-700">
                    Our technical experts can help you select the right product for your specific application.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">Request Quote</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
