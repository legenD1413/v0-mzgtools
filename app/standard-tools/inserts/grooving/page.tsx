import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GroovingInsertsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "gi-001",
      name: "External Grooving Insert - Neutral",
      image: "/images/product-1.jpg",
      description: "Precision external grooving insert for neutral cutting direction",
      width: "3mm",
      depth: "2mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "EG Series",
    },
    {
      id: "gi-002",
      name: "Internal Grooving Insert - Right Hand",
      image: "/images/product-2.jpg",
      description: "Specialized internal grooving insert for right-hand cutting direction",
      width: "2mm",
      depth: "1.5mm",
      material: "Carbide",
      coating: "TiCN",
      series: "IG Series",
    },
    {
      id: "gi-003",
      name: "Face Grooving Insert - Full Radius",
      image: "/images/product-3.jpg",
      description: "Face grooving insert with full radius for smooth groove bottoms",
      width: "4mm",
      depth: "3mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "FG Series",
    },
    {
      id: "gi-004",
      name: "Parting Insert - Reinforced",
      image: "/images/product-4.jpg",
      description: "Reinforced parting insert for deep grooving and parting operations",
      width: "3mm",
      depth: "6mm",
      material: "Carbide",
      coating: "TiN",
      series: "PT Series",
    },
    {
      id: "gi-005",
      name: "Multi-Purpose Grooving Insert",
      image: "/images/product-1.jpg",
      description: "Versatile grooving insert for external, internal, and face grooving",
      width: "2.5mm",
      depth: "2.5mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "MP Series",
    },
    {
      id: "gi-006",
      name: "Micro Grooving Insert",
      image: "/images/product-2.jpg",
      description: "Precision micro grooving insert for small part machining",
      width: "0.5mm",
      depth: "0.8mm",
      material: "Carbide",
      coating: "DLC",
      series: "MG Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image
              src="/images/turning-solutions.jpg"
              alt="Grooving Inserts Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Grooving Inserts</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision grooving inserts designed for optimal performance in external, internal, and face
                grooving applications across a wide range of materials.
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
            <h2 className="text-2xl font-bold mb-4">About Grooving Inserts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's grooving inserts are precision-engineered cutting tools designed for creating
                  grooves, slots, and parting operations in turning applications. Our grooving inserts feature advanced
                  geometries and premium coatings to ensure optimal chip control, extended tool life, and superior
                  surface finishes.
                </p>
                <p className="mb-4">
                  Whether you're working with external, internal, or face grooving applications, our comprehensive range
                  of grooving inserts provides solutions for every machining challenge. From standard O-ring grooves to
                  complex profile grooving, MZG inserts deliver consistent, reliable results in the most demanding
                  environments.
                </p>
                <p>
                  All MZG grooving inserts are manufactured to precise tolerances and undergo rigorous quality control
                  to ensure exceptional performance and reliability. Our technical experts are available to help you
                  select the right insert for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>External grooving</li>
                    <li>Internal grooving</li>
                    <li>Face grooving</li>
                    <li>Parting operations</li>
                    <li>O-ring grooves</li>
                    <li>Profile grooving</li>
                    <li>Circlip grooves</li>
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
                      <span className="font-medium">Width:</span> {product.width}
                    </div>
                    <div>
                      <span className="font-medium">Depth:</span> {product.depth}
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
                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Hardened materials (up to 55 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Heat-resistant superalloys</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride)</li>
                  <li>TiCN (Titanium Carbonitride)</li>
                  <li>TiAlN (Titanium Aluminum Nitride)</li>
                  <li>AlTiN (Aluminum Titanium Nitride)</li>
                  <li>DLC (Diamond-Like Carbon)</li>
                  <li>PVD and CVD multi-layer coatings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Widths: 0.5mm to 8mm</li>
                  <li>Depths: 0.5mm to 10mm</li>
                  <li>Cutting directions: Neutral, right-hand, left-hand</li>
                  <li>Edge preparations: Sharp, honed, chamfered</li>
                  <li>Chip breaker geometries: Standard, light, medium, heavy</li>
                  <li>Corner radii: Sharp, 0.2mm, 0.4mm, 0.8mm, full radius</li>
                  <li>Special profiles available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized grooving insert? MZG can customize our grooving inserts to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/standard-tools/inserts/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Turning Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Inserts
                    </h3>
                    <p className="text-sm text-gray-600">High-performance inserts for general turning applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/threading" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Threading Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Threading Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Precision inserts for thread turning operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/grooving" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Grooving Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Grooving Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Compatible tool holders for MZG grooving inserts.</p>
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
