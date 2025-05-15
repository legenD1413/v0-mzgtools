"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, Download, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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

interface RelatedProduct {
  id: string
  name: string
  productCode: string
  imageUrl: string
  mainFeature: string
  selected?: boolean
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
  relatedProducts?: RelatedProduct[]
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

// Sample related products
const sampleRelatedProducts = [
  {
    id: "related1",
    name: "Related Product 1",
    productCode: "REL-001",
    imageUrl: "/placeholder.svg",
    mainFeature: "High-performance cutting tool",
    selected: false,
  },
  {
    id: "related2",
    name: "Related Product 2",
    productCode: "REL-002",
    imageUrl: "/placeholder.svg",
    mainFeature: "Precision machining specialized",
    selected: false,
  },
]

export default function ComparisonTemplate({
  product = sampleProduct,
  relatedProducts = sampleRelatedProducts,
}: ProductTemplateProps) {
  const [activeImage, setActiveImage] = useState<string>(
    product.images.find((img) => img.isPrimary)?.url ||
      product.modelImageUrl ||
      product.images[0]?.url ||
      "/placeholder.svg",
  )

  const [selectedProducts, setSelectedProducts] = useState<RelatedProduct[]>([])

  const toggleProductSelection = (relatedProduct: RelatedProduct) => {
    if (selectedProducts.some((p) => p.id === relatedProduct.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== relatedProduct.id))
    } else {
      setSelectedProducts([...selectedProducts, relatedProduct])
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="bg-gray-100 border-b">
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-gray-600">Product Code: {product.productCode}</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side Product Image */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg overflow-hidden mb-6">
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

            <div className="bg-white border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Product Description</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">Request Quote</Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>

            {/* Quick Specifications */}
            <div className="bg-white border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Quick Specifications</h3>
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
                {product.parameters.slice(0, 3).map((param, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{param.name}:</span>
                    <span className="font-medium">{param.value}</span>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-2 p-0 h-auto">
                View Full Specifications <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Right Side Comparison Area */}
          <div className="lg:col-span-2">
            <div className="bg-white border rounded-lg overflow-hidden mb-8">
              <div className="bg-gray-50 p-4 border-b">
                <h2 className="text-xl font-bold">Product Comparison</h2>
                <p className="text-gray-600 text-sm">Select products to compare</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Current Product */}
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="relative h-32 bg-white rounded mb-3">
                      <Image
                        src={activeImage || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <h3 className="font-bold mb-1 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Code: {product.productCode}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Current Product</span>
                    </div>
                  </div>

                  {/* Selected Products */}
                  {selectedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="border rounded-lg p-4">
                      <div className="relative h-32 bg-white rounded mb-3">
                        <Image
                          src={relatedProduct.imageUrl || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <h3 className="font-bold mb-1 truncate">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Code: {relatedProduct.productCode}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{relatedProduct.mainFeature}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-600"
                          onClick={() => toggleProductSelection(relatedProduct)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  {/* Add Product Button */}
                  {selectedProducts.length < 2 && (
                    <div className="border rounded-lg p-4 border-dashed flex flex-col items-center justify-center text-center">
                      <div className="bg-gray-100 rounded-full p-3 mb-3">
                        <Plus className="h-6 w-6 text-gray-500" />
                      </div>
                      <h3 className="font-medium mb-1">Add Product to Compare</h3>
                      <p className="text-sm text-gray-500 mb-3">Select products below to compare</p>
                    </div>
                  )}
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/4">Specification</TableHead>
                        <TableHead>{product.name}</TableHead>
                        {selectedProducts.map((relatedProduct) => (
                          <TableHead key={relatedProduct.id}>{relatedProduct.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Product Code</TableCell>
                        <TableCell>{product.productCode}</TableCell>
                        {selectedProducts.map((relatedProduct) => (
                          <TableCell key={relatedProduct.id}>{relatedProduct.productCode}</TableCell>
                        ))}
                      </TableRow>
                      {product.flute && (
                        <TableRow>
                          <TableCell className="font-medium">Number of Flutes</TableCell>
                          <TableCell>{product.flute}</TableCell>
                          {selectedProducts.map((relatedProduct) => (
                            <TableCell key={relatedProduct.id}>-</TableCell>
                          ))}
                        </TableRow>
                      )}
                      {product.material && (
                        <TableRow>
                          <TableCell className="font-medium">Material</TableCell>
                          <TableCell>{product.material}</TableCell>
                          {selectedProducts.map((relatedProduct) => (
                            <TableCell key={relatedProduct.id}>-</TableCell>
                          ))}
                        </TableRow>
                      )}
                      {product.hrc && (
                        <TableRow>
                          <TableCell className="font-medium">Hardness (HRC)</TableCell>
                          <TableCell>{product.hrc}</TableCell>
                          {selectedProducts.map((relatedProduct) => (
                            <TableCell key={relatedProduct.id}>-</TableCell>
                          ))}
                        </TableRow>
                      )}
                      {product.series && (
                        <TableRow>
                          <TableCell className="font-medium">Series</TableCell>
                          <TableCell>{product.series}</TableCell>
                          {selectedProducts.map((relatedProduct) => (
                            <TableCell key={relatedProduct.id}>-</TableCell>
                          ))}
                        </TableRow>
                      )}
                      {product.parameters.map((param, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{param.name}</TableCell>
                          <TableCell>{param.value}</TableCell>
                          {selectedProducts.map((relatedProduct) => (
                            <TableCell key={relatedProduct.id}>-</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-white border rounded-lg overflow-hidden mb-8">
              <div className="bg-gray-50 p-4 border-b">
                <h2 className="text-xl font-bold">Related Products</h2>
                <p className="text-gray-600 text-sm">Select products to add to comparison</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedProducts.map((relatedProduct) => {
                    const isSelected = selectedProducts.some((p) => p.id === relatedProduct.id)
                    return (
                      <div key={relatedProduct.id} className="border rounded-lg p-4 flex">
                        <div className="relative h-20 w-20 bg-white rounded mr-4 flex-shrink-0">
                          <Image
                            src={relatedProduct.imageUrl || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold mb-1">{relatedProduct.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">Code: {relatedProduct.productCode}</p>
                          <p className="text-xs text-gray-500 mb-2">{relatedProduct.mainFeature}</p>
                          <Button
                            variant={isSelected ? "outline" : "default"}
                            size="sm"
                            className={
                              isSelected
                                ? "border-red-600 text-red-600 hover:bg-red-50"
                                : "bg-blue-600 hover:bg-blue-700"
                            }
                            onClick={() => toggleProductSelection(relatedProduct)}
                          >
                            {isSelected ? (
                              <>
                                <Minus className="h-4 w-4 mr-1" /> Remove from Comparison
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" /> Add to Comparison
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Technical Information */}
            {product.technicalInfo && (
              <div className="bg-white border rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-50 p-4 border-b">
                  <h2 className="text-xl font-bold">Technical Information</h2>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line">{product.technicalInfo}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.application && (
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b">
                  <h2 className="text-xl font-bold">Applications</h2>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line">{product.application}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
