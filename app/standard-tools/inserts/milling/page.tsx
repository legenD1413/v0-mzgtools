import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MillingInsertsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "mi-001",
      name: "Square Milling Insert - 4 Cutting Edges",
      image: "/images/product-1.jpg",
      description: "General purpose square insert for face milling and shoulder milling operations",
      shape: "Square (SPMW)",
      size: "12mm",
      edges: 4,
      material: "Carbide",
      coating: "TiAlN",
      application: "Steel, Stainless Steel",
    },
    {
      id: "mi-002",
      name: "Round Milling Insert - High Feed",
      image: "/images/product-2.jpg",
      description: "Round insert for high feed milling and copy milling applications",
      shape: "Round (RDMT)",
      size: "10mm",
      edges: "Multiple",
      material: "Carbide",
      coating: "TiCN",
      application: "All Materials",
    },
    {
      id: "mi-003",
      name: "Octagonal Milling Insert - 8 Cutting Edges",
      image: "/images/product-3.jpg",
      description: "Economical octagonal insert with 8 cutting edges for face milling",
      shape: "Octagonal (OEMT)",
      size: "14mm",
      edges: 8,
      material: "Carbide",
      coating: "AlTiN",
      application: "Cast Iron, Steel",
    },
    {
      id: "mi-004",
      name: "Triangular Milling Insert - Positive Rake",
      image: "/images/product-4.jpg",
      description: "Positive rake triangular insert for light cutting and finishing operations",
      shape: "Triangular (TPMT)",
      size: "11mm",
      edges: 3,
      material: "Carbide",
      coating: "TiN",
      application: "Aluminum, Non-ferrous",
    },
    {
      id: "mi-005",
      name: "Hexagonal Milling Insert - Double Sided",
      image: "/images/product-1.jpg",
      description: "Double sided hexagonal insert with 12 cutting edges for economical milling",
      shape: "Hexagonal (HEMT)",
      size: "16mm",
      edges: 12,
      material: "Carbide",
      coating: "TiAlN",
      application: "General Purpose",
    },
    {
      id: "mi-006",
      name: "Diamond Shaped Milling Insert - 45°",
      image: "/images/product-2.jpg",
      description: "Diamond shaped insert for 45° face milling and chamfering",
      shape: "Diamond (DPMT)",
      size: "12mm",
      edges: 4,
      material: "Carbide",
      coating: "TiCN",
      application: "Steel, Stainless Steel",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Image src="/images/inserts.jpg" alt="Milling Inserts Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Milling Inserts</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance milling inserts designed for precision, durability, and superior results across a wide
                range of materials and milling applications.
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
            <h2 className="text-2xl font-bold mb-4">About Milling Inserts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's milling inserts are precision-engineered cutting tools designed for a wide range of
                  milling operations. Our inserts feature advanced geometries and premium coatings to ensure optimal
                  performance, extended tool life, and superior surface finishes.
                </p>
                <p className="mb-4">
                  Available in various shapes, sizes, and geometries, our milling inserts are designed to meet the
                  demands of modern machining. Whether you're performing face milling, shoulder milling, profile
                  milling, or high-feed milling, MZG has the right insert for your application.
                </p>
                <p>
                  All MZG milling inserts are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right insert for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Face milling</li>
                    <li>Shoulder milling</li>
                    <li>Profile milling</li>
                    <li>High-feed milling</li>
                    <li>Copy milling</li>
                    <li>Chamfering</li>
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
                      <span className="font-medium">Shape:</span> {product.shape}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span> {product.size}
                    </div>
                    <div>
                      <span className="font-medium">Cutting Edges:</span> {product.edges}
                    </div>
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
                    </div>
                    <div>
                      <span className="font-medium">Coating:</span> {product.coating}
                    </div>
                    <div>
                      <span className="font-medium">Application:</span> {product.application}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Insert Shape Guide */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Insert Shape Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Common Insert Shapes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Square (S)</h4>
                    <p className="text-sm text-gray-600">
                      Four cutting edges, suitable for face milling and shoulder milling. Provides good stability and
                      strength.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Round (R)</h4>
                    <p className="text-sm text-gray-600">
                      Multiple cutting edges, excellent for copy milling and high-feed milling. Provides strong cutting
                      edge and smooth cutting action.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Triangular (T)</h4>
                    <p className="text-sm text-gray-600">
                      Three cutting edges, good for light cutting and finishing operations. Provides sharp cutting
                      action.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Octagonal (O)</h4>
                    <p className="text-sm text-gray-600">
                      Eight cutting edges, economical choice for face milling. Provides multiple cutting edges for cost
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Selecting the Right Shape</h3>
                <p className="mb-4 text-sm text-gray-600">
                  The choice of insert shape depends on several factors including the type of milling operation,
                  workpiece material, machine stability, and desired surface finish. Our technical experts can help you
                  select the optimal insert shape for your specific application.
                </p>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Shape Selection Considerations:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Type of milling operation (face, shoulder, profile, etc.)</li>
                    <li>Workpiece material and hardness</li>
                    <li>Machine stability and power</li>
                    <li>Required surface finish</li>
                    <li>Productivity requirements</li>
                    <li>Economic considerations (cost per edge)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">ISO Identification System</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Milling inserts are identified using the ISO system, which uses a series of letters and numbers to
                  describe the insert's characteristics. Understanding this system helps in selecting the right insert
                  for your application.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Example: SPMW 120408</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>
                      <strong>S</strong> - Shape (Square)
                    </li>
                    <li>
                      <strong>P</strong> - Relief angle (11°)
                    </li>
                    <li>
                      <strong>M</strong> - Tolerance class
                    </li>
                    <li>
                      <strong>W</strong> - Type (with hole, with chipbreaker)
                    </li>
                    <li>
                      <strong>12</strong> - Size (12mm)
                    </li>
                    <li>
                      <strong>04</strong> - Thickness (4mm)
                    </li>
                    <li>
                      <strong>08</strong> - Corner radius (0.8mm)
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Insert Materials and Coatings</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Carbide Grades</h4>
                    <p className="text-sm text-gray-600">
                      We offer various carbide grades optimized for different materials and cutting conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Ceramic Inserts</h4>
                    <p className="text-sm text-gray-600">
                      For high-speed machining of hardened materials and cast iron.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">CBN (Cubic Boron Nitride)</h4>
                    <p className="text-sm text-gray-600">For machining hardened steels and super alloys.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">PCD (Polycrystalline Diamond)</h4>
                    <p className="text-sm text-gray-600">For non-ferrous materials and composites.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Coatings</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      <li>TiN (Titanium Nitride) - General purpose</li>
                      <li>TiCN (Titanium Carbonitride) - Improved wear resistance</li>
                      <li>TiAlN (Titanium Aluminum Nitride) - High temperature stability</li>
                      <li>AlTiN (Aluminum Titanium Nitride) - Extreme hardness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-sm text-gray-600">Precision inserts for turning operations on lathes.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/threading" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Threading Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Threading Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Specialized inserts for thread cutting operations.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/grooving" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Grooving Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Grooving Inserts
                    </h3>
                    <p className="text-sm text-gray-600">Precision inserts for grooving and parting operations.</p>
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
