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
    const Completionist = () => <span>load question 2</span>

    const renderer = ({ seconds, completed }) => {
      if (completed) {
        return <Completionist />
      } else {
        return <span>{seconds}</span>
      }
    }
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} className="fa-spin" />

    return(
      <div>
        <div className="timer">
          <span>Category: {gameCat} (fake category)</span>
          <Countdown date={Date.now() + 30000} renderer={renderer}>
            <Completionist />
          </Countdown>
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

