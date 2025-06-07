"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define product type
interface Product {
  id: string
  name: string
  image: string
  diameter: string
  inserts: string
  insertType: string
  leadAngle: string
  material: string
  series: string
  price: string
}

// Sample product data
const allProducts: Product[] = [
  {
    id: "fm-1",
    name: "High Feed Face Mill",
    image: "/images/product-1.jpg",
    diameter: "50mm",
    inserts: "5",
    insertType: "XDKT",
    leadAngle: "10°",
    material: "Steel, Stainless Steel",
    series: "MZG-HF50",
    price: "$245.00",
  },
  {
    id: "fm-2",
    name: "45° Face Mill",
    image: "/images/product-2.jpg",
    diameter: "63mm",
    inserts: "6",
    insertType: "SEHT",
    leadAngle: "45°",
    material: "General Purpose",
    series: "MZG-FM45",
    price: "$210.00",
  },
  {
    id: "fm-3",
    name: "90° Square Shoulder Mill",
    image: "/images/product-3.jpg",
    diameter: "80mm",
    inserts: "8",
    insertType: "APKT",
    leadAngle: "90°",
    material: "Cast Iron, Steel",
    series: "MZG-SQ90",
    price: "$275.00",
  },
  {
    id: "fm-4",
    name: "Micro-Grain Carbide Face Mill",
    image: "/images/product-4.jpg",
    diameter: "100mm",
    inserts: "8",
    insertType: "RCKT",
    leadAngle: "45°",
    material: "Hardened Steel",
    series: "MZG-MG100",
    price: "$320.00",
  },
  {
    id: "fm-5",
    name: "Copy Face Mill",
    image: "/images/product-1.jpg",
    diameter: "40mm",
    inserts: "4",
    insertType: "RDMT",
    leadAngle: "Variable",
    material: "Aluminum, Non-ferrous",
    series: "MZG-CP40",
    price: "$195.00",
  },
  {
    id: "fm-6",
    name: "Heavy Duty Face Mill",
    image: "/images/product-2.jpg",
    diameter: "125mm",
    inserts: "10",
    insertType: "SNMT",
    leadAngle: "60°",
    material: "Cast Iron, Steel",
    series: "MZG-HD125",
    price: "$385.00",
  },
]

export default function FaceMillsPage() {
  const [products, setProducts] = useState<Product[]>(allProducts)
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/face-mills-hero.png" alt="Face Mills" fill className="object-cover opacity-40" priority />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="flex items-center text-sm mb-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/standard-tools" className="text-gray-300 hover:text-white">
              Standard Tools
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/standard-tools/milling" className="text-gray-300 hover:text-white">
              Milling
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span>Face Mills</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Face Mills</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            High-performance face milling tools designed for efficient flat surface machining with superior surface
            finish and productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Request a Quote</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Description */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">MZG Face Mills</h2>
            <p className="mb-4">
              Face mills are essential cutting tools designed for creating flat surfaces on workpieces. Unlike end mills
              which are typically solid tools, face mills feature a body with replaceable inserts, making them
              cost-effective for high-volume production.
            </p>
            <p className="mb-4">
              Our face mills are engineered for maximum productivity and surface quality. With various lead angles,
              insert geometries, and sizes available, MZG face mills deliver exceptional performance across a wide range
              of materials and applications.
            </p>
            <p className="mb-6">
              The robust construction and precision-engineered insert pockets ensure reliable performance and consistent
              results, even in demanding machining environments. Whether you're working with steel, cast iron, stainless
              steel, or non-ferrous materials, our face mills provide the cutting efficiency and surface finish your
              application demands.
            </p>

            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>Precision-ground bodies for excellent runout control</li>
              <li>Multiple insert geometries for different materials and conditions</li>
              <li>Various lead angles for optimized cutting performance</li>
              <li>Engineered chip evacuation channels</li>
              <li>Available in diameters from 25mm to 315mm</li>
              <li>Compatible with all standard machine interfaces</li>
            </ul>

            {/* Product Grid */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Available Products</h3>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h4>
                      <div className="space-y-1 text-sm mb-4">
                        <p>
                          <span className="font-medium">Diameter:</span> {product.diameter}
                        </p>
                        <p>
                          <span className="font-medium">Inserts:</span> {product.inserts}
                        </p>
                        <p>
                          <span className="font-medium">Insert Type:</span> {product.insertType}
                        </p>
                        <p>
                          <span className="font-medium">Lead Angle:</span> {product.leadAngle}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-red-600">{product.price}</span>
                        <Button size="sm">Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Technical Information</h3>

              <h4 className="font-bold mb-2">Material Compatibility</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h5 className="font-medium mb-2">Steel & Cast Iron</h5>
                  <p className="text-sm">
                    Excellent performance with our APKT, SEHT, and SNMT inserts. Recommended for general machining of
                    carbon steels, alloy steels, and cast iron.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h5 className="font-medium mb-2">Stainless Steel</h5>
                  <p className="text-sm">
                    Use with our specialized XDKT inserts with PVD coatings for optimal heat management and edge
                    retention in stainless materials.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h5 className="font-medium mb-2">Aluminum & Non-ferrous</h5>
                  <p className="text-sm">
                    Polished RDMT inserts with sharp cutting edges and specialized geometries for clean cutting of
                    aluminum and other non-ferrous materials.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h5 className="font-medium mb-2">Hardened Materials</h5>
                  <p className="text-sm">
                    Special RCKT inserts with CBN or ceramic options available for machining hardened steels and other
                    difficult materials.
                  </p>
                </div>
              </div>

              <h4 className="font-bold mb-2">Lead Angles and Their Applications</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Lead Angle</th>
                      <th className="border px-4 py-2 text-left">Characteristics</th>
                      <th className="border px-4 py-2 text-left">Recommended Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">10° (High Feed)</td>
                      <td className="border px-4 py-2">Low cutting forces, high feed rates</td>
                      <td className="border px-4 py-2">Roughing, large components, unstable conditions</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">45°</td>
                      <td className="border px-4 py-2">Balanced cutting forces, versatile</td>
                      <td className="border px-4 py-2">General purpose, most common materials</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">60°</td>
                      <td className="border px-4 py-2">Smooth cutting action, good finish</td>
                      <td className="border px-4 py-2">Semi-finishing, cast iron, steel</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">90°</td>
                      <td className="border px-4 py-2">Creates square shoulders, higher forces</td>
                      <td className="border px-4 py-2">Square shoulder milling, step milling</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-bold mb-2">Application Recommendations</h4>
              <div className="bg-gray-50 p-4 rounded mb-6">
                <ul className="list-disc pl-5 space-y-1">
                  <li>For maximum productivity, ensure proper insert seating and torque specifications</li>
                  <li>Start with conservative speeds and feeds, then optimize based on results</li>
                  <li>Use climb milling (down milling) whenever possible for better surface finish</li>
                  <li>Ensure adequate coolant flow directed at the cutting zone</li>
                  <li>For interrupted cuts, reduce feed rate by 20-30%</li>
                  <li>Regularly check insert wear and rotate or replace inserts as needed</li>
                </ul>
              </div>
            </div>

            {/* Related Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Related Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/standard-tools/milling/end-mills" className="bg-gray-50 p-4 rounded hover:bg-gray-100">
                  <h4 className="font-bold mb-1">End Mills</h4>
                  <p className="text-sm text-gray-600">Solid cutting tools for various milling operations</p>
                </Link>
                <Link href="/standard-tools/inserts" className="bg-gray-50 p-4 rounded hover:bg-gray-100">
                  <h4 className="font-bold mb-1">Milling Inserts</h4>
                  <p className="text-sm text-gray-600">Replacement inserts for face mills and other tools</p>
                </Link>
                <Link href="/standard-tools/tool-holders" className="bg-gray-50 p-4 rounded hover:bg-gray-100">
                  <h4 className="font-bold mb-1">Tool Holders</h4>
                  <p className="text-sm text-gray-600">Machine interfaces for secure tool mounting</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Applications</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-2 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold">Flat Surface Machining</h4>
                    <p className="text-sm text-gray-600">
                      Ideal for creating precise flat surfaces on large workpieces with excellent surface finish.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-2 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold">High Volume Production</h4>
                    <p className="text-sm text-gray-600">
                      Cost-effective solution for production environments with replaceable inserts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-2 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold">Step Milling</h4>
                    <p className="text-sm text-gray-600">Create precise steps and shoulders with 90° face mills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white p-2 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold">Facing Operations</h4>
                    <p className="text-sm text-gray-600">
                      Efficient removal of material to create flat, parallel surfaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border mb-6">
                <h4 className="font-bold mb-2">Need Help Selecting?</h4>
                <p className="text-sm mb-4">
                  Our technical experts can help you choose the right face mill for your specific application.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Contact Us</Button>
              </div>

              <div className="bg-gray-800 text-white p-4 rounded">
                <h4 className="font-bold mb-2">Custom Face Mills</h4>
                <p className="text-sm mb-4">
                  Need a specialized solution? We can design and manufacture custom face mills to meet your specific
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
