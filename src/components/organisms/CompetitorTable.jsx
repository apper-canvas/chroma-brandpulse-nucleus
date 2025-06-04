import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Text from '../atoms/Text'
import Card from '../atoms/Card'
import { useState } from 'react'

const CompetitorTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    const aVal = sortConfig.key.includes('.') 
      ? sortConfig.key.split('.').reduce((obj, k) => obj?.[k], a)
      : a[sortConfig.key]
    const bVal = sortConfig.key.includes('.') 
      ? sortConfig.key.split('.').reduce((obj, k) => obj?.[k], b)
      : b[sortConfig.key]

    if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortConfig.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  return (
    &lt;Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-6 sm:p-8"
    &gt;
      &lt;Text type="h4" className="mb-6"&gt;Competitor Analysis&lt;/Text&gt;
      &lt;div className="overflow-x-auto"&gt;
        &lt;table className="w-full text-sm"&gt;
          &lt;thead&gt;
            &lt;tr className="border-b border-gray-200 dark:border-gray-700"&gt;
              &lt;th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white"&gt;
                Competitor
              &lt;/th&gt;
              &lt;th 
                className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => handleSort('websiteMetrics.loadSpeed')}
              &gt;
                &lt;div className="flex items-center justify-center space-x-1"&gt;
                  &lt;span&gt;Speed&lt;/span&gt;
                  &lt;ApperIcon name="ArrowUpDown" className="h-3 w-3" /&gt;
                &lt;/div&gt;
              &lt;/th&gt;
              &lt;th 
                className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => handleSort('websiteMetrics.seoScore')}
              &gt;
                &lt;div className="flex items-center justify-center space-x-1"&gt;
                  &lt;span&gt;SEO&lt;/span&gt;
                  &lt;ApperIcon name="ArrowUpDown" className="h-3 w-3" /&gt;
                &lt;/div&gt;
              &lt;/th&gt;
              &lt;th 
                className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => handleSort('socialMetrics.totalFollowers')}
              &gt;
                &lt;div className="flex items-center justify-center space-x-1"&gt;
                  &lt;span&gt;Social&lt;/span&gt;
                  &lt;ApperIcon name="ArrowUpDown" className="h-3 w-3" /&gt;
                &lt;/div&gt;
              &lt;/th&gt;
              &lt;th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white"&gt;
                Advantages
              &lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {sortedData.map((competitor, index) => (
              &lt;tr
                key={competitor.domain}
                className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                  index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''
                }`}
              &gt;
                &lt;td className="py-3 px-4"&gt;
                  &lt;div&gt;
                    &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
                      {competitor.name}
                    &lt;/Text&gt;
                    &lt;Text type="span" className="text-gray-500 text-xs block"&gt;{competitor.domain}&lt;/Text&gt;
                  &lt;/div&gt;
                &lt;/td&gt;
                &lt;td className="text-center py-3 px-4"&gt;
                  &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
                    {competitor.websiteMetrics?.loadSpeed || 'N/A'}%
                  &lt;/Text&gt;
                &lt;/td&gt;
                &lt;td className="text-center py-3 px-4"&gt;
                  &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
                    {competitor.websiteMetrics?.seoScore || 'N/A'}%
                  &lt;/Text&gt;
                &lt;/td&gt;
                &lt;td className="text-center py-3 px-4"&gt;
                  &lt;Text type="span" className="font-medium text-gray-900 dark:text-white"&gt;
                    {competitor.socialMetrics?.totalFollowers?.toLocaleString() || 'N/A'}
                  &lt;/Text&gt;
                &lt;/td&gt;
                &lt;td className="py-3 px-4"&gt;
                  &lt;div className="flex flex-wrap gap-1"&gt;
                    {competitor.advantages?.slice(0, 2).map((advantage, idx) => (
                      &lt;span
                        key={idx}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded"
                      &gt;
                        {advantage}
                      &lt;/span&gt;
                    )) || &lt;Text type="span" className="text-gray-400"&gt;None&lt;/Text&gt;}
                  &lt;/div&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            ))}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    &lt;/Card&gt;
  )
}

export default CompetitorTable