import React, { Component }from "react"
import logo from "../../images/logo4.png"
import "./Auth.css"

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-body">
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
