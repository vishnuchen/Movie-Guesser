import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import GameProgressBar from './GameProgressBar.jsx';
import QuizArea from './QuizArea.jsx';
import Countdown from './Countdown.jsx';


class GameState extends Component {
  constructor(props) {
    super(props);
    this.state={
      buttonDisable: false,
      mvq: this.props.makeQuestion()
    }
  }

  enableButton = () => {
    this.setState({buttonDisable: false});
  }

  disableButton = () => {
    this.setState({buttonDisable: true});
  }

  nextQuestion = () => {
    this.setState({mvq: this.props.makeQuestion()});
  }
  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} className="fa-spin" />

    return(
      <div>
        <div className="game-header">
          <div>
            <h1>Score</h1>
            <h3>{this.props.score}</h3>
          </div>
          <div>
            <h1>Category</h1>
            <h3>{gameCat}</h3>
          </div>
          <Countdown enableButton={this.enableButton} userAnswer={this.props.userAnswer} checkAnswer={this.props.checkAnswer} nextQuestion={this.nextQuestion} result={this.props.result} />
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea userAnswer={this.props.userAnswer} buttonDisable={this.state.buttonDisable} disableButton={this.disableButton} mvq={this.state.mvq} checkAnswer={this.props.checkAnswer} userChoice={this.props.userChoice} pic={this.props.pic} result={this.props.result} />
          </div>
        </div>
        <GameProgressBar counter={this.props.counter} />
      </div>
    );
  }
}

export default GameState;

