import { motion } from 'framer-motion'

const Loader = ({ text }) => {
  return (
    &lt;motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center space-y-4"
    &gt;
      &lt;div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"&gt;&lt;/div&gt;
      &lt;p className="text-gray-600 dark:text-gray-400"&gt;{text}&lt;/p&gt;
    &lt;/motion.div&gt;
  )
}

export default Loader