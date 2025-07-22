# 部署指南

本文档介绍如何将个人作品集网站部署到不同的平台。

## 前端部署

### 1. Vercel 部署（推荐）

Vercel 是部署 React 应用的最佳选择之一。

#### 步骤：

1. **准备代码**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **在 Vercel 部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 配置构建设置：
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - 点击 "Deploy"

3. **自定义域名**（可选）
   - 在项目设置中添加自定义域名
   - 配置 DNS 记录

### 2. Netlify 部署

#### 步骤：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到 Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 拖拽 `dist` 文件夹到部署区域
   - 或连接 GitHub 仓库自动部署

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `dist`

### 3. GitHub Pages 部署

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **修改 package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
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

## 后端部署

### 1. Railway 部署

Railway 是部署 Node.js 应用的简单选择。

#### 步骤：

1. **准备后端代码**
   ```bash
   cd server
   npm install
   ```

2. **创建 railway.json**
   ```json
   {
     "$schema": "https://railway.app/railway.schema.json",
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

3. **部署到 Railway**
   - 访问 [railway.app](https://railway.app)
   - 连接 GitHub 仓库
   - 选择 server 目录
   - 配置环境变量

### 2. Heroku 部署

1. **创建 Procfile**
   ```
   web: node server.js
   ```

2. **部署命令**
   ```bash
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

### 3. DigitalOcean App Platform

1. **创建应用**
   - 连接 GitHub 仓库
   - 选择 Node.js 运行时
   - 配置构建和运行命令

2. **环境变量配置**
   - 在控制面板中添加环境变量
   - 配置数据库连接

## 数据库部署

### 1. MongoDB Atlas（推荐）

1. **创建集群**
   - 访问 [mongodb.com/atlas](https://mongodb.com/atlas)
   - 创建免费集群
   - 配置网络访问和数据库用户

2. **获取连接字符串**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

3. **配置环境变量**
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

### 2. PostgreSQL (Supabase)

1. **创建项目**
   - 访问 [supabase.com](https://supabase.com)
   - 创建新项目

2. **获取连接信息**
   - 在项目设置中找到数据库连接信息

## 环境变量配置

### 前端环境变量

创建 `.env` 文件：
```bash
VITE_API_URL=https://your-api-domain.com
VITE_CONTACT_EMAIL=your-email@example.com
```

### 后端环境变量

在部署平台配置以下环境变量：
```bash
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact@gmail.com
JWT_SECRET=your-super-secret-key
FRONTEND_URL=https://your-frontend-domain.com
```

## SSL 证书

大多数现代部署平台（Vercel、Netlify、Railway）都会自动提供 SSL 证书。

## 性能优化

### 1. 图片优化
- 使用 WebP 格式
- 实现懒加载
- 压缩图片文件

### 2. 代码分割
```javascript
// 使用 React.lazy 进行代码分割
const About = React.lazy(() => import('./components/About'))
```

### 3. CDN 配置
- 使用 Cloudflare 或其他 CDN 服务
- 配置缓存策略

## 监控和分析

### 1. Google Analytics
```html
<!-- 在 index.html 中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 2. 错误监控
- 使用 Sentry 进行错误追踪
- 配置日志记录

## 备份策略

1. **代码备份**
   - 使用 Git 版本控制
   - 定期推送到远程仓库

2. **数据库备份**
   - 配置自动备份
   - 定期下载备份文件

## 域名配置

1. **购买域名**
   - 推荐：Namecheap、GoDaddy、阿里云

2. **DNS 配置**
   ```
   A     @     your-server-ip
   CNAME www   your-domain.com
   ```

3. **邮箱配置**
   - 配置 MX 记录
   - 设置邮件转发

## 安全考虑

1. **HTTPS 强制**
2. **环境变量保护**
3. **API 速率限制**
4. **输入验证**
5. **CORS 配置**

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本
   - 清除 npm 缓存：`npm cache clean --force`

2. **API 连接失败**
   - 检查 CORS 配置
   - 验证环境变量

3. **数据库连接问题**
   - 检查连接字符串
   - 验证网络访问权限

### 调试工具

1. **浏览器开发者工具**
2. **网络面板检查 API 请求**
3. **控制台查看错误信息**

## 更新和维护

1. **定期更新依赖**
   ```bash
   npm update
   npm audit fix
   ```

2. **监控性能**
   - 使用 Lighthouse 检查性能
   - 监控加载时间

3. **备份和恢复**
   - 定期备份数据
   - 测试恢复流程

---

如有问题，请查看各平台的官方文档或联系技术支持。