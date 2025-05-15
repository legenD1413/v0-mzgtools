import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AdaptersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "adp-001",
      name: "HSK63A-ER32 Adapter",
      image: "/images/product-1.jpg",
      description: "Premium HSK to ER collet chuck adapter for high-precision applications",
      shankType: "HSK63A",
      colletType: "ER32",
      runout: "< 0.003mm",
      material: "Alloy Steel",
      series: "HSK-ER Series",
    },
    {
      id: "adp-002",
      name: "BT40-ER32 Adapter",
      image: "/images/product-2.jpg",
      description: "High-precision BT to ER adapter for versatile tool holding",
      shankType: "BT40",
      colletType: "ER32",
      runout: "< 0.005mm",
      material: "Hardened Steel",
      series: "BT-ER Series",
    },
    {
      id: "adp-003",
      name: "MT3-ER20 Adapter",
      image: "/images/product-3.jpg",
      description: "Morse taper to ER collet adapter for conventional machines",
      shankType: "MT3",
      colletType: "ER20",
      runout: "< 0.008mm",
      material: "Alloy Steel",
      series: "MT-ER Series",
    },
    {
      id: "adp-004",
      name: "HSK63A Shrink Fit Adapter",
      image: "/images/product-4.jpg",
      description: "Premium shrink fit adapter for high-speed machining applications",
      shankType: "HSK63A",
      colletType: "Shrink Fit Ø12mm",
      runout: "< 0.003mm",
      material: "Tool Steel",
      series: "HSK-SF Series",
    },
    {
      id: "adp-005",
      name: "SK40-ER32 Adapter",
      image: "/images/product-1.jpg",
      description: "SK shank to ER collet chuck adapter for versatile machining",
      shankType: "SK40",
      colletType: "ER32",
      runout: "< 0.005mm",
      material: "Alloy Steel",
      series: "SK-ER Series",
    },
    {
      id: "adp-006",
      name: "BT30-Weldon Ø20mm Adapter",
      image: "/images/product-2.jpg",
      description: "BT shank to Weldon adapter for secure side-lock tool holding",
      shankType: "BT30",
      colletType: "Weldon Ø20mm",
      runout: "< 0.005mm",
      material: "Hardened Steel",
      series: "BT-WD Series",
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
              src="/images/adapters-hero.png"
              alt="Tool Holder Adapters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tool Holder Adapters</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision adapters for optimal tool holding and performance in various machining applications.
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
            <h2 className="text-2xl font-bold mb-4">About Tool Holder Adapters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's tool holder adapters are precision-engineered to provide optimal performance and
                  reliability in various machining operations. Our adapters feature rigid construction, precise locating
                  systems, and excellent runout accuracy to ensure superior machining results and extended tool life.
                </p>
                <p className="mb-4">
                  Whether you're connecting different tooling systems or need specialized adapters for specific
                  applications, our comprehensive range of adapters provides solutions for every machining challenge.
                  From HSK to ER, BT to Weldon, and many more combinations, MZG adapters deliver consistent, reliable
                  results in the most demanding environments.
                </p>
                <p>
                  All MZG tool holder adapters are manufactured to precise tolerances and undergo rigorous quality
                  control to ensure exceptional performance and reliability. Our technical experts are available to help
                  you select the right adapter for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>High-speed machining</li>
                    <li>Precision milling</li>
                    <li>Drilling operations</li>
                    <li>Tapping applications</li>
                    <li>Reaming and boring</li>
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
                      <span className="font-medium">Collet Type:</span> {product.colletType}
                    </div>
                    <div>
                      <span className="font-medium">Runout:</span> {product.runout}
                    </div>
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
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
                <h3 className="text-lg font-bold mb-3">Adapter Systems</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>HSK to ER adapters (HSK32-HSK100)</li>
                  <li>BT to ER adapters (BT30-BT50)</li>
                  <li>SK to ER adapters (SK30-SK50)</li>
                  <li>Morse taper adapters (MT1-MT5)</li>
                  <li>Weldon adapters (Ø6-Ø32mm)</li>
                  <li>Shrink fit adapters (Ø3-Ø32mm)</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Styles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ER collet chuck adapters (ER11-ER40)</li>
                  <li>Weldon side-lock adapters</li>
                  <li>Shrink fit adapters</li>
                  <li>Hydraulic chuck adapters</li>
                  <li>Milling chuck adapters</li>
                  <li>Custom adapters available upon request</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Performance Specifications</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Runout accuracy: 0.003mm to 0.008mm</li>
                  <li>Balance grade: G2.5 at 25,000 RPM</li>
                  <li>Maximum speed: up to 25,000 RPM</li>
                  <li>Coolant-through capability available</li>
                  <li>Heat-resistant up to 180°C</li>
                  <li>Hardness: 58-62 HRC</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized adapter? MZG can customize our standard adapters to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/tool-holders/collet-chucks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Collet Chucks"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Collet Chucks</h3>
                    <p className="text-sm text-gray-600">High-precision collet chucks for various applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Milling Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for various milling applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Turning Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for turning and facing operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/boring" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
