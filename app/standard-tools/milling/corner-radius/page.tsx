import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CornerRadiusEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "cr-001",
      name: "Corner Radius End Mill - 4 Flute",
      image: "/images/product-1.jpg",
      description: "General purpose corner radius end mill with 0.5mm radius for improved tool life",
      diameter: "8mm",
      flutes: 4,
      radius: "0.5mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "CR Series",
    },
    {
      id: "cr-002",
      name: "Long Reach Corner Radius End Mill",
      image: "/images/product-2.jpg",
      description: "Extended reach corner radius end mill for deep pocket machining",
      diameter: "10mm",
      flutes: 4,
      radius: "1.0mm",
      material: "Carbide",
      coating: "TiCN",
      series: "LR-CR Series",
    },
    {
      id: "cr-003",
      name: "High Performance Corner Radius End Mill",
      image: "/images/product-3.jpg",
      description: "Premium corner radius end mill for high-speed machining applications",
      diameter: "12mm",
      flutes: 6,
      radius: "1.5mm",
      material: "Carbide",
      coating: "TiAlN",
      series: "HP-CR Series",
    },
    {
      id: "cr-004",
      name: "Multi-Radius End Mill",
      image: "/images/product-4.jpg",
      description: "Specialized end mill with multiple corner radii for complex profile machining",
      diameter: "16mm",
      flutes: 4,
      radius: "Variable",
      material: "Carbide",
      coating: "TiN",
      series: "MR Series",
    },
    {
      id: "cr-005",
      name: "Micro Corner Radius End Mill",
      image: "/images/product-1.jpg",
      description: "Precision micro corner radius end mill for small feature machining",
      diameter: "3mm",
      flutes: 3,
      radius: "0.2mm",
      material: "Carbide",
      coating: "Diamond",
      series: "Micro-CR Series",
    },
    {
      id: "cr-006",
      name: "Heavy Duty Corner Radius End Mill",
      image: "/images/product-2.jpg",
      description: "Robust corner radius end mill for tough materials and aggressive machining",
      diameter: "20mm",
      flutes: 6,
      radius: "2.0mm",
      material: "Carbide",
      coating: "AlTiN",
      series: "HD-CR Series",
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
              alt="Corner Radius End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Corner Radius End Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                Specialized end mills with rounded corners for improved tool strength, reduced chipping, and superior
                surface finishes in pocket milling and contouring applications.
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
            <h2 className="text-2xl font-bold mb-4">About Corner Radius End Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's corner radius end mills feature a precision-ground radius at the intersection of the
                  end cutting edge and the side cutting edge. This specialized design provides significant advantages
                  over standard square end mills in many applications.
                </p>
                <p className="mb-4">
                  The corner radius strengthens the cutting edge, reducing the risk of chipping and extending tool life.
                  It also produces smoother surface finishes on internal corners and helps distribute cutting forces
                  more evenly during machining operations.
                </p>
                <p>
                  Our corner radius end mills are available in a wide range of diameters, flute configurations, and
                  corner radii to meet diverse machining requirements. Each tool is manufactured to precise tolerances
                  and undergoes rigorous quality control to ensure consistent performance and reliability.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Key Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Improved tool strength and durability</li>
                    <li>Reduced chipping and edge breakdown</li>
                    <li>Superior surface finishes on internal corners</li>
                    <li>Extended tool life compared to square end mills</li>
                    <li>Better chip evacuation in pocket milling</li>
                    <li>Reduced vibration during machining</li>
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
                      <span className="font-medium">Corner Radius:</span> {product.radius}
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
                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Aluminum and non-ferrous alloys</li>
                  <li>Steel (low to high carbon)</li>
                  <li>Stainless steel</li>
                  <li>Cast iron</li>
                  <li>Hardened materials (up to 65 HRC)</li>
                  <li>Titanium and exotic alloys</li>
                  <li>Composites and plastics</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Corner Radius Options</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Micro radii: 0.1mm to 0.5mm</li>
                  <li>Standard radii: 0.5mm to 3.0mm</li>
                  <li>Large radii: 3.0mm to 5.0mm</li>
                  <li>Custom radii available upon request</li>
                  <li>Multiple radii configurations for specialized applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 2mm to 25mm</li>
                  <li>Flute configurations: 2, 3, 4, 5, 6, and 8 flutes</li>
                  <li>Helix angles: 30°, 35°, 40°, 45°, and variable</li>
                  <li>Reach options: Standard, long, and extra-long</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Application Recommendations</h3>
                <p className="mb-4">
                  Corner radius end mills are ideal for pocket milling, contouring, and any application where internal
                  corners need to be machined. They provide superior tool life and surface finish compared to square end
                  mills in these applications.
                </p>
                <p className="mb-4">
                  For optimal performance, we recommend using climb milling strategies and appropriate cutting
                  parameters based on the workpiece material and tool specifications.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Application Support</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/standard-tools/milling/end-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Standard End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard End Mills
                    </h3>
                    <p className="text-sm text-gray-600">
                      General purpose end mills for a wide range of milling applications.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/ball-nose" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
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
                      Specialized end mills for 3D contour machining and mold making.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/roughing" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
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
              <Link href="/standard-tools/milling/chamfer" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/chamfer-mills-hero.png"
                      alt="Chamfer Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Chamfer Mills</h3>
                    <p className="text-sm text-gray-600">
                      Specialized tools for creating precise chamfers and beveled edges.
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
