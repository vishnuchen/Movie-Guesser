import React, {Component} from 'react';

class GameProgressBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="progress-bar-container">
        <div className="progress-bar">
          <Filler counter={this.props.counter} />
        </div>
      </div>
    );
  }
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.counter}px` }} />
}

export default GameProgressBar;