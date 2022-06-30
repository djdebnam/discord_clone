import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
export default class CreateAccount extends React.Component{
  state = {
    username: 'test',
    password: 'test',
    phone: 'test',
    email: 'test'
  }

  handleUsernameChange = event => {
    console.log("Update")
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = event => {
    console.log("Update")
    this.setState({ password: event.target.value })
  }


  PostAccount = async event => {
    const headers = {
      //'Content-Type': 'application/json',
      'Content-Length': JSON.stringify(this.state).length
    }
    console.log("POST")
    await axios.post("http://localhost:9090/createaccount", this.state, {
      headers: headers
    }).then((response) => {
      console.log(response.status);
    })

    // await fetch("http://localhost:9090/createaccount", {
    //   method: 'POST',
    //   body: JSON.stringify(this.state)
    // });
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