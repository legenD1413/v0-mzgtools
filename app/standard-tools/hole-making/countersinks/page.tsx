import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CountersinksPage() {
  // Sample product data
  const products = [
    {
      id: "cs-001",
      name: "Single Flute Countersink - 90°",
      image: "/images/product-1.jpg",
      description: "Precision single flute countersink for clean, burr-free holes",
      diameter: "10mm",
      angle: "90°",
      flutes: 1,
      material: "HSS",
      coating: "TiN",
      series: "SF Series",
    },
    {
      id: "cs-002",
      name: "Multi-Flute Countersink - 82°",
      image: "/images/product-2.jpg",
      description: "Multi-flute design for faster material removal and smoother finish",
      diameter: "12mm",
      angle: "82°",
      flutes: 3,
      material: "HSS",
      coating: "TiCN",
      series: "MF Series",
    },
    {
      id: "cs-003",
      name: "Zero Flute Countersink - 100°",
      image: "/images/product-3.jpg",
      description: "Zero flute design for non-ferrous materials and plastics",
      diameter: "8mm",
      angle: "100°",
      flutes: 0,
      material: "Carbide",
      coating: "Uncoated",
      series: "ZF Series",
    },
    {
      id: "cs-004",
      name: "Cross Hole Countersink - 90°",
      image: "/images/product-4.jpg",
      description: "Specialized design for countersinking cross holes",
      diameter: "16mm",
      angle: "90°",
      flutes: 6,
      material: "HSS",
      coating: "AlTiN",
      series: "CH Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/hole-making.jpg" alt="Countersinks Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Countersinks</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision countersinks designed for creating clean, accurate chamfers for fastener heads in a wide range
                of materials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Product Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Countersinks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's countersinks are precision-engineered cutting tools designed to create a conical
                  enlargement of a hole to allow fastener heads to sit flush with or below the surface of the material.
                </p>
                <p className="mb-4">
                  Our countersinks feature advanced geometries and premium materials to ensure clean, burr-free holes
                  with excellent surface finishes. Available in various angles, diameters, and flute configurations, MZG
                  countersinks provide solutions for all your countersinking needs.
                </p>
                <p>
                  Whether you're working with steel, aluminum, plastics, or composite materials, our comprehensive range
                  of countersinks delivers consistent, reliable results in the most demanding environments.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Countersinking for flat head screws</li>
                    <li>Deburring hole edges</li>
                    <li>Creating chamfers on holes</li>
                    <li>Preparing holes for welding</li>
                    <li>Countersinking for rivets</li>
                    <li>Cross-hole deburring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                      <div>
                        <span className="font-medium">Diameter:</span> {product.diameter}
                      </div>
                      <div>
                        <span className="font-medium">Angle:</span> {product.angle}
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
                      <div>
                        <span className="font-medium">Series:</span> {product.series}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Countersink Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Single Flute Countersinks</li>
                  <li>Multi-Flute Countersinks (3, 5, or 6 flutes)</li>
                  <li>Zero Flute Countersinks</li>
                  <li>Cross Hole Countersinks</li>
                  <li>Combination Drill and Countersinks</li>
                  <li>Microstop Countersinks</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Angles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>60° - For metric fasteners</li>
                  <li>82° - For unified flat head screws</li>
                  <li>90° - For general chamfering</li>
                  <li>100° - For special applications</li>
                  <li>120° - For wide chamfers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 2mm to 50mm</li>
                  <li>Shank types: Straight, reduced, and threaded</li>
                  <li>Materials: HSS, HSS-Co, and Carbide</li>
                  <li>Coatings: TiN, TiCN, AlTiN, and uncoated</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified standard tool? MZG can customize our standard countersinks to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/standard-tools/hole-making/drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Standard Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard Drills
                    </h3>
                    <p className="text-sm text-gray-600">High-performance drills for a wide range of applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/step-drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Step Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Step Drills</h3>
                    <p className="text-sm text-gray-600">
                      Multi-diameter drills for creating stepped holes in one operation.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/gun-drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Gun Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Gun Drills</h3>
                    <p className="text-sm text-gray-600">Specialized drills for creating deep, precise holes.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/boring" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Boring Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Boring Tools</h3>
                    <p className="text-sm text-gray-600">
                      Precision tools for enlarging and finishing holes to exact dimensions.
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
