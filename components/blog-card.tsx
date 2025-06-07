import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/mzgblog/${post.slug}`}>
        <div className="relative h-56 w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">
            {post.category}
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-500 text-sm mb-2">{formatDate(post.date)}</p>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-red-600 transition-colors">{post.title}</h3>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4">
            <span className="text-red-600 font-medium hover:underline">Read More</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
