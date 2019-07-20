import React, {Component} from "react";



class QuizArea extends Component {
  constructor() {
    super();

  }

  onClick = (e) => {
    let result = e.target.value;
    console.log(result);
    
    this.props.checkAnswer(result);
  }

  render() {
    return (
      <div>
        <button value="y" onClick={this.onClick}>Correct</button>
        <button value="n" onClick={this.onClick}>Wrong</button>
        <h1>{this.props.ans}</h1>
      </div>
    )
  }
}

export default QuizArea;