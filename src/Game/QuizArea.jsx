import React, {Component} from "react";



class QuizArea extends Component {
  constructor() {
    super();
    this.state={buttonDisable: false}
  }

  onChange = (e) => {
    e.preventDefault();
    let result = e.target.value;
    console.log(result);
    
    this.props.userChoice(result);
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({buttonDisable: true})
    this.props.checkAnswer();
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
        <form id="form1"> 
          <tr>
            <td className="answer-checkbox">
              <input type="radio" name="choice" value="1" onChange={this.onChange}/>
            </td>
            <td className="answer-content">
              This is the correct anwser
            </td>
          </tr>
          <tr>
            <td className="answer-checkbox">
              <input type="radio" name="choice" value="2" onChange={this.onChange}/>
            </td>
            <td className="answer-content">
              This is the wrong anwser
            </td>
          </tr>
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