# MZG Tools - 精密工业铣削工具

*与您的 [v0.dev](https://v0.dev) 部署自动同步*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/haiges-projects/v0-mzgtools)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/no1j5Kf6Ldp)

## 项目概述

MZG Tools 是一个专业的工业铣削工具展示和销售平台，基于 Next.js 14 和现代 Web 技术栈构建。该项目提供了完整的产品展示、定制报价、管理后台等功能。

## 🎯 项目测试状态

✅ **所有测试通过 (9/9)**

- ✅ 项目结构检查 (11/11)
- ✅ 环境变量配置
- ✅ 依赖安装检查 (4/4)
- ✅ Hydration 配置检查 (3/3)
- ✅ 图片配置检查 (3/3)
- ✅ Stagewise 开发工具集成 (5/5) - 新增
- ✅ 页面文件检查 (4/4)
- ✅ 组件文件检查 (5/5)
- ✅ 项目构建测试

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 pnpm
- PostgreSQL 数据库 (Neon)

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd v0-mzgtools-main
   ```

2. **安装依赖**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **配置环境变量**
   
   创建 `.env.local` 文件并添加数据库连接：
   ```env
   DATABASE_URL=postgres://neondb_owner:npg_Po6lEap4LBXC@ep-polished-surf-a4wr34jw-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

4. **运行项目测试**
   ```bash
   node test-project.js
   ```

5. **启动开发服务器**
   ```bash
   npm run dev
   ```

6. **访问应用**
   - 主站：http://localhost:3000
   - 管理后台：http://localhost:3000/admin

## 🏗️ 技术栈

- **框架**: Next.js 14 (App Router)
- **UI 库**: React 19, Tailwind CSS, shadcn/ui
- **数据库**: PostgreSQL (Neon)
- **状态管理**: React Hooks
- **类型检查**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── admin/             # 管理后台页面
│   ├── api/               # API 路由
│   ├── custom-quote/      # 定制报价页面
│   ├── mzgblog/          # 博客页面
│   ├── standard-tools/    # 标准工具页面
│   └── productdetails/    # 产品详情页面
├── components/            # React 组件
│   ├── admin/            # 管理后台组件
│   ├── ui/               # UI 基础组件
│   └── ...               # 其他业务组件
├── lib/                  # 工具库和配置
├── public/               # 静态资源
├── styles/               # 样式文件
├── types/                # TypeScript 类型定义
└── data/                 # 数据文件
```

## 🔧 主要功能

### 前台功能
- 🏠 **首页展示**: 产品概览和公司介绍
- 🔧 **产品目录**: 分类展示各种铣削工具
- 📝 **定制报价**: 在线提交定制需求
- 📖 **技术博客**: 行业资讯和技术文章
- 📱 **响应式设计**: 支持各种设备访问

### 后台功能
- 👤 **用户管理**: 管理员登录和权限控制
- 📦 **产品管理**: 添加、编辑、删除产品信息
- 📋 **报价管理**: 处理客户定制报价请求
- ✍️ **内容管理**: 管理博客文章和页面内容
- 📊 **数据统计**: 查看访问和业务数据

### 开发工具
- 🛠️ **Stagewise 工具栏**: AI 驱动的 UI 编辑功能
  - 仅在开发模式下可见
  - 可选择页面元素并添加注释
  - 连接前端 UI 到代码编辑器中的 AI 代理
  - 支持实时 UI 修改和优化建议

## 🎨 设计特色

- **现代化 UI**: 采用苹果风格的简洁设计
- **专业配色**: 红色主题色彰显工业品牌特色
- **优秀体验**: 流畅的交互和动画效果
- **移动优先**: 完美适配各种屏幕尺寸

## 🔍 页面路由

### 主要页面
- `/` - 首页
- `/standard-tools` - 标准工具分类
- `/custom-quote` - 定制报价
- `/mzgblog` - 技术博客
- `/admin` - 管理后台

### 产品页面
- `/standard-tools/milling/*` - 铣削工具系列
- `/standard-tools/threading/*` - 螺纹工具系列
- `/standard-tools/hole-making/*` - 孔加工工具系列

## 🛠️ 开发命令

```bash
# 开发模式
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 运行项目测试
node test-project.js
```

## 🐛 问题解决

### 常见问题

1. **依赖冲突**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **数据库连接错误**
   - 检查 `.env.local` 文件中的 `DATABASE_URL`
   - 确保数据库服务正常运行

3. **Hydration 错误**
   - 已在 `layout.tsx` 和 `theme-provider.tsx` 中添加 `suppressHydrationWarning`

4. **图片加载错误**
   - 外部图片域名已在 `next.config.mjs` 中配置
   - 支持 Vercel 存储、Unsplash 等常用图片服务

5. **Stagewise 工具栏问题**
   - 工具栏仅在开发模式 (`npm run dev`) 下可见
   - 如果工具栏未显示，检查浏览器控制台是否有错误
   - 确保 `@stagewise/toolbar-next` 包已正确安装

6. **构建失败**
   - 运行 `node test-project.js` 检查项目状态
   - 检查是否缺少必要的文件或配置

## 📈 部署信息

**生产环境**: [https://vercel.com/haiges-projects/v0-mzgtools](https://vercel.com/haiges-projects/v0-mzgtools)

**开发环境**: [https://v0.dev/chat/projects/no1j5Kf6Ldp](https://v0.dev/chat/projects/no1j5Kf6Ldp)

## 🔄 同步机制

此仓库与 [v0.dev](https://v0.dev) 保持自动同步：

1. 在 v0.dev 中创建和修改项目
2. 从 v0 界面部署聊天内容
3. 更改会自动推送到此仓库
4. Vercel 从此仓库部署最新版本

## 📝 更新日志

### 最新更新 (2025-06-07)
- ✅ 修复了 React hydration 错误
- ✅ 配置了数据库连接
- ✅ 创建了项目测试脚本
- ✅ 修复了构建过程中的序列化问题
- ✅ 完善了项目文档
- ✅ 修复了 Next.js Image 组件的外部域名配置
- ✅ 添加了 Vercel 存储域名到图片白名单
- ✅ 安装了缺失的 @prisma/client 依赖
- ✅ 集成了 Stagewise AI 驱动的开发工具栏
- ✅ 配置了开发/生产环境的条件加载

### 项目特色
- 🎯 专业的工业工具展示平台
- 🔧 完整的产品管理系统
- 📱 现代化的响应式设计
- ⚡ 高性能的 Next.js 架构
- 🛡️ 安全的数据库集成

---

**技术支持**: 如有问题，请查看项目测试脚本输出或联系开发团队。