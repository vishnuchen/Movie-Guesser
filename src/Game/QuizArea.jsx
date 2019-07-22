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
    const picArray = this.props.pic;
    const pic1 = "https://image.tmdb.org/t/p/original" + picArray[1].file_path;
    const pic2 = "https://image.tmdb.org/t/p/original" + picArray[2].file_path;
    const pic3 = "https://image.tmdb.org/t/p/original" + picArray[3].file_path;
    const pic4 = "https://image.tmdb.org/t/p/original" + picArray[4].file_path;

    return (
      <div>
        <div className="movie-img">
          <img src={pic1} style={{width:100}} />
          <img src={pic2} style={{width:100}} />
          <img src={pic3} style={{width:100}} />
          <img src={pic4} style={{width:100}} />

        </div>
        <button value="y" onClick={this.onClick}>Correct</button>
        <button value="n" onClick={this.onClick}>Wrong</button>
        <h1>{this.props.ans}</h1>
      </div>
    )
  }
}

export default QuizArea;