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
          <li>{this.props.list}</li>
        </ul>
      </div>
    ); 
  }
}

export default PlayerList;