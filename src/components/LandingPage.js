import React from 'react'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>New York Times or Jenny Holzer?</h1>
        <p>A guessing game between random text snippets from the work of Jenny Holzer and tweets from the New York Times Minus Context twitter account.</p>
        <div onClick={this.props.clicker} className="rect start-button">Start the quiz</div>
      </div>
    )
  }
}
