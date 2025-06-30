# 产品图片管理功能

## 功能概述

在管理后台增加了产品实物图片管理功能，允许管理员为不同页面动态管理产品展示图片。

## 功能特性

### 1. 管理后台功能
- **访问路径**: `/admin-mzg/product-gallery`
- **页面路径管理**: 可以为不同的产品页面配置图片
- **简化图片输入**: 只需输入图片文件名，系统自动添加 `/images/` 前缀
- **单张图片上传**: 支持添加单张图片及相关信息
- **批量图片上传**: 支持一次性添加多张图片
- **图片编辑**: 可以修改图片信息、排序和状态
- **图片删除**: 可以删除不需要的图片
- **状态控制**: 可以启用/禁用图片显示
- **排序功能**: 支持自定义图片显示顺序

### 2. 前端动态显示
- **动态加载**: 页面自动从数据库加载对应的图片
- **轮播功能**: 保持原有的图片轮播和点击切换功能
- **回退机制**: 如果API加载失败，使用默认图片

## 数据库结构

新增数据表 `product_gallery`:

```sql
CREATE TABLE product_gallery (
  id SERIAL PRIMARY KEY,
  page_path VARCHAR(500) NOT NULL,    -- 页面路径
  image_url VARCHAR(500) NOT NULL,    -- 图片URL
  title VARCHAR(200),                 -- 图片标题
  description TEXT,                   -- 图片描述
  sort_order INTEGER DEFAULT 0,      -- 排序顺序
  is_active BOOLEAN DEFAULT true,    -- 是否激活
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## API接口

### 1. 获取图片列表
- **GET** `/api/admin-mzg/product-gallery`
- **参数**: `pagePath` (可选) - 筛选特定页面的图片
- **返回**: 图片列表数组

### 2. 添加图片
- **POST** `/api/admin-mzg/product-gallery`
- **参数**: `pagePath`, `imageUrl`, `title`, `description`, `sortOrder`, `isActive`

### 3. 更新图片
- **PUT** `/api/admin-mzg/product-gallery/[id]`
- **参数**: 同添加图片

### 4. 删除图片
- **DELETE** `/api/admin-mzg/product-gallery/[id]`

### 5. 批量上传图片
- **POST** `/api/admin-mzg/product-gallery/batch`
- **参数**: `pagePath`, `imageNames` (多行文本), `sortOrderStart`, `isActive`

## 使用方法

### 管理员操作流程

1. **登录管理后台**: 访问 `/admin-mzg/login`
2. **进入图片管理**: 点击"产品管理" → "产品图片管理"
3. **添加单张图片**: 
   - 点击"添加图片"按钮
   - 选择或输入页面路径 (如: `/standard-tools/milling/deep-ditch`)
   - 输入图片文件名 (如: `product-name.png`)，系统会自动添加 `/images/` 前缀
   - 填写标题和描述 (可选)
   - 设置排序顺序
   - 确认激活状态
4. **批量上传图片**:
   - 点击"批量上传"按钮
   - 选择或输入页面路径
   - 在文本框中每行输入一个图片文件名
   - 设置起始排序号（后续图片会依次递增）
   - 确认激活状态
5. **管理图片**: 可以编辑、删除或切换图片状态

### 前端页面集成

已为 `/standard-tools/milling/deep-ditch` 页面集成了动态图片加载功能。其他页面可以按照相同方式集成：

```typescript
// 加载图片的函数示例
const loadGalleryImages = async () => {
  try {
    const response = await fetch(`/api/admin-mzg/product-gallery?pagePath=${currentPagePath}`);
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.images.length > 0) {
        const imageUrls = data.images.map((img: any) => img.imageUrl);
        setGalleryImages(imageUrls);
      }
    }
  } catch (error) {
    console.error("加载图片失败:", error);
    // 保持默认图片
  }
};
```

## 常用页面路径示例

- `/standard-tools/milling/deep-ditch`
- `/standard-tools/milling/end-mills`
- `/standard-tools/milling/ball-end`
- `/standard-tools/milling/roughing`
- `/standard-tools/hole-making/drills`
- `/standard-tools/threading/taps`

## 注意事项

1. **图片路径**: 图片文件需要放在 `/public/images/` 目录下
2. **权限控制**: 只有登录的管理员才能访问图片管理功能
3. **数据备份**: 建议定期备份 `product_gallery` 表数据
4. **性能优化**: 图片按排序顺序和创建时间排序，激活状态的图片优先显示

## 扩展建议

1. **文件上传**: 可以增加直接上传图片文件的功能
2. **批量操作**: 支持批量添加、删除图片
3. **图片预览**: 在管理界面增加图片预览功能
4. **缓存优化**: 为API响应添加缓存机制
5. **日志记录**: 记录图片管理操作日志 