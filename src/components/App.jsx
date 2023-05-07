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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(((good * 100) / (good + neutral + bad)));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalOpinions = this.countTotalFeedback();  
    
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
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>}
      </>
    );
  };
}