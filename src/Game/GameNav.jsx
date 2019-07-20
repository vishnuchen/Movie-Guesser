import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameState from './GameState.jsx';


class GameNav extends Component {
  constructor() {
    super();
    this.state={ans:""};
  }

  checkAnswer = (ans) => {
    if(ans == "y") {
      this.setState({ans:"correct"});
    } else {
      this.setState({ans:"wrong"});
    }
    
  }

  render() {
    const filmElement = <FontAwesomeIcon icon={faFilm} />
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-brand" href="/">
              {filmElement}MovieGuesser
            </a>
        </nav>
        <GameState checkAnswer={this.checkAnswer} ans={this.state.ans}/>
      </div>
    );
  }
}


export default GameNav;