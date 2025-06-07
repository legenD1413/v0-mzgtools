import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FeatureSection from "@/components/feature-section"
import { StagewiseInit } from "@/components/stagewise-init"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/hero-image.jpg"
          alt="Premium Industrial Milling Tools"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Precision Engineered <br />
            Industrial Milling Tools
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl">
            Custom and standard solutions for the most demanding industrial applications
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Explore Products
            </Button>
            <Button size="lg" variant="white">
              Custom Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Product Categories</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/standard-tools/milling" className="group">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/images/milling-tools.jpg"
                  alt="Milling Tools"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Milling Tools</h3>
              <p className="mt-2 flex items-center text-gray-600">
                Explore collection <ChevronRight className="ml-1 h-4 w-4" />
              </p>
            </Link>
            <Link href="/standard-tools/hole-making" className="group">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/images/hole-making.jpg"
                  alt="Hole Making Tools"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Hole Making Tools</h3>
              <p className="mt-2 flex items-center text-gray-600">
                Explore collection <ChevronRight className="ml-1 h-4 w-4" />
              </p>
            </Link>
            <Link href="/standard-tools/threading" className="group">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/images/threading-tools.jpg"
                  alt="Threading Tools"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Threading Tools</h3>
              <p className="mt-2 flex items-center text-gray-600">
                Explore collection <ChevronRight className="ml-1 h-4 w-4" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              image="/images/product-1.jpg"
              title="High-Performance End Mill"
              category="Milling"
              modelNumber="MZG-EM2040"
            />
            <ProductCard
              image="/images/product-2.jpg"
              title="Precision Drill Bit Set"
              category="Hole Making"
              modelNumber="MZG-DB1580"
            />
            <ProductCard
              image="/images/product-3.jpg"
              title="Thread Mill Cutter"
              category="Threading"
              modelNumber="MZG-TMC3060"
            />
            <ProductCard
              image="/images/product-4.jpg"
              title="Carbide Insert Pack"
              category="Inserts"
              modelNumber="MZG-CI9025"
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Custom Tooling Solutions</h2>
              <p className="mb-6 text-lg text-gray-600">
                We specialize in designing and manufacturing custom tooling solutions to meet your specific
                requirements. Our engineering team works closely with you to develop tools that optimize your
                manufacturing processes.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Custom tool holders for specialized applications</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Specialized turning solutions for complex parts</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Engineered solutions for challenging materials</span>
                </li>
              </ul>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Request Custom Solution
              </Button>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/images/custom-solution.jpg" alt="Custom Tooling Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Why Choose MZG Tools</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureSection
              icon="precision"
              title="Precision Engineering"
              description="Our tools are manufactured to the highest standards of precision and quality."
            />
            <FeatureSection
              icon="innovation"
              title="Innovative Solutions"
              description="We continuously develop new technologies to improve cutting performance."
            />
            <FeatureSection
              icon="support"
              title="Expert Support"
              description="Our technical team provides expert advice and support for all your tooling needs."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-950 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Optimize Your Manufacturing Process?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-300">
            Contact our team today to discuss how our precision tools can improve your productivity and reduce costs.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact Sales
            </Button>
            <Button size="lg" variant="white">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Stagewise 开发工具初始化 */}
      <StagewiseInit />
    </div>
  )
}
