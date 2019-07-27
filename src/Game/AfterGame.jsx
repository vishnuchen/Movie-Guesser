import React, {Component} from "react";

class AfterGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
      <div class="row">
        <div class="name">Player1</div><div class="position">1</div>
      </div>

      <div class="row">
        <div class="name">Player2</div><div class="position">2</div>
      </div>

      <div class="row">
        <div class="name">Player3</div><div class="position">3</div>
      </div>

      <div class="row">
        <div class="name">Player4</div><div class="position">4</div>
      </div>

      <div class="row">
        <div class="name">Player5</div><div class="position">5</div>
      </div>
    </div>
    );
  }
}

export default AfterGame;