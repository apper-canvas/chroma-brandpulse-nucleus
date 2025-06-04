import { motion } from 'framer-motion'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Loader from '../atoms/Loader'
import Text from '../atoms/Text'
import Card from '../atoms/Card'

const UrlAnalysisForm = ({ url, setUrl, loading, currentStep, onAnalyze }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 sm:p-12 mb-12 shadow-soft"
    >
      <div className="max-w-2xl mx-auto text-center">
        <Text type="h3" className="mb-6">
          Start Your Analysis
        </Text>
        <div className="relative mb-6">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website URL (e.g., example.com)"
            disabled={loading}
          />
          <Button
            onClick={onAnalyze}
            disabled={loading || !url.trim()}
            className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            iconName={loading ? "Loader2" : "Search"}
          >
            {loading ? '' : 'Analyze'}
          </Button>
        </div>
        
        {loading && <Loader text={currentStep} />}
      </div>
    </Card>
  )
}

export default UrlAnalysisForm