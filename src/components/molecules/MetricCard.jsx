import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'
import ProgressBar from '../atoms/ProgressBar'
import Card from '../atoms/Card'

const MetricCard = ({ iconName, iconColorClass, title, value, unit, progressBarColorClass, delay }) => {
  return (
    <Card
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="p-6 hover:shadow-soft transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <ApperIcon name={iconName} className={`h-6 w-6 ${iconColorClass}`} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}{unit}
        </span>
      </div>
      <Text type="label" className="mb-2">{title}</Text>
      {unit === '%' ? (
        <ProgressBar progress={value} colorClass={progressBarColorClass} />
      ) : (
        <Text type="small">{value} {unit}</Text>
      )}
    </Card>
  )
}

export default MetricCard