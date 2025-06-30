# FAQ多选功能实现说明

## 功能概述

实现了FAQ管理系统的多选功能，允许一个FAQ问题同时显示在多个页面，并且可以属于多个分类。

## 主要改进

### 1. 数据库结构升级

**原结构:**
```sql
page_url VARCHAR(500) NOT NULL
category VARCHAR(100) NOT NULL
```

**新结构:**
```sql
page_urls JSONB NOT NULL DEFAULT '[]'
categories JSONB NOT NULL DEFAULT '[]'
```

**数据迁移:**
- 自动检测旧表结构
- 将单值转换为数组格式
- 保持数据完整性

### 2. API接口更新

#### 管理员API (`/api/admin-mzg/faqs`)

**创建FAQ (POST):**
```json
{
  "page_urls": [
    "/standard-tools/milling/right-angle-flat",
    "/standard-tools/milling/deep-ditch"
  ],
  "categories": ["产品信息", "技术参数"],
  "question": "问题内容",
  "answer": "答案内容",
  "sort_order": 1,
  "show_in_popular": true
}
```

**查询FAQ (GET):**
- 支持多页面地址筛选: `?page_url=/path`
- 支持多分类筛选: `?category=分类名`
- 支持搜索: `?search=关键词`
- 支持分页: `?page=1&limit=10`

#### 公共API (`/api/faqs`)

**查询参数:**
- `page_url`: 页面地址筛选
- `category`: 分类筛选
- `show_in_popular`: 只显示热门问题

**响应格式:**
```json
{
  "success": true,
  "faqs": [
    {
      "id": 1,
      "question": "问题",
      "answer": "答案",
      "page_urls": ["/page1", "/page2"],
      "categories": ["分类1", "分类2"],
      "show_in_popular": true,
      "sort_order": 1
    }
  ]
}
```

### 3. 前端界面优化

#### 管理界面 (`/admin-mzg/faqs`)

**多选功能:**
- 页面地址多选: 复选框形式选择多个页面
- 分类多选: 复选框形式选择多个分类
- 已选项显示: 带删除按钮的标签展示
- 实时预览: 显示已选择的项目

**界面特性:**
- 响应式设计: 适配不同屏幕尺寸
- 直观操作: 点击标签可快速删除
- 表格展示: 多个值用标签形式显示
- 搜索筛选: 支持按页面和分类筛选

#### 前端显示组件 (`components/faq-section-en.tsx`)

**多页面支持:**
- 自动筛选: 只显示包含当前页面的FAQ
- 智能分类: 按实际分类组织内容
- 热门问题: 支持跨页面热门问题显示

### 4. 兼容性处理

**向后兼容:**
- 自动检测表结构版本
- 支持旧数据格式查询
- 平滑迁移到新结构

**数据格式转换:**
```javascript
// 旧格式转新格式
const newFaq = {
  ...oldFaq,
  page_urls: oldFaq.page_url ? [oldFaq.page_url] : [],
  categories: oldFaq.category ? [oldFaq.category] : []
}
```

## 使用示例

### 1. 创建多页面FAQ

```javascript
const faqData = {
  page_urls: [
    "/standard-tools/milling/right-angle-flat",
    "/standard-tools/milling/deep-ditch",
    "/standard-tools/milling/ball-end"
  ],
  categories: ["产品信息", "技术参数"],
  question: "这些立铣刀的材质硬度范围是多少？",
  answer: "我们的立铣刀采用优质硬质合金材料...",
  show_in_popular: true
}
```

### 2. 查询特定页面FAQ

```javascript
// 查询right-angle-flat页面的所有FAQ
const response = await fetch('/api/faqs?page_url=/standard-tools/milling/right-angle-flat')

// 查询技术参数分类的FAQ
const response = await fetch('/api/faqs?page_url=/standard-tools/milling/right-angle-flat&category=技术参数')

// 查询热门问题
const response = await fetch('/api/faqs?page_url=/standard-tools/milling/right-angle-flat&show_in_popular=true')
```

## 测试页面

访问 `/test-multi-faq` 可以测试多选功能:
- API功能测试
- 数据显示测试
- 分类筛选测试
- 热门问题测试

## 文件修改清单

### 数据库相关
- `lib/database.ts` - 表结构升级和数据迁移

### API接口
- `app/api/admin-mzg/faqs/route.ts` - 管理员FAQ API
- `app/api/admin-mzg/faqs/[id]/route.ts` - FAQ编辑删除API
- `app/api/faqs/route.ts` - 公共FAQ查询API

### 前端界面
- `app/admin-mzg/faqs/page.tsx` - 管理界面
- `components/faq-section-en.tsx` - FAQ显示组件
- `app/test-multi-faq/page.tsx` - 测试页面

## 优势

1. **灵活性**: 一个FAQ可以显示在多个相关页面
2. **维护性**: 减少重复内容，统一管理
3. **扩展性**: 支持任意数量的页面和分类
4. **兼容性**: 无缝升级，不影响现有数据
5. **用户体验**: 更好的内容组织和展示

## 注意事项

1. **数据迁移**: 首次运行会自动迁移数据，请确保数据库备份
2. **权限控制**: 管理员API需要有效的认证token
3. **性能考虑**: 大量数据时建议使用分页查询
4. **数据验证**: 确保页面地址和分类的有效性 