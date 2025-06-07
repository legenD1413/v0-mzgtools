import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ThreadingToolsPage() {
  const categories = [
    {
      title: "Taps",
      description: "High-performance taps for creating internal threads in various materials",
      image: "/images/threading-tools.jpg",
      link: "/standard-tools/threading/taps",
    },
    {
      title: "Thread Mills",
      description: "Precision thread mills for CNC machining of internal and external threads",
      image: "/images/milling-tools.jpg",
      link: "/standard-tools/threading/thread-mills",
    },
    {
      title: "Thread Turning Tools",
      description: "Thread turning tools for external threading operations on lathes",
      image: "/images/turning-solutions.jpg",
      link: "/standard-tools/threading/thread-turning",
    },
    {
      title: "Thread Whirling Tools",
      description: "Specialized tools for high-efficiency thread whirling operations",
      image: "/images/product-2.jpg",
      link: "/standard-tools/threading/thread-whirling",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/threading-tools.jpg"
            alt="Threading Tools Background"
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
              <span>Threading Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Threading Tools</h1>
            <p className="text-lg md:text-xl mb-8">
              Precision threading tools designed for creating accurate and consistent threads across a wide range of
              materials and applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700">Request Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Threading Tool Categories</h2>
          <p className="mb-8">
            MZG Tool Group offers a comprehensive range of threading tools for various applications. From taps and
            thread mills to thread turning tools, we provide solutions for all your threading needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
