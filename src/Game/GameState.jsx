import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import GameProgressBar from './GameProgressBar.jsx';
import QuizArea from './QuizArea.jsx';
import Countdown from './Countdown.jsx';


class GameState extends Component {
  constructor(props) {
    super(props);
  }

  nextQuestion = () => {
    this.props.socket.emit('trigger_questions', () => {

    })
    this.props.socket.on('trigger_questions', (questions) => {
      const questions_received = JSON.parse(questions)
      this.setState({
        mvq: questions
      })
    })
  }

  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} className="fa-spin" />

    return(
      <div>
        <div className="game-header">
          <div className="score">
            <h2>Score</h2>
            <h3>{this.props.score}</h3>
          </div>
          <div className="progress-bar-container">
            <GameProgressBar counter={this.props.counter} />
          </div>
          <Countdown enableButton={this.enableButton} userAnswer={this.props.userAnswer} checkAnswer={this.props.checkAnswer} nextQuestion={this.nextQuestion} result={this.props.result} counter={this.props.counter} />
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea userAnswer={this.props.userAnswer} mvq={this.props.mvq} checkAnswer={this.props.checkAnswer} userChoice={this.props.userChoice} pic={this.props.pic} result={this.props.result} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameState;

