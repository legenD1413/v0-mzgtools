import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function MillingToolsPage() {
  const categories = [
    {
      title: "End Mills",
      image: "/images/product-1.jpg",
      href: "/standard-tools/milling/end-mills",
      description: "High-performance end mills for various materials and applications",
    },
    {
      title: "Micro End Mills",
      image: "/images/product-2.jpg",
      href: "/standard-tools/milling/micro-end-mills",
      description: "Precision micro end mills for detailed machining operations",
    },
    {
      title: "Ball Nose End Mills",
      image: "/images/product-3.jpg",
      href: "/standard-tools/milling/ball-nose-end-mills",
      description: "Specialized end mills for 3D contour machining",
    },
    {
      title: "Roughing End Mills",
      image: "/images/product-4.jpg",
      href: "/standard-tools/milling/roughing-end-mills",
      description: "High material removal rate end mills for efficient roughing operations",
    },
    {
      title: "Face Mills",
      image: "/images/product-1.jpg",
      href: "/standard-tools/milling/face-mills",
      description: "Face milling tools for flat surface machining",
    },
    {
      title: "Indexable End Mills",
      image: "/images/product-2.jpg",
      href: "/standard-tools/milling/indexable-end-mills",
      description: "Versatile indexable end mills for cost-effective machining",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/standard-tools" className="hover:text-red-500">
          Standard Tools
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span>Milling</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Milling Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.title} href={category.href} className="group">
            <div className="border rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
