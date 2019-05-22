import React, { Component }from "react"
import "./Home.css"
//import logo from "../../../public/images/logo4.png"


export default class Home extends Component {
  render() {
        setTimeout(() => {
          this.props.history.push(`/auth`);
    }, 2000)
    return (
      <div className="body-home">
        <img src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558388006/imgs3P/logo4_ztirgz.png" style={{width: 100}} className="logo" alt="logo"/>  
      <div className="back-image-home"></div>
      <div className="back-color-home"></div>
        <h1>LOGRA TUS METAS VOCADO AVOCADO</h1>
      </div>
    )
  }
}
