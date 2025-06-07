"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { Plus, Minus, Loader2, CheckCircle } from "lucide-react"
import type { Product, ProductFormData, ProductImage, TechnicalDrawing } from "@/types/product"
import { createProduct, updateProduct } from "@/app/actions/product-actions"
import { FileUpload } from "./file-upload"

interface ProductFormProps {
  product?: Product
  isEdit?: boolean
}

export function ProductForm({ product, isEdit = false }: ProductFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [modelImage, setModelImage] = useState<{ id: string; url: string; alt?: string } | null>(null)
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    parameters: [],
    mainCategory: "MILLING",
    subCategory: "",
    images: [],
    technicalDrawings: [],
    application: "",
    modelImageUrl: "",
    performanceFeatures: "",
    flute: "",
    hrc: "",
    series: "",
    material: "",
    productCode: "",
    technicalInfo: "",
    referenceUrl: "",
    internalDetailUrl: "", // 新增：产品详情站内地址
  })

  useEffect(() => {
    if (product && isEdit) {
      setFormData({
        name: product.name,
        description: product.description,
        parameters: product.parameters,
        mainCategory: product.mainCategory,
        subCategory: product.subCategory,
        images: product.images,
        technicalDrawings: product.technicalDrawings,
        application: product.application || "",
        modelImageUrl: product.modelImageUrl || "",
        performanceFeatures: product.performanceFeatures || "",
        flute: product.flute || "",
        hrc: product.hrc || "",
        series: product.series || "",
        material: product.material || "",
        productCode: product.productCode || "",
        technicalInfo: product.technicalInfo || "",
        referenceUrl: product.referenceUrl || "",
        internalDetailUrl: product.internalDetailUrl || "", // 新增：产品详情站内地址
      })

      // 如果有产品型号图，初始化modelImage状态
      if (product.modelImageUrl) {
        setModelImage({
          id: "model-image",
          url: product.modelImageUrl,
          alt: "产品型号图",
        })
      }
    }
  }, [product, isEdit])

  // 成功保存后的效果
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (saveSuccess) {
      // 2秒后跳转回产品列表页面
      timer = setTimeout(() => {
        // 使用window.location直接导航，确保页面刷新
        window.location.href = "/admin/products"
      }, 2000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [saveSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleParameterChange = (index: number, field: "name" | "value", value: string) => {
    setFormData((prev) => {
      const updatedParameters = [...prev.parameters]
      updatedParameters[index] = {
        ...updatedParameters[index],
        [field]: value,
      }
      return { ...prev, parameters: updatedParameters }
    })
  }

  const addParameter = () => {
    setFormData((prev) => ({
      ...prev,
      parameters: [...prev.parameters, { id: uuidv4(), name: "", value: "" }],
    }))
  }

  const removeParameter = (index: number) => {
    setFormData((prev) => {
      const updatedParameters = [...prev.parameters]
      updatedParameters.splice(index, 1)
      return { ...prev, parameters: updatedParameters }
    })
  }

  const handleImagesChange = (newImages: Array<{ id: string; url: string; alt?: string }>) => {
    const processedImages: ProductImage[] = newImages.map((img, index) => ({
      id: img.id,
      url: img.url,
      alt: img.alt || formData.name,
      isPrimary: index === 0, // 第一张图片为主图
    }))

    setFormData((prev) => ({
      ...prev,
      images: processedImages,
    }))
  }

  const handleDrawingsChange = (newDrawings: Array<{ id: string; url: string; title?: string }>) => {
    const processedDrawings: TechnicalDrawing[] = newDrawings.map((drawing) => ({
      id: drawing.id,
      url: drawing.url,
      title: drawing.title || "技术图纸",
      fileType: drawing.url.split(".").pop() || "pdf",
    }))

    setFormData((prev) => ({
      ...prev,
      technicalDrawings: processedDrawings,
    }))
  }

  const handleModelImageChange = (newImages: Array<{ id: string; url: string; alt?: string }>) => {
    // 只取第一张图片作为产品型号图
    const newModelImage = newImages.length > 0 ? newImages[0] : null
    setModelImage(newModelImage)

    // 更新formData中的modelImageUrl
    setFormData((prev) => ({
      ...prev,
      modelImageUrl: newModelImage?.url || "",
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      if (isEdit && product) {
        await updateProduct(product.id, formData)
      } else {
        await createProduct(formData)
      }
      setSaveSuccess(true)
    } catch (error) {
      console.error("提交产品表单失败:", error)
      setErrorMessage(error instanceof Error ? error.message : "提交失败，请重试。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 成功提示 */}
      {saveSuccess && (
        <div className="mb-4 rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">产品保存成功！正在返回产品列表...</p>
            </div>
          </div>
        </div>
      )}

      {/* 错误提示 */}
      {errorMessage && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* 基本信息 */}
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <h3 className="mb-4 text-lg font-medium">基本信息</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                产品名称 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">
                产品编码ID
              </label>
              <input
                type="text"
                id="productCode"
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="series" className="block text-sm font-medium text-gray-700">
                系列
              </label>
              <input
                type="text"
                id="series"
                name="series"
                value={formData.series}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="referenceUrl" className="block text-sm font-medium text-gray-700">
                产品详情参照样板地址(路径或URL)
              </label>
              <input
                type="text"
                id="referenceUrl"
                name="referenceUrl"
                value={formData.referenceUrl}
                onChange={handleChange}
                placeholder="/productdetails/productdetails-style1"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="internalDetailUrl" className="block text-sm font-medium text-gray-700">
                产品详情站内地址
              </label>
              <input
                type="text"
                id="internalDetailUrl"
                name="internalDetailUrl"
                value={formData.internalDetailUrl}
                onChange={handleChange}
                placeholder="/productdetails/[product-code]"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                产品描述 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="mainCategory" className="block text-sm font-medium text-gray-700">
                大分类 <span className="text-red-500">*</span>
              </label>
              <select
                id="mainCategory"
                name="mainCategory"
                value={formData.mainCategory}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              >
                <option value="MILLING">MILLING</option>
                <option value="HOLEMAKING">HOLEMAKING</option>
                <option value="THREADING">THREADING</option>
                <option value="INSERTS">INSERTS</option>
                <option value="TOOL HOLDERS">TOOL HOLDERS</option>
              </select>
            </div>

            <div>
              <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">
                小分类 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subCategory"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* 技术参数 */}
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <h3 className="mb-4 text-lg font-medium">技术参数</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="flute" className="block text-sm font-medium text-gray-700">
                刃数 (Flute)
              </label>
              <input
                type="text"
                id="flute"
                name="flute"
                value={formData.flute}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="hrc" className="block text-sm font-medium text-gray-700">
                硬度 (HRC)
              </label>
              <input
                type="text"
                id="hrc"
                name="hrc"
                value={formData.hrc}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="material" className="block text-sm font-medium text-gray-700">
                材料 (Material)
              </label>
              <input
                type="text"
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="technicalInfo" className="block text-sm font-medium text-gray-700">
                技术参数（Technical Information）
              </label>
              <textarea
                id="technicalInfo"
                name="technicalInfo"
                value={formData.technicalInfo}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">产品型号图</label>
              <div className="mt-1">
                <FileUpload
                  label=""
                  accept="image/*"
                  multiple={false}
                  files={modelImage ? [modelImage] : []}
                  onFilesChange={handleModelImageChange}
                  type="image"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="application" className="block text-sm font-medium text-gray-700">
                应用领域 (Application)
              </label>
              <textarea
                id="application"
                name="application"
                value={formData.application}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="performanceFeatures" className="block text-sm font-medium text-gray-700">
                性能特点
              </label>
              <textarea
                id="performanceFeatures"
                name="performanceFeatures"
                value={formData.performanceFeatures}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* 自定义参数 */}
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">自定义参数</h3>
            <button
              type="button"
              onClick={addParameter}
              className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="mr-1 h-4 w-4" />
              添加参数
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {formData.parameters.map((param, index) => (
              <div key={param.id} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={param.name}
                  onChange={(e) => handleParameterChange(index, "name", e.target.value)}
                  placeholder="参数名称"
                  className="block w-1/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                <input
                  type="text"
                  value={param.value}
                  onChange={(e) => handleParameterChange(index, "value", e.target.value)}
                  placeholder="参数值"
                  className="block w-1/2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeParameter(index)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">删除参数</span>
                </button>
              </div>
            ))}
            {formData.parameters.length === 0 && (
              <p className="text-sm text-gray-500">暂无参数，点击"添加参数"按钮添加</p>
            )}
          </div>
        </div>

        {/* 产品实物图 */}
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <h3 className="mb-4 text-lg font-medium">产品实物图</h3>
          <FileUpload
            label="产品实物图（可上传多张）"
            accept="image/*"
            multiple={true}
            files={formData.images.map((img) => ({ id: img.id, url: img.url, alt: img.alt }))}
            onFilesChange={handleImagesChange}
            type="image"
          />
          <p className="mt-1 text-xs text-gray-500">第一张图片将作为产品主图</p>
        </div>

        {/* 产品技术图 */}
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <h3 className="mb-4 text-lg font-medium">产品技术图</h3>
          <FileUpload
            label="产品技术图（可上传多张）"
            accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
            multiple={true}
            files={formData.technicalDrawings.map((drawing) => ({
              id: drawing.id,
              url: drawing.url,
              title: drawing.title,
            }))}
            onFilesChange={handleDrawingsChange}
            type="document"
          />
          <p className="mt-1 text-xs text-gray-500">支持PDF、DWG、DXF、JPG、PNG等格式</p>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isSubmitting || saveSuccess}
        >
          取消
        </button>
        <button
          type="submit"
          disabled={isSubmitting || saveSuccess}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              保存中...
            </>
          ) : saveSuccess ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              已保存
            </>
          ) : (
            "保存"
          )}
        </button>
      </div>
    </form>
  )
}
