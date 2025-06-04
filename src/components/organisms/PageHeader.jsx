import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'
import ToggleSwitch from '../molecules/ToggleSwitch'

const PageHeader = ({ darkMode, toggleDarkMode }) => {
  return (
    &lt;motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 px-4 sm:px-6 lg:px-8 py-6"
    &gt;
      &lt;div className="max-w-7xl mx-auto flex items-center justify-between"&gt;
        &lt;div className="flex items-center space-x-3"&gt;
          &lt;div className="bg-gradient-to-br from-primary to-primary-dark p-2 rounded-xl shadow-soft"&gt;
            &lt;ApperIcon name="TrendingUp" className="h-8 w-8 text-white" /&gt;
          &lt;/div&gt;
          &lt;div&gt;
            &lt;Text type="h1"&gt;BrandPulse&lt;/Text&gt;
            &lt;Text type="subtitle"&gt;Digital Marketing Analytics&lt;/Text&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;ToggleSwitch
          isOn={darkMode}
          onToggle={toggleDarkMode}
          onIcon="Sun"
          offIcon="Moon"
        /&gt;
      &lt;/div&gt;
    &lt;/motion.header&gt;
  )
}

export default PageHeader