import React, {Component} from "react";



class QuizArea extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    let result = e.target.value;

    this.props.userChoice(result);
    this.setState({tans: e.target.value});
    this.props.userChoice(e.target.value);
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.disableButton();
    this.props.checkAnswer();
  }

  render() {
    const mvq = this.props.mvq;
    console.log(mvq)
    const pics = [];
    for (let pic of mvq.moviePic) {
      pics.push("https://image.tmdb.org/t/p/original" + pic.file_path);
    }
    const movieQues = mvq.questionChoice;

    return (
      <div>
        <div className="movie-img">
          <div>
            <img src={pics[0]} />
            <img src={pics[1]} />
          </div>
          <div>
            <img src={pics[2]} />
            <img src={pics[3]} />
          </div>
        </div>
        <form id="form1">
          <div>
            <div className="answer-checkbox">
              <input type="radio" name="choice" value={movieQues[0]} checked={this.props.userAnswer === movieQues[0]} onChange={this.onChange} />
              <span className="answer-content">{movieQues[0]}</span>
            </div>
            <div className="answer-checkbox">
              <input type="radio" name="choice" value={movieQues[1]} checked={this.props.userAnswer === movieQues[1]} onChange={this.onChange} />
              <span className="answer-content">{movieQues[1]}</span>
            </div>
          </div>
          <div>
            <div className="answer-checkbox">
              <input type="radio" name="choice" value={movieQues[2]} checked={this.props.userAnswer === movieQues[2]} onChange={this.onChange} />
              <span className="answer-content">{movieQues[2]}</span>
            </div>
            <div className="answer-checkbox">
              <input type="radio" name="choice" value={movieQues[3]} checked={this.props.userAnswer === movieQues[3]} onChange={this.onChange} />
              <span className="answer-content">{movieQues[3]}</span>
            </div>
          </div>
          {/* <button disabled={this.props.buttonDisable} onClick={this.onClick}>Submit</button> */}
        </form>
        <h3>{this.props.result}</h3>
      </div>
    )
  }
}

export default QuizArea;