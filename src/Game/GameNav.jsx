import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameState from './GameState.jsx';
import { randomBytes } from 'crypto';


class GameNav extends Component {
  constructor() {
    super();
    this.state={
      result: "",
      correctAnswer: "",
      userAnswer: "",
      counter: 0,
      image: { 
        "1":[
          {
            "file_path": "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
          },
          {
            "file_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
          },
          {
            "file_path": "/iqAQ1rPcTtaVl5kSfaHyLL4f9um.jpg",
          },
          {
            "file_path": "/Dk8wzICaD5q7vBp1xeDOWd6e80.jpg",
          },
          {
            "file_path": "/3o4NzKxeGSSsrrHnwGKrd3qHK0V.jpg",
          },
          {
            "file_path": "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
          },
          {
            "file_path": "/czX5BtmyI1rAPzedCshFZbvEIvc.jpg",
          },
          {
            "file_path": "/hSzmNczQBnYjbd5rhShdfmPwqti.jpg",
          },
          {
            "file_path": "/nsv7x6bBPF2nedmlHFk1mxhPTWm.jpg",
          },
          {
            "file_path": "/a3pOBXeS7zF9dQphvJVT9V4kpXm.jpg",
          },
          {
            "file_path": "/onrO9pu6EIfKnHgETezg8Umqxtk.jpg",
          },
          {
            "file_path": "/dM3UqVwp3a8evb1H1Dv0gIA3df1.jpg",
          },
          {
            "file_path": "/6ihyJWRLEngSnlW8HKeDOH3AfSQ.jpg",
          },
          {
            "file_path": "/cR8vQiOMiuIEmRmAst1P94b3sOn.jpg",
          },
          {
            "file_path": "/a5Bc1PafqCLEPooQWpO5M5e9A3m.jpg",
          },
          {
            "file_path": "/zdBo5RSvVK5qlE50bGJezqRJrTy.jpg",
          },
          {
            "file_path": "/tTfjDFRDUfxWGWwE4hiFauHl9EL.jpg",
          }
        ],
        "2": [
          {
            "file_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
          },
          {
            "file_path": "/mVaBvFu3AhG41PgCGXkri6ekSFO.jpg",
          },
          {
            "file_path": "/9mwjGikyw37kHaNGTCjFfW8sVVG.jpg",
          },
          {
            "file_path": "/c1LfZZY2bC3apqohsKymlM6NqHx.jpg",
          },
          {
            "file_path": "/jEjyjX4izUucoq7A9jmbcT6q3e1.jpg",
          },
          {
            "file_path": "/jJRboW28xjnWecSkZ9LDA9fINLj.jpg",
          },
          {
            "file_path": "/81PDfsM7BVaaCPwQvBJg25E9IBm.jpg",
          },
          {
            "file_path": "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
          },
          {
            "file_path": "/eJ4kZhNhyGqDTBQ4fc6SWmAX5Rt.jpg",
          },
          {
            "file_path": "/5FVcFcdxB8u2N5vZ2aj6uFI3kwG.jpg",
          },
          {
            "file_path": "/dk4hNOvunEoGxtaB591EUTmbFMg.jpg",
          },
          {
            "file_path": "/3iaThGtXlsbTqNNwzGkKavl1w5V.jpg",
          },
          {
            "file_path": "/6FlIUQckLXzhmAgRRkruyJuPuWH.jpg",
          },
          {
            "file_path": "/86EZWNycNbLz8OCXw5JYsN93hMs.jpg",
          },
          {
            "file_path": "/9gkG3bgwAguIjrUmjZxW5UaqKaC.jpg",
          },
          {
            "file_path": "/vUPiufauqf0fZoLv80XZSp21lLs.jpg",
          },
          {
            "file_path": "/yfSNCxa5CR7b0KnWMWFSddsDa4X.jpg",
          },
          {
            "file_path": "/c6KmgLmQwvuTVZQiZuMikQ5vd7.jpg",
          },
          {
            "file_path": "/sMq7QUoJJILtg6fAV8HtT7W5lFX.jpg",
          },
          {
            "file_path": "/GNz6zyQDtAQ6lw4blMvEYXv4Ww.jpg",
          },
          {
            "file_path": "/vbUpU9Pi62Vgan4j0qhaVR7LSuJ.jpg",
          },
          {
            "file_path": "/hbIyeaUX8ZbjIioMJbGqxJ5qLMs.jpg",
          },
          {
            "file_path": "/slzdErqJ4u3kDCeshYHQlMaIObC.jpg",
          },
          {
            "file_path": "/ciBMz1QaGNcGaznf03wY4oxQflB.jpg",
          },
          {
            "file_path": "/lU0NfJONjVcZmD5nJ7hRo6Tc9rp.jpg",
          },
          {
            "file_path": "/pC8uwKQ3ERAmCe7prOQ0BHmGePQ.jpg",
          },
          {
            "file_path": "/zxXGI6W6DMu6ImQMuke2thqrwFo.jpg",
          },
          {
            "file_path": "/hWdWfQuRo1mNAld2TzJQqQkbJPH.jpg",
          }
        ],
        "3": [
          {
            "file_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
          },
          {
            "file_path": "/4G7SzRAaXYZ5hYfS05wbTzjv2Tn.jpg",
          },
          {
            "file_path": "/7Dd3YYyBhBC1PnaFXVNOhX2bSvS.jpg",
          },
          {
            "file_path": "/4Lu9gNYaawaaRwEHIf0MM03maTa.jpg",
          },
          {
            "file_path": "/nMi6OM0AH9k8Hb48Rbcdrvp5ias.jpg",
          },
          {
            "file_path": "/aBA2iZiYi1C0myGDMnOorLpQoZa.jpg",
          }
        ],
        "4": [
          {
            "file_path": "/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg",
          },
          {
            "file_path": "/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg",
          },
          {
            "file_path": "/jXDselREPq8TOVGM4dzBBUM7xVk.jpg",
          },
          {
            "file_path": "/8qiiGpr1DdVUe6942DPycUNZ5w4.jpg",
          },
          {
            "file_path": "/wV6om5Bi6Lg2tQsqvxeYOTcDT07.jpg",
          },
          {
            "file_path": "/5QKbqh9pHV3tCrohHXBzhCQ6ixF.jpg",
          },
          {
            "file_path": "/1Jm26plQ7BWepDpvja6SwBNFy6N.jpg",
          },
          {
            "file_path": "/iELlQc5Ol8RKUgcMktwoXmIQ7wC.jpg",
          },
          {
            "file_path": "/3prBBLt5fXMTA0QsrHpUXHmJmaw.jpg",
          },
          {
            "file_path": "/eSLPXW1Zg9Nx15SAsT0rlU7VPvI.jpg",
          },
          {
            "file_path": "/Ah6nNAk5Jjd5Bis1y056Z7DwzBb.jpg",
          },
          {
            "file_path": "/eHYNwWKzXQcoIWAU0oSDxozMbkG.jpg",
          },
          {
            "file_path": "/mWWzQe0yO13iL0bCFFPoaA0tCJv.jpg",
          },
          {
            "file_path": "/h2ybbkV3zHHC3ppF0QDiyrYzzB6.jpg",
          },
          {
            "file_path": "/wYPRxLzlDwv1nTqfY2xAjkTUZiU.jpg",
          },
          {
            "file_path": "/xXo9O6YDdZK626eN2XzaYiaiNY0.jpg",
          },
          {
            "file_path": "/dughUzgENbjJYeWprHnwM3sy6W0.jpg",
          },
          {
            "file_path": "/bfzHom1oHkEWDkuLm1KEsacYXGu.jpg",
          },
          {
            "file_path": "/qGyjclcrrszX0c2JUZPH6rsZ2du.jpg",
          },
          {
            "file_path": "/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg",
          },
          {
            "file_path": "/pEZIp0ADegmB2OwquWo0D2O4YTp.jpg",
          },
          {
            "file_path": "/enyovE2izbk2hB4JTpOXIvYHhkh.jpg",
          },
          {
            "file_path": "/vY1baZA7uHRgbWPLbUHCtLtZDf5.jpg",
          },
          {
            "file_path": "/yNaZrg6f3Q2KeG1zkhuCXetOVTp.jpg",
          },
          {
            "file_path": "/81reGDYJZ7QlqTLjfJLdCLgSebp.jpg",
          },
          {
            "file_path": "/8yjqnpOfuFQg3qLRl9Ca1NgIBB5.jpg",
          }
        ],
        "5": [
          {
            "file_path": "/bZWnyk7oa1KZLYQQZzIPQMjdKRv.jpg",
          },
          {
            "file_path": "/nNqVw3RKEVRrSjTZrPZxlUzTNuz.jpg",
          }
        ],
        "6": [
          {
            "file_path": "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
          },
          {
            "file_path": "/djiDKVB07xTy7tDFbWb9k7KLI3E.jpg",
          },
          {
            "file_path": "/8jfaT1cCZWQgWoVE5R1E8I4oA8N.jpg",
          },
          {
            "file_path": "/xx65EuzQim0DN2zzJ9v9YhUVai6.jpg",
          },
          {
            "file_path": "/hMbP23EkGk6tjEjRZQXhnVAl5fW.jpg",
          },
          {
            "file_path": "/jihU8gtIoiNnU384wInqPdwOeYR.jpg",
          },
          {
            "file_path": "/9KUveULSPpJwAAsfquLx4Tg9gFJ.jpg",
          },
          {
            "file_path": "/t73w0R9T7nZQb9V32FcW1j4esC4.jpg",
          },
          {
            "file_path": "/q1zxx9UolC30fjBx4AmcNUAGopb.jpg",
          },
          {
            "file_path": "/hsteAtheVGatPywPSdwya6jRKWP.jpg",
          },
          {
            "file_path": "/voylnQBdsDLBN1HOZC7foLoMHy2.jpg",
          },
          {
            "file_path": "/fPZjYhpFs8yevbKwQFJYlcGi6Y6.jpg",
          },
          {
            "file_path": "/1eSecvUBleKtMoJNZKV7zZ4nnN.jpg",
          },
          {
            "file_path": "/zZYp68xC6L6DNfutes0PxwvieII.jpg",
          },
          {
            "file_path": "/rvOaDusWLtrp4URhYo5XmV2FMZZ.jpg",
          },
          {
            "file_path": "/4pc3aBu6qb97MaDOFT0Kup7UE2A.jpg",
          },
          {
            "file_path": "/zyN29sQmtqrWGmlQfUAnYzemqDr.jpg",
          }

        ]  
      },
      movies: [
        {
          "id": 1,
          "title": "Spider-Man: Far from Home"
        },
        {
          "id": 2,
          "title": "John Wick: Chapter 3 – Parabellum"
        },
        {
          "id": 3,
          "title": "The Lion King"
        },
        {
          "id": 4,
          "title": "Alita: Battle Angel"
        },
        {
          "id": 5,
          "title": "Pulled to Hell"
        },
        {
          "id": 6,
          "title": "Hellboy"
        },
      ]
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

  makeQuestion =  () => {
    let movie = this.chooseMovie();
    let movieId = movie.id.toString();
    let shuffledMoviePic = this.shuffle(this.state.image[movieId]);
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
        <GameState makeQuestion={this.makeQuestion} checkAnswer={this.checkAnswer} userChoice={this.userChoice} pic={this.state.image} result={this.state.result} counter={this.state.counter} />
      </div>
    );
  }
}


export default GameNav;