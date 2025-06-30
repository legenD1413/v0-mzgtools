# PostgreSQL 数据库设置指南

## 🔧 当前问题
API返回空响应是因为 `DATABASE_URL` 环境变量未正确配置。

## 📋 解决步骤

### 第1步：配置数据库连接

在项目根目录的 `.env.local` 文件中添加或修改：

```bash
# PostgreSQL 连接URL
DATABASE_URL="postgresql://username:password@hostname:5432/database_name"
```

### 第2步：常见的数据库配置示例

#### 本地 PostgreSQL
```bash
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/mzgtools"
```

#### 云端数据库 (如 Neon, Supabase, Railway 等)
```bash
DATABASE_URL="postgresql://user:pass@ep-example.us-east-1.aws.neon.tech/dbname"
```

### 第3步：验证配置

运行以下命令检查数据库连接：
```bash
node scripts/check-db-structure.js
```

### 第4步：初始化表结构

如果连接成功但表不存在，访问：
```
http://localhost:3000/debug/db-status
```

点击"修复表结构"按钮创建必要的表和字段。

## 🛠️ 数据库要求

确保您的 PostgreSQL 数据库：
- ✅ 版本 12 或更高
- ✅ 支持 JSONB 数据类型
- ✅ 允许远程连接（如果使用云端数据库）
- ✅ 用户有创建表和修改表结构的权限

## 🔍 故障排除

### 连接失败
1. 检查数据库服务器是否运行
2. 验证用户名和密码
3. 确认端口号（默认 5432）
4. 检查防火墙设置

### 权限问题
确保数据库用户有以下权限：
- CREATE (创建表)
- ALTER (修改表结构)
- INSERT, UPDATE, DELETE, SELECT (数据操作)

### 网络问题
如果使用云端数据库，确保：
- IP 白名单配置正确
- SSL 连接配置正确
- 网络连接稳定

## 📞 获取帮助

如果您需要：
1. 创建新的 PostgreSQL 数据库
2. 获取现有数据库的连接信息
3. 解决特定的连接问题

请提供您的数据库类型（本地/云端）和具体错误信息。 