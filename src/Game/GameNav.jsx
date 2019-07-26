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
      correctAnswer: "",
      userAnswer: "",
      counter: 0,
      image: movie_imgs,
      movies: popular_movie
      // playerInfo: this.props.location.state.playerInfo
    };
  }

  chooseMovie = () => {
    let movieInDb = this.state.movies.length;
    let randomMovie = Math.floor(Math.random() * movieInDb);
    let movie = this.state.movies[randomMovie];

    return movie
  }

  shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  makeQuestionTypeOne =  () => {
    this.setState({result: ""});
    let movie = this.chooseMovie();
    // let shuffledMoviePic = this.shuffle(this.state.image[movieId]);
    let shuffledMoviePic;
    for (let img of movie_imgs) {
      if (img.movie_api_id === movie.api_id) {
        shuffledMoviePic = this.shuffle(img.imgs);
      }
    }
    let moviePic = [];
    if (shuffledMoviePic.length >= 4){
      for (let i = 0; i < 4; i++) {
        moviePic.push(shuffledMoviePic[i]);
      }
    } else {
      for (let i = 0; i < shuffledMoviePic.length; i++) {
        moviePic.push(shuffledMoviePic[i]);
      }
    }
    let otherMovieArray = [];
    for (let mv of this.state.movies) {
      if (mv.title != movie.title) {
        otherMovieArray.push(mv.title);
      }
    }
    let shuffledOtherMovieArray = this.shuffle(otherMovieArray)
    let questionChoice = [movie.title, shuffledOtherMovieArray[0], shuffledOtherMovieArray[1], shuffledOtherMovieArray[2]];
    let shuffledQuestionChoice = this.shuffle(questionChoice);

    this.setState({correctAnswer: movie.title})

    return {
      "moviePic": moviePic,
      "questionChoice": shuffledQuestionChoice
    }
  }

  userChoice = (choice) => {
    this.setState({userAnswer: choice});
  }

  checkAnswer = () => {
    if(this.state.userAnswer == this.state.correctAnswer) {
      let score = this.state.score;
      this.setState({
        result: "correct",
        score: score + 1,
        counter: this.state.counter + 60
      });
      console.log(this.state.score);
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
      return <AfterGame score={this.state.score}/>
    } else {
      return <GameState userAnswer={this.state.userAnswer} score={this.state.score} makeQuestionTypeOne={this.makeQuestionTypeOne} checkAnswer={this.checkAnswer} userChoice={this.userChoice} pic={this.state.image} result={this.state.result} counter={this.state.counter} />
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