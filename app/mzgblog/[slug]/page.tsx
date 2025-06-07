import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { getBlogPost } from "@/app/actions/blog-actions"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | MZG Tools",
    }
  }

  return {
    title: `${post.title} | MZG Tools Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={post.image || "/placeholder.svg?height=800&width=1200&query=industrial tool"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium uppercase mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 py-6 border-b border-gray-200 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span>{post.category}</span>
          </div>
          <div className="ml-auto">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 size={16} />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none py-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/mzgblog?tag=${tag}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link href="/mzgblog">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
