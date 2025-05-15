import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TapsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tap-001",
      name: "Machine Tap - Metric M6",
      image: "/images/product-1.jpg",
      description: "General purpose machine tap for creating metric M6 threads",
      threadSize: "M6",
      threadType: "Metric",
      flutes: 3,
      material: "HSS",
      coating: "TiN",
      series: "MT Series",
    },
    {
      id: "tap-002",
      name: "Spiral Point Tap - UNC 1/4-20",
      image: "/images/product-2.jpg",
      description: "Spiral point tap for through-hole threading applications",
      threadSize: "1/4-20",
      threadType: "UNC",
      flutes: 3,
      material: "HSS-E",
      coating: "TiCN",
      series: "SP Series",
    },
    {
      id: "tap-003",
      name: "Spiral Flute Tap - NPT 1/4",
      image: "/images/product-3.jpg",
      description: "Spiral flute tap for blind hole threading applications",
      threadSize: "1/4",
      threadType: "NPT",
      flutes: 4,
      material: "HSS-E-PM",
      coating: "TiAlN",
      series: "SF Series",
    },
    {
      id: "tap-004",
      name: "Thread Forming Tap - M8",
      image: "/images/product-4.jpg",
      description: "Thread forming tap for creating threads without chip formation",
      threadSize: "M8",
      threadType: "Metric",
      flutes: 0,
      material: "HSS-E",
      coating: "TiN",
      series: "TF Series",
    },
    {
      id: "tap-005",
      name: "Hand Tap - UNF 10-32",
      image: "/images/product-1.jpg",
      description: "Hand tap for manual threading operations",
      threadSize: "10-32",
      threadType: "UNF",
      flutes: 3,
      material: "HSS",
      coating: "None",
      series: "HT Series",
    },
    {
      id: "tap-006",
      name: "Carbide Tap - M10",
      image: "/images/product-2.jpg",
      description: "Solid carbide tap for high-performance threading in hardened materials",
      threadSize: "M10",
      threadType: "Metric",
      flutes: 3,
      material: "Carbide",
      coating: "AlTiN",
      series: "CT Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/threading-tools.jpg" alt="Taps Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Taps</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance taps designed for precision, durability, and superior results across a wide range of
                materials and threading applications.
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
            <h2 className="text-2xl font-bold mb-4">About Taps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's taps are precision-engineered cutting tools designed for creating internal threads in
                  a variety of materials. Our taps feature advanced geometries and premium coatings to ensure optimal
                  performance, extended tool life, and superior thread quality.
                </p>
                <p className="mb-4">
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of taps provides solutions for every threading challenge. From general-purpose to
                  application-specific designs, MZG taps deliver consistent, reliable results in the most demanding
                  environments.
                </p>
                <p>
                  All MZG taps are manufactured to precise tolerances and undergo rigorous quality control to ensure
                  exceptional performance and reliability. Our technical experts are available to help you select the
                  right tap for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Through-hole threading</li>
                    <li>Blind-hole threading</li>
                    <li>Bottom threading</li>
                    <li>Pipe threading</li>
                    <li>Thread forming (chipless)</li>
                    <li>Manual and CNC threading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
                      <span className="font-medium">Thread Size:</span> {product.threadSize}
                    </div>
                    <div>
                      <span className="font-medium">Thread Type:</span> {product.threadType}
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
            ))}
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Tap Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Machine Taps (Straight Flute)</li>
                  <li>Spiral Point Taps (Gun Nose)</li>
                  <li>Spiral Flute Taps</li>
                  <li>Thread Forming Taps (Chipless)</li>
                  <li>Hand Taps</li>
                  <li>Pipe Taps (NPT/NPTF)</li>
                  <li>Bottoming Taps</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Standards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metric (M)</li>
                  <li>Unified National Coarse (UNC)</li>
                  <li>Unified National Fine (UNF)</li>
                  <li>British Standard Whitworth (BSW)</li>
                  <li>National Pipe Taper (NPT)</li>
                  <li>National Pipe Straight (NPS)</li>
                  <li>British Standard Pipe (BSP)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Hardened materials (up to 45 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Plastics and composites</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Tap Drill Size Chart</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Thread Size</th>
                        <th className="px-4 py-2 text-left">Tap Drill Size</th>
                        <th className="px-4 py-2 text-left">% of Thread</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">M6 x 1.0</td>
                        <td className="px-4 py-2">5.0 mm</td>
                        <td className="px-4 py-2">75%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">M8 x 1.25</td>
                        <td className="px-4 py-2">6.8 mm</td>
                        <td className="px-4 py-2">75%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">M10 x 1.5</td>
                        <td className="px-4 py-2">8.5 mm</td>
                        <td className="px-4 py-2">75%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">1/4-20 UNC</td>
                        <td className="px-4 py-2">#7 (0.201")</td>
                        <td className="px-4 py-2">75%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">5/16-18 UNC</td>
                        <td className="px-4 py-2">F (0.257")</td>
                        <td className="px-4 py-2">75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/standard-tools/threading/thread-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Thread Mills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Thread Mills</h3>
                    <p className="text-sm text-gray-600">CNC thread milling tools for internal and external threads.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Drills</h3>
                    <p className="text-sm text-gray-600">Precision drills for creating holes before tapping.</p>
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
                    <p className="text-sm text-gray-600">
                      Tools for creating external threads on lathes and turning centers.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-whirling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Thread Whirling Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Whirling Tools
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized tools for high-speed thread production on Swiss-type machines.
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
