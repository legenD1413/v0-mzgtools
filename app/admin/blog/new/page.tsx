import type { Metadata } from "next"
import { protectRoute } from "@/lib/auth-service"
import BlogPostForm from "@/components/admin/blog-post-form"

export const metadata: Metadata = {
  title: "New Blog Post | MZG Tools Admin",
  description: "Create a new blog post for MZG Tools website",
}

export default async function NewBlogPostPage() {
  // 保护路由
  protectRoute()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <BlogPostForm />
    </div>
  )
}
