# 🌟 个人作品集网站

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-username.github.io/personal-portfolio)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## ✨ 特性

- 🎨 **现代化设计** - 深色主题，渐变背景，优雅动画
- 📱 **完全响应式** - 适配桌面、平板、手机等所有设备
- ⚡ **高性能** - Vite 构建，快速加载，流畅体验
- 🌟 **动画效果** - Framer Motion 驱动的流畅动画
- 🎯 **粒子背景** - Canvas 实现的动态粒子系统
- 📧 **联系表单** - 完整的前后端表单处理
- 🚀 **易于部署** - 支持 Vercel、Netlify、GitHub Pages

## 🖥️ 预览

### 桌面端
![Desktop Preview](https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Desktop+Preview)

### 移动端
![Mobile Preview](https://via.placeholder.com/300x600/1a1a1a/ffffff?text=Mobile+Preview)

## 🛠️ 技术栈

### 前端
- **React 18** - 现代化用户界面库
- **Vite** - 下一代前端构建工具
- **Framer Motion** - 生产就绪的动画库
- **CSS3** - 现代样式和布局
- **Canvas API** - 粒子背景效果

### 后端（可选）
- **Node.js + Express** - 服务器框架
- **MongoDB** - 数据库存储
- **Nodemailer** - 邮件发送服务

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装和运行

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/personal-portfolio.git
   cd personal-portfolio
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   ```
   http://localhost:3000
   ```

### 构建生产版本

```bash
npm run build
npm run preview
```

## 📁 项目结构

```
personal-portfolio/
├── public/                 # 静态资源
│   └── favicon.svg        # 网站图标
├── src/                   # 源代码
│   ├── components/        # React 组件
│   │   ├── Hero.jsx      # 首页英雄区域
│   │   ├── About.jsx     # 关于我部分
│   │   ├── Projects.jsx  # 项目展示
│   │   ├── Contact.jsx   # 联系表单
│   │   ├── Navigation.jsx # 导航栏
│   │   └── GradientBackground.jsx # 背景效果
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx          # 应用入口
│   └── index.css         # 全局样式
├── server/               # 后端服务器（可选）
├── package.json          # 项目配置
├── vite.config.js        # Vite 配置
└── README.md             # 项目说明
```

## 🎨 自定义指南

### 修改个人信息

1. **首页信息** - 编辑 `src/components/Hero.jsx`
2. **关于我** - 编辑 `src/components/About.jsx`
3. **项目展示** - 编辑 `src/components/Projects.jsx`
4. **联系信息** - 编辑 `src/components/Contact.jsx`

### 添加新项目

在 `src/components/Projects.jsx` 中的 `projects` 数组添加：

```javascript
{
  id: 4,
  title: '项目名称',
  description: '项目描述',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: '/path/to/image',
  link: 'https://project-link.com'
}
```

### 自定义样式

每个组件都有对应的 CSS 文件，可以根据需要修改：
- 颜色主题
- 字体样式
- 布局间距
- 动画效果

## 🌐 部署

### GitHub Pages

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **修改 package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/personal-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

### Vercel（推荐）

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### Netlify

1. 构建项目：`npm run build`
2. 将 `dist` 文件夹拖拽到 [Netlify](https://netlify.com)
3. 或连接 GitHub 仓库自动部署

## 📧 后端配置（可选）

如果需要联系表单功能，可以配置后端服务：

1. **进入服务器目录**
   ```bash
   cd server
   npm install
   ```

2. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件添加你的配置
   ```

3. **启动服务器**
   ```bash
   npm start
   ```

## 🔧 开发脚本

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产版本
npm run deploy   # 部署到 GitHub Pages
```

## 📱 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动端浏览器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- 设计灵感来源于 [David Haz](https://davidhaz.com)
- 动画效果由 [Framer Motion](https://www.framer.com/motion/) 提供
- 图标来源于 [Heroicons](https://heroicons.com/)

## 📞 联系方式

- 📧 Email: your-email@example.com
- 🐙 GitHub: [@your-username](https://github.com/your-username)
- 💼 LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
