import { Component }  from "react";
import PropTypes from 'prop-types'
// import { nanoid } from 'nanoid'
// const divId = nanoid();
// const buttonId = nanoid();

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
        // const arrOpinions = ["Good", "Neutral", "Bad"];
        const { onClickGoodBtn, onClickNeutralBtn, onClickBadBtn} = this.props;
        return <div >
                    <button type="button" onClick={onClickGoodBtn}>Good</button>
                    <button type="button" onClick={onClickNeutralBtn}>Neutral</button>
                    <button type="button" onClick={onClickBadBtn}>Bad</button>
                    {/* {arrOpinions.map(opinion => <button key={buttonId} type="button" onClick={this.handleButton}>{opinion}</button>)} */}
                </div>
    }
}