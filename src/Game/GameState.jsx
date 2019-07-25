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
      mvq: this.props.makeQuestionTypeOne()
    }
  }

  nextQuestion = () => {
    this.setState({mvq: this.props.makeQuestionTypeOne()});
  }
  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} className="fa-spin" />

    return(
      <div>
        <div className="game-header">
          <div>
            <h2>Score</h2>
            <h3>{this.props.score}</h3>
          </div>
          <div>
            <h2>Category</h2>
            <h3>{gameCat}</h3>
          </div>
          <Countdown enableButton={this.enableButton} userAnswer={this.props.userAnswer} checkAnswer={this.props.checkAnswer} nextQuestion={this.nextQuestion} result={this.props.result} counter={this.props.counter} />
        </div>
        <div className="game-cat">
          <div className="game-cat-content">
            <QuizArea userAnswer={this.props.userAnswer} mvq={this.state.mvq} checkAnswer={this.props.checkAnswer} userChoice={this.props.userChoice} pic={this.props.pic} result={this.props.result} />
          </div>
        </div>
        <GameProgressBar counter={this.props.counter} />
      </div>
    );
  }
}

export default GameState;

