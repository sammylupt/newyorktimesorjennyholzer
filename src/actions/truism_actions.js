import alt from '../alt';

class TruismActions {
  constructor() {
    this.generateActions(
      'answerQuestion',
      'startNewGame'
    )
  }
}

export default alt.createActions(TruismActions);
