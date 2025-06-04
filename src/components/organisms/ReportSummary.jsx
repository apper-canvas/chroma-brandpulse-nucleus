import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Card from '../atoms/Card'

const ReportSummary = ({ url, date, overallScore, onExportClick }) => {
  return (
    &lt;Card className="p-6 sm:p-8"&gt;
      &lt;div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0"&gt;
        &lt;div&gt;
          &lt;Text type="h3"&gt;
            Analysis Report
          &lt;/Text&gt;
          &lt;Text type="small" className="mt-1 text-gray-600 dark:text-gray-400"&gt;
            {url} • {date}
          &lt;/Text&gt;
        &lt;/div&gt;
        &lt;div className="flex items-center space-x-4"&gt;
          &lt;div className="text-right"&gt;
            &lt;div className="text-3xl font-bold text-primary"&gt;
              {overallScore}
            &lt;/div&amp;gt;
            &lt;div className="text-sm text-gray-500"&gt;Overall Score&lt;/div&gt;
          &lt;/div&gt;
          &lt;Button
            onClick={onExportClick}
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300"
            iconName="Download"
          &gt;
            Export
          &lt;/Button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/Card&gt;
  )
}

export default ReportSummary