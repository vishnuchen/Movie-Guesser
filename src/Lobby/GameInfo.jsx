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
    this.state={
      redirect: false
    }
  }

  componentDidMount() {
    this.props.socket.on('start_game', (start) => {
      this.setState({
        redirect: true
      }, () => {
        console.log(this.state.redirect)
      })
    })
  }

  handleOnClick = () => {
    this.props.socket.emit('start_game')
  }

  render() {
    const lobbyUrl = "localhost:3000/lobby";
    const gameUrl = "/game/dksdjfskd";

    if (this.state.redirect) {
      return <Redirect push to="/game" />
    }

    return (
      <div>
        {/* <h2>Category: {gameCategory}</h2> */}
        <h4>copy and send this url to friends</h4>
        <p className="lobby-url">URL: {lobbyUrl}</p>
        <button className="start" onClick={this.handleOnClick}>Start</button>
      </div>
    );
  }
}

export default GameInfo;