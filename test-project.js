#!/usr/bin/env node

/**
 * MZG Tools 项目测试脚本
 * 用于验证项目的基本功能和配置
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 MZG Tools 项目测试开始...\n');

// 测试项目结构
function testProjectStructure() {
  console.log('📁 检查项目结构...');
  
  const requiredDirs = [
    'app',
    'components',
    'lib',
    'public',
    'styles',
    'types'
  ];
  
  const requiredFiles = [
    'package.json',
    'next.config.mjs',
    'tailwind.config.ts',
    'tsconfig.json',
    '.env.local'
  ];
  
  let passed = 0;
  let total = requiredDirs.length + requiredFiles.length;
  
  // 检查目录
  requiredDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`  ✅ ${dir}/ 目录存在`);
      passed++;
    } else {
      console.log(`  ❌ ${dir}/ 目录缺失`);
    }
  });
  
  // 检查文件
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`  ✅ ${file} 文件存在`);
      passed++;
    } else {
      console.log(`  ❌ ${file} 文件缺失`);
    }
  });
  
  console.log(`\n📊 项目结构检查: ${passed}/${total} 通过\n`);
  return passed === total;
}

// 测试环境变量
function testEnvironmentVariables() {
  console.log('🔐 检查环境变量...');
  
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    
    if (envContent.includes('DATABASE_URL=')) {
      console.log('  ✅ DATABASE_URL 已配置');
      return true;
    } else {
      console.log('  ❌ DATABASE_URL 未配置');
      return false;
    }
  } catch (error) {
    console.log('  ❌ .env.local 文件读取失败');
    return false;
  }
}

// 测试依赖安装
function testDependencies() {
  console.log('📦 检查依赖安装...');
  
  if (fs.existsSync('node_modules')) {
    console.log('  ✅ node_modules 目录存在');
    
    // 检查关键依赖
    const keyDeps = ['next', 'react', 'react-dom', '@radix-ui'];
    let depsInstalled = 0;
    
    keyDeps.forEach(dep => {
      const depPath = path.join('node_modules', dep);
      if (fs.existsSync(depPath)) {
        console.log(`  ✅ ${dep} 已安装`);
        depsInstalled++;
      } else {
        console.log(`  ❌ ${dep} 未安装`);
      }
    });
    
    console.log(`\n📊 依赖检查: ${depsInstalled}/${keyDeps.length} 通过\n`);
    return depsInstalled === keyDeps.length;
  } else {
    console.log('  ❌ node_modules 目录不存在');
    return false;
  }
}

// 测试 Hydration 配置
function testHydrationConfig() {
  console.log('💧 检查 Hydration 配置...');
  
  let passed = 0;
  let total = 3;
  
  // 检查 layout.tsx 中的 suppressHydrationWarning
  try {
    const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
    if (layoutContent.includes('suppressHydrationWarning')) {
      console.log('  ✅ layout.tsx 包含 suppressHydrationWarning');
      passed++;
    } else {
      console.log('  ❌ layout.tsx 缺少 suppressHydrationWarning');
    }
  } catch (error) {
    console.log('  ❌ layout.tsx 读取失败');
  }
  
  // 检查 theme-provider.tsx 中的 mounted 状态
  try {
    const themeProviderContent = fs.readFileSync('components/theme-provider.tsx', 'utf8');
    if (themeProviderContent.includes('useState') && themeProviderContent.includes('useEffect')) {
      console.log('  ✅ theme-provider.tsx 包含 mounted 状态检查');
      passed++;
    } else {
      console.log('  ❌ theme-provider.tsx 缺少 mounted 状态检查');
    }
  } catch (error) {
    console.log('  ❌ theme-provider.tsx 读取失败');
  }
  
  // 检查是否存在 hydration 相关的辅助组件
  const hydrationComponents = ['components/client-only.tsx', 'components/hydration-boundary.tsx'];
  let hydrationComponentsExist = 0;
  
  hydrationComponents.forEach(component => {
    if (fs.existsSync(component)) {
      console.log(`  ✅ ${component} 存在`);
      hydrationComponentsExist++;
    }
  });
  
  if (hydrationComponentsExist > 0) {
    console.log('  ✅ 存在 Hydration 辅助组件');
    passed++;
  } else {
    console.log('  ❌ 缺少 Hydration 辅助组件');
  }
  
  console.log(`\n📊 Hydration 配置检查: ${passed}/${total} 通过\n`);
  return passed >= 2; // 至少通过 2/3 的检查
}

// 测试构建
function testBuild() {
  console.log('🏗️  测试项目构建...');
  
  try {
    console.log('  正在执行 npm run build...');
    execSync('npm run build', { stdio: 'pipe' });
    console.log('  ✅ 项目构建成功');
    return true;
  } catch (error) {
    console.log('  ❌ 项目构建失败');
    console.log(`  错误信息: ${error.message}`);
    return false;
  }
}

// 测试页面文件
function testPages() {
  console.log('📄 检查页面文件...');
  
  const pages = [
    'app/page.tsx',
    'app/layout.tsx',
    'app/custom-quote/page.tsx',
    'app/standard-tools/milling/deep-ditch/page.tsx'
  ];
  
  let pagesExist = 0;
  
  pages.forEach(page => {
    if (fs.existsSync(page)) {
      console.log(`  ✅ ${page} 存在`);
      pagesExist++;
    } else {
      console.log(`  ❌ ${page} 缺失`);
    }
  });
  
  console.log(`\n📊 页面检查: ${pagesExist}/${pages.length} 通过\n`);
  return pagesExist === pages.length;
}

// 测试组件文件
function testComponents() {
  console.log('🧩 检查组件文件...');
  
  const components = [
    'components/header.tsx',
    'components/footer.tsx',
    'components/theme-provider.tsx',
    'components/ui'
  ];
  
  let componentsExist = 0;
  
  components.forEach(component => {
    if (fs.existsSync(component)) {
      console.log(`  ✅ ${component} 存在`);
      componentsExist++;
    } else {
      console.log(`  ❌ ${component} 缺失`);
    }
  });
  
  console.log(`\n📊 组件检查: ${componentsExist}/${components.length} 通过\n`);
  return componentsExist === components.length;
}

// 测试项目配置和文件
function runTests() {
  console.log('🧪 开始测试 MZG Tools 项目...\n');
  
  let passedTests = 0;
  let totalTests = 0;

  // 测试1: 检查项目结构
  console.log('📁 测试1: 检查项目结构');
  totalTests++;
  
  const requiredDirs = [
    'app',
    'components', 
    'lib',
    'public',
    'data'
  ];
  
  const requiredFiles = [
    'package.json',
    'next.config.mjs',
    'tailwind.config.ts',
    'tsconfig.json',
    '.env.local',
    'README.md'
  ];
  
  let structureValid = true;
  
  // 检查目录
  requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.log(`   ❌ 缺少目录: ${dir}`);
      structureValid = false;
    } else {
      console.log(`   ✅ 目录存在: ${dir}`);
    }
  });
  
  // 检查文件
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      console.log(`   ❌ 缺少文件: ${file}`);
      structureValid = false;
    } else {
      console.log(`   ✅ 文件存在: ${file}`);
    }
  });
  
  if (structureValid) {
    console.log('   ✅ 项目结构完整');
    passedTests++;
  } else {
    console.log('   ❌ 项目结构不完整');
  }

  // 测试2: 检查环境变量
  console.log('\n🔧 测试2: 检查环境变量配置');
  totalTests++;
  
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    if (envContent.includes('DATABASE_URL=')) {
      console.log('   ✅ DATABASE_URL 已配置');
      passedTests++;
    } else {
      console.log('   ❌ DATABASE_URL 未配置');
    }
  } catch (error) {
    console.log('   ❌ 无法读取 .env.local 文件');
  }

  // 测试3: 检查依赖安装
  console.log('\n📦 测试3: 检查依赖安装');
  totalTests++;
  
  const criticalDeps = [
    'next',
    'react', 
    'typescript',
    '@prisma/client'
  ];
  
  let depsValid = true;
  
  if (fs.existsSync('node_modules')) {
    console.log('   ✅ node_modules 目录存在');
    
    criticalDeps.forEach(dep => {
      const depPath = path.join('node_modules', dep);
      if (fs.existsSync(depPath)) {
        console.log(`   ✅ 依赖已安装: ${dep}`);
      } else {
        console.log(`   ❌ 依赖缺失: ${dep}`);
        depsValid = false;
      }
    });
  } else {
    console.log('   ❌ node_modules 目录不存在');
    depsValid = false;
  }
  
  if (depsValid) {
    passedTests++;
  }

  // 测试4: 检查 Hydration 配置
  console.log('\n💧 测试4: 检查 Hydration 配置');
  totalTests++;
  
  let hydrationValid = true;
  
  // 检查 layout.tsx
  try {
    const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
    if (layoutContent.includes('suppressHydrationWarning')) {
      console.log('   ✅ Layout hydration 配置正确');
    } else {
      console.log('   ❌ Layout hydration 配置缺失');
      hydrationValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法读取 layout.tsx');
    hydrationValid = false;
  }
  
  // 检查 theme-provider.tsx
  try {
    const themeContent = fs.readFileSync('components/theme-provider.tsx', 'utf8');
    if (themeContent.includes('mounted')) {
      console.log('   ✅ Theme provider 配置正确');
    } else {
      console.log('   ❌ Theme provider 配置缺失');
      hydrationValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法读取 theme-provider.tsx');
    hydrationValid = false;
  }
  
  // 检查 next.config.mjs
  try {
    const configContent = fs.readFileSync('next.config.mjs', 'utf8');
    if (configContent.includes('onDemandEntries')) {
      console.log('   ✅ Next.js hydration 配置正确');
    } else {
      console.log('   ❌ Next.js hydration 配置缺失');
      hydrationValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法读取 next.config.mjs');
    hydrationValid = false;
  }
  
  if (hydrationValid) {
    passedTests++;
  }

  // 测试5: 检查图片配置
  console.log('\n🖼️ 测试5: 检查图片配置');
  totalTests++;
  
  try {
    const configContent = fs.readFileSync('next.config.mjs', 'utf8');
    let imageConfigValid = true;
    
    if (configContent.includes('remotePatterns')) {
      console.log('   ✅ 图片远程模式已配置');
    } else {
      console.log('   ❌ 图片远程模式未配置');
      imageConfigValid = false;
    }
    
    if (configContent.includes('hebbkx1anhila5yf.public.blob.vercel-storage.com')) {
      console.log('   ✅ Vercel 存储域名已配置');
    } else {
      console.log('   ❌ Vercel 存储域名未配置');
      imageConfigValid = false;
    }
    
    if (configContent.includes('*.public.blob.vercel-storage.com')) {
      console.log('   ✅ 通配符域名已配置');
    } else {
      console.log('   ❌ 通配符域名未配置');
      imageConfigValid = false;
    }
    
    if (imageConfigValid) {
      passedTests++;
    }
  } catch (error) {
    console.log('   ❌ 无法读取 next.config.mjs');
  }

  // 测试6: 检查 Stagewise 开发工具集成 (修复版本)
  console.log('\n🛠️ 测试6: 检查 Stagewise 开发工具集成 (样式隔离版本)');
  totalTests++;
  
  let stagewiseValid = true;
  
  // 检查 stagewise 依赖
  const stagewisePath = path.join('node_modules', '@stagewise', 'toolbar-next');
  if (fs.existsSync(stagewisePath)) {
    console.log('   ✅ Stagewise 包已安装');
  } else {
    console.log('   ❌ Stagewise 包未安装');
    stagewiseValid = false;
  }
  
  // 检查 stagewise-init 组件
  try {
    const stagewiseInitComponent = fs.readFileSync('components/stagewise-init.tsx', 'utf8');
    if (stagewiseInitComponent.includes('StagewiseInit')) {
      console.log('   ✅ Stagewise 初始化组件已创建');
    } else {
      console.log('   ❌ Stagewise 初始化组件配置错误');
      stagewiseValid = false;
    }
    
    if (stagewiseInitComponent.includes('createRoot')) {
      console.log('   ✅ 独立 React Root 配置正确');
    } else {
      console.log('   ❌ 独立 React Root 配置缺失');
      stagewiseValid = false;
    }
    
    if (stagewiseInitComponent.includes('isolation: isolate')) {
      console.log('   ✅ CSS 样式隔离已配置');
    } else {
      console.log('   ❌ CSS 样式隔离配置缺失');
      stagewiseValid = false;
    }
    
    // 检查强化的样式隔离
    if (stagewiseInitComponent.includes('contain: layout style paint')) {
      console.log('   ✅ 强化样式隔离已配置');
    } else {
      console.log('   ❌ 强化样式隔离配置缺失');
      stagewiseValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法读取 stagewise-init.tsx');
    stagewiseValid = false;
  }
  
  // 检查主页中的集成
  try {
    const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
    if (pageContent.includes('StagewiseInit')) {
      console.log('   ✅ Stagewise 已集成到主页');
    } else {
      console.log('   ❌ Stagewise 未集成到主页');
      stagewiseValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法检查主页集成');
    stagewiseValid = false;
  }
  
  // 检查 layout.tsx 中是否已移除 stagewise
  try {
    const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
    if (!layoutContent.includes('StagewiseDevToolbar')) {
      console.log('   ✅ Layout 中已移除 Stagewise (避免样式冲突)');
    } else {
      console.log('   ⚠️ Layout 中仍包含 Stagewise (可能导致样式冲突)');
    }
  } catch (error) {
    console.log('   ❌ 无法检查 Layout');
    stagewiseValid = false;
  }
  
  // 检查全局 CSS 样式隔离
  try {
    const globalCssContent = fs.readFileSync('app/globals.css', 'utf8');
    if (globalCssContent.includes('#stagewise-container') && globalCssContent.includes('isolation: isolate')) {
      console.log('   ✅ 全局 CSS 样式隔离已配置');
    } else {
      console.log('   ❌ 全局 CSS 样式隔离配置缺失');
      stagewiseValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法检查全局 CSS 配置');
    stagewiseValid = false;
  }
  
  // 检查 webpack 配置
  try {
    const configContent = fs.readFileSync('next.config.mjs', 'utf8');
    if (configContent.includes('webpack:') && configContent.includes('@stagewise/toolbar-next')) {
      console.log('   ✅ Webpack 生产环境配置正确');
    } else {
      console.log('   ❌ Webpack 生产环境配置缺失');
      stagewiseValid = false;
    }
  } catch (error) {
    console.log('   ❌ 无法检查 Webpack 配置');
    stagewiseValid = false;
  }
  
  if (stagewiseValid) {
    passedTests++;
  }

  // 测试7: 检查关键页面文件
  console.log('\n📄 测试7: 检查关键页面文件');
  totalTests++;
  
  const keyPages = [
    'app/page.tsx',
    'app/layout.tsx',
    'app/admin/page.tsx',
    'app/standard-tools/milling/deep-ditch/page.tsx'
  ];
  
  let pagesValid = true;
  
  keyPages.forEach(page => {
    if (fs.existsSync(page)) {
      console.log(`   ✅ 页面存在: ${page}`);
    } else {
      console.log(`   ❌ 页面缺失: ${page}`);
      pagesValid = false;
    }
  });
  
  if (pagesValid) {
    passedTests++;
  }

  // 测试8: 检查关键组件文件
  console.log('\n🧩 测试8: 检查关键组件文件');
  totalTests++;
  
  const keyComponents = [
    'components/theme-provider.tsx',
    'components/client-only.tsx',
    'components/hydration-boundary.tsx',
    'components/stagewise-init.tsx',
    'data/blog-posts.json'
  ];
  
  let componentsValid = true;
  
  keyComponents.forEach(component => {
    if (fs.existsSync(component)) {
      console.log(`   ✅ 组件存在: ${component}`);
    } else {
      console.log(`   ❌ 组件缺失: ${component}`);
      componentsValid = false;
    }
  });
  
  if (componentsValid) {
    passedTests++;
  }

  // 测试9: 检查项目构建
  console.log('\n🔨 测试9: 检查项目构建');
  totalTests++;
  
  try {
    console.log('   🔄 正在执行构建测试...');
    
    // 执行构建命令
    execSync('npm run build', { 
      stdio: 'pipe',
      timeout: 120000 // 2分钟超时
    });
    
    console.log('   ✅ 项目构建成功');
    passedTests++;
  } catch (error) {
    console.log('   ❌ 项目构建失败');
    console.log(`   错误信息: ${error.message}`);
  }

  // 输出测试结果
  console.log('\n' + '='.repeat(50));
  console.log(`📊 测试结果: ${passedTests}/${totalTests} 通过`);
  
  if (passedTests === totalTests) {
    console.log('🎉 所有测试通过！项目配置正确。');
    console.log('\n🚀 可以运行以下命令启动项目:');
    console.log('   npm run dev     # 开发模式 (包含样式隔离的 Stagewise 工具栏)');
    console.log('   npm run build   # 构建项目');
    console.log('   npm run start   # 生产模式');
  } else {
    console.log('⚠️  部分测试失败，请检查上述错误信息。');
  }
  
  console.log('\n📝 访问地址:');
  console.log('   主页: http://localhost:3000');
  console.log('   管理后台: http://localhost:3000/admin');
  console.log('\n🛠️ Stagewise 开发工具 (样式修复版本):');
  console.log('   - 仅在开发模式 (npm run dev) 下可见');
  console.log('   - 使用独立的 React Root 和 CSS 隔离');
  console.log('   - 延迟初始化，避免影响主应用样式');
  console.log('   - 提供 AI 驱动的 UI 编辑功能');
}

// 运行测试
runTests(); 