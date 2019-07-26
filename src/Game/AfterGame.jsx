import React, {Component} from "react";

class AfterGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="results-area">
          <h1>Game Results</h1>
          <h3>You scored: {this.props.score} points!</h3>
          <a href="/">Want to play again?</a>
        </div>
      </div>
    );
  }
}

export default AfterGame;