"use client"

import { useState } from "react"
import { FileText, ExternalLink, AlertCircle } from "lucide-react"
import { generateProductDetailPage } from "@/app/actions/generate-product-detail-page"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

interface GenerateDetailPageButtonProps {
  productId: string
  productName?: string
  referenceUrl?: string
}

export function GenerateDetailPageButton({ productId, productName, referenceUrl }: GenerateDetailPageButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPagePath, setGeneratedPagePath] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    try {
      setIsGenerating(true)
      setError(null)

      console.log(`正在为产品ID生成页面: ${productId}`)
      console.log(`产品名称: ${productName || "未知"}`)

      if (referenceUrl) {
        console.log(`使用模板: ${referenceUrl}`)
      } else {
        console.log("未指定模板，将使用默认模板")
      }

      const result = await generateProductDetailPage(productId)
      console.log("生成结果:", result)

      if (result.success) {
        toast({
          title: "成功",
          description: result.message,
        })
        // 存储生成的页面路径
        if (result.path) {
          setGeneratedPagePath(result.path)
          console.log(`页面生成于: ${result.path}`)
        }
      } else {
        setError(result.message || "未知错误")
        toast({
          title: "错误",
          description: result.message,
          variant: "destructive",
        })
        console.error("服务器操作错误:", result.message)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      setError(errorMessage)
      console.error("生成按钮处理程序中的错误:", error)
      toast({
        title: "错误",
        description: "生成产品详情页失败",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="h-8 px-2 lg:px-3"
          title={referenceUrl ? `使用模板: ${referenceUrl}` : "使用默认模板"}
        >
          <FileText className="h-4 w-4 mr-2" />
          {isGenerating ? "生成中..." : "Generate Detail Page"}
        </Button>

        {generatedPagePath && (
          <Link
            href={generatedPagePath}
            target="_blank"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            <span>查看页面</span>
          </Link>
        )}
      </div>

      {error && (
        <div className="mt-2 text-xs text-red-500 flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>错误: {error}</span>
        </div>
      )}
    </div>
  )
}
