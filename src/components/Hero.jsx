import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import GradientBackground from './GradientBackground'
import './Hero.css'

const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero section">
      <GradientBackground />
      
      <div className="hero-content">
        <motion.div
          ref={textRef}
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>
            <span className="greeting">你好，我是</span>
            <span className="name">创意开发者</span>
          </h1>
          
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            专注于前端工程，通过简洁的代码和深思熟虑的设计
            <br />
            构建高质量的网络体验
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button onClick={scrollToAbout} className="star-button">
              <span>✦</span>
              了解更多
              <span>✦</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>向下滚动</span>
      </div>
    </section>
  )
}

export default Hero