import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function StandardToolsPage() {
  const categories = [
    {
      title: "Milling Tools",
      image: "/images/milling-tools.jpg",
      href: "/standard-tools/milling",
      description: "High-performance milling tools for various applications",
    },
    {
      title: "Hole Making",
      image: "/images/hole-making.jpg",
      href: "/standard-tools/hole-making",
      description: "Precision drilling and hole making solutions",
    },
    {
      title: "Threading Tools",
      image: "/images/threading-tools.jpg",
      href: "/standard-tools/threading",
      description: "Reliable threading tools for all materials",
    },
    {
      title: "Turning Solutions",
      image: "/images/turning-solutions.jpg",
      href: "/standard-tools/turning",
      description: "Advanced turning tools for optimal performance",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span>Standard Tools</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Standard Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.title} href={category.href} className="group">
            <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
