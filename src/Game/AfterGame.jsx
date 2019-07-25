import React, {Component} from "react";

class AfterGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.score}
        <div className="game-cat">
          <h1>Game Finished</h1>
          <a href="/">
              Return to Home Page
          </a>
        </div>
      </div>
    );
  }
}

export default AfterGame;