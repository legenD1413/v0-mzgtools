import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadingInsertsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "ti-001",
      name: "60° External Threading Insert",
      image: "/images/product-1.jpg",
      description: "Precision ground threading insert for external thread turning operations",
      threadType: "Metric",
      threadAngle: "60°",
      material: "Carbide",
      coating: "TiN",
      series: "ET Series",
    },
    {
      id: "ti-002",
      name: "55° Internal Threading Insert",
      image: "/images/product-2.jpg",
      description: "High-performance insert for internal threading applications",
      threadType: "Inch",
      threadAngle: "55°",
      material: "Carbide",
      coating: "TiCN",
      series: "IT Series",
    },
    {
      id: "ti-003",
      name: "Partial Profile Threading Insert",
      image: "/images/product-3.jpg",
      description: "Versatile insert for various thread profiles and materials",
      threadType: "Metric/Inch",
      threadAngle: "60°/55°",
      material: "Carbide",
      coating: "TiAlN",
      series: "PP Series",
    },
    {
      id: "ti-004",
      name: "Full Profile Threading Insert",
      image: "/images/product-4.jpg",
      description: "Single-point threading insert for precise thread profiles",
      threadType: "Metric",
      threadAngle: "60°",
      material: "Carbide",
      coating: "AlTiN",
      series: "FP Series",
    },
    {
      id: "ti-005",
      name: "Multi-Point Threading Insert",
      image: "/images/product-1.jpg",
      description: "Multi-point design for increased productivity in threading operations",
      threadType: "Metric/Inch",
      threadAngle: "60°/55°",
      material: "Carbide",
      coating: "TiN",
      series: "MP Series",
    },
    {
      id: "ti-006",
      name: "Laydown Threading Insert",
      image: "/images/product-2.jpg",
      description: "Laydown design for improved stability and thread quality",
      threadType: "Metric",
      threadAngle: "60°",
      material: "Carbide",
      coating: "TiCN",
      series: "LD Series",
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
              src="/images/threading-tools.jpg"
              alt="Threading Inserts Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Threading Inserts</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision threading inserts designed for optimal thread quality, durability, and performance across
                a wide range of materials and thread specifications.
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
            <h2 className="text-2xl font-bold mb-4">About Threading Inserts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's threading inserts are precision-engineered cutting tools designed for thread turning
                  operations across various materials. Our threading inserts feature advanced geometries and premium
                  coatings to ensure optimal thread quality, extended tool life, and superior surface finishes.
                </p>
                <p className="mb-4">
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of threading inserts provides solutions for every threading challenge. From standard metric and
                  inch threads to specialized profiles, MZG threading inserts deliver consistent, reliable results in
                  the most demanding environments.
                </p>
                <p>
                  All MZG threading inserts are manufactured to precise tolerances and undergo rigorous quality control
                  to ensure exceptional performance and reliability. Our technical experts are available to help you
                  select the right insert for your specific threading application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>External thread turning</li>
                    <li>Internal thread turning</li>
                    <li>Metric and inch thread profiles</li>
                    <li>Standard and custom thread forms</li>
                    <li>Fine and coarse thread pitches</li>
                    <li>Single-point and multi-point threading</li>
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
                      <span className="font-medium">Thread Type:</span> {product.threadType}
                    </div>
                    <div>
                      <span className="font-medium">Thread Angle:</span> {product.threadAngle}
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
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Hardened materials (up to 65 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Heat-resistant superalloys</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride)</li>
                  <li>TiCN (Titanium Carbonitride)</li>
                  <li>TiAlN (Titanium Aluminum Nitride)</li>
                  <li>AlTiN (Aluminum Titanium Nitride)</li>
                  <li>PVD and CVD coatings</li>
                  <li>Uncoated options for specific applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Thread profiles: Metric, UN/UNF, NPT, BSPT, ACME, and more</li>
                  <li>Thread angles: 60°, 55°, 29°, and custom angles</li>
                  <li>Insert types: Partial profile, full profile, multi-point</li>
                  <li>Insert styles: V-profile, laydown, on-edge</li>
                  <li>Thread pitches: Fine, medium, and coarse</li>
                  <li>Special thread forms available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized threading insert? MZG can customize our threading inserts to meet your specific
                  requirements. Contact our technical team to discuss your threading application needs.
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
                    <p className="text-sm text-gray-600">High-performance inserts for turning operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Milling Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Precision inserts for various milling applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Thread Turning Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Turning Tools
                    </h3>
                    <p className="text-sm text-gray-600">Complete tooling solutions for thread turning operations.</p>
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
