"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { type BlogPost, getAllCategories, saveBlogPost } from "@/app/actions/blog-actions"
import RichTextEditor from "@/components/admin/rich-text-editor"

interface BlogPostFormProps {
  post?: BlogPost
}

export default function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter()
  const [categories, setCategories] = useState<{ id: string; name: string; slug: string }[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [content, setContent] = useState(post?.content || "")
  const [slugValue, setSlugValue] = useState(post?.slug || "")
  const [titleValue, setTitleValue] = useState(post?.title || "")
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setTitleValue(title)

    // 如果是新文章且用户尚未手动修改过slug，则自动生成slug
    if (!post && slugValue === "") {
      setSlugValue(generateSlug(title))
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // 移除特殊字符
      .replace(/\s+/g, "-") // 空格替换为连字符
      .replace(/-+/g, "-") // 多个连字符替换为单个
      .trim()
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setError("")

    try {
      // 添加富文本编辑器内容到表单数据
      formData.set("content", content)

      // 如果是编辑现有文章，添加ID
      if (post?.id) {
        formData.set("id", post.id)
      }

      const result = await saveBlogPost(formData)

      if (result.success) {
        router.push("/admin/blog")
        router.refresh()
      } else {
        setError(result.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit}>
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      <div className="grid gap-6 mb-6">
        <div className="grid gap-3">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter post title"
            defaultValue={post?.title}
            value={titleValue}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            placeholder="enter-post-slug"
            defaultValue={post?.slug}
            value={slugValue}
            onChange={(e) => setSlugValue(e.target.value)}
            required
          />
          <p className="text-sm text-muted-foreground">
            This will be used in the URL: /mzgblog/{slugValue || "post-slug"}
          </p>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            placeholder="Brief summary of the post"
            defaultValue={post?.excerpt}
            rows={3}
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="content">Content</Label>
          <Card>
            <CardContent className="p-0">
              <RichTextEditor value={content} onChange={setContent} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
            defaultValue={post?.category || ""}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" placeholder="Author name" defaultValue={post?.author || ""} required />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="date">Publication Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            defaultValue={post?.date || new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="image">Featured Image URL</Label>
          <Input id="image" name="image" placeholder="/images/blog/your-image.jpg" defaultValue={post?.image || ""} />
          <p className="text-sm text-muted-foreground">
            Enter the path to the image. Upload images to the public/images/blog directory.
          </p>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="tags">Tags</Label>
          <Input id="tags" name="tags" placeholder="tag1, tag2, tag3" defaultValue={post?.tags?.join(", ") || ""} />
          <p className="text-sm text-muted-foreground">Separate tags with commas</p>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="published" name="published" defaultChecked={post?.published !== false} />
          <Label htmlFor="published">Publish this post</Label>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Link href="/admin/blog">
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Link>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Saving..." : post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  )
}
