import React from 'react';

import Score from './Score';
import PostGame from './PostGame';
import GameLogicStore from '../stores/GameLogicStore';
import TruismActions from '../actions/truism_actions';
import { HOLZER, NYT } from '../constants';

function getUpdatedState() {
  let state = GameLogicStore.getState();

  return {
    truism: state.currentQuestion(),
    score: state.score,
    gameOver: state.gameOver
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = getUpdatedState();
    this._onChange = this._onChange.bind(this);
    this.nyt = this.nyt.bind(this);
    this.holzer = this.holzer.bind(this);
  }

  componentDidMount() {
    GameLogicStore.listen(this._onChange);
  }

  componentDidUnMount() {
    GameLogicStore.unlisten(this._onChange);
  }

  _onChange() {
    this.setState(getUpdatedState());
  }

  /* change this so we don't have the truism locally */
  answer(event, guess) {
    TruismActions.answerQuestion({
      truism: this.state.truism.text,
      guess: guess
    });
  }

  startNewGame(event) {
    TruismActions.startNewGame();
  }

  nyt(event) {
    this.answer(event, NYT);
  }

  holzer(event) {
    this.answer(event, HOLZER);
  }

  render() {
    if (this.state.gameOver) {
      return (<PostGame score={this.state.score} startNew={this.startNewGame.bind(this)}/>);
    }

    return (
      <div>
        <Score points={this.state.score}></Score>
        <p>
          Choose: <a className="choice" onClick={this.nyt}>New York Times</a>
          <span> or </span>
          <a className="choice" onClick={this.holzer}>Jenny Holzer</a>
        </p>
        <p className="truism">{this.state.truism.text}</p>
      </div>
    );
  }
}
