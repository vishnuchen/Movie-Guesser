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

    // Preparing player scores
    let playerScores = [];

    for (let score of this.state.finalScores) {
      // console.log(name)
      for (let num in score) {
        playerScores.push(score[num])
      }
    }

    let styleList = []
    let numOfPlayers = playerNames.length;
    for (let i = 0; i < numOfPlayers; i ++) {
      styleList.push([playerNames[i], playerScores[i],])
    }

    styleList.sort((a, b) => {
      return b[1] - a[1];
    })

    let styleListMapper = styleList.map((player) => {
      return (
        <div className="row">
          <div className="name">{player[0]}</div>
          <div className="position">{player[1]}</div>
        </div>
      )
    })


    return (
      <div>
        <div id="container">
          <h2>Leaderboard</h2>
          {styleListMapper}
        </div>
      </div>
    );
  }
}

export default AfterGame;