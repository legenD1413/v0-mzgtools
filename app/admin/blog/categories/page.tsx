import Link from "next/link"
import type { Metadata } from "next"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllCategories } from "@/app/actions/blog-actions"
import { protectRoute } from "@/lib/auth-service"
import CategoryForm from "@/components/admin/category-form"
import DeleteCategoryButton from "@/components/admin/delete-category-button"

export const metadata: Metadata = {
  title: "Blog Categories | MZG Tools Admin",
  description: "Manage blog categories for MZG Tools website",
}

export default async function CategoriesPage() {
  // 保护路由
  protectRoute()

  const categories = await getAllCategories()

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Categories</h1>
        <Link href="/admin/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Existing Categories</h2>
          {categories.length === 0 ? (
            <p className="text-muted-foreground">No categories found</p>
          ) : (
            categories.map((category) => (
              <Card key={category.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">Slug: {category.slug}</p>
                    </div>
                    <DeleteCategoryButton id={category.id} name={category.name} />
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
