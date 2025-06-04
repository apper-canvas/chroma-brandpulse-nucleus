const Text = ({ type, children, className = '' }) => {
  switch (type) {
    case 'h1':
      return <h1 className={`text-2xl font-bold text-gray-900 dark:text-white ${className}`}>{children}</h1>
    case 'h2':
      return <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white ${className}`}>{children}</h2>
    case 'h3':
      return <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white ${className}`}>{children}</h3>
    case 'h4':
      return <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>{children}</h3>
    case 'h5':
      return <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}>{children}</h3>
    case 'subtitle':
      return <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>
    case 'paragraph':
      return <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
    case 'small':
      return <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>
    case 'label':
      return <span className={`text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ${className}`}>{children}</span>
    default:
      return <span className={className}>{children}</span>
  }
}

export default Text