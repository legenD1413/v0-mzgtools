import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadTurningToolsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tt-001",
      name: "External Thread Turning Insert - 60° Metric",
      image: "/images/product-1.jpg",
      description: "Precision insert for external metric thread turning operations",
      threadAngle: "60°",
      threadType: "Metric",
      material: "Carbide",
      coating: "TiAlN",
      series: "ET Series",
    },
    {
      id: "tt-002",
      name: "Internal Thread Turning Insert - 55° UN",
      image: "/images/product-2.jpg",
      description: "Specialized insert for internal unified thread turning",
      threadAngle: "55°",
      threadType: "UN/UNC/UNF",
      material: "Carbide",
      coating: "TiCN",
      series: "IT Series",
    },
    {
      id: "tt-003",
      name: "Full Profile Thread Insert - 60° API",
      image: "/images/product-3.jpg",
      description: "Full profile insert for oil and gas industry thread specifications",
      threadAngle: "60°",
      threadType: "API",
      material: "Carbide",
      coating: "AlTiN",
      series: "FP Series",
    },
    {
      id: "tt-004",
      name: "Multi-Point Thread Insert - 55° Whitworth",
      image: "/images/product-4.jpg",
      description: "Multi-point insert for high-efficiency thread turning",
      threadAngle: "55°",
      threadType: "Whitworth",
      material: "Carbide",
      coating: "TiN",
      series: "MP Series",
    },
    {
      id: "tt-005",
      name: "Partial Profile Thread Insert - 60° Metric",
      image: "/images/product-1.jpg",
      description: "Partial profile insert for high-precision metric threads",
      threadAngle: "60°",
      threadType: "Metric",
      material: "Carbide",
      coating: "AlTiN",
      series: "PP Series",
    },
    {
      id: "tt-006",
      name: "Thread Turning Tool Holder - External",
      image: "/images/product-2.jpg",
      description: "Precision tool holder for external thread turning operations",
      compatibility: "ISO Inserts",
      shankSize: "20mm",
      material: "Steel",
      coating: "Black Oxide",
      series: "TH Series",
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
              alt="Thread Turning Tools Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thread Turning Tools</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision thread turning tools designed for efficient and accurate thread production on lathes and
                turning centers, available for a wide range of thread specifications.
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
            <h2 className="text-2xl font-bold mb-4">About Thread Turning Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's thread turning tools are precision-engineered cutting tools designed for creating
                  external and internal threads on lathes and turning centers. Our comprehensive range includes inserts
                  and tool holders for all common thread standards and custom thread profiles.
                </p>
                <p className="mb-4">
                  Thread turning offers significant advantages over traditional threading methods, including higher
                  productivity, better surface finish, and the ability to produce threads in difficult-to-machine
                  materials. Our thread turning tools feature optimized geometries and premium coatings to ensure
                  precise thread profiles and extended tool life.
                </p>
                <p>
                  All MZG thread turning tools are manufactured to precise tolerances and undergo rigorous quality
                  control to ensure exceptional performance and reliability. Our technical experts are available to help
                  you select the right thread turning solution for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Advantages</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>High productivity and efficiency</li>
                    <li>Excellent thread surface finish</li>
                    <li>Precise thread profile control</li>
                    <li>Ability to machine difficult materials</li>
                    <li>Reduced cycle times</li>
                    <li>Cost-effective threading solution</li>
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
                    {product.threadAngle && (
                      <div>
                        <span className="font-medium">Thread Angle:</span> {product.threadAngle}
                      </div>
                    )}
                    {product.threadType && (
                      <div>
                        <span className="font-medium">Thread Type:</span> {product.threadType}
                      </div>
                    )}
                    {product.compatibility && (
                      <div>
                        <span className="font-medium">Compatibility:</span> {product.compatibility}
                      </div>
                    )}
                    {product.shankSize && (
                      <div>
                        <span className="font-medium">Shank Size:</span> {product.shankSize}
                      </div>
                    )}
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
                <h3 className="text-lg font-bold mb-3">Thread Turning Insert Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>
                    <span className="font-medium">Full Profile:</span> For complete thread profile in one pass
                  </li>
                  <li>
                    <span className="font-medium">Partial Profile:</span> For high precision thread profiles
                  </li>
                  <li>
                    <span className="font-medium">Multi-Point:</span> For high-efficiency threading
                  </li>
                  <li>
                    <span className="font-medium">Single-Point:</span> For versatile threading applications
                  </li>
                  <li>
                    <span className="font-medium">Internal Threading:</span> Specialized for internal threads
                  </li>
                  <li>
                    <span className="font-medium">External Threading:</span> Optimized for external threads
                  </li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Standards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metric (M): 60° thread angle</li>
                  <li>Unified (UN/UNC/UNF): 60° thread angle</li>
                  <li>Whitworth (BSW/BSF): 55° thread angle</li>
                  <li>Pipe Threads (NPT/NPTF/G): 60° thread angle with taper</li>
                  <li>Trapezoidal (Tr): 30° thread angle</li>
                  <li>API: Oil and gas industry standards</li>
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
                  <li>Hardened materials (up to 45 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Heat-resistant superalloys (HRSA)</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Turning Parameters</h3>
                <p className="mb-4">
                  Proper thread turning parameters are essential for optimal results. MZG provides comprehensive cutting
                  data recommendations for each thread turning insert, including cutting speeds, feed rates, and
                  programming guidance.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Download Thread Turning Guide</Button>
              </div>
            </div>
          </div>

          {/* Thread Turning vs Other Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Thread Turning vs. Other Threading Methods</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Feature</th>
                    <th className="border px-4 py-2 text-left">Thread Turning</th>
                    <th className="border px-4 py-2 text-left">Thread Milling</th>
                    <th className="border px-4 py-2 text-left">Tapping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Machine Type</td>
                    <td className="border px-4 py-2">Lathe/Turning Center</td>
                    <td className="border px-4 py-2">Milling Machine/Machining Center</td>
                    <td className="border px-4 py-2">Any with spindle control</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Productivity</td>
                    <td className="border px-4 py-2">High</td>
                    <td className="border px-4 py-2">Medium</td>
                    <td className="border px-4 py-2">Low-Medium</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Thread Quality</td>
                    <td className="border px-4 py-2">Excellent</td>
                    <td className="border px-4 py-2">Very Good</td>
                    <td className="border px-4 py-2">Good</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Thread Size Flexibility</td>
                    <td className="border px-4 py-2">High with same insert</td>
                    <td className="border px-4 py-2">Medium</td>
                    <td className="border px-4 py-2">Low (one size per tap)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Hardened Materials</td>
                    <td className="border px-4 py-2">Good capability</td>
                    <td className="border px-4 py-2">Excellent capability</td>
                    <td className="border px-4 py-2">Limited capability</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Tool Cost</td>
                    <td className="border px-4 py-2">Medium (indexable)</td>
                    <td className="border px-4 py-2">Medium-High</td>
                    <td className="border px-4 py-2">Low-Medium</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium">Programming Complexity</td>
                    <td className="border px-4 py-2">Medium</td>
                    <td className="border px-4 py-2">High</td>
                    <td className="border px-4 py-2">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Thread Turning Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Thread Turning Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Process Steps</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Tool Selection:</span> Choose the appropriate insert and holder for
                    the thread specification
                  </li>
                  <li>
                    <span className="font-medium">Workpiece Preparation:</span> Turn the workpiece to the major diameter
                    for external threads or bore to the minor diameter for internal threads
                  </li>
                  <li>
                    <span className="font-medium">Threading Setup:</span> Set the correct feed rate equal to the thread
                    pitch and synchronize with spindle rotation
                  </li>
                  <li>
                    <span className="font-medium">Infeed Strategy:</span> Select radial, flank, or incremental infeed
                    method based on material and thread requirements
                  </li>
                  <li>
                    <span className="font-medium">Thread Cutting:</span> Execute multiple passes with decreasing depth
                    to achieve the final thread profile
                  </li>
                  <li>
                    <span className="font-medium">Thread Verification:</span> Measure the thread using appropriate
                    gauges to ensure dimensional accuracy
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Infeed Strategies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Radial Infeed</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      The tool feeds directly into the workpiece perpendicular to the thread axis. Suitable for most
                      materials but can cause higher cutting forces.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Flank Infeed</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      The tool feeds along one flank of the thread profile. Reduces cutting forces and improves surface
                      finish, ideal for difficult materials.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Incremental Infeed</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Alternates the infeed direction between both flanks. Provides the best thread surface finish and
                      tool life for challenging applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Modified Flank Infeed</h4>
                    <p className="text-sm text-gray-600">
                      Combines radial and flank infeed methods. Balances cutting forces and surface finish requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/standard-tools/threading/thread-milling-cutters" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Thread Milling Cutters"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Milling Cutters
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized milling tools for creating threads on machining centers.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/taps" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
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
              <Link href="/standard-tools/inserts/threading" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Threading Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Threading Inserts
                    </h3>
                    <p className="text-sm text-gray-600">
                      Replacement inserts for various thread turning applications.
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
