const Text = ({ type, children, className = '' }) => {
  switch (type) {
    case 'h1':
      return &lt;h1 className={`text-2xl font-bold text-gray-900 dark:text-white ${className}`}&gt;{children}&lt;/h1&gt;
    case 'h2':
      return &lt;h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white ${className}`}&gt;{children}&lt;/h2&gt;
    case 'h3':
      return &lt;h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white ${className}`}&gt;{children}&lt;/h3&gt;
    case 'h4':
      return &lt;h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}&gt;{children}&lt;/h3&gt;
    case 'h5':
      return &lt;h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}&gt;{children}&lt;/h3&gt;
    case 'subtitle':
      return &lt;p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}&gt;{children}&lt;/p&gt;
    case 'paragraph':
      return &lt;p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 ${className}`}&gt;{children}&lt;/p&gt;
    case 'small':
      return &lt;p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}&gt;{children}&lt;/p&gt;
    case 'label':
      return &lt;span className={`text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ${className}`}&gt;{children}&lt;/span&gt;
    default:
      return &lt;span className={className}&gt;{children}&lt;/span&gt;
  }
}

export default Text