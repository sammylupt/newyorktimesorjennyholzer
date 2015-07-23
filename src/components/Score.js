import React from 'react';

export default class Score extends React.Component {
  render() {
    let scoreVerb = this.props.gameOver ? "was" : "is"
    let score = `Your score ${scoreVerb} ${this.props.points} out of 10`

    return (
      <div>
        <div className="rect">{score}</div>
      </div>
    )
  }
}
