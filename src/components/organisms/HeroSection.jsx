import { motion } from 'framer-motion'
import Text from '../atoms/Text'
import FeatureCard from '../molecules/FeatureCard'

const HeroSection = () => {
  return (
    &lt;motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    &gt;
      &lt;div className="max-w-4xl mx-auto text-center"&gt;
        &lt;Text type="h2" className="mb-6"&gt;
          Analyze Your
          &lt;span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"&gt; Digital Presence&lt;/span&gt;
        &lt;/Text&gt;
        &lt;Text type="paragraph" className="mb-8 max-w-2xl mx-auto"&gt;
          Get instant insights into your website performance, social media presence, and competitive landscape with just one URL.
        &lt;/Text&gt;
        
        &lt;div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12"&gt;
          &lt;FeatureCard
            iconName="Globe"
            iconColorClass="from-primary/10 to-primary/5"
            title="Website Analysis"
            description="Mobile responsiveness, speed, and SEO optimization"
            delay={0.4}
          /&gt;
          &lt;FeatureCard
            iconName="Users"
            iconColorClass="from-secondary/10 to-secondary/5"
            title="Social Media Insights"
            description="Engagement metrics across all major platforms"
            delay={0.5}
          /&gt;
          &lt;FeatureCard
            iconName="BarChart3"
            iconColorClass="from-accent/10 to-accent/5"
            title="Competitor Analysis"
            description="Compare your metrics with top competitors"
            delay={0.6}
          /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/motion.section&gt;
  )
}

export default HeroSection