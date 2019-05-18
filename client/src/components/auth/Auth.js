import React, { Component }from "react"
import { Link } from "react-router-dom"
import logo from "../../images/logo4.png"
import login from "../login/Login"
import signup from "../signup/Signup"
import "./Auth.css"

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-body">
                <img src={logo} style={{width: 100}} className="logo" alt="logo"/>
                <div className="back-image"></div>
                <div className="back-color"></div>
                <div className="Buttons">
              <div> <Link to = "/login" className="login-button"> Login </Link> </div> 
              <div> <Link to ="/signup" className="signup-button"> Sign Up</Link> </div> 
                </div>
            </div>
        )
    }
}
