# Stagewise 样式冲突修复指南

## 问题描述

安装 stagewise 开发工具后，页面样式发生了变化，主要表现为：
- 页面布局异常
- 原有样式被覆盖
- 组件显示不正常

## 问题原因

1. **样式作用域冲突**: stagewise 工具栏的 CSS 样式影响了主应用的样式
2. **React 组件树干扰**: stagewise 组件在主应用的 React 树中渲染，可能影响布局
3. **CSS 优先级问题**: stagewise 的全局样式覆盖了项目原有样式

## 解决方案

### 1. 样式隔离架构

我们采用了以下技术来完全隔离 stagewise 的样式：

#### a) 独立的 React Root
```typescript
// 使用 React 18 的 createRoot API 创建独立的渲染树
import('react-dom/client').then(({ createRoot }) => {
  const root = createRoot(container!)
  root.render(<StagewiseToolbar config={stagewiseConfig} />)
})
```

#### b) CSS 隔离容器
```css
container.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999999;
  isolation: isolate;  /* 关键：CSS 隔离 */
`
```

#### c) 延迟初始化
```typescript
// 延迟1秒初始化，确保主应用完全加载
const timer = setTimeout(() => {
  // 初始化 stagewise
}, 1000)
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

app/page.tsx
├── 主应用内容
└── <StagewiseInit />  ✅ 独立初始化，不影响主应用

独立的 DOM 容器
└── stagewise-container  ✅ 完全隔离的渲染环境
    └── <StagewiseToolbar />
```

### 3. 文件结构

#### 新增文件：
- `components/stagewise-init.tsx` - 独立初始化组件
- `STAGEWISE_STYLE_FIX.md` - 本文档

#### 修改文件：
- `components/stagewise-toolbar.tsx` - 改为使用 Portal 渲染
- `app/layout.tsx` - 移除 stagewise 组件
- `app/page.tsx` - 添加独立初始化
- `test-project.js` - 更新测试检查

## 技术特性

### ✅ 完全样式隔离
- 使用 `isolation: isolate` CSS 属性
- 独立的 React 渲染树
- 固定定位，不影响文档流

### ✅ 开发/生产环境分离
- 仅在开发模式下加载
- 生产构建时完全排除
- 动态导入，按需加载

### ✅ 性能优化
- 延迟初始化，不影响首屏加载
- 独立的事件处理
- 最小化对主应用的影响

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
   ✅ Stagewise 已集成到主页
   ✅ Layout 中已移除 Stagewise (避免样式冲突)
   ✅ Webpack 生产环境配置正确
```

## 使用说明

### 开发模式
```bash
npm run dev
```
- stagewise 工具栏会在页面加载1秒后出现
- 工具栏完全独立，不影响主应用样式
- 可以正常选择元素和添加注释

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

### 如果仍有样式问题：
1. 清除浏览器缓存
2. 重启开发服务器
3. 检查是否有其他全局样式冲突

## 总结

通过这个修复方案，我们实现了：
- ✅ 完全解决样式冲突问题
- ✅ 保持 stagewise 功能完整
- ✅ 不影响主应用性能
- ✅ 开发/生产环境完全分离

现在您可以安全地使用 stagewise 开发工具，而不用担心样式冲突问题！ 