import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div >
        {options.map(option => {
            return <button
                    key={nanoid()}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
                    {option}
                    </button>
        })}
        </div>
    )
}

FeedbackOptions.protoTypes = {
    key: PropTypes.string.isRequired,
    options: PropTypes.arrayOf({
        option: PropTypes.string.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}