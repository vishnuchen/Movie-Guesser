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
  constructor(props) {
    super(props);
  }

  render() {

    // We can assign each player name a unique color, like we did in Chatty
    let playerNames = []
    for (let name of this.props.list) {
      // console.log(name)
      for (let x in name) {
        playerNames.push(x)
      }
    }
    let listItemMapper = playerNames.map((item) => {
      return <li>{item}</li>
    })

    // let listItemMapper = playerNames.map((item) => {
    //   return <li>{item}</li>
    // })

    return (
      <div>
        <h2>Players</h2>
        <ul className="player-list-list">
          {listItemMapper}
        </ul>
      </div>
    );
  }
}

export default PlayerList;