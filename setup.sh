#!/bin/bash

echo "🚀 开始设置个人作品集项目..."

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

# 检查 npm 是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "📦 安装依赖包..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功！"
    echo ""
    echo "🎉 项目设置完成！"
    echo ""
    echo "📝 接下来你可以："
    echo "   1. 运行 'npm run dev' 启动开发服务器"
    echo "   2. 访问 http://localhost:3000 查看网站"
    echo "   3. 编辑 src/components/ 下的文件来自定义内容"
    echo ""
    echo "🔧 常用命令："
    echo "   npm run dev     - 启动开发服务器"
    echo "   npm run build   - 构建生产版本"
    echo "   npm run preview - 预览生产版本"
    echo ""
else
    echo "❌ 依赖安装失败，请检查网络连接或 npm 配置"
    exit 1
fi