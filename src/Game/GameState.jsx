import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import GameProgressBar from './GameProgressBar.jsx';
import QuizArea from './QuizArea.jsx';


class GameState extends Component {
  constructor() {
    super();
  }

  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} className="fa-spin" />

    return(
      <div>
        <div className="timer">
          <span>Category: {gameCat} (fake category)</span>
          <span>{HourglassElement} 30S (fake timer)</span>
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea checkAnswer={this.props.checkAnswer} ans={this.props.ans} pic={this.props.pic}/>
          </div>
        </div>
        <GameProgressBar />
        <div>
        </div>
      </div>
    );
  }
}

export default GameState;

