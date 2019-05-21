import React, { Component }from "react"
import { Link } from "react-router-dom"
// import logo from "../../../public/images/logo4.png"
import "./Auth.css"

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-body">
                <img src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558388006/imgs3P/logo4_ztirgz.png" style={{width: 100}} className="logo" alt="logo"/>
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
