import React, { Component } from 'react'
import AuthService from "../services/Auth"
import toastr from "toastr"

const service = new AuthService()

export default class Logout extends Component {
  handleLogout = () =>{
    service 
    .loogedOut()
    .then (response =>{
      toastr.success("successful logout!!")
      window.localStorage.clear() 
      return this.props.history.push('/login')
    })
    .catch(err => toastr.error(err))
  }

  render() {
    return (
       <div className="logout-button" onClick={this.handleLogout}>
         <i class="power off icon"></i>
       </div>
    )
  }
}
