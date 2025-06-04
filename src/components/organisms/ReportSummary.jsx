import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Card from '../atoms/Card'

const ReportSummary = ({ url, date, overallScore, onExportClick }) => {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <Text type="h3">
            Analysis Report
          </Text>
          <Text type="small" className="mt-1 text-gray-600 dark:text-gray-400">
            {url} • {date}
          </Text>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">
              {overallScore}
            </div>
            <div className="text-sm text-gray-500">Overall Score</div>
          </div>
          <Button
            onClick={onExportClick}
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300"
            iconName="Download"
          >
            Export
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ReportSummary