import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {

  static defaultProps = {
    initialValue: 0
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  }
  
  handleChangeStateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }

    handleChangeStateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  }
  
    handleChangeStateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    let totalOpinions = good + neutral + bad;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGoodBtn={this.handleChangeStateGood}
            onClickNeutralBtn={this.handleChangeStateNeutral}
            onClickBadBtn={this.handleChangeStateBad}
          />
        </Section>
        {totalOpinions <= 0 ?
          <Notification message="There is no feedback" /> :
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            />
          </Section>}
      </>
    );
  };
}