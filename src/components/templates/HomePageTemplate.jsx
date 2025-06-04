import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../organisms/PageHeader'
import HeroSection from '../organisms/HeroSection'
import PageFooter from '../organisms/PageFooter'

const HomePageTemplate = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }
return (
    <div className={`min-h-screen relative grain-texture ${darkMode ? 'dark' : ''}`}>
      <PageHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
      >
        {children}
      </motion.section>

      <PageFooter />
    </div>
  )
}

export default HomePageTemplate