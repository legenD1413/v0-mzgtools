import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StandardDrillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "sd-001",
      name: "High Performance Twist Drill - HSS",
      image: "/images/product-1.jpg",
      description: "General purpose HSS twist drill for a wide range of materials",
      diameter: "8mm",
      length: "117mm",
      material: "HSS",
      coating: "TiN",
      series: "HP Series",
    },
    {
      id: "sd-002",
      name: "Carbide Twist Drill - 2xD",
      image: "/images/product-2.jpg",
      description: "Short length carbide drill for high precision hole making",
      diameter: "10mm",
      length: "89mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "CD Series",
    },
    {
      id: "sd-003",
      name: "Coolant-Through Drill - 5xD",
      image: "/images/product-3.jpg",
      description: "Medium length drill with internal coolant channels for improved chip evacuation",
      diameter: "12mm",
      length: "132mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "CT Series",
    },
    {
      id: "sd-004",
      name: "Deep Hole Drill - 8xD",
      image: "/images/product-4.jpg",
      description: "Long drill for deep hole applications with specialized geometry",
      diameter: "6mm",
      length: "150mm",
      material: "Carbide",
      coating: "TiCN",
      series: "DH Series",
    },
    {
      id: "sd-005",
      name: "Micro Drill - HSS",
      image: "/images/product-1.jpg",
      description: "Precision micro drill for small diameter holes",
      diameter: "1.5mm",
      length: "38mm",
      material: "HSS-Co",
      coating: "None",
      series: "MD Series",
    },
    {
      id: "sd-006",
      name: "Indexable Drill - 3xD",
      image: "/images/product-2.jpg",
      description: "Drill with replaceable carbide inserts for cost-effective drilling",
      diameter: "20mm",
      length: "160mm",
      material: "Steel body with carbide inserts",
      coating: "Various insert coatings available",
      series: "ID Series",
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
              src="/images/hole-making.jpg"
              alt="Standard Drills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Standard Drills</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance drilling solutions designed for precision, efficiency, and reliability across a wide
                range of materials and applications.
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
            <h2 className="text-2xl font-bold mb-4">About Standard Drills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's standard drills are precision-engineered cutting tools designed for efficient and
                  accurate hole making across a wide range of materials. Our comprehensive range includes HSS and
                  carbide drills with various geometries, coatings, and lengths to meet diverse application
                  requirements.
                </p>
                <p className="mb-4">
                  From general-purpose twist drills to specialized coolant-through and deep hole drills, our product
                  line offers solutions for every drilling challenge. Each drill is manufactured to precise tolerances
                  and undergoes rigorous quality control to ensure consistent performance and extended tool life.
                </p>
                <p>
                  Whether you're working with steel, stainless steel, cast iron, aluminum, or exotic alloys, MZG drills
                  deliver superior hole quality, excellent chip evacuation, and exceptional reliability in the most
                  demanding environments.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>General purpose hole making</li>
                    <li>Precision hole drilling</li>
                    <li>Deep hole applications</li>
                    <li>Through-hole drilling</li>
                    <li>Blind hole drilling</li>
                    <li>Pilot hole drilling</li>
                    <li>Step drilling operations</li>
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
                      <span className="font-medium">Length:</span> {product.length}
                    </div>
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
                <h3 className="text-lg font-bold mb-3">Drill Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Twist Drills (HSS and Carbide)</li>
                  <li>Coolant-Through Drills</li>
                  <li>Deep Hole Drills</li>
                  <li>Micro Drills</li>
                  <li>Indexable Drills</li>
                  <li>Step Drills</li>
                  <li>Center Drills</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride) - General purpose</li>
                  <li>TiCN (Titanium Carbonitride) - Improved wear resistance</li>
                  <li>TiAlN (Titanium Aluminum Nitride) - High temperature applications</li>
                  <li>AlTiN (Aluminum Titanium Nitride) - Hard materials</li>
                  <li>nACo® (nanocomposite) - Superior performance in difficult materials</li>
                  <li>Diamond-Like Carbon (DLC) - Non-ferrous materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Length-to-Diameter Ratios</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Short (2xD) - High precision, stability</li>
                  <li>Standard (3-5xD) - General purpose</li>
                  <li>Long (6-8xD) - Deep holes</li>
                  <li>Extra Long (10-30xD) - Specialized deep hole applications</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Hardened materials</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Composites and plastics</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a modified standard drill? MZG can customize our standard drills to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Troubleshooting Guide */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Drilling Troubleshooting Guide</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Problem</th>
                    <th className="border p-3 text-left">Possible Causes</th>
                    <th className="border p-3 text-left">Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Drill Breakage</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Feed rate too high</li>
                        <li>Improper chip evacuation</li>
                        <li>Drill wandering</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduce feed rate</li>
                        <li>Use coolant-through drills</li>
                        <li>Use pilot hole or spot drill</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-medium">Poor Hole Quality</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Worn drill</li>
                        <li>Incorrect speed/feed</li>
                        <li>Inadequate coolant</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Replace or resharpen drill</li>
                        <li>Adjust cutting parameters</li>
                        <li>Improve coolant delivery</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Excessive Tool Wear</td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Speed too high</li>
                        <li>Incorrect coating for material</li>
                        <li>Insufficient coolant</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduce cutting speed</li>
                        <li>Select appropriate coating</li>
                        <li>Increase coolant pressure/volume</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/hole-making/spotting" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Spotting Drills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Spotting Drills
                    </h3>
                    <p className="text-sm text-gray-600">
                      Precision tools for accurate hole positioning and chamfering.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/reamers" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-2.jpg" alt="Reamers" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Reamers</h3>
                    <p className="text-sm text-gray-600">
                      Tools for finishing and sizing pre-drilled holes to precise dimensions.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/countersinks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-4.jpg" alt="Countersinks" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Countersinks</h3>
                    <p className="text-sm text-gray-600">
                      Tools for creating angled recesses for flat-head screws and fasteners.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/step-drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-1.jpg" alt="Step Drills" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Step Drills</h3>
                    <p className="text-sm text-gray-600">
                      Multi-diameter drills for creating holes of different sizes in one operation.
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
