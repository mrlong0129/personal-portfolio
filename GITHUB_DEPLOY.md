# 🚀 GitHub 部署指南

## 📋 部署前准备

### 1. 确保项目完整
```bash
# 检查项目结构
ls -la personal-portfolio/
```

### 2. 测试本地运行
```bash
cd personal-portfolio
npm install
npm run dev
```

## 🔧 GitHub 仓库设置

### 1. 创建 GitHub 仓库
1. 访问 [GitHub](https://github.com)
2. 点击 "New repository"
3. 仓库名称：`personal-portfolio`
4. 设置为 Public
5. 不要初始化 README（我们已经有了）

### 2. 本地 Git 初始化
```bash
cd personal-portfolio

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Personal portfolio website"

# 添加远程仓库（替换 your-username）
git remote add origin https://github.com/your-username/personal-portfolio.git

# 推送到 GitHub
git push -u origin main
```

## 🌐 GitHub Pages 部署

### 方法一：自动部署（推荐）

项目已包含 GitHub Actions 配置文件 `.github/workflows/deploy.yml`，会自动部署。

1. **推送代码后自动触发**
2. **构建完成后自动部署**
3. **访问：** `https://your-username.github.io/personal-portfolio`

### 方法二：手动部署

```bash
# 安装 gh-pages（如果还没安装）
npm install --save-dev gh-pages

# 构建并部署
npm run deploy
```

### 3. 启用 GitHub Pages

1. 进入仓库设置 (Settings)
2. 滚动到 "Pages" 部分
3. Source 选择 "Deploy from a branch"
4. Branch 选择 `gh-pages`
5. 点击 "Save"

## ⚙️ 自定义配置

### 1. 修改仓库信息

在 `package.json` 中更新：
```json
{
  "homepage": "https://your-username.github.io/personal-portfolio"
}
```

### 2. 修改 README 中的链接

更新 `README.md` 中的：
- Demo 链接
- GitHub 用户名
- 联系信息

### 3. 自定义域名（可选）

如果有自己的域名：

1. 在 `public/` 目录创建 `CNAME` 文件：
```
your-domain.com
```

2. 在域名提供商设置 DNS：
```
CNAME  www  your-username.github.io
A      @    185.199.108.153
A      @    185.199.109.153
A      @    185.199.110.153
A      @    185.199.111.153
```

## 🔍 部署验证

### 1. 检查部署状态
- 访问仓库的 "Actions" 标签
- 查看部署工作流状态
- 确认构建成功

### 2. 访问网站
- 打开 `https://your-username.github.io/personal-portfolio`
- 检查所有功能是否正常
- 测试响应式设计

### 3. 性能检查
使用以下工具检查网站性能：
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🛠️ 常见问题解决

### 问题 1: 404 错误
**原因：** 路径配置问题
**解决：** 检查 `vite.config.js` 中的 base 配置

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/',
  server: {
    port: 3000
  }
})
```

### 问题 2: 样式丢失
**原因：** 资源路径问题
**解决：** 确保所有资源使用相对路径

### 问题 3: 构建失败
**原因：** 依赖问题
**解决：** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 问题 4: 部署后白屏
**原因：** JavaScript 错误
**解决：** 
1. 打开浏览器开发者工具
2. 查看 Console 错误信息
3. 修复相关问题后重新部署

## 📱 移动端测试

部署后务必测试移动端：

1. **Chrome DevTools**
   - F12 → 设备模拟器
   - 测试不同屏幕尺寸

2. **真机测试**
   - iPhone Safari
   - Android Chrome
   - 平板设备

## 🔄 更新部署

### 日常更新流程
```bash
# 修改代码后
git add .
git commit -m "Update: 描述修改内容"
git push origin main

# 自动触发部署
```

### 紧急修复
```bash
# 快速修复并部署
git add .
git commit -m "Hotfix: 修复紧急问题"
git push origin main
```

## 📊 监控和分析

### 1. Google Analytics
在 `index.html` 中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. 错误监控
可以集成 Sentry 进行错误追踪：
```bash
npm install @sentry/react
```

## 🎯 SEO 优化

### 1. 添加 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-username.github.io/personal-portfolio/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. 添加 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://your-username.github.io/personal-portfolio/sitemap.xml
```

## 🔐 安全设置

### 1. 环境变量
对于敏感信息，使用 GitHub Secrets：
1. 仓库设置 → Secrets and variables → Actions
2. 添加必要的环境变量
3. 在 workflow 中使用 `${{ secrets.SECRET_NAME }}`

### 2. 依赖安全
定期检查依赖安全：
```bash
npm audit
npm audit fix
```

## 📈 性能优化

### 1. 图片优化
- 使用 WebP 格式
- 添加懒加载
- 压缩图片文件

### 2. 代码优化
- 启用代码分割
- 移除未使用的代码
- 压缩 CSS 和 JS

## 🎉 部署完成检查清单

- [ ] 代码推送到 GitHub
- [ ] GitHub Pages 设置完成
- [ ] 网站可以正常访问
- [ ] 所有页面功能正常
- [ ] 移动端适配良好
- [ ] 性能指标达标
- [ ] SEO 基础设置完成
- [ ] 联系表单测试通过
- [ ] 社交链接正确
- [ ] 项目信息更新

---

🎊 **恭喜！你的个人作品集网站已成功部署到 GitHub Pages！**

现在你可以：
- 分享你的作品集链接
- 在简历中添加网站地址
- 在社交媒体展示你的作品
- 持续更新和优化网站内容