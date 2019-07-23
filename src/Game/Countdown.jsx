import React, {Component} from 'react';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 10
    }
  }

startTimer = () => {
  this.setState({
    timerOn: true,
    timerTime: this.state.timerTime,
    timerStart: this.state.timerTime
  });
  this.timer = setInterval(() => {
    const newTime = this.state.timerTime - 1;
    if (newTime >= 0) {
      console.log(newTime);
      this.setState({
        timerTime: newTime
      });
    } else {
      clearInterval(this.timer);
      this.setState({ timerOn: false });
    }
  }, 1000);
}

pauseTimer = () => {
  console.log('Clicked');
  clearInterval(this.timer);
  this.setState({ timerOn: false });
}

  render() {
    return(
      <div>
        <h1>{this.state.timerTime}</h1>
        <button onClick={this.startTimer}>Start timer</button>
        <button onClick={this.pauseTimer}>Pause timer</button>
      </div>
    );
  }
}

export default Countdown;