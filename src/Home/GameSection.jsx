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
          <div>
          <h2>Wanna play?</h2>
            <h3>Popular Movies</h3>
            <Link to="/lobby">Play {PlayButtonElement}</Link>
            <img src="/../../popular2.png" />
          </div>
        </div>
    )
  }
}


export default GameSection;
