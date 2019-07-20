import React, {Component} from 'react';
import GameSection from "./GameSection.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
  constructor() {
    super();
    this.state = {};
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
        <GameSection />
      </div>
      );
    }
}
export default Home;
