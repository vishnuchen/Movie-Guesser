import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.setUsername(e.target.value);
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return(
      <div className="modal">
        <input name="username" onKeyDown={this.onKeyDown} />
        <button onClick={this.props.onClose}>
          Enter
        </button>
      </div>
    );
  }

}

export default Login;