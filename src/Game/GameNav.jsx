import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameState from './GameState.jsx';


class GameNav extends Component {
  constructor() {
    super();
    this.state={
      result: "wrong",
      correctAnswer: 1,
      userAnswer: 0,
      counter: 0,
      image: [{
      "aspect_ratio": 1.777777777777778,
      "file_path": "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.326,
      "vote_count": 7,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/iqAQ1rPcTtaVl5kSfaHyLL4f9um.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.252,
      "vote_count": 4,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/Dk8wzICaD5q7vBp1xeDOWd6e80.jpg",
      "height": 720,
      "iso_639_1": "el",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1280
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/3o4NzKxeGSSsrrHnwGKrd3qHK0V.jpg",
      "height": 1872,
      "iso_639_1": null,
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 3328
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.19,
      "vote_count": 5,
      "width": 3840
    },
    {
      "aspect_ratio": 1.778739184177998,
      "file_path": "/czX5BtmyI1rAPzedCshFZbvEIvc.jpg",
      "height": 809,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1439
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/hSzmNczQBnYjbd5rhShdfmPwqti.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.138,
      "vote_count": 8,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/nsv7x6bBPF2nedmlHFk1mxhPTWm.jpg",
      "height": 1080,
      "iso_639_1": "xx",
      "vote_average": 5.128,
      "vote_count": 6,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/a3pOBXeS7zF9dQphvJVT9V4kpXm.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/onrO9pu6EIfKnHgETezg8Umqxtk.jpg",
      "height": 1440,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 2560
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/dM3UqVwp3a8evb1H1Dv0gIA3df1.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/6ihyJWRLEngSnlW8HKeDOH3AfSQ.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/cR8vQiOMiuIEmRmAst1P94b3sOn.jpg",
      "height": 1080,
      "iso_639_1": "en",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/a5Bc1PafqCLEPooQWpO5M5e9A3m.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/zdBo5RSvVK5qlE50bGJezqRJrTy.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/tTfjDFRDUfxWGWwE4hiFauHl9EL.jpg",
      "height": 1080,
      "iso_639_1": "en",
      "vote_average": 0,
      "vote_count": 0,
      "width": 1920
    }]
    };
  }
  userChoice = (choice) => {
    this.setState({userAnswer: choice});
  }

  checkAnswer = () => {
    if(this.state.userAnswer == this.state.correctAnswer) {
      this.setState({
        result: "correct",
        counter: this.state.counter + 60
      });
    } else {
      this.setState({
        result: "wrong",
        counter: this.state.counter + 60
      });
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
        <GameState checkAnswer={this.checkAnswer} userChoice={this.userChoice} pic={this.state.image} result={this.state.result} counter={this.state.counter} />
      </div>
    );
  }
}


export default GameNav;