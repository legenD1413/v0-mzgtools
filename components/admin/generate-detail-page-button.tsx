"use client"

import { useState, useEffect } from "react"
import { FileText, ExternalLink, AlertCircle } from "lucide-react"
import { generateProductDetailPage } from "@/app/actions/generate-product-detail-page"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

interface GenerateDetailPageButtonProps {
  productId: string
  productName?: string
  referenceUrl?: string
  internalDetailUrl?: string
  productCode?: string
}

export function GenerateDetailPageButton({
  productId,
  productName,
  referenceUrl,
  internalDetailUrl,
  productCode,
}: GenerateDetailPageButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPagePath, setGeneratedPagePath] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Initialize the page path if we have the internal URL and product code
  useEffect(() => {
    if (internalDetailUrl && productCode) {
      // Remove trailing slash if present
      const baseUrl = internalDetailUrl.endsWith("/") ? internalDetailUrl.slice(0, -1) : internalDetailUrl

      // Create the full path
      const fullPath = `${baseUrl}/${productCode}`
      setGeneratedPagePath(fullPath)
    }
  }, [internalDetailUrl, productCode])

  const handleGenerate = async () => {
    try {
      setIsGenerating(true)
      setError(null)

      console.log(`Generating page for product ID: ${productId}`)
      console.log(`Product name: ${productName || "Unknown"}`)

      if (referenceUrl) {
        console.log(`Using template: ${referenceUrl}`)
      } else {
        console.log("No template specified, will use default template")
      }

      if (internalDetailUrl) {
        console.log(`Using internal detail URL: ${internalDetailUrl}`)
      }

      const result = await generateProductDetailPage(productId)
      console.log("Generation result:", result)

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        })
        // Store the generated page path
        if (result.path) {
          setGeneratedPagePath(result.path)
          console.log(`Page generated at: ${result.path}`)
        }
      } else {
        setError(result.message || "Unknown error")
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
        console.error("Server operation error:", result.message)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      setError(errorMessage)
      console.error("Error in generate button handler:", error)
      toast({
        title: "Error",
        description: "Failed to generate product detail page",
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
          title={referenceUrl ? `Using template: ${referenceUrl}` : "Using default template"}
        >
          <FileText className="h-4 w-4 mr-2" />
          {isGenerating ? "Generating..." : "Generate Detail Page"}
        </Button>

        {generatedPagePath && (
          <Link
            href={generatedPagePath}
            target="_blank"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            <span>View Page</span>
          </Link>
        )}
      </div>

      {error && (
        <div className="mt-2 text-xs text-red-500 flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>Error: {error}</span>
        </div>
      )}
    </div>
  )
}
