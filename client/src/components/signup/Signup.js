import React, { Component }from "react"
import logo2 from "../../images/logo2.png"
import "./signup.css"

export default class Signup extends Component {
  render() {
      return (
          <div className="signup-body">
              <img src={logo2} style={{width: 100}} className="logo2" alt="logo2"/>
              <div className="back-image-signup"></div>
              <div className="back-color-signup"></div>
              <div className="Buttons-signup">
                  <div className="username-button-signup">Username</div>
                  <div className="email-button-signup">email</div>
                  <div className="password-button-signup">password</div>
                  <div className="signup-button-signup">SIGNUP</div>
              </div>
          </div>
      )
  }
}

