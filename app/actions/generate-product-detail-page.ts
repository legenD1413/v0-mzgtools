"use server"

import fs from "fs"
import path from "path"
import { mkdir, readFile, writeFile } from "fs/promises"
import { getProductById } from "./product-actions"
import { sql } from "@/lib/db"

export async function generateProductDetailPage(productId: string) {
  try {
    console.log(`Starting detail page generation for product ID: ${productId}`)

    // Get product data
    const product = await getProductById(productId)

    if (!product) {
      console.error("Product not found")
      return { success: false, message: "Product not found" }
    }

    console.log("Successfully retrieved product data")
    console.log("Reference URL:", product.reference_url || product.referenceUrl)
    console.log("Internal Detail URL:", product.internal_detail_url || product.internalDetailUrl)
    console.log("Main Category:", product.main_category || product.mainCategory)
    console.log("Sub Category:", product.sub_category || product.subCategory)
    console.log("Product Code:", product.product_code || product.productCode)

    // Extract all required fields from the product
    const {
      name,
      product_code: dbProductCode,
      productCode: tsProductCode,
      series,
      reference_url: dbReferenceUrl,
      referenceUrl: tsReferenceUrl,
      internal_detail_url: dbInternalDetailUrl,
      internalDetailUrl: tsInternalDetailUrl,
      description,
      main_category: dbMainCategory,
      mainCategory: tsMainCategory,
      sub_category: dbSubCategory,
      subCategory: tsSubCategory,
      flute,
      hrc,
      material,
      technical_info: dbTechnicalInfo,
      technicalInfo: tsTechnicalInfo,
      model_image_url: dbModelImageUrl,
      modelImageUrl: tsModelImageUrl,
      application,
      parameters,
      images,
      technical_drawings: dbTechnicalDrawings,
      technicalDrawings: tsTechnicalDrawings,
      performance_features: dbPerformanceFeatures,
      performanceFeatures: tsPerformanceFeatures,
    } = product

    // Use the appropriate field values (handling both database and TypeScript naming conventions)
    const productCode = (tsProductCode || dbProductCode || `product-${Date.now()}`).toString().trim()
    const referenceUrl = tsReferenceUrl || dbReferenceUrl
    const existingInternalDetailUrl = tsInternalDetailUrl || dbInternalDetailUrl
    const mainCategory = (tsMainCategory || dbMainCategory || "uncategorized").toLowerCase()
    const subCategory = (tsSubCategory || dbSubCategory || "general").toLowerCase().replace(/\s+/g, "-")
    const technicalInfo = tsTechnicalInfo || dbTechnicalInfo
    const modelImageUrl = tsModelImageUrl || dbModelImageUrl
    const technicalDrawings = tsTechnicalDrawings || dbTechnicalDrawings || []
    const performanceFeatures = tsPerformanceFeatures || dbPerformanceFeatures

    // Clean product code for file path
    const sanitizedProductCode = productCode.replace(/[^a-zA-Z0-9-_]/g, "-")

    console.log(`Using product code: ${productCode} (sanitized: ${sanitizedProductCode})`)

    // Determine the internal detail URL path
    // Use the existing internal detail URL if available, otherwise use the category structure
    let internalDetailUrl = ""

    if (existingInternalDetailUrl) {
      // Use the existing internal detail URL
      internalDetailUrl = existingInternalDetailUrl

      // Ensure it doesn't already include the product code at the end
      if (!internalDetailUrl.endsWith(`/${sanitizedProductCode}`)) {
        // Remove trailing slash if present
        if (internalDetailUrl.endsWith("/")) {
          internalDetailUrl = internalDetailUrl.slice(0, -1)
        }
        // Add the product code
        internalDetailUrl = `${internalDetailUrl}/${sanitizedProductCode}`
      }
    } else {
      // Default path based on category structure if no internal detail URL is provided
      // Include the main category in the path
      internalDetailUrl = `/standard-tools/${mainCategory}/${subCategory}/${sanitizedProductCode}`
    }

    console.log(`Generated internal detail URL: ${internalDetailUrl}`)

    // Create the directory structure for the page - using the internal detail URL path
    const pageDirPath = path.join(process.cwd(), "app", internalDetailUrl)

    console.log(`Creating directory: ${pageDirPath}`)

    // Create directory recursively if it doesn't exist
    try {
      await mkdir(pageDirPath, { recursive: true })
      console.log(`Directory created or already exists: ${pageDirPath}`)
    } catch (error) {
      console.error(`Error creating directory: ${error}`)
      return {
        success: false,
        message: `Failed to create directory: ${error instanceof Error ? error.message : String(error)}`,
      }
    }

    // Create the page.tsx file path
    const pageFilePath = path.join(pageDirPath, "page.tsx")

    console.log(`Will write to file: ${pageFilePath}`)

    // Check if a template reference is provided
    let templateContent = ""

    if (referenceUrl) {
      console.log(`Template reference provided: ${referenceUrl}`)

      try {
        // Convert reference URL to file path
        // Remove leading slash if it exists
        const templatePath = referenceUrl.startsWith("/") ? referenceUrl.substring(1) : referenceUrl

        // Build full path to template file
        let templateFilePath = path.join(process.cwd(), "app", `${templatePath}.tsx`)

        // If file doesn't exist, try with /page.tsx
        if (!fs.existsSync(templateFilePath)) {
          templateFilePath = path.join(process.cwd(), "app", `${templatePath}/page.tsx`)
        }

        console.log(`Looking for template file: ${templateFilePath}`)

        // Check if template file exists
        if (fs.existsSync(templateFilePath)) {
          // Read template file
          templateContent = await readFile(templateFilePath, "utf8")
          console.log("Template file found and successfully read")

          // For modern-image template, we need to create a complete component with sample data
          if (referenceUrl.includes("modern-image")) {
            console.log("Using modern-image template")

            // Create a new component based on the modern-image template
            const componentName = `Product${sanitizedProductCode.charAt(0).toUpperCase() + sanitizedProductCode.slice(1)}DetailPage`

            // Replace the component name
            templateContent = templateContent.replace(
              /export default function (\w+)/,
              `export default function ${componentName}`,
            )

            // Create a product object with the actual product data
            const productData = `
  const product = {
    id: "${productId}",
    name: "${name || "Product Name"}",
    description: "${description || "Product Description"}",
    productCode: "${productCode}",
    mainCategory: "${mainCategory}",
    subCategory: "${subCategory}",
    parameters: ${JSON.stringify(parameters || [])},
    images: ${JSON.stringify(images || [])},
    technicalDrawings: ${JSON.stringify(technicalDrawings || [])},
    application: \`${application || ""}\`,
    performanceFeatures: \`${performanceFeatures || ""}\`,
    material: "${material || ""}",
    technicalInfo: \`${technicalInfo || ""}\`,
    series: "${series || ""}",
    flute: "${flute || ""}",
    hrc: "${hrc || ""}",
    modelImageUrl: "${modelImageUrl || ""}"
  }`

            // Replace the sample product data with actual product data
            templateContent = templateContent.replace(/const sampleProduct = \{[\s\S]*?\}/, productData)

            // Replace the default props with our product data
            templateContent = templateContent.replace(
              /export default function \w+$$\{ product = sampleProduct \}: ProductTemplateProps$$/,
              `export default function ${componentName}() { // Using direct product data`,
            )

            console.log("Modern-image template customized with product data")
          } else {
            // For other templates, use the standard replacement approach
            // Create new component based on template
            // Replace component name to avoid conflicts
            const componentName = `Product${sanitizedProductCode.charAt(0).toUpperCase() + sanitizedProductCode.slice(1)}DetailPage`
            templateContent = templateContent.replace(
              /export default function (\w+)/,
              `export default function ${componentName}`,
            )

            // Replace template content with product data
            templateContent = templateContent
              .replace(/(?<=<h1[^>]*>)[^<]+(?=<\/h1>)/g, name || "Product Name")
              .replace(/(?<=Product Code:[^<]*<span[^>]*>)[^<]+(?=<\/span>)/g, productCode)

            // Replace product image
            if (modelImageUrl) {
              templateContent = templateContent.replace(
                /src="[^"]*"(?=[^>]*alt="[^"]*Product")/g,
                `src="${modelImageUrl}"`,
              )
            }

            // Replace product specifications
            if (flute) {
              templateContent = templateContent.replace(
                /Flute:<\/div><div>[^<]*<\/div>/g,
                `Flute:</div><div>${flute}</div>`,
              )
            }

            if (hrc) {
              templateContent = templateContent.replace(
                /Hardness $$HRC$$:<\/div><div>[^<]*<\/div>/g,
                `Hardness (HRC):</div><div>${hrc}</div>`,
              )
            }

            if (material) {
              templateContent = templateContent.replace(
                /Material:<\/div><div>[^<]*<\/div>/g,
                `Material:</div><div>${material}</div>`,
              )
            }

            if (series) {
              templateContent = templateContent.replace(
                /Series:<\/div><div>[^<]*<\/div>/g,
                `Series:</div><div>${series}</div>`,
              )
            }

            // Replace technical information
            if (technicalInfo) {
              const technicalInfoRegex = /<h2[^>]*>Technical Information<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
              if (technicalInfoRegex.test(templateContent)) {
                templateContent = templateContent.replace(
                  technicalInfoRegex,
                  `<h2 className="text-xl font-semibold border-b pb-2">Technical Information</h2>
                  <div className="prose max-w-none">${technicalInfo}</div>`,
                )
              }
            }

            // Replace application
            if (application) {
              const applicationRegex = /<h2[^>]*>Application<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
              if (applicationRegex.test(templateContent)) {
                templateContent = templateContent.replace(
                  applicationRegex,
                  `<h2 className="text-xl font-semibold border-b pb-2">Application</h2>
                  <div className="prose max-w-none">${application}</div>`,
                )
              }
            }

            // Replace performance features
            if (performanceFeatures) {
              const featuresRegex = /<h2[^>]*>Performance Features<\/h2>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/
              if (featuresRegex.test(templateContent)) {
                templateContent = templateContent.replace(
                  featuresRegex,
                  `<h2 className="text-xl font-semibold border-b pb-2">Performance Features</h2>
                  <div className="prose max-w-none">${performanceFeatures}</div>`,
                )
              }
            }

            // Replace parameters table
            if (parameters && parameters.length > 0) {
              let parametersHtml = ""
              parameters.forEach((param) => {
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

            // Replace product images
            if (images && images.length > 0) {
              let imagesHtml = ""
              images.forEach((img, i) => {
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
          }

          console.log("Template content customized with product data")
        } else {
          console.log(`Template file not found at ${templateFilePath}, will use default template`)
        }
      } catch (error) {
        console.error("Error reading template file:", error)
        console.log("Falling back to default template")
      }
    }

    // If no template found or error occurred, use default template
    if (!templateContent) {
      console.log("Using default product detail template")

      // Generate default page content
      templateContent = `
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Product${sanitizedProductCode.charAt(0).toUpperCase() + sanitizedProductCode.slice(1)}DetailPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link href="/standard-tools/${mainCategory}/${subCategory}" className="text-blue-600 hover:underline">
          ← Back to ${product.subCategory || product.sub_category || "Products"} 
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square w-full">
              <Image 
                src="${modelImageUrl || "/diverse-products-still-life.png"}" 
                alt="${name || "Product"}"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            ${(images || [])
              .map(
                (img, i) => `
            <div key="${i}" className="relative aspect-square w-full">
              <Image 
                src="${img.url}" 
                alt="${img.alt || "Product Image"}"
                fill
                className="object-cover rounded border hover:border-blue-500 cursor-pointer"
              />
            </div>`,
              )
              .join("\n")}
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">${name || "Product Name"}</h1>
          
          <div className="bg-gray-100 px-4 py-3 rounded-md">
            <p className="text-lg font-medium">Product Code: <span className="text-blue-600">${
              productCode || ""
            }</span></p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Product Specifications</h2>
            <div className="grid grid-cols-2 gap-y-2">
              ${flute ? `<div className="text-gray-600">Flutes:</div><div>${flute}</div>` : ""}
              ${hrc ? `<div className="text-gray-600">Hardness (HRC):</div><div>${hrc}</div>` : ""}
              ${material ? `<div className="text-gray-600">Material:</div><div>${material}</div>` : ""}
              ${series ? `<div className="text-gray-600">Series:</div><div>${series}</div>` : ""}
            </div>
          </div>
          
          ${
            technicalInfo
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Technical Information</h2>
            <div className="prose max-w-none">
              ${technicalInfo}
            </div>
          </div>
          `
              : ""
          }
          
          ${
            application
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Applications</h2>
            <div className="prose max-w-none">
              ${application}
            </div>
          </div>
          `
              : ""
          }
          
          ${
            performanceFeatures
              ? `
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Performance Features</h2>
            <div className="prose max-w-none">
              ${performanceFeatures}
            </div>
          </div>
          `
              : ""
          }
          
          <div className="pt-4">
            <Link href="/custom-quote">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Request Quote</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Technical Parameters Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Parameters</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">Parameter</th>
                <th className="py-3 px-4 text-left border-b">Value</th>
              </tr>
            </thead>
            <tbody>
              ${(parameters || [])
                .map(
                  (param) => `
              <tr>
                <td className="py-2 px-4 border-b">${param.name}</td>
                <td className="py-2 px-4 border-b">${param.value}</td>
              </tr>`,
                )
                .join("\n")}
              ${
                !parameters || parameters.length === 0
                  ? `
              <tr>
                <td className="py-2 px-4 border-b" colSpan={2}>No parameters available</td>
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

    // Write file using promises for better error handling
    try {
      await writeFile(pageFilePath, templateContent, "utf8")
      console.log(`Successfully wrote page to: ${pageFilePath}`)
    } catch (error) {
      console.error(`Error writing file: ${error}`)
      return {
        success: false,
        message: `Failed to write file: ${error instanceof Error ? error.message : String(error)}`,
      }
    }

    // Extract the base path without the product code for storing in the database
    let basePath = internalDetailUrl
    if (basePath.endsWith(`/${sanitizedProductCode}`)) {
      basePath = basePath.substring(0, basePath.length - sanitizedProductCode.length - 1)
    }

    // Update the product's internal_detail_url in the database directly using SQL
    try {
      await sql`
        UPDATE products 
        SET internal_detail_url = ${basePath}
        WHERE id = ${productId}
      `
      console.log(`Updated product with internal detail URL base path: ${basePath}`)
    } catch (error) {
      console.error(`Error updating product with internal detail URL: ${error}`)
      // Continue execution even if this fails - the page was still generated
    }

    // Return success info and path to generated page
    console.log(`Generated page path: ${internalDetailUrl}`)

    return {
      success: true,
      message: "Product detail page generated successfully",
      path: internalDetailUrl,
    }
  } catch (error) {
    console.error("Error generating product detail page:", error)
    return {
      success: false,
      message: `Failed to generate product detail page: ${error instanceof Error ? error.message : String(error)}`,
    }
  }
}
