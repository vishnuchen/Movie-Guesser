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
      currentPlayer: {
        name:"",
        score: 0
      },
    }
  }

  componentDidMount() {
    this.props.socket.emit('test');
    this.props.socket.on('test', function(msg) {
      console.log('connected to server');
    })
    this.props.socket.on('name_display', (gameObject) => {
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
      this.props.socket.emit('player_entrance', new_player)
    // })
  }

  render() {
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
            <GameInfo socket={this.socket} />
          </div>
          <div className="player-list">
           { /* <PlayerList list={this.state.game} /> */}
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyNav;