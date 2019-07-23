import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import GameProgressBar from './GameProgressBar.jsx';
import QuizArea from './QuizArea.jsx';
import Countdown from './Countdown.jsx';


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
          <Countdown result={this.props.result} />
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea checkAnswer={this.props.checkAnswer} userChoice={this.props.userChoice} pic={this.props.pic} result={this.props.result} />
          </div>
        </div>
        <GameProgressBar counter={this.props.counter} />
        <div>
        </div>
      </div>
    );
  }
}

export default GameState;

