import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameInfo from './GameInfo.jsx';
import PlayerList from './PlayerList.jsx';
import Login from './Login.jsx'

class LobbyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginShow: false,
      currentPlayer: [],
      playerList: []
    }
  }

  componentDidMount() {
    this.props.socket.emit('test');
    this.props.socket.on('test', function(msg) {
      console.log('connected to server');
    })
    this.props.socket.on('name_display', (playerList) => {
      console.log('this is the current list of players', playerList)
      this.props.updateList(playerList);

      this.setState({
        playerList: playerList
      })
    })
  }

  toggleLogin = () => {
    this.setState({
      loginShow: !this.state.loginShow
    });
  }

  setUsername = (username) => {
    // let newPlayer = { [username]: 0 }
    this.props.currentPlayer(username)
    this.toggleLogin();
    this.props.socket.emit('player_entrance', username)
  }

  render() {
    console.log("LobbyNav", this.state.playerList)
    const filmElement = <FontAwesomeIcon icon={faFilm} />
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <a className="navbar-brand" href="/">{filmElement}MovieGuesser</a>
          <div className="login">
            <Login show={this.state.loginShow} onClose={this.toggleLogin} setUsername={this.setUsername} />
            <button name="login" onClick={this.toggleLogin}>
              Join
            </button>
          </div>
        </nav>
        <div className="lobby-main">
          <div className="game-info">
            <GameInfo socket={this.props.socket} playerList={this.state.playerList} />
          </div>
          <div className="player-list">
            <PlayerList list={this.state.playerList} />
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyNav;