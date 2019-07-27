import React, {Component} from "react";

class AfterGame extends Component {
  constructor(props) {
    super(props);
    this.state={
      finalScores: []
    }
  }

  componentDidMount() {
    const currentPlayer = this.props.currentPlayer;
    const player_score = { [currentPlayer]: this.props.score }
    const stringified_score = JSON.stringify(player_score)
    this.props.socket.emit('player_scores', stringified_score)

    this.props.socket.on('player_scores', (scores) => {
      const finalScore = JSON.parse(scores);
      const received_scores = [...this.state.finalScores, finalScore];
      this.setState({
        finalScores: received_scores
      }, () => {
        console.log(this.state.finalScores)
      }
      )
    })
  }

  render() {
    // Preparing player names
    let playerNames = [];

    for (let score of this.state.finalScores) {
      // console.log(name)
      for (let name in score) {
        playerNames.push(name)
      }
    }

    let playerNameMapper = playerNames.map((item) => {
      return <li>{item}</li>
    })

    // Preparing player scores
    let playerScores = [];

    for (let score of this.state.finalScores) {
      // console.log(name)
      for (let num in score) {
        playerScores.push(score[num])
      }
    }

    let playerScoreMapper = playerScores.map((item) => {
      return <li>{item}</li>
    })


    return (
      <div>
        <div className="results-area">
          <h1>Game Results</h1>
          <ul>
            {playerNameMapper}
          </ul>
          <ul>
            {playerScoreMapper}
          </ul>
          <h3>You scored: {this.props.score} points!</h3>
          <a href="/">Want to play again?</a>
        </div>
      </div>
    );
  }
}

export default AfterGame;