const ProgressBar = ({ progress, colorClass = 'from-primary to-primary-light' }) => {
  return (
    &lt;div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"&gt;
      &lt;div
        className={`bg-gradient-to-r ${colorClass} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${progress}%` }}
      &gt;&lt;/div&gt;
    &lt;/div&gt;
  )
}

export default ProgressBar