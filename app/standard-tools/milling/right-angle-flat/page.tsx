import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RightAngleFlatEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "raf-007",
      name: "2F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F45C-JST.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F45C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC45",
      page: "F03",
      application: "Milling the steel hardness under HRC45°",
    },
    {
      id: "raf-008",
      name: "4F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F45C-TSJ.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F45C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC45",
      page: "F03",
      application: "Milling the steel hardness under HRC45°",
    },
    {
      id: "raf-001",
      name: "Precision Right Angle Flat End Mill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "",
      diameter: "8mm",
      flutes: 2,
      material: "Carbide",
      coating: "TiAlN",
      series: "RAF Series",
    },
    // Keep the rest of the existing products
    {
      id: "raf-002",
      name: "Heavy Duty Right Angle Flat - 4 Flute",
      image: "/images/product-4.jpg",
      description: "",
      diameter: "12mm",
      flutes: 4,
      material: "Carbide",
      coating: "AlTiN",
      series: "HD Series",
    },
    {
      id: "raf-003",
      name: "Micro Right Angle Flat End Mill - 3 Flute",
      image: "/images/product-2.jpg",
      description: "",
      diameter: "3mm",
      flutes: 3,
      material: "Carbide",
      coating: "TiCN",
      series: "Micro Series",
    },
    {
      id: "raf-004",
      name: "High Feed Right Angle Flat - 6 Flute",
      image: "/images/product-3.jpg",
      description: "",
      diameter: "16mm",
      flutes: 6,
      material: "Carbide",
      coating: "nACo",
      series: "HF Series",
    },
    {
      id: "raf-005",
      name: "Long Reach Right Angle Flat - 4 Flute",
      image: "/images/product-1.jpg",
      description: "",
      diameter: "10mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiAlN",
      series: "LR Series",
    },
    {
      id: "raf-006",
      name: "Hardened Material Right Angle Flat - 4 Flute",
      image: "/images/product-4.jpg",
      description: "",
      diameter: "12mm",
      flutes: 4,
      material: "Carbide",
      coating: "AlTiN",
      series: "HM Series",
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
              src="/images/milling-tools.jpg"
              alt="Right Angle Flat End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Right Angle Flat End Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision right angle flat end mills designed for creating perfect 90° shoulders, slots, and pockets
                with superior edge quality and dimensional accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
                <Button className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 border border-gray-200">
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
            <h2 className="text-2xl font-bold mb-4">About Right Angle Flat End Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's right angle flat end mills feature a precision-ground 90° cutting edge that excels at
                  creating sharp corners, square shoulders, and precise slots. These specialized cutting tools are
                  essential for pocket milling, profile milling, and any application requiring clean, square edges.
                </p>
                <p className="mb-4">
                  Our right angle flat end mills are manufactured with advanced geometries and cutting edge preparations
                  to ensure dimensional accuracy and superior surface finishes. The unique design minimizes deflection
                  and vibration, resulting in improved tool life and machining performance.
                </p>
                <p>
                  Whether you're working on precision components, mold cavities, or complex machined parts, MZG's right
                  angle flat end mills deliver the sharp corners, square shoulders, and dimensional accuracy your
                  applications demand.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Shoulder milling</li>
                    <li>Slot cutting</li>
                    <li>Pocket milling</li>
                    <li>Profile milling</li>
                    <li>Square corner machining</li>
                    <li>Precision edge finishing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  {product.application && <p className="text-sm text-gray-600 mb-3">{product.application}</p>}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    {/* Display dimensions separately for the special product */}
                    {product.d && (
                      <div>
                        <span className="font-medium">d:</span> {product.d}
                      </div>
                    )}
                    {product.D && (
                      <div>
                        <span className="font-medium">D:</span> {product.D}
                      </div>
                    )}
                    {product.H && (
                      <div>
                        <span className="font-medium">H:</span> {product.H}
                      </div>
                    )}
                    {product.L && (
                      <div>
                        <span className="font-medium">L:</span> {product.L}
                      </div>
                    )}

                    {/* For other products, show the standard diameter field */}
                    {product.diameter && (
                      <div>
                        <span className="font-medium">Diameter:</span> {product.diameter}
                      </div>
                    )}

                    <div>
                      <span className="font-medium">Flutes:</span> {product.flutes}
                    </div>
                    <div>
                      <span className="font-medium">Material:</span> {product.material}
                    </div>
                    <div>
                      <span className="font-medium">Coating:</span> {product.coating}
                    </div>
                    {product.hardness && (
                      <div>
                        <span className="font-medium">HRC:</span> {product.hardness}
                      </div>
                    )}
                    {product.page && (
                      <div>
                        <span className="font-medium">Page:</span> {product.page}
                      </div>
                    )}
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
                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Hardened materials (up to 65 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Graphite and composites</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride)</li>
                  <li>TiCN (Titanium Carbonitride)</li>
                  <li>TiAlN (Titanium Aluminum Nitride)</li>
                  <li>AlTiN (Aluminum Titanium Nitride)</li>
                  <li>nACo (nanocomposite coating)</li>
                  <li>ZrN (Zirconium Nitride)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 2mm to 25mm</li>
                  <li>Flute configurations: 2, 3, 4, and 6 flutes</li>
                  <li>Helix angles: 30°, 35°, 45°, and variable</li>
                  <li>Reach options: Standard, long, and extra-long</li>
                  <li>Corner chamfer options for improved durability</li>
                  <li>Special geometries for specific materials</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Machining Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Optimal stepover: 40-60% of tool diameter for roughing</li>
                  <li>Optimal stepover: 10-20% of tool diameter for finishing</li>
                  <li>Use climb milling for best surface finish</li>
                  <li>Maintain consistent chip load for best results</li>
                  <li>Consider tool deflection in deep slot applications</li>
                </ul>

                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/standard-tools/milling/end-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image src="/images/product-1.jpg" alt="End Mills" fill className="object-cover object-center" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">End Mills</h3>
                    <p className="text-sm text-gray-600">
                      General purpose end mills for a wide range of milling applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/corner-radius" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Corner Radius End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Corner Radius End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      End mills with rounded corners for improved tool life and surface finish.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/roughing" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Roughing End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Roughing End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      High material removal rate end mills for efficient roughing operations.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/ball-nose" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Ball Nose End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Ball Nose End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      Specialized tools for 3D contour machining and curved surfaces.
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
