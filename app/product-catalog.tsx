import Image from "next/image"
import { Filter, ChevronDown, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ProductCatalog() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 py-16 text-white animate-gradient-x">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Milling Tools Catalog</h1>
              <p className="mt-4 text-lg text-gray-300">
                Browse our comprehensive range of high-performance milling tools designed for precision and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Mobile Filter Toggle */}
              <div className="mb-6 lg:hidden">
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter Products
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              {/* Sidebar Filters - Desktop */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* 过滤器内容保持不变 */}
                  <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
                </div>
              </div>

              {/* Product Listing */}
              <div className="lg:col-span-3">
                {/* Search and Sort */}
                <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                    <Input placeholder="Search products..." className="pl-10" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="text-sm font-medium">Sort by:</span>
                    </div>
                    <Select defaultValue="featured">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard
                    image="/images/product-1.jpg"
                    title="High-Performance End Mill"
                    category="End Mills"
                    modelNumber="MZG-EM2040"
                  />
                  <ProductCard
                    image="/images/product-2.jpg"
                    title="Precision Ball Nose End Mill"
                    category="Ball Nose Mills"
                    modelNumber="MZG-BN1560"
                  />
                  <ProductCard
                    image="/images/product-3.jpg"
                    title="Roughing End Mill"
                    category="End Mills"
                    modelNumber="MZG-RE3070"
                  />
                  <ProductCard
                    image="/images/product-4.jpg"
                    title="Micro End Mill"
                    category="End Mills"
                    modelNumber="MZG-ME0510"
                  />
                  <ProductCard
                    image="/images/product-1.jpg"
                    title="Chamfer End Mill"
                    category="Chamfer Mills"
                    modelNumber="MZG-CE4590"
                  />
                  <ProductCard
                    image="/images/product-2.jpg"
                    title="Face Mill Cutter"
                    category="Face Mills"
                    modelNumber="MZG-FM8025"
                  />
                  <ProductCard
                    image="/images/product-3.jpg"
                    title="Corner Radius End Mill"
                    category="Corner Radius Mills"
                    modelNumber="MZG-CR3545"
                  />
                  <ProductCard
                    image="/images/product-4.jpg"
                    title="High Feed Face Mill"
                    category="Face Mills"
                    modelNumber="MZG-HF6380"
                  />
                  <ProductCard
                    image="/images/product-1.jpg"
                    title="Long Flute End Mill"
                    category="End Mills"
                    modelNumber="MZG-LF2575"
                  />
                </div>

                {/* Pagination */}
                <div className="mt-12 flex items-center justify-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Support */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 p-8 text-white md:p-12 animate-gradient-xy">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">Need Help Finding the Right Tool?</h2>
                  <p className="mt-4 text-gray-300">
                    Our product specialists can help you select the perfect tool for your specific application.
                  </p>
                  <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Contact a Specialist
                    </Button>
                    <Button size="lg" variant="white">
                      Download Full Catalog
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
