import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StandardDrillingInsertsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "di-001",
      name: "Indexable Drilling Insert - 80° Diamond",
      image: "/images/product-1.jpg",
      description: "Diamond-shaped drilling insert with 80° point angle for general-purpose drilling",
      diameter: "12-20mm",
      pointAngle: "80°",
      material: "Carbide",
      coating: "TiAlN",
      series: "DI Series",
    },
    {
      id: "di-002",
      name: "Indexable Drilling Insert - 140° Triangle",
      image: "/images/product-2.jpg",
      description: "Triangular drilling insert with 140° point angle for high-feed drilling applications",
      diameter: "16-25mm",
      pointAngle: "140°",
      material: "Carbide",
      coating: "TiCN",
      series: "DT Series",
    },
    {
      id: "di-003",
      name: "Indexable Drilling Insert - 120° Square",
      image: "/images/product-3.jpg",
      description: "Square drilling insert with 120° point angle for steel and stainless steel",
      diameter: "20-32mm",
      pointAngle: "120°",
      material: "Carbide",
      coating: "AlTiN",
      series: "DS Series",
    },
    {
      id: "di-004",
      name: "Indexable Drilling Insert - Center",
      image: "/images/product-4.jpg",
      description: "Center drilling insert for multi-diameter drilling systems",
      diameter: "14-40mm",
      pointAngle: "130°",
      material: "Carbide",
      coating: "TiN",
      series: "DC Series",
    },
    {
      id: "di-005",
      name: "Indexable Drilling Insert - Peripheral",
      image: "/images/product-1.jpg",
      description: "Peripheral drilling insert for multi-diameter drilling systems",
      diameter: "14-40mm",
      pointAngle: "170°",
      material: "Carbide",
      coating: "AlTiN",
      series: "DP Series",
    },
    {
      id: "di-006",
      name: "Indexable Drilling Insert - Flat Bottom",
      image: "/images/product-2.jpg",
      description: "Flat bottom drilling insert for counterboring and spotfacing operations",
      diameter: "18-50mm",
      pointAngle: "180°",
      material: "Carbide",
      coating: "TiCN",
      series: "DF Series",
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
              alt="Drilling Inserts Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Drilling Inserts</h1>
              <p className="text-lg md:text-xl mb-8">
                High-performance indexable drilling inserts designed for precision hole-making, durability, and superior
                results across a wide range of materials and applications.
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
            <h2 className="text-2xl font-bold mb-4">About Drilling Inserts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG Tool Group's drilling inserts are precision-engineered cutting tools designed for indexable
                  drilling operations across various materials. Our drilling inserts feature advanced geometries and
                  premium coatings to ensure optimal performance, extended tool life, and superior hole quality.
                </p>
                <p className="mb-4">
                  Whether you're working with aluminum, steel, stainless steel, or exotic alloys, our comprehensive
                  range of drilling inserts provides solutions for every machining challenge. From general-purpose to
                  application-specific designs, MZG drilling inserts deliver consistent, reliable results in the most
                  demanding environments.
                </p>
                <p>
                  All MZG drilling inserts are manufactured to precise tolerances and undergo rigorous quality control
                  to ensure exceptional performance and reliability. Our technical experts are available to help you
                  select the right insert for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>General-purpose drilling</li>
                    <li>High-feed drilling</li>
                    <li>Deep hole drilling</li>
                    <li>Counterboring and spotfacing</li>
                    <li>Multi-diameter drilling</li>
                    <li>Drilling in difficult-to-machine materials</li>
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
                      <span className="font-medium">Diameter:</span> {product.diameter}
                    </div>
                    <div>
                      <span className="font-medium">Point Angle:</span> {product.pointAngle}
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
                  <li>Titanium and exotic alloys</li>
                  <li>Heat-resistant superalloys</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Available Coatings</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TiN (Titanium Nitride)</li>
                  <li>TiCN (Titanium Carbonitride)</li>
                  <li>TiAlN (Titanium Aluminum Nitride)</li>
                  <li>AlTiN (Aluminum Titanium Nitride)</li>
                  <li>PVD and CVD multi-layer coatings</li>
                  <li>Specialized coatings for specific materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Available Options</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Insert shapes: Diamond, triangular, square, round</li>
                  <li>Point angles: 80°, 120°, 130°, 140°, 170°, 180°</li>
                  <li>Chip breaker geometries for various materials</li>
                  <li>Center and peripheral insert configurations</li>
                  <li>Wiper edge options for improved surface finish</li>
                  <li>Special geometries available upon request</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Customization</h3>
                <p className="mb-4">
                  Need a specialized drilling insert? MZG can customize our drilling inserts to meet your specific
                  requirements. Contact our technical team to discuss your application needs.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Request Custom Solution</Button>
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
                    <p className="text-sm text-gray-600">Precision turning inserts for various turning operations.</p>
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
