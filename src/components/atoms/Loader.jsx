import { motion } from 'framer-motion'

const Loader = ({ text }) => {
return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center space-y-4"
    >
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </motion.div>
  )
}

export default Loader