import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BoringBarsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "bb-001",
      name: "Precision Boring Bar - Internal",
      image: "/images/product-1.jpg",
      description: "High precision boring bar for internal machining with fine adjustment mechanism",
      diameter: "20mm",
      length: "200mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "PB Series",
    },
    {
      id: "bb-002",
      name: "Modular Boring System",
      image: "/images/product-2.jpg",
      description: "Versatile modular boring system with interchangeable heads and extensions",
      diameter: "25-40mm",
      length: "Variable",
      material: "Steel/Carbide",
      coating: "TiCN",
      series: "MB Series",
    },
    {
      id: "bb-003",
      name: "Anti-Vibration Boring Bar",
      image: "/images/product-3.jpg",
      description: "Dampened boring bar for extended reach applications with reduced vibration",
      diameter: "32mm",
      length: "320mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "AV Series",
    },
    {
      id: "bb-004",
      name: "Heavy Duty Boring Bar",
      image: "/images/product-4.jpg",
      description: "Robust boring bar for heavy machining operations in tough materials",
      diameter: "40mm",
      length: "400mm",
      material: "Steel/Carbide",
      coating: "TiN",
      series: "HD Series",
    },
    {
      id: "bb-005",
      name: "Micro Boring Bar",
      image: "/images/product-1.jpg",
      description: "Precision micro boring bar for small diameter holes and fine details",
      diameter: "8mm",
      length: "100mm",
      material: "Carbide",
      coating: "Diamond",
      series: "MB Series",
    },
    {
      id: "bb-006",
      name: "Adjustable Boring Head",
      image: "/images/product-2.jpg",
      description: "Digital micrometer adjustable boring head for precise diameter control",
      diameter: "20-150mm",
      length: "Variable",
      material: "Steel",
      coating: "None",
      series: "AB Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/tool-holders.jpg" alt="Boring Bars Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Boring Bars</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision boring bars designed for accurate hole finishing, with superior stability and vibration
                control for exceptional surface quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Download Catalog <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Product Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Boring Bars</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's boring bars are precision-engineered tools designed for accurate hole finishing and
                  enlarging operations. Our boring bars feature advanced designs and premium materials to ensure optimal
                  performance, stability, and superior surface finishes.
                </p>
                <p className="mb-4">
                  Whether you're working with small precision components or large industrial workpieces, our
                  comprehensive range of boring bars provides solutions for every boring application. From standard to
                  anti-vibration designs, MZG boring bars deliver consistent, reliable results in the most demanding
                  environments.
                </p>
                <p>
                  All MZG boring bars are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right boring tool for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Precision hole finishing</li>
                    <li>Internal diameter enlarging</li>
                    <li>Internal grooving</li>
                    <li>Internal profiling</li>
                    <li>Deep hole boring</li>
                    <li>Fine boring operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="font-medium">Diameter:</span> {product.diameter}
                    </div>
                    <div>
                      <span className="font-medium">Length:</span> {product.length}
                    </div>
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
                    </div>
                    <div>
                      <span className="font-medium">Coating:</span> {product.coating}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Series:</span> {product.series}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Boring Bar Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Standard boring bars</li>
                  <li>Anti-vibration boring bars</li>
                  <li>Modular boring systems</li>
                  <li>Micro boring bars</li>
                  <li>Heavy-duty boring bars</li>
                  <li>Adjustable boring heads</li>
                  <li>Digital boring systems</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Shank Types</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Round shank</li>
                  <li>Square shank</li>
                  <li>HSK connection</li>
                  <li>Capto connection</li>
                  <li>VDI connection</li>
                  <li>BT/CAT connection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 5mm to 150mm</li>
                  <li>Length-to-diameter ratios: 3:1 to 10:1</li>
                  <li>Internal coolant capability</li>
                  <li>Micrometer adjustment mechanisms</li>
                  <li>Digital adjustment systems</li>
                  <li>Interchangeable cutting heads</li>
                  <li>Vibration dampening technology</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized boring solution? MZG can customize our boring bars to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/inserts/boring" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Boring Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Boring Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Precision inserts for boring applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/boring" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Boring Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Boring Tools</h3>
                    <p className="text-sm text-gray-600">Complete boring tool systems for precision hole making.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Turning Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for turning and external operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Milling Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for various milling applications.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
