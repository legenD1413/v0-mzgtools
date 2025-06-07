import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadMillingCuttersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tmc-001",
      name: "Single Profile Thread Mill - M8-M16",
      image: "/images/product-1.jpg",
      description: "Single profile thread mill for internal and external metric threads M8-M16",
      threadSize: "M8-M16",
      threadType: "Metric",
      diameter: "8mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "SP Series",
    },
    {
      id: "tmc-002",
      name: 'Multi-Profile Thread Mill - 1/4"-3/4" UNC/UNF',
      image: "/images/product-2.jpg",
      description: "Multi-profile thread mill for internal and external unified threads",
      threadSize: '1/4"-3/4"',
      threadType: "UNC/UNF",
      diameter: "10mm",
      material: "Carbide",
      coating: "TiCN",
      series: "MP Series",
    },
    {
      id: "tmc-003",
      name: "Helical Thread Mill - M20-M36",
      image: "/images/product-3.jpg",
      description: "Helical thread mill for large metric threads with high efficiency",
      threadSize: "M20-M36",
      threadType: "Metric",
      diameter: "16mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "HT Series",
    },
    {
      id: "tmc-004",
      name: 'NPT Thread Mill - 1/8"-1" NPT',
      image: "/images/product-4.jpg",
      description: "Specialized thread mill for tapered pipe threads",
      threadSize: '1/8"-1"',
      threadType: "NPT/NPTF",
      diameter: "12mm",
      material: "Carbide",
      coating: "TiN",
      series: "PT Series",
    },
    {
      id: "tmc-005",
      name: "Form Thread Mill - M3-M12",
      image: "/images/product-1.jpg",
      description: "Form thread mill for precise thread profiles in hardened materials",
      threadSize: "M3-M12",
      threadType: "Metric",
      diameter: "6mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "FT Series",
    },
    {
      id: "tmc-006",
      name: "Universal Thread Mill - Multiple Thread Types",
      image: "/images/product-2.jpg",
      description: "Universal thread mill capable of producing multiple thread types and sizes",
      threadSize: "Various",
      threadType: "Multiple",
      diameter: "10mm",
      material: "Carbide",
      coating: "TiCN",
      series: "UT Series",
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
              alt="Thread Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thread Milling Cutters</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision thread milling cutters designed for efficient and accurate thread production in a wide range
                of materials and thread specifications.
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
            <h2 className="text-2xl font-bold mb-4">About Thread Milling Cutters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's thread milling cutters are precision-engineered tools designed for creating internal
                  and external threads through a milling process. Unlike traditional tapping, thread milling offers
                  greater flexibility, reduced risk of tool breakage, and the ability to produce threads in hardened
                  materials.
                </p>
                <p className="mb-4">
                  Our thread milling cutters feature optimized geometries and premium coatings to ensure precise thread
                  profiles, extended tool life, and superior surface finishes. The thread milling process allows for the
                  production of threads in a wide range of materials, from aluminum to hardened steels and exotic
                  alloys.
                </p>
                <p>
                  All MZG thread milling cutters are manufactured to precise tolerances and undergo rigorous quality
                  control to ensure exceptional performance and reliability. Our technical experts are available to help
                  you select the right thread milling solution for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Advantages</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reduced risk of tool breakage</li>
                    <li>One tool for multiple thread sizes</li>
                    <li>Ability to thread hardened materials</li>
                    <li>Better thread quality and surface finish</li>
                    <li>Left and right-hand threads with same tool</li>
                    <li>Ideal for low-volume, high-mix production</li>
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
                      <span className="font-medium">Diameter:</span> {product.diameter}
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
                <h3 className="text-lg font-bold mb-3">Thread Milling Cutter Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>
                    <span className="font-medium">Single Profile:</span> For specific thread size and pitch
                  </li>
                  <li>
                    <span className="font-medium">Multi-Profile:</span> For range of thread sizes with same pitch
                  </li>
                  <li>
                    <span className="font-medium">Helical:</span> For large diameter threads with high efficiency
                  </li>
                  <li>
                    <span className="font-medium">Form:</span> For specialized thread profiles
                  </li>
                  <li>
                    <span className="font-medium">Universal:</span> For multiple thread types and sizes
                  </li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Standards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metric (M): M1 to M68</li>
                  <li>Unified (UN/UNC/UNF): #0 to 2"</li>
                  <li>Pipe Threads (NPT/NPTF/G): 1/16" to 2"</li>
                  <li>Trapezoidal (Tr): Tr8 to Tr60</li>
                  <li>Whitworth (BSW/BSF): 1/16" to 2"</li>
                  <li>Custom thread profiles available upon request</li>
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

                <h3 className="text-lg font-bold mb-3">Thread Milling Parameters</h3>
                <p className="mb-4">
                  Proper thread milling parameters are essential for optimal results. MZG provides comprehensive cutting
                  data recommendations for each thread milling cutter, including cutting speeds, feed rates, and
                  programming guidance.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Download Thread Milling Guide</Button>
              </div>
            </div>
          </div>

          {/* Thread Milling vs Tapping */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Thread Milling vs. Tapping</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Feature</th>
                    <th className="border px-4 py-2 text-left">Thread Milling</th>
                    <th className="border px-4 py-2 text-left">Tapping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Tool Breakage Risk</td>
                    <td className="border px-4 py-2">Low - tool can be easily retracted</td>
                    <td className="border px-4 py-2">High - especially in blind holes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Thread Size Flexibility</td>
                    <td className="border px-4 py-2">One tool for multiple sizes</td>
                    <td className="border px-4 py-2">One tap per thread size</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Hardened Materials</td>
                    <td className="border px-4 py-2">Excellent capability</td>
                    <td className="border px-4 py-2">Limited capability</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Thread Direction</td>
                    <td className="border px-4 py-2">Both left and right-hand with same tool</td>
                    <td className="border px-4 py-2">Requires specific tap for each direction</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Chip Evacuation</td>
                    <td className="border px-4 py-2">Excellent - small chips</td>
                    <td className="border px-4 py-2">Challenging in deep holes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Thread Quality</td>
                    <td className="border px-4 py-2">High precision and surface finish</td>
                    <td className="border px-4 py-2">Good for standard applications</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Programming Complexity</td>
                    <td className="border px-4 py-2">Higher - requires helical interpolation</td>
                    <td className="border px-4 py-2">Lower - linear movement</td>
                  </tr>
                </tbody>
              </table>
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
              <Link href="/standard-tools/threading/thread-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Thread Mills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Thread Mills</h3>
                    <p className="text-sm text-gray-600">Versatile tools for thread milling operations.</p>
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
                    <p className="text-sm text-gray-600">
                      Specialized inserts and tools for thread turning operations.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-whirling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
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
                    <p className="text-sm text-gray-600">High-efficiency tools for long thread production.</p>
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
