import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TurningToolHoldersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tth-001",
      name: "External Turning Tool Holder - SCLCR",
      image: "/images/product-1.jpg",
      description: "Right-hand external turning tool holder for general purpose turning operations",
      shankSize: "20mm × 20mm",
      length: "125mm",
      insertType: "CCMT / CCGT",
      material: "Alloy Steel",
      series: "SCLCR Series",
    },
    {
      id: "tth-002",
      name: "Internal Boring Bar - S16Q-SDUCR",
      image: "/images/product-2.jpg",
      description: "Internal boring bar for precision boring operations",
      shankSize: "16mm",
      length: "180mm",
      insertType: "DCMT / DCGT",
      material: "Carbide Reinforced Steel",
      series: "SDUCR Series",
    },
    {
      id: "tth-003",
      name: "Threading Tool Holder - SER",
      image: "/images/product-3.jpg",
      description: "External threading tool holder for metric and inch threads",
      shankSize: "25mm × 25mm",
      length: "150mm",
      insertType: "16ER / 16IR",
      material: "Alloy Steel",
      series: "SER Series",
    },
    {
      id: "tth-004",
      name: "Grooving Tool Holder - MGEHR",
      image: "/images/product-4.jpg",
      description: "External grooving and parting tool holder",
      shankSize: "20mm × 20mm",
      length: "125mm",
      insertType: "MGMN / MRMN",
      material: "Alloy Steel",
      series: "MGEHR Series",
    },
    {
      id: "tth-005",
      name: "Face Grooving Tool Holder - CFIR",
      image: "/images/product-1.jpg",
      description: "Face grooving tool holder for precision face grooves",
      shankSize: "25mm × 25mm",
      length: "150mm",
      insertType: "LCMF / LCMX",
      material: "Alloy Steel",
      series: "CFIR Series",
    },
    {
      id: "tth-006",
      name: "Quick Change Tool Post Set",
      image: "/images/product-2.jpg",
      description: "Complete quick change tool post set for lathes",
      shankSize: "Various",
      length: "N/A",
      insertType: "Various",
      material: "Hardened Steel",
      series: "QC Series",
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
              alt="Turning Tool Holders Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Turning Tool Holders</h1>
              <p className="text-lg md:text-xl mb-8">
                High-quality turning tool holders designed for precision, stability, and superior performance in a wide
                range of turning applications.
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
            <h2 className="text-2xl font-bold mb-4">About Turning Tool Holders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's turning tool holders are precision-engineered to provide optimal performance and
                  reliability in turning operations. Our tool holders feature rigid construction, precise insert
                  locating systems, and excellent vibration dampening characteristics to ensure superior surface
                  finishes and extended tool life.
                </p>
                <p className="mb-4">
                  Whether you're performing external turning, internal boring, threading, or grooving operations, our
                  comprehensive range of tool holders provides solutions for every turning challenge. From
                  general-purpose to application-specific designs, MZG turning tool holders deliver consistent, reliable
                  results in the most demanding environments.
                </p>
                <p>
                  All MZG turning tool holders are manufactured to precise tolerances and undergo rigorous quality
                  control to ensure exceptional performance and reliability. Our technical experts are available to help
                  you select the right tool holder for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>External turning and facing</li>
                    <li>Internal boring</li>
                    <li>Threading (external and internal)</li>
                    <li>Grooving and parting</li>
                    <li>Profiling and contouring</li>
                    <li>Heavy-duty roughing</li>
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
                      <span className="font-medium">Shank Size:</span> {product.shankSize}
                    </div>
                    <div>
                      <span className="font-medium">Length:</span> {product.length}
                    </div>
                    <div>
                      <span className="font-medium">Insert Type:</span> {product.insertType}
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
                <h3 className="text-lg font-bold mb-3">Tool Holder Systems</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>ISO/ANSI standard turning tool holders</li>
                  <li>Quick-change tool post systems</li>
                  <li>VDI turret tool holders</li>
                  <li>BMT turret tool holders</li>
                  <li>Capto® tool holders</li>
                  <li>HSK tool holders for mill-turn centers</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Styles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>External turning tool holders (SCLCR, PCLNR, SVJBR, etc.)</li>
                  <li>Internal boring bars (S-SDUCR, S-SDNCN, etc.)</li>
                  <li>Threading tool holders (SER, SNR, etc.)</li>
                  <li>Grooving and parting tool holders (MGEHR, GHDR, etc.)</li>
                  <li>Face grooving tool holders (CFIR, TGFR, etc.)</li>
                  <li>Custom tool holders available upon request</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Shank sizes: 10mm to 50mm (square and round)</li>
                  <li>Right-hand and left-hand configurations</li>
                  <li>Standard and long-reach versions</li>
                  <li>Internal coolant capability</li>
                  <li>Anti-vibration boring bars</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified standard tool holder? MZG can customize our standard turning tool holders to meet your
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
              <Link href="/standard-tools/inserts/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Turning Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Inserts
                    </h3>
                    <p className="text-sm text-gray-600">High-performance inserts for all turning applications.</p>
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
              <Link href="/standard-tools/tool-holders/drilling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Drilling Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Drilling Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for drilling and hole-making operations.</p>
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
