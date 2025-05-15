export interface ProductParameter {
  id: string
  name: string
  value: string
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
}

export interface TechnicalDrawing {
  id: string
  url: string
  title: string
  fileType: string
}

export interface Product {
  id: string
  name: string
  description: string
  parameters: ProductParameter[]
  mainCategory: "MILLING" | "HOLEMAKING" | "THREADING" | "INSERTS" | "TOOL HOLDERS"
  subCategory: string
  images: ProductImage[]
  technicalDrawings: TechnicalDrawing[]
  createdAt: string
  updatedAt: string
  // 新增字段
  application?: string
  modelImageUrl?: string
  performanceFeatures?: string
  flute?: string
  hrc?: string
  series?: string
  material?: string
  // 用户请求的新增字段
  productCode?: string
  technicalInfo?: string
  referenceUrl?: string
}

export type ProductFormData = Omit<Product, "id" | "createdAt" | "updatedAt">
