"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"
import { revalidatePath } from "next/cache"

// 定义博客文章数据验证模式
const blogPostSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters." }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters." }),
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
  category: z.string().min(1, { message: "Category is required." }),
  date: z.string(),
  author: z.string().min(2, { message: "Author name must be at least 2 characters." }),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().default(true),
})

// 定义分类数据验证模式
const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, { message: "Category name must be at least 2 characters." }),
  slug: z.string().min(2, { message: "Category slug must be at least 2 characters." }),
})

export type BlogPost = z.infer<typeof blogPostSchema>
export type BlogCategory = z.infer<typeof categorySchema>

// 数据存储路径
const BLOG_DATA_FILE_PATH = path.join(process.cwd(), "data", "blog-posts.json")
const CATEGORY_DATA_FILE_PATH = path.join(process.cwd(), "data", "blog-categories.json")

// 确保数据目录存在
async function ensureDataDirectory() {
  const dir = path.dirname(BLOG_DATA_FILE_PATH)
  try {
    await fs.access(dir)
  } catch (error) {
    console.log("创建数据目录:", dir)
    await fs.mkdir(dir, { recursive: true })
  }
}

// 读取所有博客文章
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    await ensureDataDirectory()

    try {
      const data = await fs.readFile(BLOG_DATA_FILE_PATH, "utf-8")
      return JSON.parse(data)
    } catch (error) {
      // 如果文件不存在或为空，返回空数组
      console.log("读取博客数据失败，返回空数组:", error)
      return []
    }
  } catch (error) {
    console.error("Error reading blog posts:", error)
    throw new Error("Failed to read blog posts")
  }
}

// 获取单篇博客文章
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllBlogPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error("Error getting blog post:", error)
    return null
  }
}

// 保存博客文章
export async function saveBlogPost(
  formData: FormData,
): Promise<{ success: boolean; message: string; post?: BlogPost }> {
  try {
    // 从FormData中提取数据
    const rawData: Record<string, any> = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      category: formData.get("category"),
      author: formData.get("author"),
      date: formData.get("date") || new Date().toISOString().split("T")[0],
      image: formData.get("image") || "",
      tags: formData.get("tags")
        ? String(formData.get("tags"))
            .split(",")
            .map((tag) => tag.trim())
        : [],
      published: formData.get("published") === "true",
    }

    // 验证表单数据
    const validatedData = blogPostSchema.parse(rawData)

    // 获取现有文章
    const existingPosts = await getAllBlogPosts()

    // 检查是否已存在相同slug的文章（用于新增）
    const id = formData.get("id") as string
    if (!id && existingPosts.some((post) => post.slug === validatedData.slug)) {
      return {
        success: false,
        message: "A post with this slug already exists. Please choose a different slug.",
      }
    }

    let updatedPosts: BlogPost[]

    if (id) {
      // 更新现有文章
      updatedPosts = existingPosts.map((post) => (post.id === id ? { ...validatedData, id } : post))
    } else {
      // 创建新文章
      const newPost: BlogPost = {
        ...validatedData,
        id: generateId(),
      }
      updatedPosts = [newPost, ...existingPosts]
    }

    // 保存到文件
    await ensureDataDirectory()
    await fs.writeFile(BLOG_DATA_FILE_PATH, JSON.stringify(updatedPosts, null, 2))

    // 重新验证路径，更新缓存
    revalidatePath("/admin/blog")
    revalidatePath("/mzgblog")

    return {
      success: true,
      message: id ? "Blog post updated successfully" : "Blog post created successfully",
      post: id ? updatedPosts.find((post) => post.id === id) : updatedPosts[0],
    }
  } catch (error) {
    console.error("Error saving blog post:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: `Validation error: ${error.errors[0].message}` }
    }
    return { success: false, message: "Failed to save blog post" }
  }
}

// 删除博客文章
export async function deleteBlogPost(id: string): Promise<{ success: boolean; message: string }> {
  try {
    const existingPosts = await getAllBlogPosts()
    const updatedPosts = existingPosts.filter((post) => post.id !== id)

    await ensureDataDirectory()
    await fs.writeFile(BLOG_DATA_FILE_PATH, JSON.stringify(updatedPosts, null, 2))

    // 重新验证路径，更新缓存
    revalidatePath("/admin/blog")
    revalidatePath("/mzgblog")

    return { success: true, message: "Blog post deleted successfully" }
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return { success: false, message: "Failed to delete blog post" }
  }
}

// 读取所有分类
export async function getAllCategories(): Promise<BlogCategory[]> {
  try {
    await ensureDataDirectory()

    try {
      const data = await fs.readFile(CATEGORY_DATA_FILE_PATH, "utf-8")
      return JSON.parse(data)
    } catch (error) {
      // 如果文件不存在，创建默认分类
      const defaultCategories: BlogCategory[] = [
        { id: generateId(), name: "News", slug: "news" },
        { id: generateId(), name: "Careers", slug: "careers" },
        { id: generateId(), name: "Employee Spotlights", slug: "employee-spotlights" },
        { id: generateId(), name: "Exhibition", slug: "exhibition" },
        { id: generateId(), name: "Manufacturing 101", slug: "manufacturing-101" },
      ]
      await fs.writeFile(CATEGORY_DATA_FILE_PATH, JSON.stringify(defaultCategories, null, 2))
      return defaultCategories
    }
  } catch (error) {
    console.error("Error reading categories:", error)
    throw new Error("Failed to read categories")
  }
}

// 保存分类
export async function saveCategory(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // 从FormData中提取数据
    const rawData = {
      name: formData.get("name"),
      slug: formData.get("slug"),
    }

    // 验证表单数据
    const validatedData = categorySchema.parse(rawData)

    // 获取现有分类
    const existingCategories = await getAllCategories()

    // 检查是否已存在相同slug的分类（用于新增）
    const id = formData.get("id") as string
    if (!id && existingCategories.some((cat) => cat.slug === validatedData.slug)) {
      return {
        success: false,
        message: "A category with this slug already exists. Please choose a different slug.",
      }
    }

    let updatedCategories: BlogCategory[]

    if (id) {
      // 更新现有分类
      updatedCategories = existingCategories.map((cat) => (cat.id === id ? { ...validatedData, id } : cat))
    } else {
      // 创建新分类
      const newCategory: BlogCategory = {
        ...validatedData,
        id: generateId(),
      }
      updatedCategories = [...existingCategories, newCategory]
    }

    // 保存到文件
    await ensureDataDirectory()
    await fs.writeFile(CATEGORY_DATA_FILE_PATH, JSON.stringify(updatedCategories, null, 2))

    // 重新验证路径，更新缓存
    revalidatePath("/admin/blog/categories")

    return {
      success: true,
      message: id ? "Category updated successfully" : "Category created successfully",
    }
  } catch (error) {
    console.error("Error saving category:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: `Validation error: ${error.errors[0].message}` }
    }
    return { success: false, message: "Failed to save category" }
  }
}

// 删除分类
export async function deleteCategory(id: string): Promise<{ success: boolean; message: string }> {
  try {
    const existingCategories = await getAllCategories()
    const updatedCategories = existingCategories.filter((cat) => cat.id !== id)

    // 检查是否有文章使用此分类
    const posts = await getAllBlogPosts()
    const categoryToDelete = existingCategories.find((cat) => cat.id === id)

    if (categoryToDelete && posts.some((post) => post.category === categoryToDelete.name)) {
      return {
        success: false,
        message: "Cannot delete category that is being used by blog posts",
      }
    }

    await ensureDataDirectory()
    await fs.writeFile(CATEGORY_DATA_FILE_PATH, JSON.stringify(updatedCategories, null, 2))

    // 重新验证路径，更新缓存
    revalidatePath("/admin/blog/categories")

    return { success: true, message: "Category deleted successfully" }
  } catch (error) {
    console.error("Error deleting category:", error)
    return { success: false, message: "Failed to delete category" }
  }
}

// 生成唯一ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
