import { motion } from 'framer-motion'

const Card = ({ children, className = '', initial = {}, animate = {}, transition = {} }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card