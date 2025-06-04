import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'

const PageFooter = () => {
  return (
    &lt;footer className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 mt-20 border-t border-gray-200 dark:border-gray-700"&gt;
      &lt;div className="max-w-7xl mx-auto"&gt;
        &lt;div className="flex flex-col sm:flex-row items-center justify-between"&gt;
          &lt;Text type="small" className="mb-4 sm:mb-0 text-gray-600 dark:text-gray-400"&gt;
            © 2024 BrandPulse. Empowering digital marketing decisions.
          &lt;/Text&gt;
          &lt;div className="flex items-center space-x-6"&gt;
            &lt;a href="#" className="text-gray-500 hover:text-primary transition-colors"&gt;
              &lt;ApperIcon name="Twitter" className="h-5 w-5" /&gt;
            &lt;/a&gt;
            &lt;a href="#" className="text-gray-500 hover:text-primary transition-colors"&gt;
              &lt;ApperIcon name="Linkedin" className="h-5 w-5" /&gt;
            &lt;/a&gt;
            &lt;a href="#" className="text-gray-500 hover:text-primary transition-colors"&gt;
              &lt;ApperIcon name="Github" className="h-5 w-5" /&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/footer&gt;
  )
}

export default PageFooter