# 🚀 Vercel 部署修复指南

本文档记录了解决 MZG Tools 项目在 Vercel 部署时遇到的常见问题及其解决方案。

## ❌ 问题总结

### 1. 锁文件冲突错误
```
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile" 
because pnpm-lock.yaml is not up to date with package.json
```

### 2. React 版本兼容性错误
```
npm error ERESOLVE could not resolve
Could not resolve dependency:
peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-day-picker@8.10.1
Conflicting peer dependency: react@18.3.1
```

### 3. Vaul 组件兼容性错误
```
npm error ERESOLVE could not resolve
Could not resolve dependency:
peer react@"^16.8 || ^17.0 || ^18.0" from vaul@0.9.9
Conflicting peer dependency: react@18.3.1
```

## ✅ 解决方案

### 步骤 1: 更新组件库到 React 19 兼容版本
```bash
# 更新 package.json 中的版本
"react-day-picker": "^9.7.0"  # 支持 React 19
"vaul": "^1.1.2"              # 支持 React 19
```

### 步骤 2: 清理锁文件冲突
```bash
# 删除所有锁文件
Remove-Item -Force package-lock.json, pnpm-lock.yaml -ErrorAction SilentlyContinue

# 重新安装依赖
npm install --legacy-peer-deps
```

### 步骤 3: 验证构建
```bash
npm run build
# ✓ 成功构建 74/74 页面
```

### 步骤 4: 提交并部署
```bash
git add .
git commit -m "fix: update react-day-picker to 9.7.0 for React 19 compatibility"
git push origin main
```

## 🔧 技术细节

### 依赖版本信息
- **React**: 19.x (最新稳定版)
- **react-day-picker**: 9.7.0 (支持 React 19)
- **vaul**: 1.1.2 (支持 React 19)
- **Next.js**: 15.2.4
- **包管理器**: npm (推荐，避免锁文件冲突)

### Vercel 配置
项目使用标准的 Next.js 配置，无需额外的 Vercel 配置文件。

## 📋 故障排除检查清单

- [ ] 检查 `package.json` 中的 React 版本
- [ ] 确认所有组件库支持当前 React 版本
- [ ] 删除冲突的锁文件（package-lock.json 和 pnpm-lock.yaml）
- [ ] 使用 `--legacy-peer-deps` 安装依赖
- [ ] 本地构建测试成功
- [ ] 推送到 GitHub 触发 Vercel 重新部署

## 🎯 预防措施

1. **保持依赖更新**: 定期检查组件库的 React 兼容性
2. **使用单一包管理器**: 避免混用 npm 和 pnpm
3. **锁文件管理**: 确保锁文件与 package.json 同步
4. **本地测试**: 部署前总是先本地构建测试

## 📈 部署结果

✅ **成功指标**:
- 构建时间: ~30秒
- 页面生成: 74/74 成功
- 错误数: 0
- 部署状态: 成功

---

*最后更新: 2025-06-07*  
*项目: MZG Tools - 工业铣削工具平台* 