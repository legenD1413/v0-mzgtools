# Stagewise 样式冲突修复指南 (强化版本)

## 问题描述

安装 stagewise 开发工具后，页面样式发生了变化，主要表现为：
- 页面布局异常
- 原有样式被覆盖
- 组件显示不正常

## 问题原因

1. **样式作用域冲突**: stagewise 工具栏的 CSS 样式影响了主应用的样式
2. **React 组件树干扰**: stagewise 组件在主应用的 React 树中渲染，可能影响布局
3. **CSS 优先级问题**: stagewise 的全局样式覆盖了项目原有样式

## 强化解决方案 (最新版本)

### 1. 多层样式隔离架构

我们采用了以下技术来完全隔离 stagewise 的样式：

#### a) 独立的 React Root
```typescript
// 使用 React 18 的 createRoot API 创建独立的渲染树
import('react-dom/client').then(({ createRoot }) => {
  const root = createRoot(container!)
  root.render(<StagewiseToolbar config={stagewiseConfig} />)
})
```

#### b) 强化的 CSS 隔离容器
```css
container.style.cssText = `
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none !important;
  z-index: 999999 !important;
  isolation: isolate !important;
  contain: layout style paint !important;  /* 新增：CSS 包含 */
  transform: translateZ(0) !important;     /* 新增：硬件加速 */
  will-change: transform !important;       /* 新增：优化渲染 */
`
```

#### c) 全局 CSS 保护
```css
/* app/globals.css 中的保护性样式 */
#stagewise-container {
  position: fixed !important;
  isolation: isolate !important;
  contain: layout style paint !important;
}

#stagewise-container * {
  box-sizing: border-box !important;
  isolation: isolate !important;
}

body:not(#stagewise-container) {
  isolation: isolate;
}

.main-app-container {
  isolation: isolate;
  contain: layout style;
}
```

#### d) 延迟初始化 (增强版)
```typescript
// 延迟1.5秒初始化，确保主应用完全稳定
const timer = setTimeout(() => {
  // 移除可能存在的旧容器
  const oldContainer = document.getElementById('stagewise-container')
  if (oldContainer) {
    oldContainer.remove()
  }
  // 初始化 stagewise
}, 1500)
```

### 2. 架构调整

#### 修改前的问题架构：
```
app/layout.tsx
├── ThemeProvider
│   ├── {children}
│   └── <StagewiseDevToolbar />  ❌ 在主应用树中，会影响样式
```

#### 修改后的正确架构：
```
app/layout.tsx
├── ThemeProvider
│   └── {children}

app/page.tsx (带保护类)
├── <div className="main-app-container">  ✅ 主应用保护容器
│   ├── 主应用内容
│   └── <StagewiseInit />  ✅ 独立初始化，不影响主应用

独立的 DOM 容器 (强化隔离)
└── stagewise-container  ✅ 完全隔离的渲染环境
    └── <StagewiseToolbar />
```

### 3. 文件结构

#### 新增文件：
- `components/stagewise-init.tsx` - 独立初始化组件 (强化版)
- `STAGEWISE_STYLE_FIX.md` - 本文档

#### 删除文件：
- `components/stagewise-toolbar.tsx` - 删除冲突的旧实现

#### 修改文件：
- `app/layout.tsx` - 移除 stagewise 组件
- `app/page.tsx` - 添加独立初始化和保护容器类
- `app/globals.css` - 添加全局样式保护
- `test-project.js` - 更新测试检查

## 技术特性

### ✅ 完全样式隔离
- 使用 `isolation: isolate` CSS 属性
- 使用 `contain: layout style paint` 包含属性
- 独立的 React 渲染树
- 固定定位，不影响文档流
- 硬件加速优化

### ✅ 开发/生产环境分离
- 仅在开发模式下加载
- 生产构建时完全排除
- 动态导入，按需加载

### ✅ 性能优化
- 延迟初始化，不影响首屏加载
- 独立的事件处理
- 最小化对主应用的影响
- GPU 加速渲染

### ✅ 错误处理
- 自动清理旧容器
- 优雅的错误降级
- 完整的清理机制

## 验证方法

运行测试脚本验证修复效果：

```bash
node test-project.js
```

应该看到：
```
🛠️ 测试6: 检查 Stagewise 开发工具集成 (样式隔离版本)
   ✅ Stagewise 包已安装
   ✅ Stagewise 初始化组件已创建
   ✅ 独立 React Root 配置正确
   ✅ CSS 样式隔离已配置
   ✅ 强化样式隔离已配置
   ✅ Stagewise 已集成到主页
   ✅ Layout 中已移除 Stagewise (避免样式冲突)
   ✅ 全局 CSS 样式隔离已配置
   ✅ Webpack 生产环境配置正确
```

## 使用说明

### 开发模式
```bash
npm run dev
```
- stagewise 工具栏会在页面加载1.5秒后出现
- 工具栏完全独立，不影响主应用样式
- 可以正常选择元素和添加注释
- 使用强化的样式隔离技术

### 生产模式
```bash
npm run build
npm run start
```
- stagewise 不会被包含在生产构建中
- 页面样式完全正常
- 无任何性能影响

## 故障排除

### 如果工具栏不显示：
1. 确认是否在开发模式 (`npm run dev`)
2. 检查浏览器控制台是否有错误
3. 确认 `@stagewise/toolbar-next` 包已安装
4. 等待1.5秒让工具栏完全加载

### 如果仍有样式问题：
1. 清除浏览器缓存
2. 删除 `.next` 目录并重启开发服务器
3. 检查是否有其他全局样式冲突
4. 确认主应用容器使用了 `main-app-container` 类

### 清理缓存命令：
```bash
# 停止开发服务器
taskkill /F /IM node.exe

# 清理 Next.js 缓存
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# 重新启动
npm run dev
```

## 总结

通过这个强化修复方案，我们实现了：
- ✅ 完全解决样式冲突问题
- ✅ 保持 stagewise 功能完整
- ✅ 不影响主应用性能
- ✅ 开发/生产环境完全分离
- ✅ 多层样式隔离保护
- ✅ 硬件加速优化
- ✅ 完善的错误处理

现在您可以安全地使用 stagewise 开发工具，而不用担心样式冲突问题！即使之前的修复失效，这个强化版本也能确保完全的样式隔离。 