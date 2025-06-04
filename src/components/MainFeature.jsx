import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'
import * as websiteAnalysisService from '../services/api/websiteAnalysisService'
import * as socialMediaService from '../services/api/socialMediaPresenceService'
import * as competitorService from '../services/api/competitorService'

const MainFeature = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [currentStep, setCurrentStep] = useState('')
  const [websiteData, setWebsiteData] = useState(null)
  const [socialData, setSocialData] = useState([])
  const [competitorData, setCompetitorData] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [showExportModal, setShowExportModal] = useState(false)

  const validateUrl = (url) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
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

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedCompetitors = [...competitorData].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    const aVal = sortConfig.key.includes('.') 
      ? sortConfig.key.split('.').reduce((obj, key) => obj?.[key], a)
      : a[sortConfig.key]
    const bVal = sortConfig.key.includes('.') 
      ? sortConfig.key.split('.').reduce((obj, key) => obj?.[key], b)
      : b[sortConfig.key]

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const exportReport = (format) => {
    toast.success(`Report exported as ${format.toUpperCase()}`)
    setShowExportModal(false)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* URL Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8 sm:p-12 mb-12"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Start Your Analysis
          </h3>
          <div className="relative mb-6">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL (e.g., example.com)"
              className="w-full h-14 px-6 pr-32 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              disabled={loading}
            />
            <button
              onClick={analyzeWebsite}
              disabled={loading || !url.trim()}
              className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <ApperIcon name="Loader2" className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <ApperIcon name="Search" className="h-4 w-4" />
                  <span className="hidden sm:inline">Analyze</span>
                </>
              )}
            </button>
          </div>
          
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-gray-600 dark:text-gray-400">{currentStep}</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Analysis Results */}
      <AnimatePresence>
        {analysisComplete && websiteData && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Report Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Analysis Report
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {websiteData.url} • {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {Math.round((websiteData.mobileScore + websiteData.loadSpeed + websiteData.seoScore) / 3)}
                    </div>
                    <div className="text-sm text-gray-500">Overall Score</div>
                  </div>
                  <button
                    onClick={() => setShowExportModal(true)}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ApperIcon name="Download" className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Website Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <ApperIcon name="Smartphone" className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {websiteData.mobileScore}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Mobile Score
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-500"
                    style={{ width: `${websiteData.mobileScore}%` }}
                  ></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <ApperIcon name="Zap" className="h-6 w-6 text-secondary" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {websiteData.loadSpeed}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Load Speed
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-secondary to-secondary-light h-2 rounded-full transition-all duration-500"
                    style={{ width: `${websiteData.loadSpeed}%` }}
                  ></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <ApperIcon name="Search" className="h-6 w-6 text-accent" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {websiteData.seoScore}%
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  SEO Score
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent to-yellow-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${websiteData.seoScore}%` }}
                  ></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <ApperIcon name="Users" className="h-6 w-6 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {websiteData.uxSuggestions?.length || 0}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  UX Issues
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Areas for improvement
                </div>
              </motion.div>
            </div>

            {/* Social Media Section */}
            {socialData?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Social Media Presence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {socialData.map((platform, index) => (
                    <div
                      key={platform.platform}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-card transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <ApperIcon name="Users" className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {platform.platform}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Followers</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {platform.followers?.toLocaleString() || 'N/A'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Engagement</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {platform.engagementRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Competitor Analysis */}
            {competitorData?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Competitor Analysis
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                          Competitor
                        </th>
                        <th 
                          className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() => handleSort('websiteMetrics.loadSpeed')}
                        >
                          <div className="flex items-center justify-center space-x-1">
                            <span>Speed</span>
                            <ApperIcon name="ArrowUpDown" className="h-3 w-3" />
                          </div>
                        </th>
                        <th 
                          className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() => handleSort('websiteMetrics.seoScore')}
                        >
                          <div className="flex items-center justify-center space-x-1">
                            <span>SEO</span>
                            <ApperIcon name="ArrowUpDown" className="h-3 w-3" />
                          </div>
                        </th>
                        <th 
                          className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() => handleSort('socialMetrics.totalFollowers')}
                        >
                          <div className="flex items-center justify-center space-x-1">
                            <span>Social</span>
                            <ApperIcon name="ArrowUpDown" className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                          Advantages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedCompetitors.map((competitor, index) => (
                        <tr
                          key={competitor.domain}
                          className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                            index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''
                          }`}
                        >
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {competitor.name}
                              </div>
                              <div className="text-gray-500 text-xs">{competitor.domain}</div>
                            </div>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {competitor.websiteMetrics?.loadSpeed || 'N/A'}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {competitor.websiteMetrics?.seoScore || 'N/A'}%
                            </span>
                          </td>
                          <td className="text-center py-3 px-4">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {competitor.socialMetrics?.totalFollowers?.toLocaleString() || 'N/A'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1">
                              {competitor.advantages?.slice(0, 2).map((advantage, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded"
                                >
                                  {advantage}
                                </span>
                              )) || <span className="text-gray-400">None</span>}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export Modal */}
      <AnimatePresence>
        {showExportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowExportModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glassmorphic rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Export Report</h3>
              <div className="space-y-4">
                {['PDF', 'PNG', 'CSV'].map((format) => (
                  <button
                    key={format}
                    onClick={() => exportReport(format)}
                    className="w-full p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-3"
                  >
                    <ApperIcon name="FileText" className="h-5 w-5 text-primary" />
                    <span className="font-medium">Export as {format}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="w-full mt-6 p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MainFeature