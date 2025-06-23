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
   - 管理后台：http://localhost:3000/admin-mzg

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
│   ├── admin-mzg/         # 管理后台页面
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
- 👤 **用户管理**: 管理员登录和权限控制（基于PostgreSQL数据库）
- 📦 **产品管理**: 添加、编辑、删除产品信息（数据库存储）
- 📋 **报价管理**: 处理客户定制报价请求（数据库存储）
- 👥 **会员管理**: 完整的用户和会员功能
  - 用户注册、登录、权限管理
  - 会员等级管理（基础版、高级版、企业版）
  - 用户类型分类（客户、合作伙伴、供应商）
  - 用户详情和活动记录跟踪
  - 会话管理和安全控制
  - 用户搜索、筛选和批量操作
  - 信用额度和订阅管理
  - 邮箱验证和账户状态控制
- 🗄️ **数据库管理**: 
  - 数据库连接测试和状态监控
  - 查看数据库基本信息（名称、用户、版本、时间）
  - 浏览数据库表结构和记录数统计
  - 查看表记录数据（支持分页浏览）
  - 完整的表结构详情（字段、索引、外键、约束等）
  - 数据导入功能（支持JSON和CSV格式）
  - 数据导出功能（支持JSON和CSV格式）
  - **数据表删除功能**（强化防误删保护）
  - **自定义表创建功能**（通用表创建器）
  - 数据库自动初始化和表创建
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
- `/admin-mzg` - 管理后台

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

## 📖 使用指南

### 管理后台使用指南

#### 用户管理功能

**访问方式**: http://localhost:3000/admin-mzg/users

**主要功能**:

1. **用户列表管理**
   - 查看所有注册用户的详细信息
   - 支持按用户名、邮箱、公司名进行搜索
   - 按用户类型（客户、合作伙伴、供应商）筛选
   - 按状态（活跃、禁用）筛选
   - 分页浏览，每页20条记录

2. **用户统计面板**
   - 总用户数量统计
   - 活跃用户数量
   - 邮箱验证用户数量
   - 近30天新用户统计

3. **用户详情查看**
   - 查看用户基本信息（姓名、邮箱、公司等）
   - 查看用户会话信息（登录设备、IP地址等）
   - 查看用户活动日志（操作记录）
   - 订阅级别和信用额度管理

4. **用户操作**
   - 新增用户：支持完整的用户信息录入
   - 编辑用户：更新用户基本信息和权限
   - 启用/禁用用户：控制用户账户状态
   - 删除用户：包含相关数据的级联删除

5. **会员级别管理**
   - **基础版 (Basic)**: 标准功能访问
   - **高级版 (Premium)**: 增强功能和优先支持
   - **企业版 (Enterprise)**: 全功能访问和定制服务

6. **用户类型分类**
   - **客户 (Customer)**: 终端用户和购买者
   - **合作伙伴 (Partner)**: 业务合作伙伴
   - **供应商 (Vendor)**: 供应商和服务提供商

**操作步骤**:

1. 登录管理后台 (admin/mzgtools2024)
2. 在主导航中点击"用户管理"
3. 使用搜索和筛选功能查找特定用户
4. 点击"查看详情"查看用户完整信息
5. 使用"新增用户"按钮创建新账户
6. 使用操作按钮进行用户状态管理

**安全特性**:
- 用户密码加密存储
- 会话管理和超时控制
- 操作日志记录和审计
- IP地址和设备信息跟踪
- 管理员权限验证

#### 数据库管理功能

**访问方式**: http://localhost:3000/admin-mzg/database

**主要功能**:
- 查看数据库连接状态和基本信息
- 浏览所有数据表和记录统计
- 查看表结构详情（字段、索引、约束等）
- 数据导入导出（JSON/CSV格式）
- 表记录数据的分页浏览

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

## 💡 数据库管理使用指南

### 访问数据库管理
1. 访问管理后台: http://localhost:3000/admin-mzg/login
2. 使用默认账户登录:
   - 用户名: `admin`
   - 密码: `mzgtools2024`
3. 进入数据库管理页面: http://localhost:3000/admin-mzg/database

### 功能说明

#### 🔍 表结构查看
- 点击表格中的 🏗️ 图标查看完整表结构
- 包含字段详情、索引信息、外键约束、检查约束等
- 支持查看字段的数据类型、长度、精度等详细信息

#### 📤 数据导出
- 点击表格中的 📥 图标导出表数据
- 支持JSON和CSV两种格式
- 默认导出最多1000条记录

#### 📥 数据导入
- 点击表格中的 📤 图标打开导入对话框
- 支持JSON和CSV文件格式
- JSON格式：对象数组 `[{field1: value1, field2: value2}, ...]`
- CSV格式：第一行为标题行，后续行为数据
- 导入模式：追加到现有数据（不会覆盖）

#### 📊 记录查看
- 点击 📄 图标查看表记录数据
- 支持分页浏览，每页显示50条记录
- 智能数据类型渲染（NULL值、布尔值、JSON对象等）

#### 🏗️ 自定义表创建功能
- 只有超级管理员可以创建自定义数据表
- 点击"创建数据库表"按钮打开通用表创建对话框
- **通用表创建功能**：
  - ✅ 自定义表名称和注释
  - ✅ 灵活的字段定义（支持20+种数据类型）
  - ✅ 完整的字段属性设置（长度、精度、标度、默认值、注释）
  - ✅ 约束配置（主键、唯一键、非空、默认值）
  - ✅ 可选的系统字段（自动ID、时间戳）
  - ✅ 实时表结构预览和验证

- **支持的数据类型**：
  - **字符串类型**: VARCHAR, CHAR, TEXT
  - **数值类型**: INTEGER, BIGINT, SMALLINT, DECIMAL, NUMERIC, REAL, DOUBLE
  - **布尔类型**: BOOLEAN
  - **日期时间**: DATE, TIME, TIMESTAMP, TIMESTAMPTZ
  - **JSON类型**: JSON, JSONB
  - **其他类型**: UUID, SERIAL, BIGSERIAL



- **安全特性**：
  - 表名和字段名验证（防SQL注入）
  - 重复表名检测
  - 字段名重复检测
  - 超级管理员权限验证
  - 完整的操作审计日志
  - 友好的用户界面和确认流程

#### 🗑️ 数据表删除（危险操作）
- 只有超级管理员可以删除数据表
- 点击表格中的 🗑️ 图标触发删除确认流程
- **强化防误删保护机制**：
  1. **确认文本验证**：必须输入完整的 `DELETE TABLE 表名` 文本
  2. **安全码验证**：必须输入固定安全码 `DELETE-CONFIRM-2024`
  3. **系统表保护**：禁止删除核心系统表（admin_users, admin_sessions, users等）
  4. **操作记录**：所有删除操作都会被详细记录
- **删除范围**：使用 `DROP TABLE CASCADE` 删除表及其所有相关约束和索引
- **删除反馈**：删除成功后显示操作者、时间和删除的记录数量

**安全特性**：
- 🛡️ 核心系统表和业务表禁止删除（admin_users, users, products等）
- ⚠️ 双重确认验证机制  
- 📝 完整操作审计日志
- 👤 超级管理员权限验证
- 🔒 固定安全码防护

**重要说明**：
- ⚠️ 业务核心表（products, product_categories, quote_requests等）已被设置为受保护表，无法通过删除功能删除
- 🔄 某些表（如products）在系统初始化时会自动重建，即使删除后也会在下次登录时重新创建
- 🧪 可使用"创建测试表"功能创建 `test_delete_table` 来测试删除功能

### 最新更新 (2025-01-16)
- ✅ **修复：数据库表创建问题**
  - **根本原因**：Neon PostgreSQL数据库对带连字符的表名支持有限
  - **解决方案**：将 Product-F 表名从 "product-f" 改为 "product_f"（使用下划线）
  - **字段标准化**：统一使用小写字段名（product_code, title, application, page）
  - **兼容性改进**：将表查询从 `pg_tables` 改为 `information_schema.tables` 以保留原始表名
  - **验证增强**：添加了表创建后的即时验证机制
- ✅ **新增：通用数据库表创建功能**
  - 完全自定义的表创建器，支持20+种数据类型
  - 灵活的字段属性配置（长度、精度、约束、默认值、注释）
  - 智能表单验证和重复检测
  - 现代化的响应式UI设计

- ✅ 重构了管理后台系统（/admin-mzg）
- ✅ 集成了 Neon PostgreSQL 数据库
- ✅ 创建了基于数据库的用户认证系统
- ✅ 添加了数据库管理功能页面
- ✅ 实现了数据库连接测试功能
- ✅ 添加了数据库表结构查询功能
- ✅ 配置了自动数据库初始化
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

# MZG Tools 管理系统

这是一个基于 Next.js 14 的现代化工具管理系统，采用了最新的 React 服务器组件技术栈。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **UI 组件**: shadcn/ui + Tailwind CSS
- **数据库**: PostgreSQL (Neon)
- **ORM**: Neon Database (@neondatabase/serverless)
- **认证**: 基于 Cookies 的会话管理
- **部署**: Vercel

## 功能模块

### 🔐 认证系统
- 管理员登录/登出
- 基于会话的用户认证
- 角色权限控制（超级管理员/普通管理员）

### 👥 管理员账户管理 (新增)
访问地址：`/admin-mzg/manage-users`

**功能特性：**
- ✅ 管理员账户的增删改查
- ✅ 密码修改功能
- ✅ 角色管理（超级管理员/普通管理员）
- ✅ 账户启用/禁用
- ✅ 搜索和筛选功能
- ✅ 分页显示
- ✅ 实时统计信息

**权限控制：**
- 只有超级管理员可以管理其他管理员账户
- 普通管理员只能修改自己的邮箱和密码
- 不能删除当前登录的管理员账户
- 不能删除最后一个超级管理员
- 新创建的管理员默认为普通管理员权限

**API端点：**
```
GET    /api/admin-mzg/manage-users          # 获取管理员列表
POST   /api/admin-mzg/manage-users          # 创建新管理员
GET    /api/admin-mzg/manage-users/[id]     # 获取单个管理员信息
PUT    /api/admin-mzg/manage-users/[id]     # 更新管理员信息
DELETE /api/admin-mzg/manage-users/[id]     # 删除管理员
```

### 👤 前台用户管理
访问地址：`/admin-mzg/users`

**功能特性：**
- ✅ 完整的用户管理系统（注册、登录、权限管理）
- ✅ 会员等级和类型管理
- ✅ 用户搜索、筛选、分页功能
- ✅ 用户详情和活动跟踪
- ✅ 安全认证和操作审计
- ✅ 响应式设计和现代化UI

**用户字段：**
- 基本信息：用户名、邮箱、姓名、公司、电话、地址等
- 业务信息：用户类型、订阅级别、信用额度
- 系统信息：激活状态、邮箱验证、登录统计

### 📦 产品管理
- 产品分类管理
- 产品系列管理
- 产品信息管理

### 📝 报价请求管理
- 客户报价请求处理
- 状态跟踪和优先级管理

### 🗄️ 数据库管理
- 数据库状态监控
- 表结构管理
- 数据备份功能

## 数据库结构

### 管理员相关表

#### admin_users (管理员用户表)
```sql
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(100),
  role VARCHAR(20) DEFAULT 'admin',  -- 'super_admin' 或 'admin'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### admin_sessions (管理员会话表)
```sql
CREATE TABLE admin_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES admin_users(id),
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 前台用户相关表

#### users (前台用户表)
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  company VARCHAR(200),
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  avatar_url VARCHAR(500),
  bio TEXT,
  user_type VARCHAR(20) DEFAULT 'customer',  -- customer, partner, vendor
  subscription_level VARCHAR(20) DEFAULT 'basic',  -- basic, premium, enterprise
  credit_limit DECIMAL(12,2) DEFAULT 0.00,
  is_active BOOLEAN DEFAULT true,
  email_verified BOOLEAN DEFAULT false,
  last_login TIMESTAMP,
  login_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### user_sessions (用户会话表)
```sql
CREATE TABLE user_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  token VARCHAR(255) UNIQUE NOT NULL,
  device_info VARCHAR(500),
  ip_address VARCHAR(45),
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### user_activity_logs (用户活动日志表)
```sql
CREATE TABLE user_activity_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  action VARCHAR(100) NOT NULL,
  details JSONB,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 安装和运行

### 环境要求
- Node.js 18+
- PostgreSQL 数据库（推荐使用 Neon）

### 安装步骤

1. 克隆项目
```bash
git clone <repository-url>
cd v0-mzgtools-main
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
创建 `.env.local` 文件：
```env
DATABASE_URL="your-neon-database-url"
NEXTAUTH_SECRET="your-secret-key"
```

4. 运行开发服务器
```bash
npm run dev
```

5. 访问应用
- 管理后台：http://localhost:3000/admin-mzg
- 默认管理员账户：`admin` / `mzgtools2024`

## 系统架构

### 认证流程
1. 用户通过用户名密码登录
2. 服务器验证凭据并创建会话
3. 会话令牌存储在 HTTP-only Cookie 中
4. 每次请求都会验证会话有效性

### 权限体系
- **超级管理员 (super_admin)**: 拥有所有权限，包括管理其他管理员
- **普通管理员 (admin)**: 基本管理权限，不能管理其他管理员

### 安全特性
- 密码使用 Base64 编码存储（生产环境建议使用 bcrypt）
- 会话令牌随机生成
- HTTP-only Cookie 防止 XSS 攻击
- 严格的权限验证

## 开发规范

### 代码结构
```
app/
├── admin-mzg/              # 管理后台页面
│   ├── manage-users/       # 管理员账户管理
│   ├── users/              # 前台用户管理
│   ├── products/           # 产品管理
│   ├── quotes/             # 报价管理
│   └── ...
├── api/
│   └── admin-mzg/          # 管理后台API
│       ├── manage-users/   # 管理员账户API
│       ├── users/          # 前台用户API
│       └── ...
components/
├── ui/                     # shadcn/ui 组件
├── admin-mzg/              # 管理后台组件
└── ...
lib/
├── auth-mzg.ts            # 认证相关函数
├── database.ts            # 数据库连接和初始化
└── ...
```

### 最佳实践
- 使用 TypeScript 确保类型安全
- 组件保持单一职责原则
- API 路由包含完整的错误处理
- 数据库操作使用事务保证一致性
- 所有用户输入都进行验证和清理

## 部署

### Vercel 部署
1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署

### 环境变量配置
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="production-secret"
```

## 更新日志

### v1.2.0 (最新)
- ✅ 新增管理员账户管理功能
- ✅ 完善权限控制体系
- ✅ 优化用户界面和体验
- ✅ 增强安全性和数据验证

### v1.1.0
- ✅ 完整的前台用户管理系统
- ✅ 用户会话和活动跟踪
- ✅ 响应式设计优化

### v1.0.0
- ✅ 基础管理系统框架
- ✅ 产品和报价管理
- ✅ 认证和权限系统

## 联系方式

如有问题或建议，请通过以下方式联系：
- Email: admin@mzgtools.com
- 项目仓库: [GitHub Repository]

---

© 2024 MZG Tools. All rights reserved.