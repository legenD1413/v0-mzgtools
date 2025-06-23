import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Share2, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ProductDetail() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-red-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/standard-tools" className="hover:text-red-600">
                Standard Tools
              </Link>
              <span className="mx-2">/</span>
              <Link href="/standard-tools/milling" className="hover:text-red-600">
                Milling
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">High-Performance End Mill</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link href="/standard-tools/milling" className="inline-flex items-center text-red-600 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Milling Tools
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-lg border bg-white">
                  <Image
                    src="/images/product-1.jpg"
                    alt="High-Performance End Mill"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <button className="relative aspect-square overflow-hidden rounded-lg border bg-white p-2 ring-2 ring-red-600">
                    <Image
                      src="/images/product-1.jpg"
                      alt="High-Performance End Mill - View 1"
                      fill
                      className="object-contain"
                    />
                  </button>
                  <button className="relative aspect-square overflow-hidden rounded-lg border bg-white p-2">
                    <Image
                      src="/images/product-1-angle.jpg"
                      alt="High-Performance End Mill - View 2"
                      fill
                      className="object-contain"
                    />
                  </button>
                  <button className="relative aspect-square overflow-hidden rounded-lg border bg-white p-2">
                    <Image
                      src="/images/product-1-detail.jpg"
                      alt="High-Performance End Mill - View 3"
                      fill
                      className="object-contain"
                    />
                  </button>
                  <button className="relative aspect-square overflow-hidden rounded-lg border bg-white p-2">
                    <Image
                      src="/images/product-1-dimensions.jpg"
                      alt="High-Performance End Mill - Dimensions"
                      fill
                      className="object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">High-Performance End Mill</h1>
                  <p className="mt-2 text-lg text-gray-600">Model: MZG-EM2040</p>
                </div>

                <div className="space-y-4 rounded-lg bg-gray-50 p-6">
                  <h2 className="text-xl font-semibold">Key Features</h2>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700">
                    <li>Premium carbide construction for extended tool life</li>
                    <li>Specialized coating for heat resistance and reduced friction</li>
                    <li>Optimized flute geometry for efficient chip evacuation</li>
                    <li>Precision ground for superior surface finish</li>
                    <li>Balanced design for high-speed machining operations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Diameter</p>
                      <p>12mm - 25mm</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Length</p>
                      <p>75mm - 150mm</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Material</p>
                      <p>Tungsten Carbide</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Coating</p>
                      <p>AlTiN</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <FileText className="mr-2 h-4 w-4" />
                    Request Specifications
                  </Button>
                  <Button size="lg" variant="white">
                    <Download className="mr-2 h-4 w-4" />
                    Download CAD Files
                  </Button>
                  <Button size="lg" variant="white">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="specifications">
              <TabsList className="mb-8 grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="technical-data">Technical Data</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="space-y-6">
                <h2 className="text-2xl font-bold">Technical Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 text-left font-semibold">Parameter</th>
                        <th className="py-3 text-left font-semibold">Value</th>
                        <th className="py-3 text-left font-semibold">Unit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3">Diameter Range</td>
                        <td className="py-3">12 - 25</td>
                        <td className="py-3">mm</td>
                      </tr>
                      <tr>
                        <td className="py-3">Overall Length Range</td>
                        <td className="py-3">75 - 150</td>
                        <td className="py-3">mm</td>
                      </tr>
                      <tr>
                        <td className="py-3">Flute Length Range</td>
                        <td className="py-3">25 - 75</td>
                        <td className="py-3">mm</td>
                      </tr>
                      <tr>
                        <td className="py-3">Number of Flutes</td>
                        <td className="py-3">4</td>
                        <td className="py-3">-</td>
                      </tr>
                      <tr>
                        <td className="py-3">Helix Angle</td>
                        <td className="py-3">35</td>
                        <td className="py-3">degrees</td>
                      </tr>
                      <tr>
                        <td className="py-3">Coating</td>
                        <td className="py-3">AlTiN</td>
                        <td className="py-3">-</td>
                      </tr>
                      <tr>
                        <td className="py-3">Substrate</td>
                        <td className="py-3">Tungsten Carbide</td>
                        <td className="py-3">-</td>
                      </tr>
                      <tr>
                        <td className="py-3">Hardness</td>
                        <td className="py-3">1600</td>
                        <td className="py-3">HV</td>
                      </tr>
                      <tr>
                        <td className="py-3">Max RPM</td>
                        <td className="py-3">12000</td>
                        <td className="py-3">rpm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="space-y-6">
                {/* 内容保持不变 */}
              </TabsContent>
              <TabsContent value="technical-data" className="space-y-6">
                {/* 内容保持不变 */}
              </TabsContent>
              <TabsContent value="resources" className="space-y-6">
                {/* 内容保持不变 */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard
                image="/images/product-2.jpg"
                title="Precision Ball Nose End Mill"
                category="Milling"
                modelNumber="MZG-BN1560"
              />
              <ProductCard
                image="/images/product-3.jpg"
                title="Roughing End Mill"
                category="Milling"
                modelNumber="MZG-RE3070"
              />
              <ProductCard
                image="/images/product-4.jpg"
                title="Micro End Mill"
                category="Milling"
                modelNumber="MZG-ME0510"
              />
              <ProductCard
                image="/images/product-1.jpg"
                title="Chamfer End Mill"
                category="Milling"
                modelNumber="MZG-CE4590"
              />
            </div>
          </div>
        </section>

        {/* Technical Support */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 p-8 text-white md:p-12 animate-gradient-xy">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">Need Technical Support?</h2>
                  <p className="mt-4 text-gray-300">
                    Our engineering team is ready to assist you with product selection, application advice, and
                    technical specifications.
                  </p>
                  <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Contact Technical Support
                    </Button>
                    <Button size="lg" variant="white">
                      Request Consultation
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/technical-support.jpg"
                    alt="Technical Support"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
