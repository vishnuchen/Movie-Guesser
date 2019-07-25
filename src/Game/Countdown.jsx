import React, {Component} from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: 0,
      timerTime: 5,
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      if ((this.props.counter / 60) <= 4) {
        const newTime = this.state.timerTime - 1;
        if (newTime > 0) {
          this.setState({
            timerTime: newTime
          });
          console.log(this.state.timerTime);
        } else {
          this.props.checkAnswer();
          this.props.nextQuestion();
          this.setState({
            timerTime: 5,
          })
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <div>
        <h1>{this.state.timerTime}</h1>
        {console.log(this.props.result)}
        {/* { this.props.result ? clearInterval(this.timer) : "" } */}
      </div>
    );
  }
}

export default Countdown;