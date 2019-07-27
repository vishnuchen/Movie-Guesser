import React, {Component} from 'react';

class GameProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="progress-bar">
          <Filler counter={this.props.counter + 60} />
        </div>
    );
  }
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.counter}px` }} />
}

export default GameProgressBar;