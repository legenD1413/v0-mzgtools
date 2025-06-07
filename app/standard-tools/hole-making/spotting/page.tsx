import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SpottingDrillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "sd-001",
      name: "90° NC Spotting Drill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "High precision 90° spotting drill for accurate hole positioning",
      diameter: "6mm",
      flutes: 2,
      angle: "90°",
      material: "Carbide",
      coating: "TiAlN",
      series: "NC Series",
    },
    {
      id: "sd-002",
      name: "120° Spotting Drill - 3 Flute",
      image: "/images/product-2.jpg",
      description: "120° spotting drill for pre-drilling operations",
      diameter: "8mm",
      flutes: 3,
      angle: "120°",
      material: "Carbide",
      coating: "TiCN",
      series: "SP Series",
    },
    {
      id: "sd-003",
      name: "60° Spotting Drill - 2 Flute",
      image: "/images/product-3.jpg",
      description: "60° spotting drill for chamfering and countersinking",
      diameter: "10mm",
      flutes: 2,
      angle: "60°",
      material: "Carbide",
      coating: "AlTiN",
      series: "SP Series",
    },
    {
      id: "sd-004",
      name: "90° Heavy Duty Spotting Drill",
      image: "/images/product-4.jpg",
      description: "Heavy duty spotting drill for tough materials",
      diameter: "12mm",
      flutes: 2,
      angle: "90°",
      material: "Carbide",
      coating: "TiN",
      series: "HD Series",
    },
    {
      id: "sd-005",
      name: "135° Spotting Drill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "135° spotting drill for self-centering applications",
      diameter: "5mm",
      flutes: 2,
      angle: "135°",
      material: "Carbide",
      coating: "AlTiN",
      series: "SP Series",
    },
    {
      id: "sd-006",
      name: "90° Micro Spotting Drill",
      image: "/images/product-2.jpg",
      description: "Precision micro spotting drill for small diameter holes",
      diameter: "2mm",
      flutes: 2,
      angle: "90°",
      material: "Carbide",
      coating: "TiCN",
      series: "Micro Series",
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
              src="/images/standard-drills-hero.png"
              alt="Spotting Drills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Spotting Drills</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision spotting drills designed for accurate hole positioning, chamfering, and countersinking
                operations.
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
            <h2 className="text-2xl font-bold mb-4">About Spotting Drills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's spotting drills are precision-engineered cutting tools designed for creating accurate
                  starting points for subsequent drilling operations. Our spotting drills feature optimized point
                  geometries and premium coatings to ensure precise hole positioning, reduced drill wandering, and
                  extended tool life.
                </p>
                <p className="mb-4">
                  Spotting drills, also known as center drills, are essential for creating a pilot hole or chamfer that
                  guides the main drill to the exact location, preventing it from walking or deflecting. This results in
                  more accurate hole positioning and improved overall hole quality.
                </p>
                <p>
                  All MZG spotting drills are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right tool for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Creating pilot holes for drilling operations</li>
                    <li>Accurate hole positioning</li>
                    <li>Chamfering hole entrances</li>
                    <li>Countersinking for flat head screws</li>
                    <li>Deburring hole edges</li>
                    <li>Preparing holes for tapping operations</li>
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
                      <span className="font-medium">Flutes:</span> {product.flutes}
                    </div>
                    <div>
                      <span className="font-medium">Angle:</span> {product.angle}
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
                <h3 className="text-lg font-bold mb-3">Angle Selection Guide</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">Angle</th>
                        <th className="border px-4 py-2 text-left">Primary Application</th>
                        <th className="border px-4 py-2 text-left">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">60°</td>
                        <td className="border px-4 py-2">Chamfering, countersinking</td>
                        <td className="border px-4 py-2">Wider chamfer, good for countersinking</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">90°</td>
                        <td className="border px-4 py-2">General purpose spotting</td>
                        <td className="border px-4 py-2">Balanced between centering and chamfering</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">120°</td>
                        <td className="border px-4 py-2">Spotting for standard drills</td>
                        <td className="border px-4 py-2">Matches standard drill point angle</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">135°</td>
                        <td className="border px-4 py-2">Self-centering applications</td>
                        <td className="border px-4 py-2">Better self-centering properties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Hardened materials (with appropriate coating)</li>
                  <li>Plastics and composites</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Best Practices</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Use a rigid setup with minimal overhang to prevent deflection</li>
                  <li>Start with a slow spindle speed to ensure accurate positioning</li>
                  <li>Use cutting fluid or coolant to extend tool life</li>
                  <li>For deep holes, use a spotting drill with a depth of approximately 1/3 of the drill diameter</li>
                  <li>Match the spotting drill angle to your main drill point angle when possible</li>
                  <li>Regularly check for wear to maintain accuracy</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 1mm to 25mm</li>
                  <li>Angles: 60°, 90°, 120°, 135°</li>
                  <li>Flute configurations: 2, 3, and 4 flutes</li>
                  <li>Coatings: TiN, TiCN, TiAlN, AlTiN</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h3 className="text-lg font-bold mb-2 text-red-700">Pro Tip</h3>
                  <p className="text-sm">
                    For optimal results, use a spotting drill with the same point angle as your main drill. This creates
                    a perfect seat for the drill point, improving accuracy and reducing the chance of drill wandering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/hole-making/drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Standard Drills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard Drills
                    </h3>
                    <p className="text-sm text-gray-600">
                      High-performance drills for a wide range of materials and applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/center-drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Center Drills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Center Drills</h3>
                    <p className="text-sm text-gray-600">Combined drill and countersink tools for lathe centers.</p>
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
                      Tools for creating angled recesses for flat head screws and fasteners.
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
