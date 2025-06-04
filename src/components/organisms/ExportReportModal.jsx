import Button from '../atoms/Button'
import Modal from '../atoms/Modal'
import Text from '../atoms/Text'
import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root


const ExportReportModal = ({ show, onClose, onExport }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Text type="h4" className="mb-6">Export Report</Text>
      <div className="space-y-4">
        {['PDF', 'PNG', 'CSV'].map((format) => (
          <Button
            key={format}
            onClick={() => onExport(format)}
            className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-3 text-gray-900 dark:text-white"
            iconName="FileText"
          >
            <span className="font-medium">Export as {format}</span>
          </Button>
        ))}
      </div>
      <Button
        onClick={onClose}
        className="w-full mt-6 p-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        Cancel
      </Button>
    </Modal>
  )
}

export default ExportReportModal