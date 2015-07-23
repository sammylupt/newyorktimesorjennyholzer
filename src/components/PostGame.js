import React from 'react';
import Score from './Score';

export default class PostGame extends React.Component {

  componentDidMount() {
    // reload twitter widget because this component is getting added to the DOM
    window.twttr.widgets.load();
  }

  render() {
    let scoreText = `I scored ${this.props.score}/10 on New York Times or Jenny Holzer? via @scottluptowski`;

    return (
      <div>
        <Score points={this.props.score} gameOver={true}></Score>
        <div onClick={this.props.startNew} className="rect start-button">Click here to play again</div>
        <div className="twitter-box">Share your score on Twitter
          <span className="twitter-wrapper">
            <a href="https://twitter.com/share" className="twitter-share-button" data-text={scoreText} data-count="none">Share your score on Twitter</a>
          </span>
        </div>
      </div>
    );
  }
}
