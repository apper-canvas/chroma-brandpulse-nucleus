import { useState } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '../components/ApperIcon'
import MainFeature from '../components/MainFeature'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen relative grain-texture ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-primary to-primary-dark p-2 rounded-xl shadow-soft">
              <ApperIcon name="TrendingUp" className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">BrandPulse</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Digital Marketing Analytics</p>
            </div>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-card hover:shadow-soft transition-all duration-300 group"
          >
            <ApperIcon 
              name={darkMode ? "Sun" : "Moon"} 
              className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors" 
            />
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Analyze Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Presence</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant insights into your website performance, social media presence, and competitive landscape with just one URL.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl mb-4">
                <ApperIcon name="Globe" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Website Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Mobile responsiveness, speed, and SEO optimization</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-3 rounded-xl mb-4">
                <ApperIcon name="Users" className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Social Media Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Engagement metrics across all major platforms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-3 rounded-xl mb-4">
                <ApperIcon name="BarChart3" className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Competitor Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Compare your metrics with top competitors</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Feature Component */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
      >
        <MainFeature />
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 mt-20 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 BrandPulse. Empowering digital marketing decisions.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <ApperIcon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <ApperIcon name="Linkedin" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <ApperIcon name="Github" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home