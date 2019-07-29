import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameState from './GameState.jsx';
import { randomBytes } from 'crypto';
import AfterGame from './AfterGame.jsx';
const popular_movie = require("../../data/popular_movie.js");
const movie_imgs = require("../../data/movie_imgs.js");


class GameNav extends Component {
  constructor(props) {
    super(props);
    this.state={
      gameFinished: false,
      result: "",
      score: 0,
      correctAnswer: this.props.mvq.correctAnswer,
      userAnswer: "",
      counter: 0,
      image: movie_imgs,
      movies: popular_movie
      // playerInfo: this.props.location.state.playerInfo
    };
  }

  componentDidMount() {
    console.log(this.props.currentPlayer)
    this.props.socket.emit('clear_result')
    this.props.socket.on('clear_result', () => {
      this.setState({
        result: ""
      })
    })
    this.props.socket.on('broadcast_title', (title) => {
      this.setState({
        correctAnswer: title
      })
    })
  }

  userChoice = (choice) => {
    this.setState({userAnswer: choice});
  }

  checkAnswer = () => {
    console.log( this.state.userAnswer, "CheckQuestion", this.state.correctAnswer);
    if(this.state.userAnswer == this.state.correctAnswer) {
      let score = this.state.score + 1;
      this.setState({
        result: "correct",
        score: score,
        counter: this.state.counter + 60
      });
      this.setState({userAnswer: ""});

    } else {
      this.setState({
        result: "wrong",
        counter: this.state.counter + 60
      });
    }

  }

  gameFinish = () => {
    if ((this.state.counter / 60) >=5 ) {
      return <AfterGame score={this.state.score} socket={this.props.socket} currentPlayer={this.props.currentPlayer} />
    } else {
      return <GameState userAnswer={this.state.userAnswer} score={this.state.score} mvq={this.props.mvq} checkAnswer={this.checkAnswer} userChoice={this.userChoice} pic={this.state.image} result={this.state.result} counter={this.state.counter} socket={this.props.socket} />
    }
  }

  render() {
    const filmElement = <FontAwesomeIcon icon={faFilm} />
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-brand" href="/">
              {filmElement}MovieGuesser
            </a>
        </nav>
        <this.gameFinish />
      </div>
    );
  }
}


export default GameNav;