"use server"

import fs from "fs"
import path from "path"
import { mkdir, readFile, writeFile } from "fs/promises"
import { getProductById } from "./product-actions"

export async function generateProductDetailPage(productId: string) {
  try {
    console.log(`开始为产品ID: ${productId} 生成详情页`)

    // 获取产品数据
    const product = await getProductById(productId)

    if (!product) {
      console.error("未找到产品")
      return { success: false, message: "未找到产品" }
    }

    console.log("成功获取产品数据")

    // 获取产品代码（带有后备选项）
    const productCode = (product.productCode || product.product_code || `product-${Date.now()}`).toString().trim()

    // 清理产品代码以用于文件路径
    const sanitizedProductCode = productCode.replace(/[^a-zA-Z0-9-_]/g, "-")

    console.log(`使用产品代码: ${productCode} (清理后: ${sanitizedProductCode})`)

    // 创建页面的目录结构 - 使用产品代码作为目录名
    const pageDirPath = path.join(process.cwd(), "app", "productdetails", sanitizedProductCode)

    console.log(`创建目录: ${pageDirPath}`)

    // 如果目录不存在，则递归创建
    try {
      await mkdir(pageDirPath, { recursive: true })
      console.log(`目录已创建或已存在: ${pageDirPath}`)
    } catch (error) {
      console.error(`创建目录时出错: ${error}`)
      return {
        success: false,
        message: `创建目录失败: ${error instanceof Error ? error.message : String(error)}`,
      }
    }

    // 创建page.tsx的文件路径
    const pageFilePath = path.join(pageDirPath, "page.tsx")

    console.log(`将写入文件: ${pageFilePath}`)

    // 获取分类信息用于导航
    const mainCategory = (product.mainCategory || product.main_category || "uncategorized").toLowerCase()
    const subCategory = (product.subCategory || product.sub_category || "general").toLowerCase().replace(/\s+/g, "-")

    // 检查是否提供了模板引用
    let templateContent = ""
    const referenceUrl = product.referenceUrl || product.reference_url

    if (referenceUrl) {
      console.log(`提供了模板引用: ${referenceUrl}`)

      try {
        // 将引用URL转换为文件路径
        // 如果存在前导斜杠，则将其删除
        const templatePath = referenceUrl.startsWith("/") ? referenceUrl.substring(1) : referenceUrl

        // 构建模板文件的完整路径
        let templateFilePath = path.join(process.cwd(), "app", `${templatePath}.tsx`)

        // 如果文件不存在，尝试使用/page.tsx
        if (!fs.existsSync(templateFilePath)) {
          templateFilePath = path.join(process.cwd(), "app", `${templatePath}/page.tsx`)
        }

        console.log(`查找模板文件: ${templateFilePath}`)

        // 检查模板文件是否存在
        if (fs.existsSync(templateFilePath)) {
          // 读取模板文件
          templateContent = await readFile(templateFilePath, "utf8")
          console.log("模板文件找到并成功读取")

          // 创建基于模板的新组件
          // 替换组件名以避免冲突
          const componentName = `Product${sanitizedProductCode.charAt(0).toUpperCase() + sanitizedProductCode.slice(1)}DetailPage`
          templateContent = templateContent.replace(
            /export default function (\w+)/,
            `export default function ${componentName}`,
          )

          // 替换模板中的产品数据
          templateContent = templateContent
            .replace(/(?<=<h1[^>]*>)[^<]+(?=<\/h1>)/g, product.name || "产品名称")
            .replace(/(?<=Product Code:[^<]*<span[^>]*>)[^<]+(?=<\/span>)/g, productCode)

          // 替换产品图片
          if (product.modelImageUrl || product.model_image_url) {
            templateContent = templateContent.replace(
              /src="[^"]*"(?=[^>]*alt="[^"]*Product")/g,
              `src="${product.modelImageUrl || product.model_image_url}"`,
            )
          }

          // 替换产品规格
          if (product.flute) {
            templateContent = templateContent.replace(
              /Flute:<\/div><div>[^<]*<\/div>/g,
              `Flute:</div><div>${product.flute}</div>`,
            )
          }

          if (product.hrc) {
            templateContent = templateContent.replace(
              /Hardness $$HRC$$:<\/div><div>[^<]*<\/div>/g,
              `Hardness (HRC):</div><div>${product.hrc}</div>`,
            )
          }

          if (product.material) {
            templateContent = templateContent.replace(
              /Material:<\/div><div>[^<]*<\/div>/g,
              `Material:</div><div>${product.material}</div>`,
            )
          }

          if (product.series) {
            templateContent = templateContent.replace(
              /Series:<\/div><div>[^<]*<\/div>/g,
              `Series:</div><div>${product.series}</div>`,
            )
          }

          // 替换技术信息
          if (product.technicalInfo || product.technical_info) {
            const technicalInfoRegex = /<h2[^>]*>Technical Information<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
            if (technicalInfoRegex.test(templateContent)) {
              templateContent = templateContent.replace(
                technicalInfoRegex,
                `<h2 className="text-xl font-semibold border-b pb-2">Technical Information</h2>
                <div className="prose max-w-none">${product.technicalInfo || product.technical_info}</div>`,
              )
            }
          }

          // 替换应用领域
          if (product.application) {
            const applicationRegex = /<h2[^>]*>Application<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
            if (applicationRegex.test(templateContent)) {
              templateContent = templateContent.replace(
                applicationRegex,
                `<h2 className="text-xl font-semibold border-b pb-2">Application</h2>
                <div className="prose max-w-none">${product.application}</div>`,
              )
            }
          }

          // 替换性能特点
          if (product.performanceFeatures || product.performance_features) {
            const featuresRegex = /<h2[^>]*>Performance Features<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
            if (featuresRegex.test(templateContent)) {
              templateContent = templateContent.replace(
                featuresRegex,
                `<h2 className="text-xl font-semibold border-b pb-2">Performance Features</h2>
                <div className="prose max-w-none">${product.performanceFeatures || product.performance_features}</div>`,
              )
            }
          }

          // 替换技术参数表格
          if (product.parameters && product.parameters.length > 0) {
            let parametersHtml = ""
            product.parameters.forEach((param) => {
              parametersHtml += `
              <tr>
                <td className="py-2 px-4 border-b">${param.name}</td>
                <td className="py-2 px-4 border-b">${param.value}</td>
              </tr>`
            })

            const tableBodyRegex = /<tbody>([\s\S]*?)<\/tbody>/
            if (tableBodyRegex.test(templateContent)) {
              templateContent = templateContent.replace(tableBodyRegex, `<tbody>${parametersHtml}</tbody>`)
            }
          }

          // 替换产品图片
          if (product.images && product.images.length > 0) {
            let imagesHtml = ""
            product.images.forEach((img, i) => {
              imagesHtml += `
            <div key="${i}" className="relative aspect-square w-full">
              <Image 
                src="${img.url}" 
                alt="${img.alt || "Product image"}"
                fill
                className="object-cover rounded border hover:border-blue-500 cursor-pointer"
              />
            </div>`
            })

            const imagesGridRegex = /<div className="grid grid-cols-4 gap-2">([\s\S]*?)<\/div>/
            if (imagesGridRegex.test(templateContent)) {
              templateContent = templateContent.replace(
                imagesGridRegex,
                `<div className="grid grid-cols-4 gap-2">${imagesHtml}</div>`,
              )
            }
          }

          console.log("模板内容已使用产品数据自定义")
        } else {
          console.log(`在 ${templateFilePath} 未找到模板文件，将使用默认模板`)
        }
      } catch (error) {
        console.error("读取模板文件时出错:", error)
        console.log("回退到默认模板")
      }
    }

    // 如果没有找到模板或出现错误，使用默认模板
    if (!templateContent) {
      console.log("使用默认产品详情模板")

      // 生成默认页面内容
      templateContent = `
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Product${sanitizedProductCode.charAt(0).toUpperCase() + sanitizedProductCode.slice(1)}DetailPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link href="/standard-tools/${mainCategory}/${subCategory}" className="text-blue-600 hover:underline">
          ← 返回 ${product.subCategory || product.sub_category || "产品"} 
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {/* 产品图片 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square w-full">
              <Image 
                src="${product.modelImageUrl || product.model_image_url || "/diverse-products-still-life.png"}" 
                alt="${product.name || "产品"}"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            ${(product.images || [])
              .map(
                (img, i) => `
            <div key="${i}" className="relative aspect-square w-full">
              <Image 
                src="${img.url}" 
                alt="${img.alt || "产品图片"}"
                fill
                className="object-cover rounded border hover:border-blue-500 cursor-pointer"
              />
            </div>`,
              )
              .join("\n")}
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">${product.name || "产品名称"}</h1>
          
          <div className="bg-gray-100 px-4 py-3 rounded-md">
            <p className="text-lg font-medium">产品编码: <span className="text-blue-600">${
              product.productCode || product.product_code || ""
            }</span></p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">产品规格</h2>
            <div className="grid grid-cols-2 gap-y-2">
              ${product.flute ? `<div className="text-gray-600">刃数:</div><div>${product.flute}</div>` : ""}
              ${product.hrc ? `<div className="text-gray-600">硬度 (HRC):</div><div>${product.hrc}</div>` : ""}
              ${product.material ? `<div className="text-gray-600">材料:</div><div>${product.material}</div>` : ""}
              ${product.series ? `<div className="text-gray-600">系列:</div><div>${product.series}</div>` : ""}
            </div>
          </div>
          
          ${
            product.technicalInfo || product.technical_info
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">技术信息</h2>
            <div className="prose max-w-none">
              ${product.technicalInfo || product.technical_info}
            </div>
          </div>
          `
              : ""
          }
          
          ${
            product.application
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">应用领域</h2>
            <div className="prose max-w-none">
              ${product.application}
            </div>
          </div>
          `
              : ""
          }
          
          ${
            product.performanceFeatures || product.performance_features
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">性能特点</h2>
            <div className="prose max-w-none">
              ${product.performanceFeatures || product.performance_features}
            </div>
          </div>
          `
              : ""
          }
          
          <div className="pt-4">
            <Link href="/custom-quote">
              <Button className="bg-red-600 hover:bg-red-700 text-white">请求报价</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* 技术参数部分 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">技术参数</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">参数</th>
                <th className="py-3 px-4 text-left border-b">值</th>
              </tr>
            </thead>
            <tbody>
              ${(product.parameters || [])
                .map(
                  (param) => `
              <tr>
                <td className="py-2 px-4 border-b">${param.name}</td>
                <td className="py-2 px-4 border-b">${param.value}</td>
              </tr>`,
                )
                .join("\n")}
              ${
                !product.parameters || product.parameters.length === 0
                  ? `
              <tr>
                <td className="py-2 px-4 border-b" colSpan={2}>暂无参数</td>
              </tr>`
                  : ""
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}`
    }

    // 使用promises写入文件以获得更好的错误处理
    try {
      await writeFile(pageFilePath, templateContent, "utf8")
      console.log(`成功写入页面到: ${pageFilePath}`)
    } catch (error) {
      console.error(`写入文件时出错: ${error}`)
      return {
        success: false,
        message: `写入文件失败: ${error instanceof Error ? error.message : String(error)}`,
      }
    }

    // 返回成功信息和生成页面的路径
    const pagePath = `/productdetails/${sanitizedProductCode}`
    console.log(`生成的页面路径: ${pagePath}`)

    return {
      success: true,
      message: "产品详情页生成成功",
      path: pagePath,
    }
  } catch (error) {
    console.error("生成产品详情页时出错:", error)
    return {
      success: false,
      message: `生成产品详情页失败: ${error instanceof Error ? error.message : String(error)}`,
    }
  }
}
