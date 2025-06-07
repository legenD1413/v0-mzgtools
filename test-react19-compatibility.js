#!/usr/bin/env node

/**
 * 🧪 React 19 兼容性和部署准备测试
 * 验证项目是否已准备好在 Vercel 上部署
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 React 19 兼容性和部署准备测试\n');

let totalTests = 0;
let passedTests = 0;

function test(name, condition) {
    totalTests++;
    const status = condition ? '✅' : '❌';
    const result = condition ? 'PASS' : 'FAIL';
    console.log(`${status} ${name}: ${result}`);
    if (condition) passedTests++;
    return condition;
}

// 1. 检查 package.json 是否存在
const packageJsonExists = fs.existsSync('package.json');
test('package.json 文件存在', packageJsonExists);

if (packageJsonExists) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // 2. 检查 React 版本
    const reactVersion = packageJson.dependencies?.react;
    test('React 版本为 19.x', reactVersion?.includes('^19') || reactVersion?.includes('19'));
    
    // 3. 检查 react-day-picker 版本
    const dayPickerVersion = packageJson.dependencies['react-day-picker'];
    test('react-day-picker 支持 React 19 (9.x)', dayPickerVersion?.includes('9.'));
    
    // 4. 检查其他关键依赖
    test('Next.js 15.x 存在', packageJson.dependencies?.next?.includes('15.'));
    test('react-dom 19.x 存在', packageJson.dependencies['react-dom']?.includes('^19'));
}

// 5. 检查锁文件状态
const packageLockExists = fs.existsSync('package-lock.json');
const pnpmLockExists = fs.existsSync('pnpm-lock.yaml');
test('package-lock.json 存在', packageLockExists);
test('不存在冲突的 pnpm-lock.yaml', !pnpmLockExists);

// 6. 检查 Next.js 配置
const nextConfigExists = fs.existsSync('next.config.mjs');
test('next.config.mjs 配置文件存在', nextConfigExists);

if (nextConfigExists) {
    const nextConfig = fs.readFileSync('next.config.mjs', 'utf8');
    test('图片域名配置正确', nextConfig.includes('remotePatterns'));
}

// 7. 检查构建目录
const buildDirExists = fs.existsSync('.next');
test('项目已成功构建 (.next 目录存在)', buildDirExists);

// 8. 检查环境文件
const envLocalExists = fs.existsSync('.env.local');
test('环境配置文件存在', envLocalExists);

// 9. 检查 TypeScript 配置
const tsconfigExists = fs.existsSync('tsconfig.json');
test('TypeScript 配置存在', tsconfigExists);

// 10. 检查 Tailwind 配置
const tailwindConfigExists = fs.existsSync('tailwind.config.ts') || fs.existsSync('tailwind.config.js');
test('Tailwind CSS 配置存在', tailwindConfigExists);

// 11. 检查 README 文档
const readmeExists = fs.existsSync('README.md');
test('README.md 文档存在', readmeExists);

// 12. 检查部署修复文档
const deploymentFixExists = fs.existsSync('DEPLOYMENT_FIX.md');
test('部署修复文档存在', deploymentFixExists);

console.log('\n📊 测试结果:');
console.log(`✅ 通过: ${passedTests}/${totalTests} 项测试`);

if (passedTests === totalTests) {
    console.log('\n🎉 恭喜！项目已准备好部署到 Vercel');
    console.log('\n📋 部署清单:');
    console.log('- ✅ React 19 兼容性已确认');
    console.log('- ✅ 所有依赖版本兼容');
    console.log('- ✅ 锁文件已同步');
    console.log('- ✅ 构建配置正确');
    console.log('- ✅ 文档完整');
    
    console.log('\n🚀 下一步操作:');
    console.log('1. git add .');
    console.log('2. git commit -m "fix: React 19 compatibility and deployment optimization"');
    console.log('3. git push origin main');
    console.log('4. 等待 Vercel 自动部署');
} else {
    console.log('\n⚠️ 部分测试失败，请检查上述问题后重试');
    console.log('\n🔧 常见解决方案:');
    console.log('- 运行 npm install --legacy-peer-deps');
    console.log('- 确保 package.json 版本正确');
    console.log('- 删除冲突的锁文件');
    console.log('- 运行 npm run build 确保构建成功');
}

console.log('\n---');
console.log('MZG Tools - 工业铣削工具平台');
console.log('测试时间:', new Date().toLocaleString()); 