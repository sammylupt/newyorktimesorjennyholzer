import React from 'react';

export default class FooterContent extends React.Component {
  render() {
    return (
      <footer>
        by <a href="http://www.twitter.com/scottluptowski" target="_blank">Scott Luptowski</a>. Not affiliated with Jenny Holzer or the New York Times. 

        <span className="twitter-wrapper">
          <a href="https://twitter.com/share" className="twitter-share-button" data-text="New York Times or Jenny Holzer?" data-count="none">Tweet</a>
        </span>
      </footer>
    );
  }
}
