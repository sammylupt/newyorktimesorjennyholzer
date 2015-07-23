import alt from '../alt';
import TruismActions from '../actions/truism_actions';
import QuestionStore from './QuestionStore';
import _ from 'underscore';

class GameLogicStore {
  constructor() {

    this.bindListeners({
      handleAnswer: TruismActions.answerQuestion,
      defaultGameState: TruismActions.startNewGame
    });

    this.defaultGameState();

    this.currentQuestion = function() {
      return this.questions[this.currentQuestionIndex];
    }
  }

  defaultGameState() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.questions = QuestionStore.getState().questions
    this.gameOver = false;
  }

  handleAnswer(userInput) {

    let { truism, guess } = userInput;
    let correct = guess == this.currentQuestion().answer;

    if (correct) {
      this.score++;
    }

    if (this.isGameOver()) {
      this.gameOver = true;
    } else {
      this.currentQuestionIndex++;
    }
  }

  isGameOver() {
    let lastQuestion = _.last(this.questions)
    let currentQuestion = this.questions[this.currentQuestionIndex];

    return lastQuestion == currentQuestion;
  }
}

export default alt.createStore(GameLogicStore, 'GameLogicStore');
