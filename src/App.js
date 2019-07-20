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
import '../styles/application.scss';

class App extends Component {
  render() {
    return (
      <Router> 
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/lobby" component={LobbyNav} />
          <Route path="/game" component={GameNav} />
        </div>
      </Router>
    );
  }
}

export default App;
