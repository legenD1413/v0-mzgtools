import Link from "next/link"
import type { Metadata } from "next"
import { format } from "date-fns"
import { Edit, Plus, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllBlogPosts } from "@/app/actions/blog-actions"
import { protectRoute } from "@/lib/auth-service"
import DeleteBlogPostButton from "@/components/admin/delete-blog-post-button"

export const metadata: Metadata = {
  title: "Blog Management | MZG Tools Admin",
  description: "Manage blog posts for MZG Tools website",
}

export default async function BlogManagementPage() {
  // 保护路由
  protectRoute()

  const blogPosts = await getAllBlogPosts()

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <div className="flex gap-4">
          <Link href="/admin/blog/categories">
            <Button variant="outline">Manage Categories</Button>
          </Link>
          <Link href="/admin/blog/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {blogPosts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <p className="text-muted-foreground mb-4">No blog posts found</p>
            <Link href="/admin/blog/new">
              <Button>Create your first blog post</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {format(new Date(post.date), "MMMM d, yyyy")} • {post.author}
                    </CardDescription>
                  </div>
                  <Badge variant={post.published ? "default" : "outline"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <Link href={`/mzgblog/${post.slug}`} target="_blank">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                  </Link>
                  <Link href={`/admin/blog/edit/${post.id}`}>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteBlogPostButton id={post.id} title={post.title} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
