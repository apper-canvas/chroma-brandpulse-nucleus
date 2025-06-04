import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'
import ProgressBar from '../atoms/ProgressBar'
import Card from '../atoms/Card'

const MetricCard = ({ iconName, iconColorClass, title, value, unit, progressBarColorClass, delay }) => {
  return (
    &lt;Card
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="p-6 hover:shadow-soft transition-all duration-300"
    &gt;
      &lt;div className="flex items-center justify-between mb-4"&gt;
        &lt;ApperIcon name={iconName} className={`h-6 w-6 ${iconColorClass}`} /&gt;
        &lt;span className="text-2xl font-bold text-gray-900 dark:text-white"&gt;
          {value}{unit}
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;Text type="label" className="mb-2"&gt;{title}&lt;/Text&gt;
      {unit === '%' ? (
        &lt;ProgressBar progress={value} colorClass={progressBarColorClass} /&gt;
      ) : (
        &lt;Text type="small"&gt;{value} {unit}&lt;/Text&gt;
      )}
    &lt;/Card&gt;
  )
}

export default MetricCard