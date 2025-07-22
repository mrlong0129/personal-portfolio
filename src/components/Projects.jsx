import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '电商平台',
      description: '现代化的电商解决方案，具有完整的购物车、支付和用户管理功能',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      id: 2,
      title: '任务管理应用',
      description: '直观的项目管理工具，支持团队协作和实时更新',
      tech: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      id: 3,
      title: '数据可视化仪表板',
      description: '交互式数据分析平台，提供实时图表和深度洞察',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2>精选项目</h2>
          <p>以下是我最近完成的一些项目，展示了我在不同技术栈上的能力</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>项目截图</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.link} className="project-link">
                    查看项目 →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects