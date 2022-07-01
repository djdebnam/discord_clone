import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
export default class CreateAccount extends React.Component{
  state = {
    user: '',
    password: ''
  }

  handleUsernameChange = event => {
    this.setState({ user: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }


  Login = async event => {
    console.log("GET")
    var url = "http://localhost:9090/authenticate" + 
    "?user=" + this.state.user + 
    "&password=" + this.state.password
    console.log(url)
    await axios.get(url)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
    })
  }

  render() {
    return (
      <div>
        <TitleBar />
        <div className="accent-primary"></div>
        <div className="accent-secondary"></div>
        <div className="overlay"></div>

        <div id="login-container">
          <h2 id="login-header">Welcome!</h2>
          <h4 id="login-subheader">Let's get started!</h4>
          <div id="login-email-title">Email</div>
          <input id="login-email" type="text" onChange={this.handleUsernameChange}></input>
          <div id="login-password-title">Password</div>
          <input id="login-password" type="password" onChange={this.handlePasswordChange}></input>
          <Link to="/dashboard/home">
            <button id="login-button" onClick={this.Login} className="primary-color-button">
              Login
            </button>
          </Link>
          <div className="login-links">
            <a href="/">Forgot Password?</a>
            <a href="/createaccount">Create Account</a>
          </div>
        </div>
        <div id="login-container-background-primary"></div>
      </div>
    );
  }
};
