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

class PlayerList extends Component{
  constructor() {
    super();
  }

  render() {
    // We can assign each player name a unique color, like we did in Chatty
    return (
      <div>
        <h1>Players</h1>
        <ul>
          <li>player1</li>
          {/* <li>player2</li>
          <li>player3</li>
          <li>player4</li>
          <li>player5</li> */}
        </ul>
      </div>
    ); 
  }
}

export default PlayerList;