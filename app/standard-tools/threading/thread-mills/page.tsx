import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadMillingPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tm-001",
      name: "Single Profile Thread Mill",
      image: "/images/product-1.jpg",
      description: "Single profile thread mill for precise thread milling in various materials",
      threadSize: "M6-M16",
      threadType: "Metric",
      flutes: 3,
      material: "Carbide",
      coating: "TiAlN",
      series: "SP Series",
    },
    {
      id: "tm-002",
      name: "Multi-Profile Thread Mill",
      image: "/images/product-2.jpg",
      description: "Multi-profile thread mill for multiple thread sizes with one tool",
      threadSize: "M8-M20",
      threadType: "Metric",
      flutes: 3,
      material: "Carbide",
      coating: "TiCN",
      series: "MP Series",
    },
    {
      id: "tm-003",
      name: "Helical Thread Mill",
      image: "/images/product-3.jpg",
      description: "Helical thread mill for high-efficiency thread milling in one pass",
      threadSize: '1/4"-1"',
      threadType: "UN/UNC/UNF",
      flutes: 5,
      material: "Carbide",
      coating: "AlTiN",
      series: "HT Series",
    },
    {
      id: "tm-004",
      name: "Form Thread Mill",
      image: "/images/product-4.jpg",
      description: "Form thread mill for specialized thread profiles and custom applications",
      threadSize: "M10-M24",
      threadType: "Metric",
      flutes: 4,
      material: "Carbide",
      coating: "TiN",
      series: "FT Series",
    },
    {
      id: "tm-005",
      name: "NPT Thread Mill",
      image: "/images/product-1.jpg",
      description: "Specialized thread mill for NPT/NPTF pipe threads",
      threadSize: '1/8"-1"',
      threadType: "NPT/NPTF",
      flutes: 3,
      material: "Carbide",
      coating: "TiAlN",
      series: "PT Series",
    },
    {
      id: "tm-006",
      name: "Micro Thread Mill",
      image: "/images/product-2.jpg",
      description: "Precision micro thread mill for small thread sizes",
      threadSize: "M1-M5",
      threadType: "Metric",
      flutes: 3,
      material: "Carbide",
      coating: "DLC",
      series: "MT Series",
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
              alt="Thread Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thread Milling</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision thread mills designed for efficient thread production with superior control, flexibility,
                and thread quality across a wide range of materials.
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
            <h2 className="text-2xl font-bold mb-4">About Thread Milling</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's thread mills are precision-engineered cutting tools designed for creating internal
                  and external threads using a milling process. Unlike taps, thread mills rotate about their own axis
                  while simultaneously following a helical toolpath, offering significant advantages in flexibility and
                  control.
                </p>
                <p className="mb-4">
                  Thread milling allows for the production of various thread sizes with a single tool, reducing
                  inventory requirements and increasing versatility. The process also enables threading in hard
                  materials, blind holes, and thin-walled components with reduced risk of tool breakage.
                </p>
                <p>
                  All MZG thread mills are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right thread mill for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Advantages</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Lower risk of tool breakage</li>
                    <li>One tool for multiple thread sizes</li>
                    <li>Suitable for hard materials</li>
                    <li>Ideal for blind holes</li>
                    <li>Better chip evacuation</li>
                    <li>Left and right-hand threads with same tool</li>
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
                <div className="relative" style={{ paddingTop: "50%" }}>
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
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
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

          {/* Thread Milling vs. Tapping */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Thread Milling vs. Tapping</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-left">Thread Milling</th>
                    <th className="border p-3 text-left">Tapping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Tool Breakage Risk</td>
                    <td className="border p-3">Low - can be easily retracted</td>
                    <td className="border p-3">High - especially in blind holes</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Thread Size Flexibility</td>
                    <td className="border p-3">High - one tool for multiple sizes</td>
                    <td className="border p-3">Low - one tap per thread size</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Hard Materials</td>
                    <td className="border p-3">Excellent performance</td>
                    <td className="border p-3">Limited performance</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Chip Evacuation</td>
                    <td className="border p-3">Excellent</td>
                    <td className="border p-3">Challenging in blind holes</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Thread Direction</td>
                    <td className="border p-3">Both left and right with same tool</td>
                    <td className="border p-3">Requires specific tap for each direction</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Process Speed</td>
                    <td className="border p-3">Slower for single threads</td>
                    <td className="border p-3">Faster for single threads</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Thin-Walled Components</td>
                    <td className="border p-3">Ideal - lower radial forces</td>
                    <td className="border p-3">Challenging - higher radial forces</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Thread Mill Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Single Profile - for specific thread sizes</li>
                  <li>Multi-Profile - for multiple thread sizes</li>
                  <li>Helical - for single-pass thread milling</li>
                  <li>Form - for specialized thread profiles</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Standards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metric (M)</li>
                  <li>Unified (UN/UNC/UNF)</li>
                  <li>Pipe Threads (NPT/NPTF)</li>
                  <li>Whitworth (BSW/BSF)</li>
                  <li>Trapezoidal</li>
                  <li>Custom profiles available</li>
                </ul>
              </div>
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

                <h3 className="text-lg font-bold mb-3">Programming Considerations</h3>
                <p className="mb-4">
                  Thread milling requires helical interpolation capability on your CNC machine. Our technical team can
                  provide programming assistance and recommendations for optimal thread milling parameters.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Technical Support</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/standard-tools/threading/taps" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Taps"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Taps</h3>
                    <p className="text-sm text-gray-600">
                      Traditional threading tools for a wide range of applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/end-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="End Mills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">End Mills</h3>
                    <p className="text-sm text-gray-600">Versatile cutting tools for various milling operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Thread Turning"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Turning
                    </h3>
                    <p className="text-sm text-gray-600">Tools for creating threads on lathes and turning centers.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-whirling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Thread Whirling"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Whirling
                    </h3>
                    <p className="text-sm text-gray-600">Specialized tools for high-precision thread production.</p>
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
