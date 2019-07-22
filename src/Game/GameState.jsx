import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import GameProgressBar from './GameProgressBar.jsx';
import QuizArea from './QuizArea.jsx';
import Countdown from 'react-countdown-now';


class GameState extends Component {
  constructor() {
    super();
  }

  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} />

    return(
      <div>
        <div className="timer">
          <span>Category: {gameCat} (fake category)</span>
          <Countdown date={Date.now() + 30000}>
            <span>trigger a script to take user to next page</span>
          </Countdown>
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea checkAnswer={this.props.checkAnswer} ans={this.props.ans}/>
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

