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
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-6 sm:p-8"
    >
      <Text type="h4" className="mb-6">Competitor Analysis</Text>
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
            {sortedData.map((competitor, index) => (
              <tr
                key={competitor.domain}
                className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                  index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''
                }`}
              >
                <td className="py-3 px-4">
                  <div>
                    <Text type="span" className="font-medium text-gray-900 dark:text-white">
                      {competitor.name}
                    </Text>
                    <Text type="span" className="text-gray-500 text-xs block">{competitor.domain}</Text>
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  <Text type="span" className="font-medium text-gray-900 dark:text-white">
                    {competitor.websiteMetrics?.loadSpeed || 'N/A'}%
                  </Text>
                </td>
                <td className="text-center py-3 px-4">
                  <Text type="span" className="font-medium text-gray-900 dark:text-white">
                    {competitor.websiteMetrics?.seoScore || 'N/A'}%
                  </Text>
                </td>
                <td className="text-center py-3 px-4">
                  <Text type="span" className="font-medium text-gray-900 dark:text-white">
                    {competitor.socialMetrics?.totalFollowers?.toLocaleString() || 'N/A'}
                  </Text>
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
                    )) || <Text type="span" className="text-gray-400">None</Text>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default CompetitorTable