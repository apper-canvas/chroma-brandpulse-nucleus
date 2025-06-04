import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import * as websiteAnalysisService from '../services/api/websiteAnalysisService'
import * as socialMediaService from '../services/api/socialMediaPresenceService'
import * as competitorService from '../services/api/competitorService'

import HomePageTemplate from '../components/templates/HomePageTemplate'
import UrlAnalysisForm from '../components/organisms/UrlAnalysisForm'
import ReportSummary from '../components/organisms/ReportSummary'
import WebsiteMetricsSection from '../components/organisms/WebsiteMetricsSection'
import SocialMediaSection from '../components/organisms/SocialMediaSection'
import CompetitorTable from '../components/organisms/CompetitorTable'
import ExportReportModal from '../components/organisms/ExportReportModal'


const HomePage = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [currentStep, setCurrentStep] = useState('')
  const [websiteData, setWebsiteData] = useState(null)
  const [socialData, setSocialData] = useState([])
  const [competitorData, setCompetitorData] = useState([])
  const [showExportModal, setShowExportModal] = useState(false)

  const validateUrl = (inputUrl) => {
    try {
      new URL(inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`)
      return true
    } catch {
      return false
    }
  }

  const analyzeWebsite = async () => {
    if (!url.trim()) {
      toast.error('Please enter a website URL')
      return
    }

    if (!validateUrl(url)) {
      toast.error('Please enter a valid URL')
      return
    }

    setLoading(true)
    setAnalysisComplete(false)

    try {
      // Step 1: Website Analysis
      setCurrentStep('Scanning website performance...')
      const websiteResult = await websiteAnalysisService.getAnalysisByUrl(url)
      setWebsiteData(websiteResult)

      // Step 2: Social Media Detection
      setCurrentStep('Detecting social media profiles...')
      const socialResult = await socialMediaService.getByDomain(url)
      setSocialData(socialResult)

      // Step 3: Competitor Analysis
      setCurrentStep('Analyzing competitors...')
      const competitorResult = await competitorService.getByDomain(url)
      setCompetitorData(competitorResult)

      setAnalysisComplete(true)
      toast.success('Analysis completed successfully!')
    } catch (error) {
      toast.error('Analysis failed. Please try again.')
      console.error('Analysis error:', error)
    } finally {
      setLoading(false)
      setCurrentStep('')
    }
  }

  const exportReport = (format) => {
    toast.success(`Report exported as ${format.toUpperCase()}`)
    setShowExportModal(false)
  }

  const overallScore = websiteData ? Math.round((websiteData.mobileScore + websiteData.loadSpeed + websiteData.seoScore) / 3) : 0;

  return (
    &lt;HomePageTemplate&gt;
      &lt;div className="max-w-6xl mx-auto"&gt;
        &lt;UrlAnalysisForm
          url={url}
          setUrl={setUrl}
          loading={loading}
          currentStep={currentStep}
          onAnalyze={analyzeWebsite}
        /&gt;

        &lt;AnimatePresence&gt;
          {analysisComplete && websiteData && (
            &lt;motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            &gt;
              &lt;ReportSummary
                url={websiteData.url}
                date={new Date().toLocaleDateString()}
                overallScore={overallScore}
                onExportClick={() => setShowExportModal(true)}
              /&gt;

              &lt;WebsiteMetricsSection websiteData={websiteData} /&gt;

              {socialData?.length > 0 && (
                &lt;SocialMediaSection data={socialData} /&gt;
              )}

              {competitorData?.length > 0 && (
                &lt;CompetitorTable data={competitorData} /&gt;
              )}
            &lt;/motion.div&gt;
          )}
        &lt;/AnimatePresence&gt;

        &lt;ExportReportModal
          show={showExportModal}
          onClose={() => setShowExportModal(false)}
          onExport={exportReport}
        /&gt;
      &lt;/div&gt;
    &lt;/HomePageTemplate&gt;
  )
}

export default HomePage