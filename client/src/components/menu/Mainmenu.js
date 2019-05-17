import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import  logo2  from '../../images/logo3.png'
import "./Mainmenu.css"

export default class Mainmenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (

      <div className ="menu-body">
      <section className="barrita-d-menu">
        <div>
          <img className="logo-menu" src={logo2} />
        </div>
      </section>
      <section className="button-menu">
        <div>
          <p><Icon name='food' />Recetas</p>
        </div>
        <div>
          <p><Icon name='calendar alternate' />Retos semanales</p>
        </div>
        <div>
          <p><Icon name='heart' />Ejercicios</p>
        </div>
        <div>
          <p><Icon name='shopping basket' />Tiendas saludables</p>
        </div>
        <div>
          <p><Icon name='user circle' />Perfil</p>
          
        </div>
      </section>
      </div>
    )
  }
}
