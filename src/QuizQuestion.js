import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
      choiceStatus: '',
    };
  }
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState(prevState => ({
        incorrectAnswer: false,
        choiceStatus: "That's correct!",
      }));

      return this.props.showNextQuestionHandler();
    }

    this.setState(prevState => ({
      incorrectAnswer: true,
      choiceStatus: "Sorry, that's not right",
    }));
  }
  render() {
    return (
      <main>
        <section>
          <p className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_option}
                    clickHandler={this.handleClick.bind(this)}
                  />
                );
              },
            )}
          </ul>
        </section>
        <p className={this.state.incorrectAnswer ? 'error' : 'correct'}>
          {this.state.choiceStatus}
        </p>
      </main>
    );
  }
}

export default QuizQuestion;
