import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { getAllBlogPosts, getAllCategories } from "@/app/actions/blog-actions"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog | MZG Tools",
  description: "The latest news and insights from MZG Tools",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = await getAllBlogPosts()
  const categories = await getAllCategories()

  // 只显示已发布的文章
  const publishedPosts = posts.filter((post) => post.published !== false)

  // 处理分类过滤
  const categoryFilter = searchParams.category as string | undefined
  const tagFilter = searchParams.tag as string | undefined

  let filteredPosts = publishedPosts

  if (categoryFilter) {
    filteredPosts = filteredPosts.filter((post) => post.category.toLowerCase() === categoryFilter.toLowerCase())
  }

  if (tagFilter) {
    filteredPosts = filteredPosts.filter((post) =>
      post.tags?.some((tag) => tag.toLowerCase() === tagFilter.toLowerCase()),
    )
  }

  // 按日期排序（最新的在前）
  filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/images/blog/blog-banner.png" alt="MZG Blog" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">MZG BLOG</h1>
            <p className="text-xl text-gray-200">The latest news and insights from MZG Tools</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            <Link
              href="/mzgblog"
              className={`text-sm font-medium py-2 border-b-2 ${
                !categoryFilter ? "border-red-500 text-red-500" : "border-transparent hover:border-gray-300"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/mzgblog?category=${category.name}`}
                className={`text-sm font-medium py-2 border-b-2 ${
                  categoryFilter === category.name
                    ? "border-red-500 text-red-500"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No posts found</h2>
            <p className="text-gray-600">
              {categoryFilter || tagFilter
                ? "Try selecting a different category or removing filters"
                : "Check back soon for new content"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/mzgblog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600&query=industrial tool"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-gray-500 text-sm mb-2">{formatDate(post.date)}</div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="text-red-600 font-medium text-sm flex items-center mt-auto">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
