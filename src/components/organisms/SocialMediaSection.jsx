import { motion } from 'framer-motion'
import Text from '../atoms/Text'
import SocialPlatformCard from '../molecules/SocialPlatformCard'
import Card from '../atoms/Card'

const SocialMediaSection = ({ data }) => {
  return (
    &lt;Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 sm:p-8"
    &gt;
      &lt;Text type="h4" className="mb-6"&gt;
        Social Media Presence
      &lt;/Text&gt;
      &lt;div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
        {data.map((platform) => (
          &lt;SocialPlatformCard
            key={platform.platform}
            platform={platform.platform}
            followers={platform.followers}
            engagementRate={platform.engagementRate}
          /&gt;
        ))}
      &lt;/div&gt;
    &lt;/Card&gt;
  )
}

export default SocialMediaSection