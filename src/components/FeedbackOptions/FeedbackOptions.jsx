import { Component }  from "react";
import PropTypes from 'prop-types'

export class FeedbackOptions extends Component {
    static pyteProps = {
        onClickGoodBtn: PropTypes.func.isRequired,
        onClickNeutralBtn: PropTypes.func.isRequired,
        onClickBadBtn: PropTypes.func.isRequired,
    }
    handleButton = () => {
        console.log(`You click me`)
    }

    render() {
        const { onClickGoodBtn, onClickNeutralBtn, onClickBadBtn} = this.props;
        return <div >
                    <button type="button" onClick={onClickGoodBtn}>Good</button>
                    <button type="button" onClick={onClickNeutralBtn}>Neutral</button>
                    <button type="button" onClick={onClickBadBtn}>Bad</button>
                </div>
    }
}