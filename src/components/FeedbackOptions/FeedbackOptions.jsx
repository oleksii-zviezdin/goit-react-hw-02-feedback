import { Component }  from "react";
import PropTypes from 'prop-types'

export class FeedbackOptions extends Component {
    static pyteProps = {
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const { options, onLeaveFeedback } = this.props;
        return <div >
                {options.map(option => {
                    return <button
                            type="button"
                            name={option}
                            onClick={onLeaveFeedback}>
                            {option}
                            </button>
                })}
                </div>
    }
}