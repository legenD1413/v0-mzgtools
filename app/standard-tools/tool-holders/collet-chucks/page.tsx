import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ColletChucksPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "cc-001",
      name: "ER32 Collet Chuck BT40",
      image: "/images/product-1.jpg",
      description: "Precision ER32 collet chuck with BT40 shank for versatile tool holding",
      colletType: "ER32",
      shankType: "BT40",
      runout: "< 0.005mm",
      clampingRange: "2-20mm",
      series: "Standard Series",
    },
    {
      id: "cc-002",
      name: "ER16 Collet Chuck HSK63A",
      image: "/images/product-2.jpg",
      description: "High-precision ER16 collet chuck with HSK63A interface for high-speed machining",
      colletType: "ER16",
      shankType: "HSK63A",
      runout: "< 0.003mm",
      clampingRange: "1-10mm",
      series: "Precision Series",
    },
    {
      id: "cc-003",
      name: "TG100 Collet Chuck CAT50",
      image: "/images/product-3.jpg",
      description: "Heavy-duty TG100 collet chuck with CAT50 shank for powerful machining operations",
      colletType: "TG100",
      shankType: "CAT50",
      runout: "< 0.008mm",
      clampingRange: "10-32mm",
      series: "Heavy Duty Series",
    },
    {
      id: "cc-004",
      name: "ER40 Collet Chuck SK40",
      image: "/images/product-4.jpg",
      description: "Versatile ER40 collet chuck with SK40 shank for general milling applications",
      colletType: "ER40",
      shankType: "SK40",
      runout: "< 0.005mm",
      clampingRange: "3-26mm",
      series: "Standard Series",
    },
    {
      id: "cc-005",
      name: "ER20 Collet Chuck BT30",
      image: "/images/product-1.jpg",
      description: "Compact ER20 collet chuck with BT30 shank for small to medium machining centers",
      colletType: "ER20",
      shankType: "BT30",
      runout: "< 0.004mm",
      clampingRange: "1-13mm",
      series: "Precision Series",
    },
    {
      id: "cc-006",
      name: "YG16 Collet Chuck HSK100A",
      image: "/images/product-2.jpg",
      description: "High-performance YG16 collet chuck with HSK100A interface for heavy-duty machining",
      colletType: "YG16",
      shankType: "HSK100A",
      runout: "< 0.006mm",
      clampingRange: "6-42mm",
      series: "Heavy Duty Series",
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
              alt="Collet Chucks Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Collet Chucks</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision-engineered collet chucks designed for superior clamping force, excellent runout accuracy, and
                versatile tool holding across a wide range of machining applications.
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
            <h2 className="text-2xl font-bold mb-4">About Collet Chucks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's collet chucks are precision-engineered to provide superior clamping force, excellent
                  runout accuracy, and versatile tool holding capabilities. Our comprehensive range includes ER, TG, YG,
                  and other collet systems to meet diverse machining requirements.
                </p>
                <p className="mb-4">
                  Designed for optimal performance in high-speed and high-precision machining applications, MZG collet
                  chucks feature balanced construction, precision-ground surfaces, and hardened components for maximum
                  durability and reliability. The precision-matched collet and chuck design ensures consistent clamping
                  force and minimal runout.
                </p>
                <p>
                  All MZG collet chucks are manufactured to strict tolerances and undergo rigorous quality control to
                  ensure exceptional performance. Available with various machine interfaces including BT, CAT, HSK, and
                  SK, our collet chucks provide versatile solutions for all your machining needs.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Precision-ground to ensure minimal runout</li>
                    <li>Balanced construction for high-speed operation</li>
                    <li>Hardened and tempered for maximum durability</li>
                    <li>Available with various machine interfaces</li>
                    <li>Compatible with standard collet systems</li>
                    <li>Coolant-through capability available</li>
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
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    <div>
                      <span className="font-medium">Collet Type:</span> {product.colletType}
                    </div>
                    <div>
                      <span className="font-medium">Shank Type:</span> {product.shankType}
                    </div>
                    <div>
                      <span className="font-medium">Runout:</span> {product.runout}
                    </div>
                    <div>
                      <span className="font-medium">Clamping Range:</span> {product.clampingRange}
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
                <h3 className="text-lg font-bold mb-3">Collet Systems</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>ER Series (ER11, ER16, ER20, ER25, ER32, ER40)</li>
                  <li>TG Series (TG75, TG100, TG150)</li>
                  <li>YG Series (YG8, YG12, YG16, YG20)</li>
                  <li>OZ Series (OZ16, OZ25, OZ32)</li>
                  <li>DA Series (DA100, DA180, DA200)</li>
                  <li>Other systems available upon request</li>
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
                <h3 className="text-lg font-bold mb-3">Precision Grades</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Standard Grade: Runout ≤ 0.010mm</li>
                  <li>Precision Grade: Runout ≤ 0.005mm</li>
                  <li>Ultra-Precision Grade: Runout ≤ 0.003mm</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Standard and extended lengths</li>
                  <li>Coolant-through capability</li>
                  <li>Balanced to G2.5 @ 25,000 RPM</li>
                  <li>Special coatings for wear resistance</li>
                  <li>Anti-pull-out systems</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified collet chuck? MZG can customize our standard collet chucks to meet your specific
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
              <Link href="/standard-tools/tool-holders/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Milling Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Precision tool holders for milling operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/adapters" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Adapters"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Adapters</h3>
                    <p className="text-sm text-gray-600">Tool holder adapters for various machine interfaces.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/tool-holders/turning" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Turning Tool Holders"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Turning Tool Holders
                    </h3>
                    <p className="text-sm text-gray-600">Tool holders for turning operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/custom-tools/tool-holders/collet-chucks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Custom Collet Chucks"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Custom Collet Chucks
                    </h3>
                    <p className="text-sm text-gray-600">Specialized collet chucks for unique applications.</p>
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
