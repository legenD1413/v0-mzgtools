import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Filter, Grid3X3, List } from "lucide-react"

export default function ChamferMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "cm-001",
      name: "90° Chamfer Mill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "Precision 90° chamfer mill for deburring and edge breaking",
      diameter: "8mm",
      angle: "90°",
      flutes: 2,
      material: "Carbide",
      coating: "TiAlN",
      series: "CM Series",
    },
    {
      id: "cm-002",
      name: "45° Chamfer Mill - 3 Flute",
      image: "/images/product-2.jpg",
      description: "High-performance 45° chamfer mill for countersinking and chamfering",
      diameter: "10mm",
      angle: "45°",
      flutes: 3,
      material: "Carbide",
      coating: "AlTiN",
      series: "CM Series",
    },
    {
      id: "cm-003",
      name: "30° Chamfer Mill - 4 Flute",
      image: "/images/product-3.jpg",
      description: "Precision 30° chamfer mill for creating beveled edges",
      diameter: "12mm",
      angle: "30°",
      flutes: 4,
      material: "Carbide",
      coating: "TiCN",
      series: "CM Series",
    },
    {
      id: "cm-004",
      name: "60° Chamfer Mill - 3 Flute",
      image: "/images/product-4.jpg",
      description: "Versatile 60° chamfer mill for various chamfering applications",
      diameter: "6mm",
      angle: "60°",
      flutes: 3,
      material: "Carbide",
      coating: "TiN",
      series: "CM Series",
    },
    {
      id: "cm-005",
      name: "15° Chamfer Mill - 2 Flute",
      image: "/images/product-1.jpg",
      description: "Specialized 15° chamfer mill for shallow angle chamfering",
      diameter: "10mm",
      angle: "15°",
      flutes: 2,
      material: "Carbide",
      coating: "AlTiN",
      series: "CM Series",
    },
    {
      id: "cm-006",
      name: "90° Double Angle Chamfer Mill",
      image: "/images/product-2.jpg",
      description: "Double angle chamfer mill for simultaneous top and bottom chamfering",
      diameter: "16mm",
      angle: "90°/90°",
      flutes: 4,
      material: "Carbide",
      coating: "TiCN",
      series: "DACM Series",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/milling-tools.jpg"
            alt="Chamfer Mills Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm mb-4">
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/standard-tools" className="hover:text-red-500">
                Standard Tools
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/standard-tools/milling" className="hover:text-red-500">
                Milling
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Chamfer Mills</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chamfer Mills</h1>
            <p className="text-lg md:text-xl mb-8">
              Precision chamfer mills designed for deburring, edge breaking, and creating precise beveled edges across a
              wide range of materials.
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
        {/* Filter and View Options */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="w-full md:w-auto">
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filter Products
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">View:</span>
            <Button variant="ghost" size="sm" className="p-1">
              <Grid3X3 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <List className="h-5 w-5" />
            </Button>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A to Z</option>
              <option>Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Chamfer Mills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                MZG Tool Group's chamfer mills are precision-engineered cutting tools designed specifically for creating
                precise chamfers, bevels, and countersinks. Our chamfer mills feature carefully designed geometries with
                exact angle specifications to ensure consistent, accurate chamfering operations.
              </p>
              <p className="mb-4">
                Available in a variety of angles including 15°, 30°, 45°, 60°, and 90°, our chamfer mills provide
                solutions for all your edge preparation needs. Whether you're deburring parts, preparing edges for
                welding, or creating decorative bevels, MZG chamfer mills deliver superior results.
              </p>
              <p>
                All MZG chamfer mills are manufactured from premium carbide materials with advanced coatings to ensure
                exceptional tool life and performance across a wide range of materials. Our technical experts can help
                you select the right chamfer mill for your specific application.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">Applications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Edge breaking and deburring</li>
                  <li>Countersinking for screws and fasteners</li>
                  <li>Weld preparation</li>
                  <li>Creating decorative bevels</li>
                  <li>Chamfering holes and edges</li>
                  <li>Part preparation for assembly</li>
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
                    <span className="font-medium">Angle:</span> {product.angle}
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
                  <div>
                    <span className="font-medium">Series:</span> {product.series}
                  </div>
                </div>
                {/* 移除按钮部分，保持与end-mills页面一致 */}
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
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2 text-left">Angle</th>
                    <th className="border p-2 text-left">Recommended Applications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">15°</td>
                    <td className="border p-2">Shallow bevels, fine edge preparation</td>
                  </tr>
                  <tr>
                    <td className="border p-2">30°</td>
                    <td className="border p-2">Light chamfering, decorative edges</td>
                  </tr>
                  <tr>
                    <td className="border p-2">45°</td>
                    <td className="border p-2">General purpose chamfering, weld preparation</td>
                  </tr>
                  <tr>
                    <td className="border p-2">60°</td>
                    <td className="border p-2">Deep chamfering, countersinking</td>
                  </tr>
                  <tr>
                    <td className="border p-2">90°</td>
                    <td className="border p-2">Deburring, edge breaking, countersinking</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aluminum and non-ferrous alloys</li>
                <li>Steel (low to high carbon)</li>
                <li>Stainless steel</li>
                <li>Cast iron</li>
                <li>Hardened materials (up to 55 HRC)</li>
                <li>Plastics and composites</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Available Options</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                <li>Diameters: 3mm to 25mm</li>
                <li>Angles: 15°, 30°, 45°, 60°, 90°, and custom angles</li>
                <li>Flute configurations: 2, 3, 4, and 6 flutes</li>
                <li>Single and double angle designs</li>
                <li>Special geometries available upon request</li>
              </ul>

              <h3 className="text-lg font-bold mb-3">Best Practices</h3>
              <p className="mb-4">For optimal results when using chamfer mills, we recommend:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Use lower speeds and feeds compared to standard end mills</li>
                <li>Ensure proper tool alignment to maintain angle accuracy</li>
                <li>Apply coolant to extend tool life and improve surface finish</li>
                <li>For deep chamfers, consider multiple passes to reduce tool stress</li>
                <li>Select the appropriate angle for your application requirements</li>
              </ul>
              <Button className="bg-red-600 hover:bg-red-700">Download Application Guide</Button>
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/standard-tools/milling/end-mills" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image src="/images/product-3.jpg" alt="End Mills" fill className="object-cover object-center" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">End Mills</h3>
                  <p className="text-sm text-gray-600">General purpose end mills for various milling operations.</p>
                </div>
              </div>
            </Link>
            <Link href="/standard-tools/milling/corner-radius" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image
                    src="/images/product-2.jpg"
                    alt="Corner Radius Mills"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                    Corner Radius Mills
                  </h3>
                  <p className="text-sm text-gray-600">
                    End mills with corner radius for improved tool life and surface finish.
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
                    Specialized tools for creating countersunk holes for fasteners.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/standard-tools/milling/ball-nose" className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image
                    src="/images/product-1.jpg"
                    alt="Ball Nose Mills"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Ball Nose Mills</h3>
                  <p className="text-sm text-gray-600">
                    Specialized end mills with hemispherical tips for 3D contour machining.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
