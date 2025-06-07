import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EngravingToolsPage() {
  const products = [
    {
      name: "V-Tip Engraving Tool 30°",
      specs: ["Tip Angle: 30°", "Tip Ø: 0.1mm", "Shank Ø: 3mm", "2 Flutes", "AlTiN Coating"],
      image: "/engraving-tool.png",
    },
    {
      name: "V-Tip Engraving Tool 45°",
      specs: ["Tip Angle: 45°", "Tip Ø: 0.1mm", "Shank Ø: 4mm", "2 Flutes", "TiAlN Coating"],
      image: "/engraving-tool.png",
    },
    {
      name: "V-Tip Engraving Tool 60°",
      specs: ["Tip Angle: 60°", "Tip Ø: 0.2mm", "Shank Ø: 6mm", "2 Flutes", "TiCN Coating"],
      image: "/engraving-tool.png",
    },
    {
      name: "Conical Engraving Tool 90°",
      specs: ["Tip Angle: 90°", "Tip Ø: 0.2mm", "Shank Ø: 3mm", "2 Flutes", "Diamond Coating"],
      image: "/engraving-tool.png",
    },
    {
      name: "Micro Engraving Tool 15°",
      specs: ["Tip Angle: 15°", "Tip Ø: 0.05mm", "Shank Ø: 3mm", "2 Flutes", "Diamond Coating"],
      image: "/engraving-tool.png",
    },
    {
      name: "Single Flute Engraving Tool 120°",
      specs: ["Tip Angle: 120°", "Tip Ø: 0.3mm", "Shank Ø: 6mm", "1 Flute", "TiAlN Coating"],
      image: "/engraving-tool.png",
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
              src="/images/engraving-tools-hero.png"
              alt="Engraving Tools"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Engraving Tools</h1>
              <p className="text-lg md:text-xl mb-8">
                Precision engraving tools designed for detailed marking, lettering, and decorative work on various
                materials.
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
            <h2 className="text-2xl font-bold mb-4">About MZG Engraving Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4">
                  MZG engraving tools are designed for precision marking, lettering, and decorative work on a variety of
                  materials. Our engraving cutters feature sharp, precisely ground tips that produce clean, accurate
                  engravings with excellent surface finish.
                </p>
                <p className="mb-4">
                  Available in various tip angles and diameters, our engraving tools are suitable for applications
                  ranging from fine detail work to larger decorative engravings. The specialized geometry ensures
                  minimal burr formation and extended tool life even in challenging materials.
                </p>
                <p>
                  All MZG engraving tools are manufactured to precise tolerances and undergo rigorous quality control to
                  ensure exceptional performance and reliability. Our technical experts are available to help you select
                  the right tool for your specific application.
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Text and lettering</li>
                    <li>Logo engraving</li>
                    <li>Serial numbers</li>
                    <li>Decorative patterns</li>
                    <li>Jewelry making</li>
                    <li>Mold and die work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
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
                  <div className="grid grid-cols-1 gap-y-1 text-sm">
                    {product.specs.map((spec, i) => (
                      <div key={i}>{spec}</div>
                    ))}
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
                <h3 className="text-lg font-bold mb-3">Tip Angle Selection Guide</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">Angle</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Recommended Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">15° - 30°</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Fine detail work, shallow engravings, jewelry
                        </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">45° - 60°</td>
                        <td className="border border-gray-300 px-4 py-2">
                          General purpose engraving, lettering, logos
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">90°</td>
                        <td className="border border-gray-300 px-4 py-2">V-carving, deeper engravings, bolder text</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">120°</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Wide V-grooves, chamfering, decorative work
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold mb-3">Material Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>
                    <strong>Aluminum:</strong> High-speed steel or carbide tools with TiAlN coating
                  </li>
                  <li>
                    <strong>Steel:</strong> Carbide tools with AlTiN or TiCN coating
                  </li>
                  <li>
                    <strong>Stainless Steel:</strong> Carbide tools with AlTiN coating
                  </li>
                  <li>
                    <strong>Brass/Copper:</strong> Uncoated carbide or diamond-coated tools
                  </li>
                  <li>
                    <strong>Plastics:</strong> Uncoated carbide or polished tools
                  </li>
                  <li>
                    <strong>Wood:</strong> High-speed steel or carbide tools
                  </li>
                  <li>
                    <strong>Graphite:</strong> Diamond-coated tools
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Speed and Feed Guidelines</h3>
                <p className="mb-4">
                  Proper speeds and feeds are critical for successful engraving. As a general guideline:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>Use higher RPM (15,000-25,000) for small diameter tools</li>
                  <li>Reduce feed rates for deeper engravings</li>
                  <li>For hard materials, reduce depth per pass and increase number of passes</li>
                  <li>Always use appropriate coolant or air blast to clear chips</li>
                </ul>

                <h3 className="text-lg font-bold mb-3">MZG Font Library</h3>
                <p className="mb-4">
                  Access our extensive library of CNC-optimized fonts for your engraving projects. Our font library
                  includes over 50 fonts specifically designed for CNC engraving, with single-line, double-line, and
                  filled options.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">Access Font Library</Button>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/standard-tools/milling/micro-end-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-3.jpg"
                      alt="Micro End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Micro End Mills
                    </h3>
                    <p className="text-sm text-gray-600">Precision tools for fine detail work</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/diamond-tools" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-4.jpg"
                      alt="Diamond Tools"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Diamond Tools</h3>
                    <p className="text-sm text-gray-600">For engraving hard and abrasive materials</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/marking-tools" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-1.jpg"
                      alt="Marking Tools"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Marking Tools</h3>
                    <p className="text-sm text-gray-600">Tools for permanent part marking</p>
                  </div>
                </div>
              </Link>
              <Link href="/standard-tools/milling/end-mills" className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/images/product-2.jpg"
                      alt="Standard End Mills"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Standard End Mills
                    </h3>
                    <p className="text-sm text-gray-600">General purpose milling tools for various applications</p>
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
