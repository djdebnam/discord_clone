import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
export default class CreateAccount extends React.Component{
  state = {
    email: '',
    password: ''
  }

  handleUsernameChange = event => {
    console.log("Update")
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    console.log("Update")
    this.setState({ password: event.target.value })
  }


  PostAccount = event => {
    console.log("POST")
    axios.post("localhost:9090/createaccount", {
      username: this.state.email, 
      password: this.state.password, 
      phone: "", 
      email: ""
    }).then((response) => {
      console.log(response.status);
      print(response.data);
    })
  }

  render() {
    return (
      <div>
        <TitleBar />
        <div className="accent-primary"></div>
        <div className="accent-secondary"></div>
        <div className="overlay"></div>

        <div id="create-container">
          <h2 id="create-header">Create an Account</h2>
          {/* <h4 id="create-subheader">Let's get started!</h4> */}
          <div id="create-email-title">Email</div>
          <input id="create-email" type="text" onChange={this.handleUsernameChange}></input>
          <div id="create-password-title">Password</div>
          <input id="create-password" type="password" onChange={this.handlePasswordChange}></input>
          <div id="create-password-title2">Re-type Password</div>
          <input id="create-password2" type="password"></input>
          <Link to="/dashboard/home">
            <button id="create-button" onClick={this.PostAccount} className="secondary-color-button">
              Continue
            </button>
          </Link>
        </div>
        <div id="create-container-background-primary"></div>
      </div>
    )
  }
};