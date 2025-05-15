import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StepDrillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "step-001",
      name: "Multi-Step Drill - 3 Steps",
      image: "/images/product-1.jpg",
      description: "Three-step drill for creating holes with countersink in one operation",
      diameter: "4-6-8mm",
      length: "65mm",
      material: "HSS",
      coating: "TiN",
      series: "MS Series",
    },
    {
      id: "step-002",
      name: "Conical Step Drill - 9 Steps",
      image: "/images/product-2.jpg",
      description: "Conical design with 9 steps for sheet metal applications",
      diameter: "4-20mm",
      length: "75mm",
      material: "HSS-Co",
      coating: "TiAlN",
      series: "CS Series",
    },
    {
      id: "step-003",
      name: "Precision Step Drill - 2 Steps",
      image: "/images/product-3.jpg",
      description: "Two-step drill for precise hole and counterbore combinations",
      diameter: "8-12mm",
      length: "80mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "PS Series",
    },
    {
      id: "step-004",
      name: "Industrial Step Drill - 4 Steps",
      image: "/images/product-4.jpg",
      description: "Heavy-duty step drill for industrial applications",
      diameter: "6-8-10-12mm",
      length: "90mm",
      material: "HSS-E",
      coating: "TiCN",
      series: "IS Series",
    },
    {
      id: "step-005",
      name: "Micro Step Drill - 2 Steps",
      image: "/images/product-1.jpg",
      description: "Precision micro step drill for electronics and small components",
      diameter: "1-2mm",
      length: "40mm",
      material: "Carbide",
      coating: "Diamond",
      series: "MS-Micro Series",
    },
    {
      id: "step-006",
      name: "Custom Step Drill - 5 Steps",
      image: "/images/product-2.jpg",
      description: "Customizable step drill with 5 steps for specialized applications",
      diameter: "Custom",
      length: "Custom",
      material: "HSS/Carbide",
      coating: "Various options",
      series: "Custom Series",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/hole-making.jpg" alt="Step Drills Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Step Drills</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision step drills for efficient multi-diameter hole making in a single operation
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Product Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Step Drills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Step drills are specialized cutting tools designed to drill holes of multiple diameters in a single
                  operation. This innovative design saves time, reduces tool changes, and ensures perfect alignment
                  between different diameter sections.
                </p>
                <p className="mb-4">
                  MZG offers a comprehensive range of high-quality step drills for various applications across
                  industries. Our step drills are manufactured with premium materials and coatings to ensure long tool
                  life and excellent performance.
                </p>
                <p>
                  Whether you need standard step drills or custom solutions for specific applications, our engineering
                  team can help you select the right tool for your needs or design a custom solution to meet your exact
                  requirements.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Countersinking and counterboring</li>
                    <li>Sheet metal fabrication</li>
                    <li>Automotive components</li>
                    <li>Aerospace parts</li>
                    <li>Electronics manufacturing</li>
                    <li>General machining operations</li>
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
                <h3 className="text-lg font-bold mb-3">Step Drill Types</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Multi-Step Drills (fixed steps)</li>
                  <li>Conical Step Drills (continuous steps)</li>
                  <li>Precision Step Drills (2-3 steps)</li>
                  <li>Industrial Step Drills (heavy-duty)</li>
                  <li>Micro Step Drills (small diameters)</li>
                  <li>Custom Step Drills (application-specific)</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride) - General purpose</li>
                  <li>TiCN (Titanium Carbonitride) - Improved wear resistance</li>
                  <li>TiAlN (Titanium Aluminum Nitride) - High temperature applications</li>
                  <li>AlTiN (Aluminum Titanium Nitride) - Hard materials</li>
                  <li>Diamond - Non-ferrous and abrasive materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Step Configurations</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>2-Step - Basic hole with countersink/counterbore</li>
                  <li>3-5 Step - Multiple diameter transitions</li>
                  <li>Conical (9-13 steps) - Sheet metal applications</li>
                  <li>Custom configurations available</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Steel and stainless steel</li>
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Sheet metal</li>
                  <li>Plastics and composites</li>
                  <li>Wood and wood composites</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a custom step drill configuration? MZG can design and manufacture step drills to your exact
                  specifications. Contact our engineering team to discuss your requirements.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Step Drill Diagram */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step Drill Anatomy</h2>
            <div className="bg-white border rounded-lg p-6">
              <div className="relative w-full" style={{ height: "300px" }}>
                <Image src="/images/step-drill-diagram.png" alt="Step Drill Diagram" fill className="object-contain" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Step drills feature multiple cutting diameters in a single tool. The diagram above shows the key
                  components and dimensions of a typical step drill. Each step is precisely machined to create holes of
                  specific diameters, with smooth transitions between steps.
                </p>
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
                      src="/images/product-1.jpg"
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
                      High-performance drilling solutions for a wide range of materials.
                    </p>
                  </div>
                </div>
              </Link>
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
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Need Custom Step Drills?</h2>
            <p className="mb-6">Contact our engineering team to discuss your specific requirements</p>
            <Button className="bg-red-600 hover:bg-red-700">Contact Us</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
