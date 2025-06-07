import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ReamersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "rm-001",
      name: "High Precision Hand Reamer",
      image: "/images/product-1.jpg",
      description: "High precision straight flute hand reamer for finishing operations",
      diameter: "8mm",
      flutes: 6,
      material: "HSS",
      coating: "TiN",
      series: "HP Series",
    },
    {
      id: "rm-002",
      name: "Machine Reamer - Straight Flute",
      image: "/images/product-2.jpg",
      description: "Straight flute machine reamer for precision hole finishing",
      diameter: "10mm",
      flutes: 6,
      material: "Carbide",
      coating: "AlTiN",
      series: "MR Series",
    },
    {
      id: "rm-003",
      name: "Machine Reamer - Spiral Flute",
      image: "/images/product-3.jpg",
      description: "Spiral flute machine reamer for blind holes and interrupted cuts",
      diameter: "12mm",
      flutes: 6,
      material: "HSS-E",
      coating: "TiCN",
      series: "SP Series",
    },
    {
      id: "rm-004",
      name: "Adjustable Hand Reamer",
      image: "/images/product-4.jpg",
      description: "Adjustable diameter hand reamer for precise hole sizing",
      diameter: "15-16mm",
      flutes: 8,
      material: "HSS",
      coating: "None",
      series: "AJ Series",
    },
    {
      id: "rm-005",
      name: "Shell Reamer",
      image: "/images/product-1.jpg",
      description: "Shell reamer with interchangeable cutting head for cost efficiency",
      diameter: "20mm",
      flutes: 6,
      material: "HSS",
      coating: "TiN",
      series: "SH Series",
    },
    {
      id: "rm-006",
      name: "Carbide Tipped Reamer",
      image: "/images/product-2.jpg",
      description: "Carbide tipped reamer for long tool life in abrasive materials",
      diameter: "16mm",
      flutes: 6,
      material: "Steel with Carbide Tips",
      coating: "None",
      series: "CT Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/hole-making.jpg" alt="Reamers Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Reamers</h1>
              <p className="text-lg md:text-xl mb-8">
                High-precision reamers for finishing holes to exact dimensions with superior surface finish and tight
                tolerances.
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
            <h2 className="text-2xl font-bold mb-4">About Reamers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's reamers are precision finishing tools designed to enlarge or finish holes to exact
                  dimensions with superior surface finish and tight tolerances. Our reamers are available in a wide
                  range of types, sizes, and configurations to meet the most demanding hole finishing requirements.
                </p>
                <p className="mb-4">
                  Whether you need hand reamers for manual operations, machine reamers for production environments, or
                  specialized reamers for specific applications, MZG offers a comprehensive selection of high-quality
                  reaming tools. All our reamers are manufactured to precise tolerances using premium materials and
                  advanced coatings for optimal performance and extended tool life.
                </p>
                <p>
                  Our technical experts can assist you in selecting the right reamer for your specific application,
                  ensuring optimal results in terms of dimensional accuracy, surface finish, and productivity.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Precision finishing of holes</li>
                    <li>Achieving tight dimensional tolerances</li>
                    <li>Improving surface finish</li>
                    <li>Correcting misalignment or distortion</li>
                    <li>Enlarging holes to exact dimensions</li>
                    <li>Production line hole finishing</li>
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
                className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                      <span className="font-medium">Diameter:</span> {product.diameter}
                    </div>
                    <div>
                      <span className="font-medium">Flutes:</span> {product.flutes}
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
                <h3 className="text-lg font-bold mb-3">Reamer Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Hand Reamers - For manual use with low cutting speeds</li>
                  <li>Machine Reamers - For use with machine tools at higher speeds</li>
                  <li>Straight Flute Reamers - General purpose for through holes</li>
                  <li>Spiral Flute Reamers - For blind holes, providing better chip evacuation</li>
                  <li>Shell Reamers - Interchangeable cutting heads for cost efficiency</li>
                  <li>Adjustable Reamers - Variable diameter for custom sizes</li>
                  <li>Carbide Tipped Reamers - For longer tool life in abrasive materials</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Steel and alloy steels</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Plastics and composites</li>
                  <li>Hardened materials (with appropriate reamer type)</li>
                  <li>Exotic alloys (with appropriate coatings)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Best Practices for Reaming</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Always pre-drill a hole 0.1-0.2mm smaller than the final reamed diameter</li>
                  <li>Use ample cutting fluid for better surface finish and tool life</li>
                  <li>Select the appropriate cutting speed - generally slower than drilling</li>
                  <li>Ensure proper alignment to prevent reamer damage</li>
                  <li>Use steady, continuous feed without interruption</li>
                  <li>Clean chips frequently to prevent scoring of the finished surface</li>
                  <li>Rotate the reamer in the cutting direction when removing from the hole</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 1mm to 50mm standard (custom sizes available)</li>
                  <li>Flute configurations: 4, 6, 8, and 10 flutes</li>
                  <li>Standard lengths and extended reach options</li>
                  <li>Various coatings for different materials</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/standard-tools/hole-making/drills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Standard Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard Drills
                    </h3>
                    <p className="text-sm text-gray-600">High-performance drills for creating initial holes.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/countersinks" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Countersinks"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Countersinks</h3>
                    <p className="text-sm text-gray-600">
                      Specialized tools for creating countersunk holes for fasteners.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/hole-making/boring-tools" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Boring Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Boring Tools</h3>
                    <p className="text-sm text-gray-600">
                      Precision boring tools for enlarging or finishing holes to exact dimensions.
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
