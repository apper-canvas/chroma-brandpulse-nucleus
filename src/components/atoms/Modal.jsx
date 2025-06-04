import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ show, onClose, children }) => {
  return (
    &lt;AnimatePresence&gt;
      {show && (
        &lt;motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        &gt;
          &lt;motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glassmorphic rounded-2xl p-8 max-w-md w-full dark:bg-gray-800" // Added dark mode bg
            onClick={(e) => e.stopPropagation()}
          &gt;
            {children}
          &lt;/motion.div&gt;
        &lt;/motion.div&gt;
      )}
    &lt;/AnimatePresence&gt;
  )
}

export default Modal