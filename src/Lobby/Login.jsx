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

  render() {
    if (!this.props.show) {
      return null;
    }

    return(
      <div className="modal">
        <input name="username" />
        <button onClick={this.props.onClose}>
          Close
        </button>
      </div>
    );
  }

}

export default Login;