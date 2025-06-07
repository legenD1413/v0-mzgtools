"use client"

import React from "react"

import { useState, useRef } from "react"
import { Upload, X, FileText, ImageIcon } from "lucide-react"
import Image from "next/image"

interface FileUploadProps {
  label: string
  accept?: string
  multiple?: boolean
  files: Array<{ id: string; url: string; title?: string; alt?: string }>
  onFilesChange: (files: Array<{ id: string; url: string; title?: string; alt?: string }>) => void
  type: "image" | "document"
}

export function FileUpload({
  label,
  accept = "image/*",
  multiple = false,
  files,
  onFilesChange,
  type,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({})

  // 当文件列表变化时，生成预览URL
  React.useEffect(() => {
    const newPreviewUrls: Record<string, string> = {}

    files.forEach((file) => {
      if (type === "image" && file.url) {
        newPreviewUrls[file.id] = file.url
      }
    })

    setPreviewUrls(newPreviewUrls)

    // 清理函数，释放URL对象
    return () => {
      Object.values(previewUrls).forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url)
        }
      })
    }
  }, [files, type])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (fileList: FileList) => {
    // 在实际应用中，这里会上传文件到服务器或云存储
    // 这里我们只是模拟上传，直接创建本地URL
    const newFiles = Array.from(fileList).map((file) => {
      const id = Math.random().toString(36).substring(2, 15)
      const url = URL.createObjectURL(file)

      return {
        id,
        url,
        title: file.name,
        alt: file.name,
      }
    })

    if (multiple) {
      onFilesChange([...files, ...newFiles])
    } else {
      onFilesChange(newFiles)
    }
  }

  const removeFile = (id: string) => {
    onFilesChange(files.filter((file) => file.id !== id))
  }

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}

      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInputChange}
        />

        <div className="space-y-2 py-4">
          <Upload className="mx-auto h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-500">
            拖放文件到此处，或{" "}
            <button type="button" className="text-blue-600 hover:text-blue-500" onClick={openFileDialog}>
              浏览文件
            </button>
          </p>
          <p className="text-xs text-gray-400">
            {type === "image" ? "支持 JPG, PNG, GIF 格式" : "支持 PDF, DWG, DXF 格式"}
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {files.map((file) => (
            <div key={file.id} className="relative rounded-md border border-gray-200 p-2">
              <button
                type="button"
                onClick={() => removeFile(file.id)}
                className="absolute -right-2 -top-2 rounded-full bg-white p-1 shadow-md hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>

              {type === "image" ? (
                <div className="relative h-24 w-full overflow-hidden rounded-md">
                  {previewUrls[file.id] ? (
                    <Image
                      src={previewUrls[file.id] || "/placeholder.svg"}
                      alt={file.alt || ""}
                      fill
                      className="object-contain"
                      onError={() => {
                        // 如果图片加载失败，显示图标
                        const newPreviewUrls = { ...previewUrls }
                        delete newPreviewUrls[file.id]
                        setPreviewUrls(newPreviewUrls)
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                      <ImageIcon className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-24 w-full items-center justify-center rounded-md bg-gray-100">
                  <FileText className="h-10 w-10 text-gray-400" />
                </div>
              )}

              <p className="mt-1 truncate text-xs text-gray-500">{file.title || file.alt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
