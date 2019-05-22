import React, { Component } from 'react'
import AuthService from "../services/Auth"
import toastr from "toastr"
import { withRouter } from "react-router"

const service = new AuthService()

class Logout extends Component {
  handleLogout = () =>{
    service 
    .loogedOut()
    .then (response =>{
      toastr.success("successful logout!!")
      window.localStorage.clear() 
      this.props.history.push('/login')
    })
    .catch(err => toastr.error(err))
  }

  render() {
    return (
       <div className="logout-button" onClick={this.handleLogout}>
         <i className="power off icon"></i>
       </div>
    )
  }
}

export default withRouter(Logout)