import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'

const SocialPlatformCard = ({ platform, followers, engagementRate }) => {
  return (
    &lt;div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-card transition-all duration-300"&gt;
      &lt;div className="flex items-center space-x-3 mb-3"&gt;
        &lt;ApperIcon name="Users" className="h-5 w-5 text-primary" /&gt;
        &lt;Text type="span" className="font-semibold text-gray-900 dark:text-white"&gt;
          {platform}
        &lt;/Text&gt;
      &lt;/div&gt;
      &lt;div className="space-y-2"&gt;
        &lt;div className="flex justify-between"&gt;
          &lt;Text type="small" className="text-gray-500"&gt;Followers&lt;/Text&gt;
          &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
            {followers?.toLocaleString() || 'N/A'}
          &lt;/Text&gt;
        &lt;/div&gt;
        &lt;div className="flex justify-between"&gt;
          &lt;Text type="small" className="text-gray-500"&gt;Engagement&lt;/Text&gt;
          &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
            {engagementRate}%
          &lt;/Text&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

export default SocialPlatformCard