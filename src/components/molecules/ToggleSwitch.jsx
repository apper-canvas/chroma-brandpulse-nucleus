import ApperIcon from '../ApperIcon' // Assuming ApperIcon remains at components root
import Button from '../atoms/Button'

const ToggleSwitch = ({ isOn, onToggle, onIcon, offIcon }) => {
  return (
    &lt;Button
      onClick={onToggle}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-card hover:shadow-soft transition-all duration-300 group"
      iconName={isOn ? onIcon : offIcon}
    &gt;
      {/* Icon is handled by Button component using iconName prop */}
    &lt;/Button&gt;
  )
}

export default ToggleSwitch