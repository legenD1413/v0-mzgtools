import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RoughingEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "rem-001",
      name: "High Performance Roughing End Mill - 5 Flute",
      image: "/images/product-3.jpg",
      description: "Heavy-duty roughing end mill with corn-cob design for maximum material removal",
      diameter: "16mm",
      flutes: 5,
      material: "Carbide",
      coating: "AlTiN",
      series: "HP Rougher Series",
    },
    {
      id: "rem-002",
      name: "Wave Form Roughing End Mill - 7 Flute",
      image: "/images/product-4.jpg",
      description: "Wave form geometry for high-efficiency machining with reduced vibration",
      diameter: "20mm",
      flutes: 7,
      material: "Carbide",
      coating: "TiAlN",
      series: "Wave Series",
    },
    {
      id: "rem-003",
      name: "Multi-Flute Roughing End Mill - 8 Flute",
      image: "/images/product-1.jpg",
      description: "Multi-flute design for aggressive steel machining with excellent chip evacuation",
      diameter: "25mm",
      flutes: 8,
      material: "Carbide",
      coating: "TiCN",
      series: "Multi-Flute Series",
    },
    {
      id: "rem-004",
      name: "Serrated Roughing End Mill - 6 Flute",
      image: "/images/product-2.jpg",
      description: "Serrated edge design for breaking chips into small, manageable pieces",
      diameter: "18mm",
      flutes: 6,
      material: "Carbide",
      coating: "AlTiN",
      series: "Serrated Series",
    },
    {
      id: "rem-005",
      name: "Plunge Roughing End Mill - 4 Flute",
      image: "/images/product-3.jpg",
      description: "Specialized design for plunge roughing operations in deep pockets",
      diameter: "12mm",
      flutes: 4,
      material: "Carbide",
      coating: "TiAlN",
      series: "Plunge Series",
    },
    {
      id: "rem-006",
      name: "Aluminum Roughing End Mill - 3 Flute",
      image: "/images/product-4.jpg",
      description: "High helix roughing end mill optimized for aluminum and non-ferrous materials",
      diameter: "16mm",
      flutes: 3,
      material: "Carbide",
      coating: "ZrN",
      series: "AL Series",
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
              alt="Roughing End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Roughing End Mills</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance roughing end mills designed for maximum material removal rates, reduced vibration, and
                superior tool life in demanding applications.
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
            <h2 className="text-2xl font-bold mb-4">About Roughing End Mills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's roughing end mills are specially designed for high material removal rates and
                  efficient machining operations. Our roughing end mills feature innovative tooth geometries, including
                  corn-cob, wave-form, and serrated designs, that maximize cutting efficiency while reducing vibration
                  and heat generation.
                </p>
                <p className="mb-4">
                  These specialized cutting tools are engineered to handle the most demanding roughing operations across
                  a wide range of materials, from aluminum to hardened steels. The unique flute designs break chips into
                  small, manageable pieces, improving chip evacuation and preventing re-cutting, which extends tool life
                  and maintains cutting performance.
                </p>
                <p>
                  All MZG roughing end mills are manufactured from premium carbide grades and feature advanced coatings
                  specifically selected to withstand the high temperatures and forces encountered during aggressive
                  machining operations. Our roughing tools deliver exceptional performance, reliability, and value in
                  high-volume production environments.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Key Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maximum material removal rates</li>
                    <li>Reduced vibration and chatter</li>
                    <li>Superior chip evacuation</li>
                    <li>Extended tool life in aggressive applications</li>
                    <li>Reduced machining time and costs</li>
                    <li>Optimized for various material types</li>
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
                <div className="relative h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
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
                  <li>Hardened materials (up to 55 HRC)</li>
                  <li>Titanium alloys</li>
                  <li>Superalloys</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Roughing Geometries</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Corn-cob design for maximum material removal</li>
                  <li>Wave-form geometry for reduced vibration</li>
                  <li>Serrated edge for superior chip breaking</li>
                  <li>Variable pitch for chatter suppression</li>
                  <li>Variable helix for improved stability</li>
                  <li>Eccentric relief for enhanced edge strength</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Diameters: 8mm to 32mm</li>
                  <li>Flute configurations: 3, 4, 5, 6, 7, and 8 flutes</li>
                  <li>Helix angles: 35°, 38°, 40°, and variable</li>
                  <li>End types: Flat, chamfered, and corner radius</li>
                  <li>Reach options: Standard, long, and extra-long</li>
                  <li>Shank types: Straight, Weldon flat, and whistle notch</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Machining Recommendations</h3>
                <p className="mb-4">For optimal performance with roughing end mills, we recommend:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Higher feed rates with reduced radial engagement</li>
                  <li>Consistent chip load to prevent tool damage</li>
                  <li>Adequate coolant to manage heat generation</li>
                  <li>Rigid tool holding to minimize vibration</li>
                  <li>Programmed with trochoidal or dynamic milling strategies</li>
                </ul>
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
                  <div className="relative" style={{ paddingTop: "50%" }}>
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
                    <p className="text-sm text-gray-600">General purpose end mills for a wide range of applications.</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/ball-nose" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
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
                      Specialized end mills for 3D contour machining and finishing operations.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/corner-radius" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
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
              <Link href="/standard-tools/milling/chamfer" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
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
