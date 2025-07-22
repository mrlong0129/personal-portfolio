import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientBackground from './GradientBackground'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        console.error('提交失败:', data.error)
      }
    } catch (error) {
      console.error('网络错误:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@example.com')
    setSubmitStatus('copied')
    setTimeout(() => setSubmitStatus(''), 2000)
  }

  return (
    <section id="contact" className="contact section">
      <GradientBackground />
      
      <div className="container">
        <div className="contact-content">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              想要创造一些
              <br />
              <span className="highlight">精彩的东西</span>
              <br />
              一起合作吗？
            </h2>
          </motion.div>

          <div className="contact-main">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="您的邮箱"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="您的消息"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="star-button submit-btn"
                  disabled={isSubmitting}
                >
                  <span>✦</span>
                  {isSubmitting ? '发送中...' : '发送消息'}
                  <span>✦</span>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    消息发送成功！我会尽快回复您。
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    发送失败，请稍后重试或直接发送邮件。
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-details">
                <p className="contact-description">
                  不喜欢表单？直接通过邮箱联系我：
                </p>
                
                <button onClick={copyEmail} className="email-button">
                  contact@example.com
                  {submitStatus === 'copied' && (
                    <span className="copied-tooltip">已复制到剪贴板！</span>
                  )}
                </button>
                
                <div className="social-links">
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact