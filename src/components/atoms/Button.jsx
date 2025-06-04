import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root

const Button = ({ children, onClick, className = '', disabled = false, iconName, type = 'button' }) => {
  const iconClass = iconName ? (children ? 'h-4 w-4' : 'h-5 w-5') : ''
  const textClass = iconName && children ? 'hidden sm:inline' : ''
  const buttonContent = (
    &lt;&gt;
      {iconName && (
        &lt;ApperIcon name={iconName} className={`${iconClass} ${children ? '' : 'mx-auto'}`} /&gt;
      )}
      {children && &lt;span className={textClass}&gt;{children}&lt;/span&gt;}
    &lt;/&gt;
  )

  return (
    &lt;motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 ${className}`}
      disabled={disabled}
      type={type}
    &gt;
      {buttonContent}
    &lt;/motion.button&gt;
  )
}

export default Button