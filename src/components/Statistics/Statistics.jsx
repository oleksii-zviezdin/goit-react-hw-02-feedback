import { Component } from "react";
import PropTypes from "prop-types"

export class Statistics extends Component {
    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }

    render() {
        const { good, neutral, bad } = this.props;
        let totalOpinions = good + neutral + bad;
        let positiveFeedback = Math.round(((good * 100) / totalOpinions));

        return  <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {totalOpinions}</p>
                    <p>Positive feedback: {positiveFeedback}%</p>
                </div>
    }
}