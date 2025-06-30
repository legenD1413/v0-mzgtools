# 数据库备份功能

## 概述

已成功为 `/admin-mzg/database` 页面添加了完整的数据库备份功能，支持灵活的备份选项和多种格式。

## 功能特性

### ✅ 已实现功能

1. **备份格式支持**
   - JSON格式（推荐）：包含完整的表结构和数据
   - CSV格式：主要包含数据，结构化为CSV表格

2. **备份选项**
   - 全量备份：备份所有数据库表
   - 选择性备份：用户可选择特定的表进行备份
   - 表结构包含：可选择是否包含表结构定义
   - 自动文件命名：按日期时间戳生成文件名

3. **用户界面**
   - 备份卡片：在数据库管理主页显示
   - 备份对话框：详细的备份配置界面
   - 表选择器：可视化的表选择界面
   - 备份摘要：显示备份配置概览

4. **技术实现**
   - RESTful API：`/api/admin-mzg/database/backup`
   - 支持 GET（获取信息）和 POST（创建备份）请求
   - 自动文件下载：备份完成后直接下载文件
   - 错误处理：完整的错误处理和用户反馈

## API 端点

### GET /api/admin-mzg/database/backup
获取数据库和备份相关信息
```json
{
  "success": true,
  "database": {
    "database_name": "neondb",
    "current_user": "user",
    "version": "PostgreSQL 版本信息",
    "current_time": "2024-01-01T00:00:00.000Z"
  },
  "tables": [
    {
      "tablename": "表名",
      "tableowner": "所有者",
      "row_count": 100,
      "table_size": "8192 bytes"
    }
  ],
  "backupInfo": {
    "availableFormats": ["json", "csv"],
    "supportedFeatures": ["schema", "data", "selective-tables"],
    "recommendedFormat": "json"
  }
}
```

### POST /api/admin-mzg/database/backup
创建数据库备份
```json
{
  "format": "json", // "json" | "csv"
  "includeSchema": true, // 是否包含表结构
  "tables": [] // 空数组表示所有表，或指定表名数组
}
```

## 备份文件结构

### JSON格式
```json
{
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z",
    "database": "neondb",
    "format": "json",
    "includeSchema": true,
    "version": "1.0.0",
    "tables": ["table1", "table2"]
  },
  "schema": {
    "table1": {
      "columns": [...],
      "indexes": [...],
      "constraints": [...]
    }
  },
  "data": {
    "table1": [
      {"id": 1, "name": "example"},
      ...
    ]
  }
}
```

### CSV格式
```csv
# Table: table1
id,name,created_at
1,"Example Name","2024-01-01 00:00:00"
2,"Another Example","2024-01-01 00:01:00"

# Table: table2
id,description
1,"Description text"
```

## 使用方法

1. **访问备份功能**
   - 登录管理后台：`/admin-mzg/login`
   - 进入数据库管理：`/admin-mzg/database`
   - 点击"数据库备份"卡片中的"创建备份"按钮

2. **配置备份选项**
   - 选择备份格式（JSON推荐）
   - 勾选是否包含表结构
   - 选择要备份的表（全选或部分选择）
   - 查看备份摘要

3. **执行备份**
   - 点击"创建备份"按钮
   - 等待备份处理完成
   - 自动下载备份文件

## 安全考虑

1. **认证保护**：所有备份操作需要管理员登录
2. **权限检查**：使用现有的认证中间件
3. **数据隐私**：备份文件包含敏感数据，需妥善保存
4. **文件大小**：大型数据库可能产生大文件，注意存储空间

## 错误处理

- 数据库连接失败：显示连接错误信息
- 表访问权限不足：跳过无权限表，继续备份其他表
- 文件下载失败：显示用户友好的错误信息
- 网络中断：提供重试机制

## 测试验证

已通过以下测试：
- ✅ API端点响应正常
- ✅ JSON格式备份生成正确
- ✅ 包含13个数据库表的完整备份
- ✅ 文件下载功能正常
- ✅ 错误处理机制有效

## 📋 备份历史管理功能

### ✅ 新增功能（v2.0）

1. **备份历史记录**
   - 自动记录每次备份的详细信息
   - 显示备份时间、文件大小、格式等
   - 记录备份表数量和包含的表名

2. **备份文件管理**
   - 服务器端文件存储：`public/backups/` 目录
   - 数据库记录与物理文件关联
   - 支持批量管理和清理

3. **备份历史界面**
   - 专业的表格显示备份列表
   - 显示文件名、格式、大小、创建时间
   - 备份统计信息（总数量、总大小等）

4. **文件下载功能**
   - 从备份历史直接下载文件
   - 保持原始文件名和格式
   - 安全的文件访问控制

5. **删除管理**
   - 删除备份记录和物理文件
   - 确认提示防止误删
   - 优雅的错误处理

### 🆕 新增API端点

#### GET /api/admin-mzg/database/backup-history
获取备份历史列表
```json
{
  "success": true,
  "backups": [
    {
      "id": 1,
      "filename": "database-backup-2024-01-01T10-30-00-000Z.json",
      "original_filename": "database-backup-2024-01-01.json",
      "file_path": "backups/database-backup-2024-01-01T10-30-00-000Z.json",
      "file_size": 52428,
      "file_size_mb": "0.05",
      "format": "json",
      "include_schema": true,
      "table_count": 13,
      "tables_included": ["users", "products", ...],
      "created_at": "2024-01-01T10:30:00.000Z",
      "created_at_formatted": "2024/1/1 18:30:00",
      "created_by": "admin",
      "description": "数据库完整备份",
      "status": "completed"
    }
  ],
  "total": 1
}
```

#### GET /api/admin-mzg/database/download/[id]
下载指定备份文件
- 返回文件流供下载
- 自动设置正确的MIME类型和文件名
- 支持JSON和CSV格式

#### DELETE /api/admin-mzg/database/backup-history?id=[id]
删除备份记录和文件
```json
{
  "success": true,
  "message": "备份记录删除成功"
}
```

### 📊 备份历史表结构

```sql
CREATE TABLE backup_history (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,              -- 存储的文件名
  original_filename VARCHAR(255) NOT NULL,     -- 原始文件名  
  file_path VARCHAR(500) NOT NULL,             -- 文件路径
  file_size BIGINT NOT NULL,                   -- 文件大小(字节)
  format VARCHAR(10) NOT NULL,                 -- 格式(json/csv)
  include_schema BOOLEAN NOT NULL DEFAULT true, -- 是否包含结构
  table_count INTEGER NOT NULL DEFAULT 0,      -- 表数量
  tables_included TEXT[],                      -- 包含的表名列表
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), -- 创建时间
  created_by VARCHAR(100),                     -- 创建者
  description TEXT,                            -- 描述
  status VARCHAR(20) DEFAULT 'completed'       -- 状态
);
```

## 测试验证（v2.0）

已通过完整测试流程：
- ✅ 创建备份并保存到服务器
- ✅ 记录备份信息到数据库  
- ✅ 获取备份历史列表正常
- ✅ 从历史列表下载文件成功
- ✅ 删除备份记录和文件正常
- ✅ 完整的UI交互流程验证

## 未来优化方向

1. **增量备份**：支持基于时间戳的增量备份
2. **压缩选项**：大文件的压缩功能
3. **定时备份**：自动定时备份任务
4. **云存储**：直接上传到云存储服务
5. **恢复功能**：从备份文件恢复数据库
6. **备份验证**：检查备份文件完整性

## 文件位置

- 备份API：`app/api/admin-mzg/database/backup/route.ts`
- 备份历史API：`app/api/admin-mzg/database/backup-history/route.ts`
- 下载API：`app/api/admin-mzg/database/download/[id]/route.ts`
- 前端页面：`app/admin-mzg/database/page.tsx`（已更新）
- 说明文档：`DATABASE_BACKUP_FEATURE.md`（本文件） 