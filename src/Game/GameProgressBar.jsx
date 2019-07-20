import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

class GameProgessBar extends Component {
  constructor() {
    super();
  }

  render() {
    const gameCat = "Comedy";
    const HourglassElement = <FontAwesomeIcon icon={faHourglassHalf} />

    return(
      <div>
        <div className="game-cat">
          Category: {gameCat} (fake category)
        </div>
        <div>
          ========================(fake progress bar)
        </div>
        <div>
          {HourglassElement} 30S (fake timer)
        </div>
      </div>
    );
  }
}

export default GameProgessBar;

