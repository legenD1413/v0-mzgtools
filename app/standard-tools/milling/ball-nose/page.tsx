import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BallNoseEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "bn-001",
      name: "Precision Ball Nose End Mill - 2 Flute",
      image: "/images/product-2.jpg",
      description: "High precision ball nose end mill for 3D contour machining in aluminum and non-ferrous materials",
      diameter: "6mm",
      flutes: 2,
      material: "Carbide",
      coating: "TiAlN",
      series: "BN Series",
    },
    {
      id: "bn-002",
      name: "Long Reach Ball Nose - 4 Flute",
      image: "/images/product-3.jpg",
      description: "Extended reach ball nose end mill for deep cavity milling and hard-to-reach areas",
      diameter: "8mm",
      flutes: 4,
      material: "Carbide",
      coating: "AlTiN",
      series: "LR Series",
    },
    {
      id: "bn-003",
      name: "Micro Ball Nose End Mill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "Ultra-precision micro ball nose for fine detail work and miniature components",
      diameter: "1mm",
      flutes: 2,
      material: "Carbide",
      coating: "Diamond",
      series: "Micro Series",
    },
    {
      id: "bn-004",
      name: "High Feed Ball Nose - 4 Flute",
      image: "/images/product-4.jpg",
      description: "High feed ball nose end mill for efficient roughing and semi-finishing operations",
      diameter: "12mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiCN",
      series: "HF Series",
    },
    {
      id: "bn-005",
      name: "Tapered Ball Nose - 4 Flute",
      image: "/images/product-2.jpg",
      description: "Tapered ball nose for mold making and complex 3D surfaces",
      diameter: "10mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiAlN",
      series: "TB Series",
    },
    {
      id: "bn-006",
      name: "Hardened Material Ball Nose - 6 Flute",
      image: "/images/product-3.jpg",
      description: "Specialized ball nose for machining hardened steels up to 65 HRC",
      diameter: "8mm",
      flutes: 6,
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
              alt="Ball Nose End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ball Nose End Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision ball nose end mills designed for 3D contour machining, mold making, and creating smooth curved
                surfaces with superior finish quality.
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
            <h2 className="text-2xl font-bold mb-4">About Ball Nose End Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's ball nose end mills feature a hemispherical cutting tip that excels at creating
                  smooth contoured surfaces and complex 3D shapes. These specialized cutting tools are essential for
                  mold making, die work, and any application requiring curved or contoured surfaces.
                </p>
                <p className="mb-4">
                  Our ball nose end mills are manufactured with precision-ground radii and advanced geometries to ensure
                  dimensional accuracy and superior surface finishes. Available in various diameters, flute
                  configurations, and coatings, our ball nose end mills are optimized for a wide range of materials and
                  machining conditions.
                </p>
                <p>
                  Whether you're working on intricate medical components, complex aerospace parts, or detailed mold
                  cavities, MZG's ball nose end mills deliver the precision, performance, and reliability your
                  applications demand.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>3D contour machining</li>
                    <li>Mold and die making</li>
                    <li>Finishing operations</li>
                    <li>Sculptured surfaces</li>
                    <li>Engraving and detail work</li>
                    <li>5-axis machining</li>
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
                  <li>Diamond coating (for non-ferrous materials)</li>
                  <li>ZrN (Zirconium Nitride)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 0.2mm to 25mm</li>
                  <li>Flute configurations: 2, 3, 4, and 6 flutes</li>
                  <li>Helix angles: 30°, 35°, and 45°</li>
                  <li>Reach options: Standard, long, and extra-long</li>
                  <li>Tapered designs for mold applications</li>
                  <li>Corner radius options for blended transitions</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Machining Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Optimal stepover: 10-20% of tool diameter for finishing</li>
                  <li>Recommended cutting speeds vary by material</li>
                  <li>Use climb milling for best surface finish</li>
                  <li>Consider 5-axis machining for complex contours</li>
                  <li>Maintain consistent chip load for best results</li>
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
              <Link href="/standard-tools/milling/chamfer" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
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
