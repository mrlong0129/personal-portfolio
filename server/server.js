import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 中间件
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))

// 速率限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 分钟
  max: 100 // 限制每个IP 15分钟内最多100个请求
})
app.use(limiter)

// 联系表单速率限制
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 小时
  max: 5 // 每小时最多5次联系表单提交
})

// MongoDB 连接
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB 连接成功'))
    .catch(err => console.error('❌ MongoDB 连接失败:', err))
}

// 联系消息模型
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  ip: String,
  userAgent: String
})

const Contact = mongoose.model('Contact', ContactSchema)

// 邮件配置
const transporter = nodemailer.createTransporter({
  service: 'gmail', // 或其他邮件服务
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// API 路由
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// 联系表单提交
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // 验证输入
    if (!name || !email || !message) {
      return res.status(400).json({ error: '所有字段都是必填的' })
    }

    // 保存到数据库
    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({
        name,
        email,
        message,
        ip: req.ip,
        userAgent: req.get('User-Agent')
      })
      await contact.save()
    }

    // 发送邮件通知
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `作品集联系表单 - ${name}`,
        html: `
          <h3>新的联系表单提交</h3>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>邮箱:</strong> ${email}</p>
          <p><strong>消息:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>提交时间: ${new Date().toLocaleString('zh-CN')}</small></p>
        `
      }

      await transporter.sendMail(mailOptions)
    }

    res.json({ success: true, message: '消息发送成功！' })
  } catch (error) {
    console.error('联系表单错误:', error)
    res.status(500).json({ error: '服务器错误，请稍后重试' })
  }
})

// 获取联系消息（管理员功能）
app.get('/api/contacts', async (req, res) => {
  try {
    // 这里应该添加身份验证
    if (mongoose.connection.readyState === 1) {
      const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(50)
      res.json(contacts)
    } else {
      res.status(503).json({ error: '数据库未连接' })
    }
  } catch (error) {
    console.error('获取联系消息错误:', error)
    res.status(500).json({ error: '服务器错误' })
  }
})

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: '服务器内部错误' })
})

// 404 处理
app.use((req, res) => {
  res.status(404).json({ error: '接口不存在' })
})

app.listen(PORT, () => {
  console.log(`🚀 服务器运行在端口 ${PORT}`)
  console.log(`📧 邮件服务: ${process.env.EMAIL_USER ? '已配置' : '未配置'}`)
  console.log(`🗄️  数据库: ${process.env.MONGODB_URI ? '已配置' : '未配置'}`)
})