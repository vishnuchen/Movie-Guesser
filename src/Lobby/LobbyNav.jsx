import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameInfo from './GameInfo.jsx';
import PlayerList from './PlayerList.jsx';
import openSocket from 'socket.io-client';
import Login from './Login.jsx'

const socketClient = openSocket('http://localhost:3001');
class LobbyNav extends Component {
  constructor() {
    super();
    this.socket = socketClient;
    this.state = {
      loginShow: false,
      username: "",
      game: []
    }
  }

  componentDidMount() {
    this.socket.emit('test');
    this.socket.on('test', function(msg) {
      console.log('connected to server');
    })
    this.socket.on('name_display', (gameObject) => {
      console.log('this is the gameObject', gameObject)
      this.setState({
        game: gameObject
      })
    })
    
  }

  toggleLogin = () => {
    this.setState({
      loginShow: !this.state.loginShow
    });
  }

  setUsername = (username) => {
    let new_player = { [username]: 0 }
    // this.setState({
    //   game: this.state.game.concat(new_player)
    // }, () => {
      this.toggleLogin();
      this.socket.emit('player_entrance', new_player)
    // })
  }

  render() {
    const filmElement = <FontAwesomeIcon icon={faFilm} />
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-brand" href="/">
              {filmElement}MovieGuesser
            </a>

            <button onClick={this.toggleLogin}>
              Login
            </button>

            <Login show={this.state.loginShow} onClose={this.toggleLogin} setUsername={this.setUsername} />
        </nav>
        <div className="lobby-main">
          <div className="game-info">
            <GameInfo />
          </div>
          <div className="player-list">
            <PlayerList list={this.state.game} />
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyNav;