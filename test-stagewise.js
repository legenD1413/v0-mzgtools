const fs = require('fs');
const path = require('path');

console.log('🛠️ Stagewise 功能测试');
console.log('='.repeat(40));

// 检查 stagewise 包是否安装
const stagewisePath = path.join('node_modules', '@stagewise', 'toolbar-next');
if (fs.existsSync(stagewisePath)) {
  console.log('✅ Stagewise 包已正确安装');
  
  // 检查包的版本
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(stagewisePath, 'package.json'), 'utf8'));
    console.log(`   版本: ${packageJson.version}`);
  } catch (error) {
    console.log('   ⚠️ 无法读取包版本信息');
  }
} else {
  console.log('❌ Stagewise 包未安装');
  process.exit(1);
}

// 检查初始化组件
if (fs.existsSync('components/stagewise-init.tsx')) {
  console.log('✅ Stagewise 初始化组件存在');
  
  const content = fs.readFileSync('components/stagewise-init.tsx', 'utf8');
  
  // 检查关键配置
  const checks = [
    { name: '开发模式检查', pattern: 'NODE_ENV === \'development\'' },
    { name: '动态导入', pattern: 'import(\'@stagewise/toolbar-next\')' },
    { name: 'React Root 创建', pattern: 'createRoot' },
    { name: '容器创建', pattern: 'stagewise-container' },
    { name: '样式隔离', pattern: 'isolation: isolate' },
    { name: '指针事件', pattern: 'pointerEvents: \'auto\'' }
  ];
  
  checks.forEach(check => {
    if (content.includes(check.pattern)) {
      console.log(`   ✅ ${check.name}`);
    } else {
      console.log(`   ❌ ${check.name} - 缺失`);
    }
  });
} else {
  console.log('❌ Stagewise 初始化组件不存在');
}

// 检查全局样式配置
if (fs.existsSync('app/globals.css')) {
  console.log('✅ 全局样式文件存在');
  
  const content = fs.readFileSync('app/globals.css', 'utf8');
  
  if (content.includes('#stagewise-container')) {
    console.log('   ✅ Stagewise 容器样式已配置');
  } else {
    console.log('   ❌ Stagewise 容器样式缺失');
  }
} else {
  console.log('❌ 全局样式文件不存在');
}

// 检查主页集成
if (fs.existsSync('app/page.tsx')) {
  console.log('✅ 主页文件存在');
  
  const content = fs.readFileSync('app/page.tsx', 'utf8');
  
  if (content.includes('StagewiseInit')) {
    console.log('   ✅ Stagewise 已集成到主页');
  } else {
    console.log('   ❌ Stagewise 未集成到主页');
  }
  
  if (content.includes('main-app-container')) {
    console.log('   ✅ 主应用容器保护已配置');
  } else {
    console.log('   ❌ 主应用容器保护缺失');
  }
} else {
  console.log('❌ 主页文件不存在');
}

console.log('\n' + '='.repeat(40));
console.log('📋 使用说明:');
console.log('1. 确保开发服务器正在运行: npm run dev');
console.log('2. 在浏览器中打开: http://localhost:3000');
console.log('3. 等待0.8秒让 Stagewise 工具栏加载');
console.log('4. 查看浏览器控制台的加载消息');
console.log('5. 尝试点击页面元素，应该能看到 Stagewise 的选择功能');

console.log('\n🔍 故障排除:');
console.log('- 如果工具栏不显示，检查浏览器控制台是否有错误');
console.log('- 确认页面右下角有蓝色的"开发模式"提示');
console.log('- 确认控制台显示"✅ Stagewise 工具栏已成功加载"');
console.log('- 如果仍有问题，尝试刷新页面或重启开发服务器'); 