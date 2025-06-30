"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Loader2, Plus, Search, Edit, Trash2, Eye, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import HierarchicalPageSelector from "@/components/admin-mzg/hierarchical-page-selector"

interface FAQ {
  id: number
  page_urls: string[]
  question: string
  answer: string
  categories: string[]
  sort_order: number
  is_active: boolean
  show_in_popular: boolean
  created_at: string
  updated_at: string
}

interface FAQFormData {
  page_urls: string[]
  question: string
  answer: string
  categories: string[]
  sort_order: number
  show_in_popular: boolean
}

export default function FAQManagePage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [pageUrl, setPageUrl] = useState("all")
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState<FAQFormData>({
    page_urls: [],
    question: "",
    answer: "",
    categories: [],
    sort_order: 0,
    show_in_popular: false
  })

  // 常用分类选项
  const categoryOptions = [
    "General",
    "Technical", 
    "Applications",
    "Order Process",
    "Support",
    "Others"
  ]



  // 获取FAQ列表
  const fetchFaqs = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (search) params.append("search", search)
      if (category && category !== "all") params.append("category", category)
      if (pageUrl && pageUrl !== "all") params.append("page_url", pageUrl)

      const response = await fetch(`/api/admin-mzg/faqs?${params}`)
      if (!response.ok) throw new Error("获取FAQ列表失败")
      
      const data = await response.json()
      setFaqs(data.faqs || [])
    } catch (error) {
      console.error("获取FAQ列表失败:", error)
      toast({
        title: "错误",
        description: "获取FAQ列表失败",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  // 提交表单
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.page_urls.length || !formData.question || !formData.answer || !formData.categories.length) {
      toast({
        title: "错误",
        description: "请填写所有必填字段",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    try {
      const url = editingFaq 
        ? `/api/admin-mzg/faqs/${editingFaq.id}`
        : "/api/admin-mzg/faqs"
      
      const method = editingFaq ? "PUT" : "POST"
      
      console.log('提交FAQ数据:', {
        url,
        method,
        formData
      })
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      console.log('API响应状态:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('API错误响应:', errorData)
        throw new Error(errorData.error || `${editingFaq ? '更新' : '创建'}FAQ失败`)
      }

      const result = await response.json()
      console.log('API成功响应:', result)

      toast({
        title: "成功",
        description: `FAQ${editingFaq ? '更新' : '创建'}成功`
      })

      setIsDialogOpen(false)
      resetForm()
      fetchFaqs()
    } catch (error) {
      console.error("提交失败详细信息:", error)
      toast({
        title: "错误",
        description: error instanceof Error ? error.message : `FAQ${editingFaq ? '更新' : '创建'}失败`,
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // 删除FAQ
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/admin-mzg/faqs/${id}`, {
        method: "DELETE"
      })

      if (!response.ok) throw new Error("删除FAQ失败")

      toast({
        title: "成功",
        description: "FAQ删除成功"
      })

      fetchFaqs()
    } catch (error) {
      console.error("删除失败:", error)
      toast({
        title: "错误",
        description: "删除FAQ失败",
        variant: "destructive"
      })
    }
  }

  // 重置表单
  const resetForm = () => {
    setFormData({
      page_urls: [],
      question: "",
      answer: "",
      categories: [],
      sort_order: 0,
      show_in_popular: false
    })
    setEditingFaq(null)
  }

  // 编辑FAQ
  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq)
    setFormData({
      page_urls: faq.page_urls || [],
      question: faq.question,
      answer: faq.answer,
      categories: faq.categories || [],
      sort_order: faq.sort_order,
      show_in_popular: faq.show_in_popular
    })
    setIsDialogOpen(true)
  }

  // 添加FAQ
  const handleAdd = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  // 处理分类选择
  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(cat => cat !== category)
        : [...prev.categories, category]
    }))
  }

  // 移除选中的分类
  const removeCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== category)
    }))
  }

  useEffect(() => {
    fetchFaqs()
  }, [search, category, pageUrl])

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">FAQ管理</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          添加FAQ
        </Button>
      </div>

      {/* 搜索和筛选 */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">搜索</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="搜索问题或答案..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category">分类筛选</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="选择分类" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部分类</SelectItem>
                  {categoryOptions.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pageUrl">页面筛选</Label>
              <Input
                id="pageUrl"
                placeholder="输入页面路径筛选..."
                value={pageUrl === "all" ? "" : pageUrl}
                onChange={(e) => setPageUrl(e.target.value || "all")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ列表 */}
      <Card>
        <CardHeader>
          <CardTitle>FAQ列表</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>问题</TableHead>
                  <TableHead>页面地址</TableHead>
                  <TableHead>分类</TableHead>
                  <TableHead>热门问题</TableHead>
                  <TableHead>排序</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faqs.map((faq) => (
                  <TableRow key={faq.id}>
                    <TableCell className="max-w-xs">
                      <div className="truncate" title={faq.question}>
                        {faq.question}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {faq.page_urls?.map((url, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {url}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {faq.categories?.map((cat, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {faq.show_in_popular ? (
                        <Badge variant="default">显示</Badge>
                      ) : (
                        <Badge variant="outline">隐藏</Badge>
                      )}
                    </TableCell>
                    <TableCell>{faq.sort_order}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(faq)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>确认删除</AlertDialogTitle>
                              <AlertDialogDescription>
                                确定要删除这个FAQ吗？此操作不可撤销。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>取消</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(faq.id)}
                              >
                                删除
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {faqs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      暂无FAQ数据
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* 添加/编辑对话框 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingFaq ? '编辑FAQ' : '添加FAQ'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 页面地址选择 - 使用分级选择器 */}
            <HierarchicalPageSelector
              selectedPages={formData.page_urls}
              onChange={(pages) => setFormData({ ...formData, page_urls: pages })}
            />

            {/* 分类选择 */}
            <div>
              <Label>分类 *</Label>
              <div className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {categoryOptions.map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={`cat-${cat}`}
                        checked={formData.categories.includes(cat)}
                        onCheckedChange={() => handleCategoryChange(cat)}
                      />
                      <Label htmlFor={`cat-${cat}`} className="text-sm">
                        {cat}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">已选择:</span>
                    {formData.categories.map((cat) => (
                      <Badge key={cat} variant="secondary" className="flex items-center gap-1">
                        {cat}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => removeCategory(cat)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 问题 */}
            <div>
              <Label htmlFor="question">问题 *</Label>
              <Textarea
                id="question"
                value={formData.question}
                onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
                placeholder="请输入FAQ问题..."
                rows={3}
              />
            </div>

            {/* 答案 */}
            <div>
              <Label htmlFor="answer">答案 *</Label>
              <Textarea
                id="answer"
                value={formData.answer}
                onChange={(e) => setFormData(prev => ({ ...prev, answer: e.target.value }))}
                placeholder="请输入FAQ答案..."
                rows={6}
              />
            </div>

            {/* 其他设置 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="sort_order">排序</Label>
                <Input
                  id="sort_order"
                  type="number"
                  value={formData.sort_order}
                  onChange={(e) => setFormData(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
                  placeholder="排序数字（越小越靠前）"
                />
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <Checkbox
                  id="show_in_popular"
                  checked={formData.show_in_popular}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, show_in_popular: checked as boolean }))}
                />
                <Label htmlFor="show_in_popular">显示在热门问题中</Label>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
              >
                取消
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                {editingFaq ? '更新' : '创建'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
} 