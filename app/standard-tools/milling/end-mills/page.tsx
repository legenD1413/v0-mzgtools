import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StandardEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "em-001",
      name: "High Performance End Mill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "General purpose 2 flute end mill for aluminum and non-ferrous materials",
      diameter: "6mm",
      flutes: 2,
      material: "Carbide",
      coating: "AlTiN",
      series: "HP Series",
    },
    {
      id: "em-002",
      name: "Ball Nose End Mill - 4 Flute",
      image: "/images/product-2.jpg",
      description: "Precision ball nose end mill for 3D contour machining",
      diameter: "8mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiCN",
      series: "BN Series",
    },
    {
      id: "em-003",
      name: "Roughing End Mill - 6 Flute",
      image: "/images/product-3.jpg",
      description: "High material removal rate roughing end mill for steel and stainless steel",
      diameter: "12mm",
      flutes: 6,
      material: "Carbide",
      coating: "TiAlN",
      series: "RG Series",
    },
    {
      id: "em-004",
      name: "Square End Mill - 4 Flute",
      image: "/images/product-4.jpg",
      description: "General purpose square end mill for various materials",
      diameter: "10mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiN",
      series: "SQ Series",
    },
    {
      id: "em-005",
      name: "Corner Radius End Mill - 4 Flute",
      image: "/images/product-1.jpg",
      description: "Corner radius end mill for improved tool life and surface finish",
      diameter: "16mm",
      flutes: 4,
      material: "Carbide",
      coating: "AlTiN",
      series: "CR Series",
    },
    {
      id: "em-006",
      name: "Long Reach End Mill - 2 Flute",
      image: "/images/product-2.jpg",
      description: "Extended reach end mill for deep pocket milling",
      diameter: "8mm",
      flutes: 2,
      material: "Carbide",
      coating: "TiCN",
      series: "LR Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/milling-tools.jpg" alt="End Mills Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Standard End Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance end mills designed for precision, durability, and superior results across a wide range
                of materials and applications.
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
          {/* Filter and View Options */}

          {/* Product Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Standard End Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's standard end mills are precision-engineered cutting tools designed for milling
                  operations across various materials. Our end mills feature advanced geometries and premium coatings to
                  ensure optimal performance, extended tool life, and superior surface finishes.
                </p>
                <p className="mb-4">
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of end mills provides solutions for every machining challenge. From general-purpose to
                  application-specific designs, MZG end mills deliver consistent, reliable results in the most demanding
                  environments.
                </p>
                <p>
                  All MZG end mills are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right tool for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Slotting and side milling</li>
                    <li>Profiling and contouring</li>
                    <li>Pocket milling</li>
                    <li>Plunge cutting</li>
                    <li>Ramping and helical interpolation</li>
                    <li>High-speed machining</li>
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
                      <span className="font-medium">Diameter:</span> {product.diameter}
                    </div>
                    <div>
                      <span className="font-medium">Flutes:</span> {product.flutes}
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
                  <li>Composites and plastics</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride)</li>
                  <li>TiCN (Titanium Carbonitride)</li>
                  <li>TiAlN (Titanium Aluminum Nitride)</li>
                  <li>AlTiN (Aluminum Titanium Nitride)</li>
                  <li>ZrN (Zirconium Nitride)</li>
                  <li>Diamond-Like Carbon (DLC)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 0.5mm to 25mm</li>
                  <li>Flute configurations: 2, 3, 4, 5, 6, and 8 flutes</li>
                  <li>Helix angles: 30°, 35°, 40°, 45°, and variable</li>
                  <li>End types: Square, ball nose, corner radius, chamfer</li>
                  <li>Reach options: Standard, long, and extra-long</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified standard tool? MZG can customize our standard end mills to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/standard-tools/milling/ball-nose" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Ball Nose End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Ball Nose End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized end mills for 3D contour machining and surface finishing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/corner-radius" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Corner Radius End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Corner Radius End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      End mills with rounded corners for improved tool life and surface finish.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/chamfer" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/chamfer-mills-hero.png"
                      alt="Chamfer Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Chamfer Mills</h3>
                    <p className="text-sm text-gray-600">
                      Specialized tools for creating precise chamfers and beveled edges.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/thread-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/thread-mills-hero.png"
                      alt="Thread Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Thread Mills</h3>
                    <p className="text-sm text-gray-600">
                      Precision tools for creating internal and external threads in various materials.
                    </p>
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
