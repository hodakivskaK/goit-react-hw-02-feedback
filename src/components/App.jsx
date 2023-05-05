import { Component } from "react";
import {Section} from "./Section" 
import { FeedbackBtn } from "./feedbackBtn";
import { Statistics } from "./statistics";
import { Notification } from "./Notification";
 

 export class Feedback extends Component {
  state = {good: 0,
  neutral: 0,
  bad: 0};

   handleClick = (option) => {
     this.setState(prevState => ({
       [option]: prevState[option] + 1,
    }))
   }

    countTotalFeedback = () => {
      return Object.values(this.state).reduce((acc, current) => acc + current, 0);
   } 

   countPositiveFeedbackPercentage = () => {
     return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
   }

  render() {
    const { good, neutral, bad } = this.state;


    return (
        <div>
        <Section title='Please leave feedback'>
          <FeedbackBtn options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick} />
        </Section>
        
        <Section title='Statisctics'>
          {this.countTotalFeedback() ?
          // Section
            <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
            countTotalFeedback={this.countPositiveFeedbackPercentage()} />
          // Or
            :<Notification message="There is no feedback"/>}
           
        </Section>
        
          </div>

      

    );
  }
}

 