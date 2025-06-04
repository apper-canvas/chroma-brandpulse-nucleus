import { motion } from 'framer-motion'
import MetricCard from '../molecules/MetricCard'

const WebsiteMetricsSection = ({ websiteData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        iconName="Smartphone"
        iconColorClass="text-primary"
        title="Mobile Score"
        value={websiteData.mobileScore}
        unit="%"
        progressBarColorClass="from-primary to-primary-light"
        delay={0.1}
      />
      <MetricCard
        iconName="Zap"
        iconColorClass="text-secondary"
        title="Load Speed"
        value={websiteData.loadSpeed}
        unit="%"
        progressBarColorClass="from-secondary to-secondary-light"
        delay={0.2}
      />
      <MetricCard
        iconName="Search"
        iconColorClass="text-accent"
        title="SEO Score"
        value={websiteData.seoScore}
        unit="%"
        progressBarColorClass="from-accent to-yellow-400"
        delay={0.3}
      />
      <MetricCard
        iconName="Users"
        iconColorClass="text-purple-500"
        title="UX Issues"
        value={websiteData.uxSuggestions?.length || 0}
        unit="Areas for improvement"
        delay={0.4}
      />
    </div>
  )
}

export default WebsiteMetricsSection