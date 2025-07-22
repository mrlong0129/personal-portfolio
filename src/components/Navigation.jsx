import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>作品集</span>
        </div>
        
        <ul className="nav-menu">
          <li>
            <button onClick={() => scrollToSection('hero')}>首页</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>关于</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>项目</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>联系</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation