import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class GameInfo extends Component{
  constructor() {
    super();
  }

  render() {
    const gameCategory = "Comedy";
    const lobbyUrl = "localhost:3000/Lobby";
    const gameUrl = "/game/dksdjfskd";
    return (
      <div>
        <h2>Category: {gameCategory}</h2>
        <h4>copy and send this url to friends</h4>
        <p className="lobby-url">URL: {lobbyUrl}</p>
        <Link to={{
          pathname: gameUrl,
          // state: {
          //   username
          // }
        }}>Start</Link>
      </div>
    );
  }
}

export default GameInfo;