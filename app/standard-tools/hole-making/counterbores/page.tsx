import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function CounterboresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Counterbores</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our precision counterbores are designed for creating recessed holes for bolt heads and washers. Engineered
              for optimal performance across various materials, our counterbores deliver clean, accurate recesses with
              superior surface finish.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Counterbore Selection</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/counterbore-tool.png"
                  alt="Standard Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Standard Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  Precision-ground counterbores for creating clean recessed holes for socket head cap screws.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 4mm - 25mm</p>
                  <p>Material: HSS-Co</p>
                  <p>Coating: TiAlN</p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/interchangeable-pilot-counterbore.png"
                  alt="Interchangeable Pilot Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Interchangeable Pilot Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  Versatile counterbores with replaceable pilots for multiple hole sizes.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 6mm - 30mm</p>
                  <p>Material: HSS-E</p>
                  <p>Pilot Sizes: 3mm - 12mm</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/placeholder.svg?key=b3tnr"
                  alt="Carbide Tipped Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Carbide Tipped Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  High-performance counterbores with carbide tips for extended tool life in abrasive materials.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 8mm - 25mm</p>
                  <p>Body: Steel with Carbide Tips</p>
                  <p>Application: Hardened Steel, Cast Iron</p>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/placeholder.svg?key=jl52h"
                  alt="Zero Flute Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Zero Flute Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  Specialized counterbores for non-ferrous materials, providing burr-free finishes.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 5mm - 20mm</p>
                  <p>Material: HSS-E PM</p>
                  <p>Application: Aluminum, Copper, Plastics</p>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/micro-counterbore.png"
                  alt="Micro Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Micro Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  Precision micro counterbores for small-scale applications in electronics and medical devices.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 1mm - 5mm</p>
                  <p>Material: Solid Carbide</p>
                  <p>Tolerance: ±0.01mm</p>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full" style={{ paddingTop: "50%" }}>
                <Image
                  src="/placeholder.svg?height=300&width=600&query=heavy duty counterbore"
                  alt="Heavy Duty Counterbore"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  Heavy Duty Counterbore
                </h3>
                <p className="text-gray-600 mt-2">
                  Robust counterbores designed for heavy machining operations in tough materials.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>Diameter Range: 12mm - 50mm</p>
                  <p>Material: HSS with Cobalt</p>
                  <p>Application: Stainless Steel, Alloy Steel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Categories Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Related Category 1 */}
              <Link href="/standard-tools/hole-making/drills" className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=standard drill bit"
                      alt="Standard Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      Standard Drills
                    </h3>
                    <p className="text-gray-600 mt-2">
                      High-performance drills for a wide range of materials and applications.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Related Category 2 */}
              <Link href="/standard-tools/hole-making/step-drills" className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=step drill bit"
                      alt="Step Drills"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      Step Drills
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Multi-diameter drills for creating stepped holes in a single operation.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Related Category 3 */}
              <Link href="/standard-tools/hole-making/countersinks" className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=countersink tool"
                      alt="Countersinks"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      Countersinks
                    </h3>
                    <p className="text-gray-600 mt-2">Tools for creating angled recesses for flat head screws.</p>
                  </div>
                </div>
              </Link>

              {/* Related Category 4 */}
              <Link href="/standard-tools/hole-making/boring" className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative w-full" style={{ paddingTop: "50%" }}>
                    <Image
                      src="/placeholder.svg?height=300&width=600&query=boring tool"
                      alt="Boring Tools"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      Boring Tools
                    </h3>
                    <p className="text-gray-600 mt-2">Precision tools for enlarging and finishing existing holes.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
