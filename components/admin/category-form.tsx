"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { saveCategory } from "@/app/actions/blog-actions"

interface CategoryFormProps {
  category?: {
    id: string
    name: string
    slug: string
  }
}

export default function CategoryForm({ category }: CategoryFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [nameValue, setNameValue] = useState(category?.name || "")
  const [slugValue, setSlugValue] = useState(category?.slug || "")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setNameValue(name)

    // 如果是新分类且用户尚未手动修改过slug，则自动生成slug
    if (!category && slugValue === "") {
      setSlugValue(generateSlug(name))
    }
  }

  const generateSlug = (name: string) => {
    return name
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
      // 如果是编辑现有分类，添加ID
      if (category?.id) {
        formData.set("id", category.id)
      }

      const result = await saveCategory(formData)

      if (result.success) {
        // 重置表单
        setNameValue("")
        setSlugValue("")
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

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Category Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Manufacturing 101"
            value={nameValue}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            placeholder="e.g. manufacturing-101"
            value={slugValue}
            onChange={(e) => setSlugValue(e.target.value)}
            required
          />
          <p className="text-xs text-muted-foreground">Used in URLs and filtering</p>
        </div>

        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Saving..." : category ? "Update Category" : "Add Category"}
        </Button>
      </div>
    </form>
  )
}
