import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { protectRoute } from "@/lib/auth-service"
import { getAllBlogPosts } from "@/app/actions/blog-actions"
import BlogPostForm from "@/components/admin/blog-post-form"

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EditBlogPostPageProps): Promise<Metadata> {
  const posts = await getAllBlogPosts()
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: "Post Not Found | MZG Tools Admin",
    }
  }

  return {
    title: `Edit: ${post.title} | MZG Tools Admin`,
    description: `Edit blog post: ${post.title}`,
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  // 保护路由
  protectRoute()

  const posts = await getAllBlogPosts()
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <BlogPostForm post={post} />
    </div>
  )
}
