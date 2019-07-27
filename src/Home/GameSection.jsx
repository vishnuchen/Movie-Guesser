import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class GameSection extends Component {
  constructor() {
    super();
  }

  render() {
    const PlayButtonElement = <FontAwesomeIcon icon={faVideo} />
    return (
        <div className="game-section-all">
          <div className="wannaplay">
           <h2>Wanna play?</h2>
          </div>
          <div>
            <h3 className="game-section-all">Popular Movies</h3>
            <img src="https://image.tmdb.org/t/p/original/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg" />
            <Link to="/lobby">Play {PlayButtonElement}</Link>
          </div>
        </div>
    )
  }
}


export default GameSection;
