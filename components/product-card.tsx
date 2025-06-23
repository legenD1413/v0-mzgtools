import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  category: string
  modelNumber?: string
  url?: string
}

export default function ProductCard({ image, title, category, modelNumber, url = "#" }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={url} className="block overflow-hidden">
        <div className="relative h-36 w-full overflow-hidden bg-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="text-sm text-gray-500">{category}</span>
          <h3 className="mt-1 text-base font-medium">{title}</h3>
          {modelNumber && <p className="mt-2 text-sm font-medium text-gray-700">Model: {modelNumber}</p>}
        </div>
      </Link>
    </div>
  )
}
