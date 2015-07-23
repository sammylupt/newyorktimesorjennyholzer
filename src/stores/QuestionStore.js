import alt from '../alt';
import _ from 'underscore';

import jennyHolzerTruisms from '../truisms/jenny-holzer';
import nytTruisms from '../truisms/nyt';
import TruismActions from '../actions/truism_actions';
import { HOLZER, NYT } from '../constants';

const SOURCE_MAPPING = {
  [HOLZER]: jennyHolzerTruisms,
  [NYT]:    nytTruisms
}

class QuestionStore {

  constructor() {
    this.assignQuestions();

    this.bindListeners({
      assignQuestions: TruismActions.startNewGame
    });
  }

  assignQuestions() {
    this.questions = this.generateRandomQuestions();
  }

  // Grab questions from NYT and Holzer.
  // Transform them into { text: "foo bar", answer: "holzer" or "nyt" }
  generateRandomQuestions() {
    let numOfNYTQs = _.random(3, 5);
    let numOfHolzerQs = 10 - numOfNYTQs;

    let questionList = _.map(SOURCE_MAPPING, function(list, sourceName) {
      let numOfQuestions = sourceName == NYT ? numOfNYTQs : numOfHolzerQs
      let questions = _(list).chain().shuffle().first(numOfQuestions).value();

      return questions.map((question) => {
        return {
          text: question.toUpperCase(),
          answer: sourceName
        }
      })
    });

    return _(questionList).chain().flatten().shuffle().value();
  }
}

export default alt.createStore(QuestionStore, 'QuestionStore')
