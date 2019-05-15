import React, { Component }from "react"
import logo from "../../src/images/logo1.png"
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login-body">
                <img src={logo} style={{width: 100}} className="logo" alt="logo"/>
                <div className="back-image"></div>
                <div className="back-color"></div>
                <div className="Buttons">
                    <div className="login-button">Login</div>
                    <div className="signup-button">Sign Up</div>
                </div>
            </div>
        )
    }
}
