import React from 'react';
import Quiz from './Quiz';

import LandingPage from './LandingPage';
import FooterContent from './FooterContent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false
    };

    console.log('%cin a dream you saw a way to survive and you were full of joy', 'color: black; font: 16pt Futura, Helvetica, Arial, sans-serif; text-transform: uppercase; font-weight: bold');
  }

  startQuiz = () => {
    this.setState({quizStarted: true});
  }

  render() {
    let mainContent;

    if (this.state.quizStarted) {
      mainContent = <Quiz />;
    } else {
      mainContent = <LandingPage clicker={this.startQuiz}/>;
    }

    return (
      <div>
        <div className="game-body">
          { mainContent }
        </div>
        <FooterContent/>
      </div>
    );
  }
}
