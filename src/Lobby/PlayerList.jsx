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

  // playerName = () => {
  //   for (let name of this.props.list) {
  //     return <li> {name.key} </li>
  //   }
  // }

  render() {
    // We can assign each player name a unique color, like we did in Chatty
    let playerNames = []
    for (let name of this.props.list) {
      // console.log('looking for this', Object.keys(name))
      for (let x in name) {
        playerNames.push(x)
      }
    }

    let listItemMapper = playerNames.map((item) => {
      return <li>{item}</li>
    })
    
    return (
      <div>
        <h1>Players</h1>
        <ul class="player-list-list">
          {listItemMapper}      
        </ul>
      </div>
    );
  }
}

export default PlayerList;