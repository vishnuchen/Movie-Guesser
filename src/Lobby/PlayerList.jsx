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

  // listItemMapper = () => {
  //   playerNames.map((item) => {
  //     return <li>{item}</li>
  //   });
  // }

  render() {

    // We can assign each player name a unique color, like we did in Chatty
    let playerNames = []
    console.log("hello",this.props.list);
    for (let name of this.props.list) {
        playerNames.push(name)
    }

    let listItemMapper = playerNames.map((item) => {
      return <li>{item}</li>
    })

    // console.log(listItemMapper)
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