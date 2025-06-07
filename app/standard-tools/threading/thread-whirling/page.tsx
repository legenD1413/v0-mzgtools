import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadWhirlingToolsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tw-001",
      name: "High Precision Whirling Head - Standard",
      image: "/images/product-1.jpg",
      description:
        "Standard whirling head for precision external thread production on medical implants and lead screws",
      threadDiameter: "1-16mm",
      insertType: "Carbide Inserts",
      material: "Tool Steel Body",
      coating: "TiAlN",
      series: "WH Standard Series",
    },
    {
      id: "tw-002",
      name: "Micro Whirling Head - Miniature",
      image: "/images/product-2.jpg",
      description: "Miniature whirling head for micro-threading applications in medical and precision industries",
      threadDiameter: "0.5-6mm",
      insertType: "Micro Carbide Inserts",
      material: "Tool Steel Body",
      coating: "TiCN",
      series: "WH Micro Series",
    },
    {
      id: "tw-003",
      name: "Whirling Inserts - Standard Profile",
      image: "/images/product-3.jpg",
      description: "Precision ground carbide inserts for standard thread profiles in whirling applications",
      threadProfile: "Standard Metric/Imperial",
      material: "Carbide",
      coating: "AlTiN",
      series: "WI Standard Series",
      quantity: "10 pcs/pack",
    },
    {
      id: "tw-004",
      name: "Whirling Inserts - Custom Profile",
      image: "/images/product-4.jpg",
      description: "Custom profile carbide inserts for specialized thread forms in whirling applications",
      threadProfile: "Custom",
      material: "Carbide",
      coating: "TiN",
      series: "WI Custom Series",
      quantity: "5 pcs/pack",
    },
    {
      id: "tw-005",
      name: "High-Speed Whirling Head - Advanced",
      image: "/images/product-1.jpg",
      description: "Advanced whirling head for high-speed production of precision external threads",
      threadDiameter: "3-24mm",
      insertType: "High-Performance Carbide Inserts",
      material: "Tool Steel Body with Vibration Dampening",
      coating: "AlTiN",
      series: "WH Advanced Series",
    },
    {
      id: "tw-006",
      name: "Whirling System - Complete Kit",
      image: "/images/product-2.jpg",
      description: "Complete whirling system including head, inserts, and adjustment tools for immediate setup",
      threadDiameter: "1-20mm",
      components: "Head, Inserts, Adjustment Tools",
      material: "Various",
      coating: "Various",
      series: "WH Complete Series",
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
              alt="Thread Whirling Tools Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thread Whirling Tools</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision thread whirling tools designed for efficient production of external threads on medical
                implants, bone screws, lead screws, and other precision components.
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
            <h2 className="text-2xl font-bold mb-4">About Thread Whirling Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Thread whirling is a highly specialized machining process used for producing external threads on long,
                  slender workpieces. MZG Tool Group's thread whirling tools are precision-engineered to deliver
                  superior performance in this demanding application, particularly in the medical, aerospace, and
                  precision engineering industries.
                </p>
                <p className="mb-4">
                  Our thread whirling heads feature multiple cutting inserts arranged in a circular pattern that rotate
                  around the workpiece while it turns slowly. This process removes material in a helical path to form
                  the thread profile, offering significant advantages over traditional threading methods for certain
                  applications.
                </p>
                <p>
                  MZG thread whirling tools are designed for maximum precision, productivity, and tool life. Our
                  comprehensive range includes standard and custom solutions to meet the most demanding threading
                  requirements, with expert technical support to ensure optimal performance in your specific
                  application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Key Advantages</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Up to 10x faster than single-point threading</li>
                    <li>Ideal for long, slender workpieces</li>
                    <li>Superior thread quality and surface finish</li>
                    <li>Reduced cycle times for high-volume production</li>
                    <li>Excellent for difficult-to-machine materials</li>
                    <li>Perfect for variable pitch and multi-start threads</li>
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
                    {product.threadDiameter && (
                      <div>
                        <span className="font-medium">Thread Diameter:</span> {product.threadDiameter}
                      </div>
                    )}
                    {product.threadProfile && (
                      <div>
                        <span className="font-medium">Thread Profile:</span> {product.threadProfile}
                      </div>
                    )}
                    {product.insertType && (
                      <div>
                        <span className="font-medium">Insert Type:</span> {product.insertType}
                      </div>
                    )}
                    {product.components && (
                      <div>
                        <span className="font-medium">Components:</span> {product.components}
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
                    </div>
                    <div>
                      <span className="font-medium">Coating:</span> {product.coating}
                    </div>
                    <div>
                      <span className="font-medium">Series:</span> {product.series}
                    </div>
                    {product.quantity && (
                      <div>
                        <span className="font-medium">Quantity:</span> {product.quantity}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Thread Whirling Process */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">The Thread Whirling Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">How Thread Whirling Works</h3>
                <p className="mb-4">
                  Thread whirling is a specialized machining process that uses a rotating cutting head with multiple
                  inserts to generate external threads. The process works as follows:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                  <li>The workpiece rotates slowly (typically 50-300 RPM)</li>
                  <li>
                    The whirling head, containing multiple cutting inserts, rotates at high speed (1,000-5,000 RPM)
                  </li>
                  <li>The whirling head is positioned at an angle equal to the thread helix angle</li>
                  <li>As the workpiece rotates, the whirling head removes material in a helical path</li>
                  <li>The process completes the thread in a single pass, significantly reducing cycle time</li>
                </ol>

                <h3 className="text-lg font-bold mb-3">Primary Applications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Medical implants and bone screws</li>
                  <li>High-precision lead screws</li>
                  <li>Ball screws for linear motion systems</li>
                  <li>Aerospace fasteners and components</li>
                  <li>Long, slender threaded shafts</li>
                  <li>Multi-start and variable pitch threads</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Advantages Over Traditional Threading</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border p-2 text-left">Feature</th>
                        <th className="border p-2 text-left">Thread Whirling</th>
                        <th className="border p-2 text-left">Single-Point Threading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Production Speed</td>
                        <td className="border p-2">Very High</td>
                        <td className="border p-2">Low</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Thread Quality</td>
                        <td className="border p-2">Excellent</td>
                        <td className="border p-2">Good</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Long, Slender Parts</td>
                        <td className="border p-2">Ideal</td>
                        <td className="border p-2">Challenging</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Multi-start Threads</td>
                        <td className="border p-2">Simple</td>
                        <td className="border p-2">Complex</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Tool Life</td>
                        <td className="border p-2">Extended</td>
                        <td className="border p-2">Limited</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Setup Complexity</td>
                        <td className="border p-2">Higher</td>
                        <td className="border p-2">Lower</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <p className="mb-4">
                  Thread whirling is particularly effective for difficult-to-machine materials commonly used in medical
                  and aerospace applications:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Titanium and titanium alloys</li>
                  <li>Stainless steel (including 316L medical grade)</li>
                  <li>Cobalt-chrome alloys</li>
                  <li>Inconel and other nickel-based superalloys</li>
                  <li>PEEK and other high-performance polymers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Whirling Head Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Standard precision whirling heads (1-16mm thread diameter)</li>
                  <li>Micro whirling heads (0.5-6mm thread diameter)</li>
                  <li>High-speed production whirling heads (3-24mm thread diameter)</li>
                  <li>Custom whirling heads for specialized applications</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Insert Options</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Standard profile inserts (metric, imperial, UN, UNF, etc.)</li>
                  <li>Custom profile inserts for specialized thread forms</li>
                  <li>Multiple coating options for different materials</li>
                  <li>Micro-grain carbide for extended tool life</li>
                  <li>PCD and CBN options for specialized applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Machine Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Swiss-type CNC lathes with thread whirling attachment</li>
                  <li>Multi-axis CNC turning centers with Y-axis capability</li>
                  <li>Specialized thread whirling machines</li>
                  <li>High-frequency spindle capability (up to 5,000 RPM)</li>
                  <li>Precise synchronization between workpiece and whirling head</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  MZG offers comprehensive customization services for thread whirling applications:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Custom thread profiles and forms</li>
                  <li>Special whirling head configurations</li>
                  <li>Application-specific insert geometries</li>
                  <li>Complete process development and optimization</li>
                  <li>On-site technical support and training</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/standard-tools/threading/thread-turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
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
                      Precision tools for turning external and internal threads on lathes.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-milling-cutters" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
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
                      Specialized cutters for milling internal and external threads.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/taps" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Taps"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Taps</h3>
                    <p className="text-sm text-gray-600">
                      Traditional tools for creating internal threads in pre-drilled holes.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
