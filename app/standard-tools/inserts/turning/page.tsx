import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TurningInsertsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "ti-001",
      name: "CNMG Turning Insert - Medium",
      image: "/images/product-1.jpg",
      description: "80° diamond shape insert with chip breaker for general purpose turning",
      shape: "Diamond (80°)",
      size: "CNMG 12 04 08",
      chipBreaker: "Medium",
      material: "Carbide",
      coating: "TiAlN",
      series: "GP Series",
    },
    {
      id: "ti-002",
      name: "TNMG Turning Insert - Finishing",
      image: "/images/product-2.jpg",
      description: "60° triangle insert for finishing operations with excellent surface quality",
      shape: "Triangle (60°)",
      size: "TNMG 16 04 04",
      chipBreaker: "Finishing",
      material: "Carbide",
      coating: "TiCN",
      series: "FN Series",
    },
    {
      id: "ti-003",
      name: "DNMG Turning Insert - Heavy",
      image: "/images/product-3.jpg",
      description: "55° diamond insert for heavy machining with reinforced cutting edge",
      shape: "Diamond (55°)",
      size: "DNMG 15 06 12",
      chipBreaker: "Heavy",
      material: "Carbide",
      coating: "Al2O3",
      series: "HM Series",
    },
    {
      id: "ti-004",
      name: "CCMT Turning Insert - Precision",
      image: "/images/product-4.jpg",
      description: "80° diamond insert with sharp edge for precision machining",
      shape: "Diamond (80°)",
      size: "CCMT 09 T3 04",
      chipBreaker: "Precision",
      material: "Carbide",
      coating: "TiN",
      series: "PR Series",
    },
    {
      id: "ti-005",
      name: "VNMG Turning Insert - Universal",
      image: "/images/product-1.jpg",
      description: "35° diamond insert for universal applications with good chip control",
      shape: "Diamond (35°)",
      size: "VNMG 16 04 08",
      chipBreaker: "Universal",
      material: "Carbide",
      coating: "TiAlN",
      series: "UN Series",
    },
    {
      id: "ti-006",
      name: "SNMG Turning Insert - Square",
      image: "/images/product-2.jpg",
      description: "90° square insert for facing and turning operations with high feed rates",
      shape: "Square (90°)",
      size: "SNMG 12 04 08",
      chipBreaker: "Medium",
      material: "Carbide",
      coating: "TiCN",
      series: "SQ Series",
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
              alt="Turning Inserts Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Turning Inserts</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance turning inserts designed for precision, durability, and superior results across a wide
                range of materials and turning applications.
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
            <h2 className="text-2xl font-bold mb-4">About Turning Inserts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's turning inserts are precision-engineered cutting tools designed for turning
                  operations across various materials. Our inserts feature advanced geometries, chip breakers, and
                  premium coatings to ensure optimal performance, extended tool life, and superior surface finishes.
                </p>
                <p className="mb-4">
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of turning inserts provides solutions for every machining challenge. From general-purpose to
                  application-specific designs, MZG turning inserts deliver consistent, reliable results in the most
                  demanding environments.
                </p>
                <p>
                  All MZG turning inserts are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right insert for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>External turning</li>
                    <li>Internal boring</li>
                    <li>Facing operations</li>
                    <li>Profiling</li>
                    <li>Grooving and parting</li>
                    <li>Thread turning</li>
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
                      <span className="font-medium">Chip Breaker:</span> {product.chipBreaker}
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

          {/* Insert Shape Guide */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Insert Shape Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Common Insert Shapes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="font-bold w-24">Triangle</div>
                    <div>
                      <p>60° included angle, 3 cutting edges. Good for finishing and medium machining.</p>
                      <p className="text-sm text-gray-600">Examples: TNMG, TPMT, TCMT</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="font-bold w-24">Diamond</div>
                    <div>
                      <p>55°, 80°, or 35° included angle. Versatile for various operations.</p>
                      <p className="text-sm text-gray-600">Examples: DNMG, CNMG, VNMG</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="font-bold w-24">Square</div>
                    <div>
                      <p>90° included angle, 4 cutting edges. Excellent for facing and heavy machining.</p>
                      <p className="text-sm text-gray-600">Examples: SNMG, SPMX, SCMT</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="font-bold w-24">Round</div>
                    <div>
                      <p>360° included angle. Superior strength for interrupted cuts and rough machining.</p>
                      <p className="text-sm text-gray-600">Examples: RCMT, RPMT, RNGN</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Selecting the Right Shape</h3>
                <p className="mb-4">
                  The choice of insert shape depends on several factors including the machining operation, workpiece
                  material, and machine stability. Here are some general guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Triangle inserts</span> - Good for finishing operations and when
                    access is limited
                  </li>
                  <li>
                    <span className="font-medium">Diamond inserts</span> - Versatile for general turning, with different
                    angles for specific applications
                  </li>
                  <li>
                    <span className="font-medium">Square inserts</span> - Excellent for facing operations and heavy
                    machining
                  </li>
                  <li>
                    <span className="font-medium">Round inserts</span> - Best for rough machining and interrupted cuts
                    due to their strength
                  </li>
                </ul>
                <p className="mt-4">
                  Our technical team can help you select the optimal insert shape for your specific application
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Information */}
          <div className="bg-white p-6 border rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">ISO Identification System</h3>
                <p className="mb-4">
                  Turning inserts follow the ISO identification system, which uses a series of letters and numbers to
                  describe the insert's characteristics:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>1st character: Insert shape (C, D, R, S, T, V, etc.)</li>
                  <li>2nd character: Relief angle (N, P, M, etc.)</li>
                  <li>3rd character: Tolerance class</li>
                  <li>4th character: Type (M, G, P, etc.)</li>
                  <li>5th-6th characters: Size (insert length)</li>
                  <li>7th-8th characters: Thickness</li>
                  <li>9th-10th characters: Corner radius or edge configuration</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Hardened materials (up to 65 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Superalloys</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Insert Materials</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Carbide (various grades for different applications)</li>
                  <li>Cermet (for high-speed finishing)</li>
                  <li>Ceramic (for high-temperature applications)</li>
                  <li>CBN - Cubic Boron Nitride (for hardened materials)</li>
                  <li>PCD - Polycrystalline Diamond (for non-ferrous materials)</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Coating Technologies</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>TiN (Titanium Nitride) - General purpose</li>
                  <li>TiCN (Titanium Carbonitride) - Improved wear resistance</li>
                  <li>TiAlN (Titanium Aluminum Nitride) - High temperature stability</li>
                  <li>Al2O3 (Aluminum Oxide) - Thermal barrier</li>
                  <li>Multi-layer coatings for optimized performance</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need special inserts for your application? MZG can provide custom solutions including special
                  geometries, coatings, and chip breakers tailored to your specific requirements.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/standard-tools/inserts/milling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Milling Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Milling Inserts
                    </h3>
                    <p className="text-sm text-gray-600">
                      Precision inserts for face milling, shoulder milling, and profiling operations.
                    </p>
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
                    <p className="text-sm text-gray-600">Specialized inserts for thread turning operations.</p>
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
                    <p className="text-sm text-gray-600">
                      Precision inserts for grooving, parting, and recessing operations.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/inserts/drilling" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Drilling Inserts"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Drilling Inserts
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized inserts for indexable drilling tools and applications.
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
