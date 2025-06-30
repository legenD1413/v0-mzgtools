"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit, Plus, Upload, Eye, EyeOff, Grid, List } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

interface GalleryImage {
  id: number
  pagePath: string
  imageUrl: string
  title?: string
  description?: string
  sortOrder: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function ProductGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPagePath, setSelectedPagePath] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [formData, setFormData] = useState({
    pagePath: "",
    imageUrl: "",
    title: "",
    description: "",
    sortOrder: 0,
    isActive: true
  })
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState("")
  const [customPath, setCustomPath] = useState("")
  const [isBatchUploadOpen, setIsBatchUploadOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [batchFormData, setBatchFormData] = useState({
    pagePath: "",
    imageNames: "",
    sortOrderStart: 0,
    isActive: true
  })
  const [batchSelectedCategory, setBatchSelectedCategory] = useState("")
  const [batchSelectedSubCategory, setBatchSelectedSubCategory] = useState("")
  const [batchCustomPath, setBatchCustomPath] = useState("")

  // 页面路径分类结构
  const pageCategories = {
    "milling": {
      name: "milling",
      subCategories: {
        "deep-ditch": "deep-ditch",
        "ball-end": "ball-end",
        "ball-nose": "ball-nose",
        "chamfer": "chamfer",
        "corner-radius": "corner-radius",
        "end-mills": "end-mills",
        "engraving": "engraving",
        "face-mills": "face-mills",
        "fillet": "fillet",
        "reamer": "reamer",
        "right-angle-flat": "right-angle-flat",
        "rough": "rough",
        "roughing": "roughing",
        "side-milling-cutter": "side-milling-cutter",
        "small-diameter": "small-diameter",
        "t-slot-cutter": "t-slot-cutter",
        "taper": "taper",
        "thread-mills": "thread-mills",
        "welding-edge": "welding-edge"
      }
    },
    "hole-making": {
      name: "hole-making",
      subCategories: {
        "boring": "boring",
        "counterbores": "counterbores",
        "countersinks": "countersinks",
        "drills": "drills",
        "gun-drills": "gun-drills",
        "reamers": "reamers",
        "spotting": "spotting",
        "step-drills": "step-drills"
      }
    },
    "threading": {
      name: "threading",
      subCategories: {
        "taps": "taps",
        "inserts-type-thread-milling-cutter": "inserts-type-thread-milling-cutter",
        "integral-thread-milling-cutters": "integral-thread-milling-cutters",
        "thread-milling-cutters": "thread-milling-cutters",
        "thread-mills": "thread-mills",
        "thread-turning": "thread-turning",
        "thread-whirling": "thread-whirling"
      }
    },
    "hole-machining": {
      name: "hole-machining",
      subCategories: {
        "boring-machining": "boring-machining",
        "drill-bit": "drill-bit",
        "drill-bit-reamer": "drill-bit-reamer",
        "fast-drilling": "fast-drilling",
        "fine-boring": "fine-boring",
        "rough-boring": "rough-boring"
      }
    },
    "clamp-type-milling": {
      name: "clamp-type-milling",
      subCategories: {
        "ball-end-milling-cutters": "ball-end-milling-cutters",
        "chamfering-cutters": "chamfering-cutters",
        "corn-roughing": "corn-roughing",
        "face-milling-cutters": "face-milling-cutters",
        "fillet-corner-rounding": "fillet-corner-rounding",
        "grooving-slotting": "grooving-slotting",
        "high-feed-milling-cutter": "high-feed-milling-cutter",
        "right-angle-square-shoulder": "right-angle-square-shoulder",
        "screwed-modular-tool-holders": "screwed-modular-tool-holders"
      }
    },
    "milling-tool-holder": {
      name: "milling-tool-holder",
      subCategories: {
        "ads-pull-back": "ads-pull-back",
        "drill-chuck": "drill-chuck",
        "er-tool-holder": "er-tool-holder",
        "face-milling": "face-milling",
        "hm-hydraulic": "hm-hydraulic",
        "morse-taper": "morse-taper",
        "oz-tool-holder": "oz-tool-holder",
        "power-tool-holder": "power-tool-holder",
        "side-lock": "side-lock",
        "sk-high-speed": "sk-high-speed",
        "sr-shrink-fit": "sr-shrink-fit",
        "tapping-tool-holder": "tapping-tool-holder"
      }
    },
    "tool-holders": {
      name: "tool-holders",
      subCategories: {
        "adapters": "adapters",
        "boring": "boring",
        "collet-chucks": "collet-chucks",
        "milling": "milling",
        "turning": "turning"
      }
    },
    "inserts": {
      name: "inserts",
      subCategories: {
        "drilling": "drilling",
        "grooving": "grooving",
        "milling": "milling",
        "threading": "threading",
        "turning": "turning"
      }
    },
    "lathe-turning-inserts": {
      name: "lathe-turning-inserts",
      subCategories: {
        "back-turning-inserts": "back-turning-inserts",
        "drilling-inserts": "drilling-inserts",
        "grooving-cut-off-turning-inserts": "grooving-cut-off-turning-inserts",
        "milling-inserts": "milling-inserts",
        "threading-inserts": "threading-inserts",
        "turning-inserts": "turning-inserts"
      }
    },
    "right-angle-flat": {
      name: "right-angle-flat",
      subCategories: {
        "right-angle-flat": "right-angle-flat"
      }
    }
  }

  // 根据分类和子分类生成完整路径
  const generatePath = (category: string, subCategory: string) => {
    if (category === "right-angle-flat") {
      return "/standard-tools/right-angle-flat"
    }
    return `/standard-tools/${category}/${subCategory}`
  }

  // 获取所有路径（用于兼容性）
  const commonPaths = Object.keys(pageCategories).flatMap(category => 
    Object.keys(pageCategories[category as keyof typeof pageCategories].subCategories).map(subCategory => 
      generatePath(category, subCategory)
    )
  )

  // 处理分类选择变化
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubCategory("")
    setCustomPath("")  // 清空自定义路径
    setFormData(prev => ({ ...prev, pagePath: "" }))
  }

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategory(subCategory)
    setCustomPath("")  // 清空自定义路径
    const fullPath = generatePath(selectedCategory, subCategory)
    setFormData(prev => ({ ...prev, pagePath: fullPath }))
  }

  // 处理自定义路径输入
  const handleCustomPathChange = (path: string) => {
    setCustomPath(path)
    if (path.trim()) {
      // 如果输入了自定义路径，清空下拉菜单选择并更新formData
      setSelectedCategory("")
      setSelectedSubCategory("")
      setFormData(prev => ({ ...prev, pagePath: path }))
    } else {
      // 如果清空了自定义路径，恢复使用下拉菜单生成的路径
      if (selectedCategory && selectedSubCategory) {
        const fullPath = generatePath(selectedCategory, selectedSubCategory)
        setFormData(prev => ({ ...prev, pagePath: fullPath }))
      } else {
        setFormData(prev => ({ ...prev, pagePath: "" }))
      }
    }
  }

  // 处理批量上传分类选择变化
  const handleBatchCategoryChange = (category: string) => {
    setBatchSelectedCategory(category)
    setBatchSelectedSubCategory("")
    setBatchCustomPath("")  // 清空自定义路径
    setBatchFormData(prev => ({ ...prev, pagePath: "" }))
  }

  const handleBatchSubCategoryChange = (subCategory: string) => {
    setBatchSelectedSubCategory(subCategory)
    setBatchCustomPath("")  // 清空自定义路径
    const fullPath = generatePath(batchSelectedCategory, subCategory)
    setBatchFormData(prev => ({ ...prev, pagePath: fullPath }))
  }

  // 处理批量上传自定义路径输入
  const handleBatchCustomPathChange = (path: string) => {
    setBatchCustomPath(path)
    if (path.trim()) {
      // 如果输入了自定义路径，清空下拉菜单选择并更新batchFormData
      setBatchSelectedCategory("")
      setBatchSelectedSubCategory("")
      setBatchFormData(prev => ({ ...prev, pagePath: path }))
    } else {
      // 如果清空了自定义路径，恢复使用下拉菜单生成的路径
      if (batchSelectedCategory && batchSelectedSubCategory) {
        const fullPath = generatePath(batchSelectedCategory, batchSelectedSubCategory)
        setBatchFormData(prev => ({ ...prev, pagePath: fullPath }))
      } else {
        setBatchFormData(prev => ({ ...prev, pagePath: "" }))
      }
    }
  }

  // 获取图片列表
  const fetchImages = async () => {
    try {
      const response = await fetch("/api/admin-mzg/product-gallery")
      if (response.ok) {
        const data = await response.json()
        setImages(data.images)
      }
    } catch (error) {
      console.error("获取图片列表失败:", error)
      toast.error("获取图片列表失败")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  // 过滤图片
  const filteredImages = selectedPagePath === "all" 
    ? images 
    : images.filter(img => img.pagePath === selectedPagePath)

  // 按页面路径分组
  const groupedImages = filteredImages.reduce((groups, image) => {
    const path = image.pagePath
    if (!groups[path]) {
      groups[path] = []
    }
    groups[path].push(image)
    return groups
  }, {} as Record<string, GalleryImage[]>)

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 添加表单验证
    if (!formData.pagePath) {
      toast.error("请选择页面路径或输入自定义路径")
      return
    }
    
    if (!formData.imageUrl) {
      toast.error("请输入图片名称")
      return
    }
    
    try {
      const url = editingImage 
        ? `/api/admin-mzg/product-gallery/${editingImage.id}`
        : "/api/admin-mzg/product-gallery"
      
      const method = editingImage ? "PUT" : "POST"
      
      // 确保图片URL以/images/开头
      const imageUrl = formData.imageUrl.startsWith('/images/') 
        ? formData.imageUrl 
        : `/images/${formData.imageUrl}`
      
      const requestData = {
        ...formData,
        imageUrl
      }
      
      // 添加调试日志
      console.log("提交数据:", requestData)
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })

      console.log("响应状态:", response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log("成功响应:", result)
        toast.success(editingImage ? "图片更新成功" : "图片添加成功")
        setIsAddDialogOpen(false)
        setEditingImage(null)
        setSelectedCategory("")
        setSelectedSubCategory("")
        setCustomPath("")
        setFormData({
          pagePath: "",
          imageUrl: "",
          title: "",
          description: "",
          sortOrder: 0,
          isActive: true
        })
        fetchImages()
              } else {
          const errorText = await response.text()
          console.error("错误响应:", errorText)
          try {
            const error = JSON.parse(errorText) as { message?: string }
            toast.error(error.message || "操作失败")
          } catch {
            toast.error(`请求失败 (${response.status}): ${errorText}`)
          }
        }
          } catch (err) {
        console.error("提交失败:", err)
        const errorMessage = err instanceof Error ? err.message : "未知错误"
        toast.error(`网络错误: ${errorMessage}`)
      }
  }

  // 批量上传处理
  const handleBatchUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!batchFormData.pagePath || !batchFormData.imageNames.trim()) {
      toast.error("页面路径和图片名称不能为空")
      return
    }

    try {
      const response = await fetch("/api/admin-mzg/product-gallery/batch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(batchFormData)
      })

      if (response.ok) {
        const result = await response.json()
        toast.success(`批量上传成功，添加了 ${result.count} 张图片`)
        setIsBatchUploadOpen(false)
        setBatchSelectedCategory("")
        setBatchSelectedSubCategory("")
        setBatchCustomPath("")
        setBatchFormData({
          pagePath: "",
          imageNames: "",
          sortOrderStart: 0,
          isActive: true
        })
        fetchImages()
      } else {
        const error = await response.json()
        toast.error(error.message || "批量上传失败")
      }
    } catch (error) {
      console.error("批量上传失败:", error)
      toast.error("批量上传失败")
    }
  }

  // 删除图片
  const handleDelete = async (id: number) => {
    if (!confirm("确定要删除这张图片吗？")) return

    try {
      const response = await fetch(`/api/admin-mzg/product-gallery/${id}`, {
        method: "DELETE"
      })

      if (response.ok) {
        toast.success("图片删除成功")
        fetchImages()
      } else {
        toast.error("删除失败")
      }
    } catch (error) {
      console.error("删除失败:", error)
      toast.error("删除失败")
    }
  }

  // 切换激活状态
  const toggleActive = async (image: GalleryImage) => {
    try {
      const response = await fetch(`/api/admin-mzg/product-gallery/${image.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...image,
          isActive: !image.isActive
        })
      })

      if (response.ok) {
        toast.success("状态更新成功")
        fetchImages()
      } else {
        toast.error("更新失败")
      }
    } catch (error) {
      console.error("更新失败:", error)
      toast.error("更新失败")
    }
  }

  // 开始编辑
  const startEdit = (image: GalleryImage) => {
    setEditingImage(image)
    // 显示时去掉/images/前缀，方便编辑
    const displayImageUrl = image.imageUrl.startsWith('/images/') 
      ? image.imageUrl.substring(8) 
      : image.imageUrl
    
    // 检查路径是否符合标准格式
    const pathParts = image.pagePath.replace('/standard-tools/', '').split('/')
    const isStandardPath = pathParts.length >= 2 && pageCategories[pathParts[0] as keyof typeof pageCategories]
    
    if (isStandardPath) {
      // 标准路径：设置下拉菜单选择，清空自定义路径
      if (pathParts.length >= 2) {
        setSelectedCategory(pathParts[0])
        setSelectedSubCategory(pathParts[1])
      } else if (pathParts[0] === 'right-angle-flat') {
        setSelectedCategory('right-angle-flat')
        setSelectedSubCategory('right-angle-flat')
      }
      setCustomPath("")
    } else {
      // 非标准路径：清空下拉菜单选择，设置自定义路径
      setSelectedCategory("")
      setSelectedSubCategory("")
      setCustomPath(image.pagePath)
    }
    
    setFormData({
      pagePath: image.pagePath,
      imageUrl: displayImageUrl,
      title: image.title || "",
      description: image.description || "",
      sortOrder: image.sortOrder,
      isActive: image.isActive
    })
    setIsAddDialogOpen(true)
  }

  if (loading) {
    return <div className="container mx-auto py-10">加载中...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">产品图片管理</h1>
          <p className="text-gray-600 mt-2">管理各页面的产品展示图片</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                添加图片
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingImage ? "编辑图片" : "添加图片"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="pagePath">页面路径</Label>
                  <div className="space-y-2">
                    {/* 一级分类选择 */}
                    <Select
                      value={selectedCategory}
                      onValueChange={handleCategoryChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="选择一级分类" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(pageCategories).map(category => (
                          <SelectItem key={category} value={category}>
                            {pageCategories[category as keyof typeof pageCategories].name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {/* 二级分类选择 */}
                    {selectedCategory && (
                      <Select
                        value={selectedSubCategory}
                        onValueChange={handleSubCategoryChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="选择二级分类" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(pageCategories[selectedCategory as keyof typeof pageCategories].subCategories).map(([key, name]) => (
                            <SelectItem key={key} value={key}>
                              {name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    
                    {/* 显示生成的路径 */}
                    {formData.pagePath && (
                      <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        当前路径: {formData.pagePath}
                      </div>
                    )}
                    
                    {/* 自定义路径输入 */}
                    <div>
                      <Label htmlFor="customPath">自定义路径（优先级最高）</Label>
                      <Input
                        id="customPath"
                        placeholder="输入完整页面路径，如：/standard-tools/milling/deep-ditch"
                        value={customPath}
                        onChange={(e) => handleCustomPathChange(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        如果输入了自定义路径，将优先使用此路径，忽略上方下拉菜单选择
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="imageUrl">图片名称</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">/images/</span>
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                      placeholder="product-name.png"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">只需输入图片文件名，系统会自动添加 /images/ 前缀</p>
                </div>
                
                <div>
                  <Label htmlFor="title">标题（可选）</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="图片标题"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">描述（可选）</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="图片描述"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="sortOrder">排序顺序</Label>
                  <Input
                    id="sortOrder"
                    type="number"
                    value={formData.sortOrder}
                    onChange={(e) => setFormData(prev => ({ ...prev, sortOrder: parseInt(e.target.value) || 0 }))}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  />
                  <Label htmlFor="isActive">激活显示</Label>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    取消
                  </Button>
                  <Button type="submit">
                    {editingImage ? "更新" : "添加"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isBatchUploadOpen} onOpenChange={setIsBatchUploadOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                批量上传
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>批量上传图片</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleBatchUpload} className="space-y-4">
                <div>
                  <Label htmlFor="batchPagePath">页面路径</Label>
                  <div className="space-y-2">
                    {/* 一级分类选择 */}
                    <Select
                      value={batchSelectedCategory}
                      onValueChange={handleBatchCategoryChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="选择一级分类" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(pageCategories).map(category => (
                          <SelectItem key={category} value={category}>
                            {pageCategories[category as keyof typeof pageCategories].name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {/* 二级分类选择 */}
                    {batchSelectedCategory && (
                      <Select
                        value={batchSelectedSubCategory}
                        onValueChange={handleBatchSubCategoryChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="选择二级分类" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(pageCategories[batchSelectedCategory as keyof typeof pageCategories].subCategories).map(([key, name]) => (
                            <SelectItem key={key} value={key}>
                              {name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    
                    {/* 显示生成的路径 */}
                    {batchFormData.pagePath && (
                      <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        当前路径: {batchFormData.pagePath}
                      </div>
                    )}
                    
                    {/* 自定义路径输入 */}
                    <div>
                      <Label htmlFor="batchCustomPath">自定义路径（优先级最高）</Label>
                      <Input
                        id="batchCustomPath"
                        placeholder="输入完整页面路径，如：/standard-tools/milling/deep-ditch"
                        value={batchCustomPath}
                        onChange={(e) => handleBatchCustomPathChange(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        如果输入了自定义路径，将优先使用此路径，忽略上方下拉菜单选择
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="imageNames">图片名称列表</Label>
                  <Textarea
                    id="imageNames"
                    value={batchFormData.imageNames}
                    onChange={(e) => setBatchFormData(prev => ({ ...prev, imageNames: e.target.value }))}
                    placeholder="每行一个图片名称，例如：&#10;product1.png&#10;product2.jpg&#10;product3.png"
                    rows={6}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">每行输入一个图片文件名，系统会自动添加 /images/ 前缀</p>
                </div>
                
                <div>
                  <Label htmlFor="sortOrderStart">起始排序号</Label>
                  <Input
                    id="sortOrderStart"
                    type="number"
                    value={batchFormData.sortOrderStart}
                    onChange={(e) => setBatchFormData(prev => ({ ...prev, sortOrderStart: parseInt(e.target.value) || 0 }))}
                    placeholder="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">后续图片排序号会依次递增</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="batchIsActive"
                    checked={batchFormData.isActive}
                    onChange={(e) => setBatchFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  />
                  <Label htmlFor="batchIsActive">激活显示</Label>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsBatchUploadOpen(false)}>
                    取消
                  </Button>
                  <Button type="submit">
                    批量上传
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 过滤器和视图切换 */}
      <div className="mb-6 flex items-center justify-between">
        <Select value={selectedPagePath} onValueChange={setSelectedPagePath}>
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">所有页面</SelectItem>
            {Array.from(new Set(images.map(img => img.pagePath))).map(path => (
              <SelectItem key={path} value={path}>{path}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4 mr-1" />
            网格
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4 mr-1" />
            列表
          </Button>
        </div>
      </div>

      {/* 图片列表 */}
      <div className="space-y-8">
        {Object.entries(groupedImages).map(([pagePath, pageImages]) => (
          <Card key={pagePath}>
            <CardHeader>
              <CardTitle className="text-lg">{pagePath}</CardTitle>
            </CardHeader>
            <CardContent>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {pageImages
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map(image => (
                      <div key={image.id} className="border rounded-lg p-3 space-y-2">
                        <div className="relative aspect-square bg-gray-100 rounded overflow-hidden" style={{ height: '80px' }}>
                          <Image
                            src={image.imageUrl}
                            alt={image.title || "产品图片"}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg"
                            }}
                          />
                        </div>
                        
                        {image.title && (
                          <h4 className="font-medium text-xs truncate">{image.title}</h4>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <Badge variant={image.isActive ? "default" : "secondary"} className="text-xs px-1">
                            {image.sortOrder}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => toggleActive(image)}
                              className="h-6 w-6 p-0"
                            >
                              {image.isActive ? <Eye className="h-2.5 w-2.5" /> : <EyeOff className="h-2.5 w-2.5" />}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => startEdit(image)}
                              className="h-6 w-6 p-0"
                            >
                              <Edit className="h-2.5 w-2.5" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(image.id)}
                              className="h-6 w-6 p-0"
                            >
                              <Trash2 className="h-2.5 w-2.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {pageImages
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map(image => (
                      <div key={image.id} className="border rounded-lg p-3 flex items-center space-x-4">
                        <div className="relative bg-gray-100 rounded overflow-hidden flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                          <Image
                            src={image.imageUrl}
                            alt={image.title || "产品图片"}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg"
                            }}
                          />
                        </div>
                        
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-sm truncate">
                              {image.title || image.imageUrl.split('/').pop()}
                            </h4>
                            <Badge variant={image.isActive ? "default" : "secondary"} className="text-xs">
                              排序: {image.sortOrder}
                            </Badge>
                            <Badge variant={image.isActive ? "default" : "outline"} className="text-xs">
                              {image.isActive ? "显示" : "隐藏"}
                            </Badge>
                          </div>
                          {image.description && (
                            <p className="text-xs text-gray-600 mt-1 line-clamp-1">{image.description}</p>
                          )}
                          <p className="text-xs text-gray-400 mt-1">{image.imageUrl}</p>
                        </div>
                        
                        <div className="flex space-x-1 flex-shrink-0">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleActive(image)}
                          >
                            {image.isActive ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => startEdit(image)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(image.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无图片</h3>
            <p className="text-gray-600 mb-4">开始添加产品图片到图片库</p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              添加第一张图片
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 