import React, {Component} from "react";



class QuizArea extends Component {
  constructor(props) {
    super(props);

    this.state={
      buttonDisable: false,
      tans:"",
      mvq: this.props.makeQuestion()
    }
  }

  onChange = (e) => {
    this.setState({tans: e.target.value});
    this.props.userChoice(e.target.value);
  }

  onClick = (e) => {
    this.setState({buttonDisable: true});
    this.props.checkAnswer();
  }

  render() {
    const mvq = this.state.mvq;
    const pics = [];
    for (let pic of mvq.moviePic) {
      pics.push("https://image.tmdb.org/t/p/original" + pic.file_path);
    }
    const movieQues = mvq.questionChoice;
    
    return (
      <div>
        <div className="movie-img">
          <img src={pics[0]} style={{width:100}} />
          <img src={pics[1]} style={{width:100}} />
          <img src={pics[2]} style={{width:100}} />
          <img src={pics[3]} style={{width:100}} />
        </div>
        <form id="form1"> 
          <table>
            <tbody>
              <tr>
                <td className="answer-checkbox">
                  <input type="radio" name="choice" value={movieQues[0]} checked={this.state.tans === movieQues[0]} onChange={this.onChange} />
                </td>
                <td className="answer-content">
                  {movieQues[0]}
                </td>
              </tr>
              <tr>
                <td className="answer-checkbox">
                  <input type="radio" name="choice" value={movieQues[1]} checked={this.state.tans === movieQues[1]} onChange={this.onChange} />
                </td>
                <td className="answer-content">
                {movieQues[1]}
                </td>
              </tr>
              <tr>
                <td className="answer-checkbox">
                  <input type="radio" name="choice" value={movieQues[2]} checked={this.state.tans === movieQues[2]} onChange={this.onChange} />
                </td>
                <td className="answer-content">
                {movieQues[2]}
                </td>
              </tr>
              <tr>
                <td className="answer-checkbox">
                  <input type="radio" name="choice" value={movieQues[3]} checked={this.state.tans === movieQues[3]} onChange={this.onChange} />
                </td>
                <td className="answer-content">
                {movieQues[3]}
                </td>
              </tr>
            </tbody>
          </table>
          <button disabled={this.state.buttonDisable} onClick={this.onClick}>Submit</button>
        </form>
        <h3>{this.props.result}</h3>
        {/* <form id="form1"> 
          <tr>
            <td className="answer-checkbox">
              <input type="checkbox" />
            </td>
            <td className="answer-content">
              This is the correct anwser
            </td>
          </tr>
          <tr>
            <td className="answer-checkbox">
              <input type="checkbox" />
            </td>
            <td className="answer-content">
              This is the wrong anwser
            </td>
          </tr>
          <button type="submit" form="form1" onClick={this.onClick}>Submit</button>
        </form> */}
      </div>
    )
  }
}

export default QuizArea;