import React, { Component }from "react"
import logo2 from "../../images/logo2.png"
import "./login.css"

export default class Login extends Component {
    render() {
        return (
            <div className="login-body">
                <img src={logo2} style={{width: 100}} className="logo2" alt="logo2"/>
                <div className="back-image-login"></div>
                <div className="back-color-login"></div>
                <div className="Buttons-login">
                    <div className="username-button-login">email</div>
                    <div className="password-button-login">password</div>
                    <div className="login-button-login">LOGIN</div>
                </div>
            </div>
        )
    }
}
