"use server"

import { revalidatePath } from "next/cache"
import type { Product, ProductFormData, ProductParameter, ProductImage, TechnicalDrawing } from "@/types/product"
import { sql, snakeToCamel } from "@/lib/db"

// 获取所有产品
export async function getAllProducts(): Promise<Product[]> {
  try {
    // 获取所有产品基本信息
    const productsResult = await sql`
      SELECT * FROM products ORDER BY created_at DESC
    `

    if (!productsResult.length) {
      return []
    }

    // 将数据库结果转换为产品对象
    const products: Product[] = await Promise.all(
      productsResult.map(async (row) => {
        const product = snakeToCamel(row) as Product

        // 获取产品参数
        const parametersResult = await sql`
          SELECT * FROM product_parameters WHERE product_id = ${product.id}
        `
        const parameters: ProductParameter[] = parametersResult.map((param) => snakeToCamel(param) as ProductParameter)

        // 获取产品图片
        const imagesResult = await sql`
          SELECT * FROM product_images WHERE product_id = ${product.id}
        `
        const images: ProductImage[] = imagesResult.map((img) => snakeToCamel(img) as ProductImage)

        // 获取技术图纸
        const drawingsResult = await sql`
          SELECT * FROM technical_drawings WHERE product_id = ${product.id}
        `
        const technicalDrawings: TechnicalDrawing[] = drawingsResult.map(
          (drawing) => snakeToCamel(drawing) as TechnicalDrawing,
        )

        return {
          ...product,
          parameters,
          images,
          technicalDrawings,
          createdAt: product.createdAt.toISOString(),
          updatedAt: product.updatedAt.toISOString(),
        }
      }),
    )

    return products
  } catch (error) {
    console.error("获取产品列表失败:", error)
    throw new Error("获取产品列表失败")
  }
}

// 根据ID获取产品
export async function getProductById(id: string): Promise<Product | undefined> {
  try {
    // 获取产品基本信息
    const productResult = await sql`
      SELECT * FROM products WHERE id = ${id}
    `

    if (!productResult.length) {
      return undefined
    }

    const product = snakeToCamel(productResult[0]) as Product

    // 获取产品参数
    const parametersResult = await sql`
      SELECT * FROM product_parameters WHERE product_id = ${id}
    `
    const parameters: ProductParameter[] = parametersResult.map((param) => snakeToCamel(param) as ProductParameter)

    // 获取产品图片
    const imagesResult = await sql`
      SELECT * FROM product_images WHERE product_id = ${id}
    `
    const images: ProductImage[] = imagesResult.map((img) => snakeToCamel(img) as ProductImage)

    // 取技术图纸
    const drawingsResult = await sql`
      SELECT * FROM technical_drawings WHERE product_id = ${id}
    `
    const technicalDrawings: TechnicalDrawing[] = drawingsResult.map(
      (drawing) => snakeToCamel(drawing) as TechnicalDrawing,
    )

    return {
      ...product,
      parameters,
      images,
      technicalDrawings,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }
  } catch (error) {
    console.error(`获取产品 ${id} 失败:`, error)
    throw new Error(`获取产品 ${id} 失败`)
  }
}

// Get product by product code
export async function getProductByCode(productCode: string): Promise<Product | undefined> {
  try {
    // Get product basic information
    const productResult = await sql`
      SELECT * FROM products WHERE product_code = ${productCode}
    `

    if (!productResult.length) {
      return undefined
    }

    const product = snakeToCamel(productResult[0]) as Product
    const id = product.id

    // Get product parameters
    const parametersResult = await sql`
      SELECT * FROM product_parameters WHERE product_id = ${id}
    `
    const parameters: ProductParameter[] = parametersResult.map((param) => snakeToCamel(param) as ProductParameter)

    // Get product images
    const imagesResult = await sql`
      SELECT * FROM product_images WHERE product_id = ${id}
    `
    const images: ProductImage[] = imagesResult.map((img) => snakeToCamel(img) as ProductImage)

    // Get technical drawings
    const drawingsResult = await sql`
      SELECT * FROM technical_drawings WHERE product_id = ${id}
    `
    const technicalDrawings: TechnicalDrawing[] = drawingsResult.map(
      (drawing) => snakeToCamel(drawing) as TechnicalDrawing,
    )

    return {
      ...product,
      parameters,
      images,
      technicalDrawings,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }
  } catch (error) {
    console.error(`Failed to get product with code ${productCode}:`, error)
    throw new Error(`Failed to get product with code ${productCode}`)
  }
}

// 创建产品
export async function createProduct(productData: ProductFormData): Promise<Product> {
  try {
    // 开始事务
    const productResult = await sql`
      INSERT INTO products (
        name, description, main_category, sub_category,
        application, model_image_url, performance_features,
        flute, hrc, series, material,
        product_code, technical_info, reference_url, internal_detail_url
      ) VALUES (
        ${productData.name}, 
        ${productData.description}, 
        ${productData.mainCategory}, 
        ${productData.subCategory},
        ${productData.application || null},
        ${productData.modelImageUrl || null},
        ${productData.performanceFeatures || null},
        ${productData.flute || null},
        ${productData.hrc || null},
        ${productData.series || null},
        ${productData.material || null},
        ${productData.productCode || null},
        ${productData.technicalInfo || null},
        ${productData.referenceUrl || null},
        ${productData.internalDetailUrl || null}
      ) RETURNING *
    `

    if (!productResult.length) {
      throw new Error("创建产品失败")
    }

    const product = snakeToCamel(productResult[0]) as Product
    const productId = product.id

    // 插入产品参数
    if (productData.parameters.length > 0) {
      for (const param of productData.parameters) {
        await sql`
          INSERT INTO product_parameters (product_id, name, value)
          VALUES (${productId}, ${param.name}, ${param.value})
        `
      }
    }

    // 插入产品图片
    if (productData.images.length > 0) {
      for (const image of productData.images) {
        await sql`
          INSERT INTO product_images (product_id, url, alt, is_primary)
          VALUES (${productId}, ${image.url}, ${image.alt}, ${image.isPrimary})
        `
      }
    }

    // 插入技术图纸
    if (productData.technicalDrawings.length > 0) {
      for (const drawing of productData.technicalDrawings) {
        // 确保 fileType 不超过 20 个字符
        const fileType = drawing.fileType.substring(0, 20)
        await sql`
          INSERT INTO technical_drawings (product_id, url, title, file_type)
          VALUES (${productId}, ${drawing.url}, ${drawing.title}, ${fileType})
        `
      }
    }

    // 重新获取完整的产品信息
    const createdProduct = await getProductById(productId)
    if (!createdProduct) {
      throw new Error("创建产品后获取产品信息失败")
    }

    revalidatePath("/admin/products")
    return createdProduct
  } catch (error) {
    console.error("创建产品失败:", error)
    throw new Error("创建产品失败")
  }
}

// 更新产品
export async function updateProduct(id: string, productData: ProductFormData): Promise<Product | null> {
  try {
    // 检查产品是否存在
    const existingProduct = await getProductById(id)
    if (!existingProduct) {
      return null
    }

    // 更新产品基本信息
    await sql`
      UPDATE products
      SET 
        name = ${productData.name},
        description = ${productData.description},
        main_category = ${productData.mainCategory},
        sub_category = ${productData.subCategory},
        application = ${productData.application || null},
        model_image_url = ${productData.modelImageUrl || null},
        performance_features = ${productData.performanceFeatures || null},
        flute = ${productData.flute || null},
        hrc = ${productData.hrc || null},
        series = ${productData.series || null},
        material = ${productData.material || null},
        product_code = ${productData.productCode || null},
        technical_info = ${productData.technicalInfo || null},
        reference_url = ${productData.referenceUrl || null},
        internal_detail_url = ${productData.internalDetailUrl || null},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `

    // 删除旧的产品参数
    await sql`DELETE FROM product_parameters WHERE product_id = ${id}`

    // 插入新的产品参数
    if (productData.parameters.length > 0) {
      for (const param of productData.parameters) {
        await sql`
          INSERT INTO product_parameters (product_id, name, value)
          VALUES (${id}, ${param.name}, ${param.value})
        `
      }
    }

    // 删除旧的产品图片
    await sql`DELETE FROM product_images WHERE product_id = ${id}`

    // 插入新的产品图片
    if (productData.images.length > 0) {
      for (const image of productData.images) {
        await sql`
          INSERT INTO product_images (product_id, url, alt, is_primary)
          VALUES (${id}, ${image.url}, ${image.alt}, ${image.isPrimary})
        `
      }
    }

    // 删除旧的技术图纸
    await sql`DELETE FROM technical_drawings WHERE product_id = ${id}`

    // 插入新的技术图纸
    if (productData.technicalDrawings.length > 0) {
      for (const drawing of productData.technicalDrawings) {
        // 确保 fileType 不超过 20 个字符
        const fileType = drawing.fileType.substring(0, 20)
        await sql`
          INSERT INTO technical_drawings (product_id, url, title, file_type)
          VALUES (${id}, ${drawing.url}, ${drawing.title}, ${fileType})
        `
      }
    }

    // 重新获取更新后的产品信息
    const updatedProduct = await getProductById(id)
    if (!updatedProduct) {
      throw new Error("更新产品后获取产品信息失败")
    }

    revalidatePath("/admin/products")
    return updatedProduct
  } catch (error) {
    console.error(`更新产品 ${id} 失败:`, error)
    throw new Error(`更新产品 ${id} 失败`)
  }
}

// 删除产品
export async function deleteProduct(id: string): Promise<boolean> {
  try {
    // 检查产品是否存在
    const existingProduct = await getProductById(id)
    if (!existingProduct) {
      return false
    }

    // 删除产品（由于外键约束，相关的参数、图片和图纸会自动删除）
    await sql`DELETE FROM products WHERE id = ${id}`

    revalidatePath("/admin/products")
    return true
  } catch (error) {
    console.error(`删除产品 ${id} 失败:`, error)
    throw new Error(`删除产品 ${id} 失败`)
  }
}
