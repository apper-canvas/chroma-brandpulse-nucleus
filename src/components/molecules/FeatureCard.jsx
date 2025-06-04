import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'
import Card from '../atoms/Card'

const FeatureCard = ({ iconName, iconColorClass, title, description, delay }) => {
  return (
    &lt;Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 shadow-card hover:shadow-soft transition-all duration-300"
    &gt;
      &lt;div className={`bg-gradient-to-br ${iconColorClass} p-3 rounded-xl mb-4`}&gt;
        &lt;ApperIcon name={iconName} className="h-8 w-8 text-primary" /&gt; {/* iconColorClass applies to parent, not icon itself */}
      &lt;/div&gt;
      &lt;Text type="h5" className="mb-2"&gt;{title}&lt;/Text&gt;
      &lt;Text type="small" className="text-center"&gt;{description}&lt;/Text&gt;
    &lt;/Card&gt;
  )
}

export default FeatureCard