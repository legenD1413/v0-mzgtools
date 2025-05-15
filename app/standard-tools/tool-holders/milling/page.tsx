import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MillingToolHoldersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "mth-001",
      name: "SK40 End Mill Holder",
      image: "/images/product-1.jpg",
      description: "Precision SK40 end mill holder for high-speed machining",
      shankType: "SK40",
      diameter: "16mm",
      material: "Alloy Steel",
      runout: "< 0.003mm",
      series: "Standard Series",
    },
    {
      id: "mth-002",
      name: "BT30 Collet Chuck",
      image: "/images/product-2.jpg",
      description: "BT30 collet chuck with ER32 collet system for versatile tool holding",
      shankType: "BT30",
      diameter: "ER32",
      material: "Alloy Steel",
      runout: "< 0.005mm",
      series: "Precision Series",
    },
    {
      id: "mth-003",
      name: "HSK63A Shrink Fit Holder",
      image: "/images/product-3.jpg",
      description: "HSK63A shrink fit tool holder for maximum rigidity and precision",
      shankType: "HSK63A",
      diameter: "12mm",
      material: "Tool Steel",
      runout: "< 0.002mm",
      series: "Premium Series",
    },
    {
      id: "mth-004",
      name: "CAT50 Face Mill Arbor",
      image: "/images/product-4.jpg",
      description: "CAT50 face mill arbor for heavy-duty face milling operations",
      shankType: "CAT50",
      diameter: "27mm",
      material: "Alloy Steel",
      runout: "< 0.005mm",
      series: "Heavy Duty Series",
    },
    {
      id: "mth-005",
      name: "BT40 Shell Mill Holder",
      image: "/images/product-1.jpg",
      description: "BT40 shell mill holder for efficient face milling operations",
      shankType: "BT40",
      diameter: "40mm",
      material: "Alloy Steel",
      runout: "< 0.004mm",
      series: "Standard Series",
    },
    {
      id: "mth-006",
      name: "HSK100A Hydraulic Chuck",
      image: "/images/product-2.jpg",
      description: "HSK100A hydraulic chuck for precision and vibration-free machining",
      shankType: "HSK100A",
      diameter: "20mm",
      material: "Tool Steel",
      runout: "< 0.003mm",
      series: "Premium Series",
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
              src="/images/tool-holders.jpg"
              alt="Milling Tool Holders Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Milling Tool Holders</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision milling tool holders designed for optimal tool performance, maximum rigidity, and
                superior results across a wide range of machining applications.
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
            <h2 className="text-2xl font-bold mb-4">About Milling Tool Holders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's milling tool holders are precision-engineered to provide optimal tool performance and
                  machining results. Our tool holders feature superior clamping force, excellent runout accuracy, and
                  high rigidity to ensure stable and precise machining operations.
                </p>
                <p className="mb-4">
                  Whether you're working with high-speed machining centers, heavy-duty milling machines, or precision
                  applications, our comprehensive range of milling tool holders provides solutions for every machining
                  challenge. From standard tool holders to specialized designs, MZG tool holders deliver consistent,
                  reliable results in the most demanding environments.
                </p>
                <p>
                  All MZG milling tool holders are manufactured to precise tolerances and undergo rigorous quality
                  control to ensure exceptional performance and reliability. Our technical experts are available to help
                  you select the right tool holder for your specific application and machine interface.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>End milling operations</li>
                    <li>Face milling operations</li>
                    <li>High-speed machining</li>
                    <li>Heavy-duty machining</li>
                    <li>Precision machining</li>
                    <li>Multi-axis machining</li>
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
                      <span className="font-medium">Shank Type:</span> {product.shankType}
                    </div>
                    <div>
                      <span className="font-medium">Diameter:</span> {product.diameter}
                    </div>
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
                    </div>
                    <div>
                      <span className="font-medium">Runout:</span> {product.runout}
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
                <h3 className="text-lg font-bold mb-3">Tool Holder Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Collet chucks (ER, TG, YG systems)</li>
                  <li>End mill holders</li>
                  <li>Face mill arbors</li>
                  <li>Shell mill holders</li>
                  <li>Shrink fit holders</li>
                  <li>Hydraulic chucks</li>
                  <li>Milling chucks</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Machine Interfaces</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>SK/ISO (30, 40, 50)</li>
                  <li>BT (30, 40, 50)</li>
                  <li>CAT (30, 40, 50, 60)</li>
                  <li>HSK (A32, A40, A50, A63, A100)</li>
                  <li>BBT (30, 40, 50)</li>
                  <li>Other interfaces available upon request</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Standard and extended lengths</li>
                  <li>Coolant-through capability</li>
                  <li>Balanced to G2.5 @ 25,000 RPM</li>
                  <li>Special coatings for wear resistance</li>
                  <li>Anti-pull-out systems</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified standard tool holder? MZG can customize our standard milling tool holders to meet your
                  specific requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/tool-holders/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Turning Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for various turning applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/boring" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Boring Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Boring Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for precision boring operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Milling Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Indexable inserts for milling tool holders.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/collet-chucks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Collet Chucks"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Collet Chucks</h3>
                    <p className="text-sm text-gray-600">Versatile tool holding solutions for various applications.</p>
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
