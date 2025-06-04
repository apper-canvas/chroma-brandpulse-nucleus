import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'

const SocialPlatformCard = ({ platform, followers, engagementRate }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-card transition-all duration-300">
      <div className="flex items-center space-x-3 mb-3">
        <ApperIcon name="Users" className="h-5 w-5 text-primary" />
        <Text type="span" className="font-semibold text-gray-900 dark:text-white">
          {platform}
        </Text>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Text type="small" className="text-gray-500">Followers</Text>
          <Text type="span" className="font-medium text-gray-900 dark:text-white">
            {followers?.toLocaleString() || 'N/A'}
          </Text>
        </div>
        <div className="flex justify-between">
          <Text type="small" className="text-gray-500">Engagement</Text>
          <Text type="span" className="font-medium text-gray-900 dark:text-white">
            {engagementRate}%
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SocialPlatformCard