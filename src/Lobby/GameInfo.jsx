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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.socket)
  }

  render() {
    // const gameCategory = "Comedy";
    const lobbyUrl = "localhost:3000/lobby";
    const gameUrl = "/game/dksdjfskd";
    return (
      <div>
        {/* <h2>Category: {gameCategory}</h2> */}
        <h4>copy and send this url to friends</h4>
        <p className="lobby-url">URL: {lobbyUrl}</p>

        <div>
          <Link to={{
            pathname: gameUrl,
            // state: {
            //   test: 'test',
            //   socket: this.props.socket
            // }
          }}><span className="start">Start</span></Link>
        </div>
      </div>
    );
  }
}

export default GameInfo;