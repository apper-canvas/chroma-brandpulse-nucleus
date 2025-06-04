import { motion } from 'framer-motion'
import Text from '../atoms/Text'
import SocialPlatformCard from '../molecules/SocialPlatformCard'
import Card from '../atoms/Card'

const SocialMediaSection = ({ data }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 sm:p-8"
    >
      <Text type="h4" className="mb-6">
        Social Media Presence
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((platform) => (
          <SocialPlatformCard
            key={platform.platform}
            platform={platform.platform}
            followers={platform.followers}
            engagementRate={platform.engagementRate}
          />
        ))}
      </div>
    </Card>
  )
}

export default SocialMediaSection