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

  handleChangeState = (e) => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
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
            onClick={this.handleChangeState}
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