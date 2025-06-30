# FAQ管理功能实现说明

## 功能概述

为MZG工具网站实现了完整的FAQ（常见问题）管理功能，包括管理后台的FAQ管理和前端页面的FAQ显示。

## 实现的功能

### 1. 数据库结构

创建了 `faqs` 表，包含以下字段：
- `id`: 主键，自增
- `page_url`: 页面地址（如：/standard-tools/milling/right-angle-flat）
- `question`: 问题内容
- `answer`: 答案内容
- `category`: 问题分类
- `sort_order`: 排序号
- `is_active`: 是否激活
- `created_at`: 创建时间
- `updated_at`: 更新时间

### 2. 管理后台功能

#### 导航菜单
- 在管理后台导航中添加了"FAQ管理"菜单项
- 在管理后台主页添加了FAQ管理卡片

#### FAQ管理页面 (`/admin-mzg/faqs`)
- **列表展示**: 显示所有FAQ，支持分页
- **搜索功能**: 按问题或答案内容搜索
- **分类筛选**: 按分类筛选FAQ
- **页面筛选**: 按页面地址筛选FAQ
- **添加FAQ**: 通过对话框添加新的FAQ
- **编辑FAQ**: 编辑现有FAQ内容
- **删除FAQ**: 删除不需要的FAQ
- **状态管理**: 启用/禁用FAQ

#### 预设分类
- 产品信息
- 技术参数  
- 使用方法
- 订购流程
- 售后服务
- 其他

#### 预设页面路径
- `/standard-tools/milling/right-angle-flat`
- `/standard-tools/milling/deep-ditch`
- `/standard-tools/milling/ball-end`
- `/standard-tools/hole-machining/drill-bit`
- `/standard-tools/threading/taps`

### 3. API接口

#### 管理员API
- `GET /api/admin-mzg/faqs` - 获取FAQ列表（需要管理员权限）
- `POST /api/admin-mzg/faqs` - 创建新FAQ（需要管理员权限）
- `GET /api/admin-mzg/faqs/[id]` - 获取单个FAQ（需要管理员权限）
- `PUT /api/admin-mzg/faqs/[id]` - 更新FAQ（需要管理员权限）  
- `DELETE /api/admin-mzg/faqs/[id]` - 删除FAQ（需要管理员权限）

#### 前端API
- `GET /api/faqs?page_url=xxx` - 获取指定页面的FAQ（无需权限）

### 4. 前端显示组件

#### FAQSection组件 (`/components/faq-section.tsx`)
- **自动加载**: 根据页面URL自动加载相关FAQ
- **分类显示**: 按分类组织和显示FAQ
- **手风琴界面**: 使用手风琴组件展示问答
- **响应式设计**: 适配不同屏幕尺寸
- **无数据处理**: 没有FAQ时不显示组件

#### 视觉设计特点
- 使用MZG品牌红色主题
- 分类标签使用不同颜色区分
- Q&A标记清晰明确
- 底部包含联系提示

### 5. 页面集成

已在以下页面集成FAQ组件：
- `/standard-tools/milling/right-angle-flat` - 放置在Main Functions部分下方

## 使用说明

### 管理员使用

1. **登录管理后台**: 访问 `/admin-mzg/login`
2. **进入FAQ管理**: 点击导航中的"FAQ管理"或主页卡片
3. **添加FAQ**: 点击"新建FAQ"按钮，填写表单
4. **管理FAQ**: 使用搜索、筛选功能查找，编辑或删除FAQ

### 前端显示

1. FAQ会自动在相应页面显示
2. 用户可以点击问题查看答案
3. FAQ按分类组织，便于浏览

## 示例FAQ数据

为 `/standard-tools/milling/right-angle-flat` 页面准备了7条示例FAQ：

1. **产品信息**: 什么是直角平面铣刀？它有什么特点？
2. **技术参数**: 如何选择合适的刃数配置？
3. **技术参数**: 涂层和无涂层版本有什么区别？
4. **使用方法**: 如何正确使用直角平面铣刀？
5. **使用方法**: 推荐的切削参数是什么？
6. **订购流程**: 如何订购MZG直角平面铣刀？
7. **售后服务**: MZG提供哪些售后服务？

## 添加示例数据

可以通过以下方式添加示例数据：

1. **手动添加**: 在管理后台手动创建FAQ
2. **脚本添加**: 运行 `scripts/add-sample-faqs.js` 脚本

## 扩展建议

1. **富文本编辑**: 可以为答案字段添加富文本编辑功能
2. **图片支持**: 在FAQ答案中支持插入图片
3. **搜索优化**: 添加全文搜索功能
4. **访问统计**: 记录FAQ的访问次数
5. **用户反馈**: 添加FAQ有用性评价功能
6. **多语言支持**: 支持多语言FAQ内容
7. **批量导入**: 支持从Excel等文件批量导入FAQ

## 技术架构

- **前端**: React + Next.js 14 (App Router)
- **UI组件**: shadcn/ui + Tailwind CSS
- **数据库**: PostgreSQL (Neon)
- **API**: Next.js API Routes
- **认证**: 自定义JWT认证系统

## 文件清单

### 数据库
- `lib/database.ts` - 添加了FAQ表的创建逻辑

### API路由
- `app/api/admin-mzg/faqs/route.ts` - FAQ管理API
- `app/api/admin-mzg/faqs/[id]/route.ts` - 单个FAQ管理API
- `app/api/faqs/route.ts` - 前端FAQ获取API

### 管理后台
- `app/admin-mzg/faqs/page.tsx` - FAQ管理页面
- `components/admin-mzg/admin-navigation.tsx` - 添加FAQ菜单项
- `app/admin-mzg/page.tsx` - 添加FAQ管理卡片

### 前端组件
- `components/faq-section.tsx` - FAQ显示组件
- `app/standard-tools/milling/right-angle-flat/page.tsx` - 集成FAQ组件

### 工具脚本
- `scripts/add-sample-faqs.js` - 示例数据添加脚本

### 认证系统
- `lib/auth-mzg.ts` - 添加了verifyAdminToken函数

## 部署注意事项

1. 确保数据库环境变量正确配置
2. 运行应用前确保FAQ表已创建
3. 初始化时可以添加示例数据进行测试
4. 检查API路由的权限控制是否正常工作

---

**实现完成时间**: 2024年12月
**实现者**: Claude AI Assistant
**版本**: v1.0 