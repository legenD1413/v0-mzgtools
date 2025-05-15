"use client"

import { useState } from "react"
import { Trash2, Loader2 } from "lucide-react"
import { deleteProduct } from "@/app/actions/product-actions"

interface DeleteProductButtonProps {
  productId: string
  productName: string
}

export function DeleteProductButton({ productId, productName }: DeleteProductButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!window.confirm(`确定要删除产品 "${productName}" 吗？此操作不可撤销。`)) {
      return
    }

    setIsDeleting(true)
    try {
      await deleteProduct(productId)
    } catch (error) {
      console.error("删除产品失败:", error)
      alert("删除产品失败，请重试。")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
    >
      {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
      <span className="sr-only">删除</span>
    </button>
  )
}
