import React, { Component } from "react";
import "./BottomMenu.css";
import { Link } from "react-router-dom";
import Logout from "../Logout"

export default class BottomMenu extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="bottom-menu">
            <div>
              
              <Link className="link" to="/auth">
              <Logout/>
                <p>Logout</p>
              </Link>
            </div>
            <div>
              <Link className="link" to="/menu">
                <i className="home icon" />
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link className="link" to="/profile">
                <i className="user icon" />
                <p>Profile</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
