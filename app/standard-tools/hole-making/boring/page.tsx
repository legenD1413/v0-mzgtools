import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BoringToolsPage() {
  // Sample product data
  const products = [
    {
      id: "bt-001",
      name: "Precision Boring Head - Micro Adjustable",
      image: "/images/product-1.jpg",
      description: "Micro-adjustable boring head for precision hole finishing",
      diameterRange: "10-100mm",
      adjustment: "0.01mm",
      material: "Steel",
      coating: "TiN",
      series: "PB Series",
    },
    {
      id: "bt-002",
      name: "Rough Boring Tool - Carbide Insert",
      image: "/images/product-2.jpg",
      description: "Heavy-duty boring tool for rough boring operations",
      diameterRange: "20-150mm",
      adjustment: "0.05mm",
      material: "Steel",
      coating: "None",
      series: "RB Series",
    },
    {
      id: "bt-003",
      name: "Fine Boring Bar - Internal Coolant",
      image: "/images/product-3.jpg",
      description: "Fine boring bar with internal coolant for deep hole boring",
      diameterRange: "8-50mm",
      adjustment: "0.005mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "FB Series",
    },
    {
      id: "bt-004",
      name: "Digital Boring Head - Electronic Display",
      image: "/images/product-4.jpg",
      description: "Digital boring head with electronic display for precise adjustment",
      diameterRange: "15-120mm",
      adjustment: "0.001mm",
      material: "Steel",
      coating: "None",
      series: "DB Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/hole-making.jpg" alt="Boring Tools Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Boring Tools</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision boring tools designed for accurate hole enlargement, finishing, and tight tolerance machining.
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
            <h2 className="text-2xl font-bold mb-4">About Boring Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's boring tools are precision-engineered for accurate hole enlargement and finishing.
                  Our comprehensive range includes boring heads, boring bars, and cartridges designed to achieve tight
                  tolerances and superior surface finishes.
                </p>
                <p className="mb-4">
                  Whether you need micro-adjustable boring heads for precision work or heavy-duty boring tools for rough
                  machining, MZG offers solutions for every application. Our boring tools feature innovative designs for
                  easy adjustment, excellent stability, and vibration-free operation.
                </p>
                <p>
                  All MZG boring tools are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right tool for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Precision hole finishing</li>
                    <li>Hole enlargement</li>
                    <li>Tight tolerance machining</li>
                    <li>Deep hole boring</li>
                    <li>Counterboring</li>
                    <li>Back boring</li>
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
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    <div>
                      <span className="font-medium">Diameter Range:</span> {product.diameterRange}
                    </div>
                    <div>
                      <span className="font-medium">Adjustment:</span> {product.adjustment}
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
                <h3 className="text-lg font-bold mb-3">Boring Tool Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Precision Boring Heads</li>
                  <li>Rough Boring Tools</li>
                  <li>Fine Boring Bars</li>
                  <li>Digital Boring Heads</li>
                  <li>Back Boring Tools</li>
                  <li>Cartridge Boring Systems</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Steel and cast iron</li>
                  <li>Stainless steel</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Hardened materials</li>
                  <li>Exotic alloys</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameter ranges: 5mm to 200mm</li>
                  <li>Adjustment types: Manual, Digital, Micro-adjustable</li>
                  <li>Coolant options: External, Internal</li>
                  <li>Insert types: Various geometries and grades</li>
                  <li>Shank types: Straight, Modular</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized boring tool? MZG can customize our standard boring tools to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/standard-tools/hole-making/reamers" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-3.jpg" alt="Reamers" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Reamers</h3>
                    <p className="text-sm text-gray-600">Precision tools for hole finishing and sizing.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Standard Drills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard Drills
                    </h3>
                    <p className="text-sm text-gray-600">High-performance drills for various materials.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/countersinks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-4.jpg" alt="Countersinks" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Countersinks</h3>
                    <p className="text-sm text-gray-600">Tools for creating chamfered holes for fasteners.</p>
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
