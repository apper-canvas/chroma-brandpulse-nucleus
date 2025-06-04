const Input = ({ value, onChange, placeholder, disabled = false, type = 'text', className = '' }) => {
  return (
    &lt;input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-14 px-6 pr-32 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${className}`}
      disabled={disabled}
    /&gt;
  )
}

export default Input