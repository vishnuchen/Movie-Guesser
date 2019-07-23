import React, {Component} from 'react';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      timerStart: 0,
      timerTime: 10
    }
  }

  startTimer = () => {
    this.setState({
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 1;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
        console.log(this.state.timerTime)
      }
    }, 1000);
  }

  render() {
    return(
      <div>
        {window.onload = this.startTimer}
        <h1>{this.state.timerTime}</h1>
        {console.log(this.props.result)}
        { this.props.result ? clearInterval(this.timer) : "" }
      </div>
    );
  }
}

export default Countdown;