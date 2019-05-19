import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import  logo2  from '../../images/logoTexto.png'
import Logout from "../Logout"
import "./Mainmenu.css"

export default class Mainmenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (

      <div className ="menu-body">
      <section className="barrita-d-menu">
        <div>
        <Logout/>
          <img className="logo-menu" src={logo2}/>

        </div>
      </section>
      <section className="button-menu">
        <div className="button-recipe">
          <p><Icon name='food' />Recetas</p>
        </div>
        <div className="button-reto">
          <p><Icon name='calendar alternate' />Retos semanales</p>
        </div>
        <div className ="button-ejercicio">
          <p><Icon name='heart' />Ejercicios</p>
        </div>
        <div className="button-shops">
          <p><Icon name='shopping basket' />Tiendas saludables</p>
        </div>
        <div className="button-profile">
          <p><Icon name='user circle' />Perfil</p>
          
        </div>
      </section>
      </div>
    )
  }
}
