import React, { Component } from 'react'
import Logout from "../Logout"
import { Icon, Menu } from 'semantic-ui-react'
import "./BottomMenu.css"

export default class BottomMenu extends Component {
  render() {
    return (
      <div>
        <div>
        <section className="bottom-menu">
          <div>
           <i className="power off icon"></i>
           <p>Logout</p>
          </div>
          <div>
          <i className="home icon"></i>
          <p>Home</p>
          </div>
          <div>
          <i className="user icon"></i>
          <p>Profile</p>
          </div>
        </section>
        </div>
      </div>
    )
  }
}
