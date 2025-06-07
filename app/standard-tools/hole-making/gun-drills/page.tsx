import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GunDrillsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gun-drills-hero.png" alt="Gun Drills" fill className="object-cover" priority />
          </div>
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Gun Drills</h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              Precision deep hole drilling solutions for applications requiring exceptional straightness, surface
              finish, and depth-to-diameter ratios.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <h2 className="text-2xl font-bold mb-6">Featured Gun Drills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {[
            {
              name: "GD-SC Series",
              description: "Solid Carbide Gun Drills",
              specs: {
                "Diameter Range": "0.8mm - 12mm",
                "L/D Ratio": "Up to 50:1",
                Material: "Solid Carbide",
                Coating: "TiAlN",
                Series: "GD-SC",
              },
            },
            {
              name: "GD-BT Series",
              description: "Brazed Tip Gun Drills",
              specs: {
                "Diameter Range": "8mm - 40mm",
                "L/D Ratio": "Up to 100:1",
                Material: "Steel Body with Carbide Tip",
                Coating: "TiCN",
                Series: "GD-BT",
              },
            },
            {
              name: "GD-HP Series",
              description: "High-Pressure Gun Drills",
              specs: {
                "Diameter Range": "3mm - 25mm",
                "L/D Ratio": "Up to 80:1",
                Material: "Steel/Carbide",
                Coating: "AlCrN",
                Series: "GD-HP",
              },
            },
            {
              name: "GD-MS Series",
              description: "Micro-Size Gun Drills",
              specs: {
                "Diameter Range": "0.8mm - 3mm",
                "L/D Ratio": "Up to 30:1",
                Material: "Solid Carbide",
                Coating: "Diamond-Like Carbon",
                Series: "GD-MS",
              },
            },
            {
              name: "GD-SS Series",
              description: "Stainless Steel Gun Drills",
              specs: {
                "Diameter Range": "2mm - 20mm",
                "L/D Ratio": "Up to 70:1",
                Material: "Carbide",
                Coating: "AlTiN",
                Series: "GD-SS",
              },
            },
            {
              name: "GD-CS Series",
              description: "Custom Solution Gun Drills",
              specs: {
                "Diameter Range": "Custom",
                "L/D Ratio": "Custom",
                Material: "Application Specific",
                Coating: "Application Specific",
                Series: "GD-CS",
              },
            },
            {
              name: "GD-AL Series",
              description: "Aluminum-Specific Gun Drills",
              specs: {
                "Diameter Range": "3mm - 20mm",
                "L/D Ratio": "Up to 60:1",
                Material: "Carbide",
                Coating: "DLC",
                Series: "GD-AL",
              },
            },
            {
              name: "GD-TI Series",
              description: "Titanium-Specific Gun Drills",
              specs: {
                "Diameter Range": "3mm - 16mm",
                "L/D Ratio": "Up to 40:1",
                Material: "Carbide",
                Coating: "AlTiSiN",
                Series: "GD-TI",
              },
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="p-4 bg-gray-50">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src={`/placeholder.svg?key=93064&key=fbwlb&height=200&width=400&query=precision gun drill tool ${product.name}`}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gun Drill Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gun Drill Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/gun-drill-anatomy.png"
                alt="Gun Drill Anatomy"
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Exceptional Depth-to-Diameter Ratios:</strong> Up to 100:1, allowing for deep hole drilling
                    with minimal deviation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Superior Hole Straightness:</strong> Guide pads support the tool against the hole wall for
                    exceptional straightness
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Excellent Surface Finish:</strong> Single cutting edge design produces superior surface
                    quality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Efficient Chip Evacuation:</strong> Internal coolant channels ensure efficient chip removal
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>High-Pressure Coolant Delivery:</strong> Optimized coolant flow for improved performance and
                    tool life
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Precise Diameter Control:</strong> Maintains tight tolerances even in deep holes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Information */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Deep Hole Drilling Guide</h3>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Machine Requirements</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-pressure coolant system (minimum 300 PSI, recommended 500-1000 PSI)</li>
              <li>Rigid machine setup with minimal vibration</li>
              <li>Specialized gun drilling machine or CNC with appropriate fixturing</li>
              <li>Filtration system for coolant (10 micron or finer)</li>
              <li>Chip collection system</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Best Practices</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start with a pilot hole (2-3x diameter depth) using a conventional drill</li>
              <li>Use bushings for initial guidance when possible</li>
              <li>Maintain consistent coolant pressure throughout the operation</li>
              <li>Start with lower speeds and feeds, then gradually increase</li>
              <li>Periodically retract to clear chips on very deep holes</li>
              <li>Monitor coolant color and chip formation for process feedback</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Troubleshooting Common Issues</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Problem</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Possible Causes</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Drill Wandering</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Insufficient pilot hole</li>
                        <li>Improper alignment</li>
                        <li>Worn guide pads</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Ensure proper pilot hole</li>
                        <li>Use bushings for alignment</li>
                        <li>Replace worn tools</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Poor Surface Finish</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Excessive speed</li>
                        <li>Insufficient coolant</li>
                        <li>Dull cutting edge</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Reduce cutting speed</li>
                        <li>Increase coolant pressure</li>
                        <li>Replace or resharpen tool</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Chip Packing</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Low coolant pressure</li>
                        <li>Excessive feed rate</li>
                        <li>Clogged coolant channels</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-4">
                        <li>Increase coolant pressure</li>
                        <li>Reduce feed rate</li>
                        <li>Clean coolant channels</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Standard Drills",
                description: "General purpose drilling solutions",
                link: "/standard-tools/hole-making/drills",
                image: "/placeholder.svg?key=po1po",
              },
              {
                title: "Spotting Drills",
                description: "Precision hole starting tools",
                link: "/standard-tools/hole-making/spotting",
                image: "/placeholder.svg?key=brn2r",
              },
              {
                title: "Step Drills",
                description: "Multi-diameter hole drilling",
                link: "/standard-tools/hole-making/step-drills",
                image: "/placeholder.svg?key=lgpb0",
              },
              {
                title: "Reamers",
                description: "Tools for finishing and sizing pre-drilled holes",
                link: "/standard-tools/hole-making/reamers",
                image: "/placeholder.svg?key=5vdzx",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group block overflow-hidden border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-lg">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Custom Gun Drill Solutions</h3>
              <p className="mb-4">
                Need a specialized gun drill for your unique application? MZG offers custom gun drill solutions tailored
                to your specific requirements.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Custom diameters and lengths</li>
                <li>Special geometries for difficult materials</li>
                <li>Application-specific coatings</li>
                <li>Multi-step gun drill designs</li>
                <li>Technical support and application engineering</li>
              </ul>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Request Custom Solution
              </Button>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/custom-gun-drill-manufacturing.png"
                  alt="Custom Gun Drill Solutions"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
