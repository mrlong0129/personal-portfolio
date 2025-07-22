import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-media">
            <div className="video-container">
              <div className="video-placeholder">
                <div className="placeholder-content">
                  <div className="avatar-placeholder"></div>
                  <p>个人照片/视频区域</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>关于我</h2>
              <p className="about-description">
                我是一名专注于前端开发的工程师，热衷于创造优雅且功能强大的用户界面。
                我专注于使用现代技术栈构建高质量的网络应用，通过简洁的代码和深思熟虑的设计
                为用户提供卓越的体验。
              </p>
              
              <div className="skills">
                <h3>技能专长</h3>
                <div className="skills-grid">
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">CSS/SCSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button onClick={scrollToContact} className="star-button">
                <span>✦</span>
                联系我
                <span>✦</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About