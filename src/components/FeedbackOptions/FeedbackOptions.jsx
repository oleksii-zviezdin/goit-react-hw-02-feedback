import { Component }  from "react";
import PropTypes from 'prop-types'

export class FeedbackOptions extends Component {
    static pyteProps = {
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const {onClick } = this.props;
        return  <div >
                    <button type="button" name="good" onClick={onClick}>Good</button>
                    <button type="button" name="neutral" onClick={onClick}>Neutral</button>
                    <button type="button" name="bad" onClick={onClick}>Bad</button>
                </div>
    }
}