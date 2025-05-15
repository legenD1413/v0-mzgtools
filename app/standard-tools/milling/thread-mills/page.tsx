import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ThreadMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tm-001",
      name: "Single Profile Thread Mill",
      image: "/images/product-1.jpg",
      description: "Single profile thread mill for precise internal and external threading",
      diameter: "8mm",
      threadType: "Metric",
      threadSize: "M6-M12",
      material: "Carbide",
      coating: "TiAlN",
      series: "SP Series",
    },
    {
      id: "tm-002",
      name: "Multi-Profile Thread Mill",
      image: "/images/product-2.jpg",
      description: "Multi-profile thread mill for efficient threading of multiple sizes",
      diameter: "10mm",
      threadType: "Metric",
      threadSize: "M8-M16",
      material: "Carbide",
      coating: "AlTiN",
      series: "MP Series",
    },
    {
      id: "tm-003",
      name: "UN Thread Mill",
      image: "/images/product-3.jpg",
      description: "Thread mill for UN/UNC/UNF thread profiles in various materials",
      diameter: "12mm",
      threadType: "UN/UNC/UNF",
      threadSize: '1/4"-1"',
      material: "Carbide",
      coating: "TiCN",
      series: "UN Series",
    },
    {
      id: "tm-004",
      name: "NPT Thread Mill",
      image: "/images/product-4.jpg",
      description: "Specialized thread mill for NPT pipe threads",
      diameter: "16mm",
      threadType: "NPT",
      threadSize: '1/8"-1"',
      material: "Carbide",
      coating: "TiN",
      series: "NPT Series",
    },
    {
      id: "tm-005",
      name: "Fine Pitch Thread Mill",
      image: "/images/product-1.jpg",
      description: "Precision thread mill for fine pitch threads in medical and aerospace applications",
      diameter: "6mm",
      threadType: "Metric/UN",
      threadSize: "M3-M8 / #4-40 to 5/16-24",
      material: "Carbide",
      coating: "Diamond",
      series: "FP Series",
    },
    {
      id: "tm-006",
      name: "Helical Thread Mill",
      image: "/images/product-2.jpg",
      description: "Helical thread mill for high-efficiency threading operations",
      diameter: "14mm",
      threadType: "Metric/UN",
      threadSize: 'M10-M24 / 3/8"-1"',
      material: "Carbide",
      coating: "AlTiN",
      series: "HT Series",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thread Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision thread mills for efficient and accurate internal and external threading in a wide range of
                materials and thread profiles.
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
            <h2 className="text-2xl font-bold mb-4">About Thread Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's thread mills are precision-engineered cutting tools designed for creating internal
                  and external threads through milling operations. Unlike traditional taps, thread mills offer greater
                  flexibility, reduced risk of breakage, and the ability to produce threads in hardened materials.
                </p>
                <p className="mb-4">
                  Our thread mills feature advanced geometries and premium coatings to ensure optimal performance,
                  extended tool life, and precise thread profiles. With thread milling, a single tool can produce
                  multiple thread sizes, making it an economical and versatile threading solution.
                </p>
                <p>
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of thread mills provides solutions for every threading challenge. From standard metric and UN
                  threads to specialized profiles like NPT and BSPT, MZG thread mills deliver consistent, reliable
                  results.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Advantages of Thread Milling</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reduced risk of tool breakage</li>
                    <li>One tool for multiple thread sizes</li>
                    <li>Ability to thread hardened materials</li>
                    <li>Better chip evacuation</li>
                    <li>Excellent for blind holes</li>
                    <li>Ideal for low-volume production</li>
                    <li>Precise thread profile control</li>
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
                      <span className="font-medium">Thread Type:</span> {product.threadType}
                    </div>
                    <div>
                      <span className="font-medium">Thread Size:</span> {product.threadSize}
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
                <h3 className="text-lg font-bold mb-3">Thread Types Available</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Metric (M) threads</li>
                  <li>Unified (UN/UNC/UNF) threads</li>
                  <li>NPT/NPTF pipe threads</li>
                  <li>BSPT/BSPP pipe threads</li>
                  <li>Trapezoidal threads</li>
                  <li>ACME threads</li>
                  <li>Custom thread profiles</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Thread Milling Process</h3>
                <p className="mb-4">
                  Thread milling involves three coordinated movements: rotation of the tool, circular interpolation, and
                  linear movement along the hole axis. This process creates threads with excellent surface finish and
                  dimensional accuracy.
                </p>
                <p>
                  For optimal results, we recommend using MZG thread mills with high-quality tool holders and following
                  our recommended cutting parameters for specific materials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Thread Mill Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>
                    <strong>Single Profile:</strong> Creates one thread size per tool
                  </li>
                  <li>
                    <strong>Multi-Profile:</strong> Creates multiple thread sizes with one tool
                  </li>
                  <li>
                    <strong>Helical:</strong> For high-efficiency threading operations
                  </li>
                  <li>
                    <strong>Form:</strong> For specialized thread profiles
                  </li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Programming Considerations</h3>
                <p className="mb-4">
                  Thread milling requires helical interpolation capability on your CNC machine. Our technical team can
                  provide programming assistance and recommend optimal cutting parameters for your specific application.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Download Programming Guide</Button>
              </div>
            </div>
          </div>

          {/* Thread Calculator Section */}
          <div className="border rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Thread Calculator</h2>
            <p className="mb-6">
              Use our online thread calculator to determine the optimal cutting parameters for your specific thread
              milling application. Input your thread specifications and material to receive recommended speeds, feeds,
              and tool paths.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">Access Thread Calculator</Button>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/standard-tools/threading/taps" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-3.jpg" alt="Taps" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Taps</h3>
                    <p className="text-sm text-gray-600">
                      Traditional threading tools for a wide range of applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Thread Turning"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Turning
                    </h3>
                    <p className="text-sm text-gray-600">Thread turning tools for lathe operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-whirling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Thread Whirling"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Whirling
                    </h3>
                    <p className="text-sm text-gray-600">
                      High-efficiency thread whirling tools for specialized applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/threading/thread-milling-cutters" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Thread Milling Cutters"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Thread Milling Cutters
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized cutters for high-precision thread milling operations.
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
