"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Pencil, Trash2, FileText, ImageIcon } from "lucide-react"
import { DeleteProductButton } from "./delete-product-button"
import { GenerateDetailPageButton } from "./generate-detail-page-button"
import type { Product } from "@/types/product"

interface ProductsTableProps {
  products: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null)

  const toggleExpand = (productId: string) => {
    setExpandedProductId(expandedProductId === productId ? null : productId)
  }

  if (products.length === 0) {
    return (
      <div className="rounded-md border border-gray-200 p-8 text-center">
        <p className="text-gray-500">暂无产品数据</p>
        <Link
          href="/admin/products/new"
          className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          添加产品
        </Link>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              产品信息
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              分类
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    {product.images && product.images.length > 0 ? (
                      <div className="relative h-10 w-10 overflow-hidden rounded-md">
                        <Image
                          src={product.images.find((img) => img.isPrimary)?.url || product.images[0].url}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                        <ImageIcon className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      {product.parameters?.length || 0} 个参数 | {product.images?.length || 0} 张图片 |{" "}
                      {product.technicalDrawings?.length || 0} 份图纸
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleExpand(product.id)}
                    className="ml-2 rounded-full p-1 hover:bg-gray-200"
                  >
                    {expandedProductId === product.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">{product.mainCategory}</div>
                <div className="text-sm text-gray-500">{product.subCategory}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className="rounded-md bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">编辑</span>
                  </Link>
                  <DeleteProductButton productId={product.id} productName={product.name}>
                    <div className="rounded-md bg-red-50 p-2 text-red-600 hover:bg-red-100">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">删除</span>
                    </div>
                  </DeleteProductButton>
                  <GenerateDetailPageButton
                    productId={product.id}
                    productName={product.name}
                    referenceUrl={product.referenceUrl || product.reference_url}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {expandedProductId && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          {(() => {
            const product = products.find((p) => p.id === expandedProductId)
            if (!product) return null

            return (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">产品详情</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-gray-500">{product.description}</p>
                </div>

                {product.parameters && product.parameters.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-900">参数列表</h4>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {product.parameters.map((param) => (
                        <div key={param.id} className="rounded-md border border-gray-200 bg-white p-2">
                          <span className="text-sm font-medium text-gray-700">{param.name}: </span>
                          <span className="text-sm text-gray-500">{param.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.images && product.images.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-900">产品图片</h4>
                    <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {product.images.map((image) => (
                        <div key={image.id} className="group relative">
                          <div className="relative h-24 w-full overflow-hidden rounded-md border border-gray-200">
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                            {image.isPrimary && (
                              <div className="absolute bottom-0 left-0 right-0 bg-blue-500 py-0.5 text-center text-xs text-white">
                                主图
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.technicalDrawings && product.technicalDrawings.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-900">技术图纸</h4>
                    <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {product.technicalDrawings.map((drawing) => (
                        <div key={drawing.id} className="group relative">
                          <a href={drawing.url} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="flex h-24 w-full flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 p-2 hover:bg-gray-100">
                              <FileText className="h-8 w-8 text-gray-400" />
                              <span className="mt-1 truncate text-xs text-gray-500 group-hover:text-gray-700">
                                {drawing.title}
                              </span>
                              <span className="text-xs text-gray-400 uppercase">{drawing.fileType}</span>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.referenceUrl && (
                  <div>
                    <h4 className="text-md font-medium text-gray-900">参照模板</h4>
                    <div className="mt-2 rounded-md border border-gray-200 bg-white p-2">
                      <span className="text-sm font-medium text-gray-700">模板路径: </span>
                      <span className="text-sm text-blue-500">{product.referenceUrl}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}
