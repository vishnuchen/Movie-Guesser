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
import Home from "./Home/Home.jsx"
import LobbyNav from "./Lobby/LobbyNav.jsx";
import GameNav from "./Game/GameNav.jsx";
import '../styles/home.css';
import '../styles/game.css';
import '../styles/lobby.css';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

class App extends Component {
  constructor() {
    super()
    this.state={}
  }

  componentDidMount() {
    socket.emit('trigger_questions')
    socket.on('trigger_questions', (questions) => {
      this.setState({
        mvq: questions
      }, () => {
        console.log(this.state.mvq)
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path="/"
            render={(props) => <Home {...props} socket={socket} />}
          />
          <Route
            path="/lobby"
            render={(props) => <LobbyNav {...props} socket={socket} />}
          />
          <Route
            path="/game"
            render={(props) => <GameNav {...props} socket={socket} mvq={this.state.mvq} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
