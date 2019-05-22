import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Icon } from 'semantic-ui-react'
// import  logo2  from '../../../public/images/logoTexto.png'
import "./Mainmenu.css"
import BottomMenu from "../bottom-menu/BottomMenu"

export default class Mainmenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (

      <div className ="menu-body">
      <section className="barrita-d-menu">
        <div>
          <img className="logo-menu" src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558387997/imgs3P/logoTexto_qb6xcr.png" alt="logo"/>

        </div>
      </section>
      <section className="button-menu">
        <div className="button-recipe">
          <p><Icon name='food' />Recetas</p>
          <button className="button-enter"> <Link to ="./recipes">Selecciona una receta</Link></button>
        </div>
        <div className="button-reto">
          <p><Icon name='calendar alternate' />Retos semanales</p>
          <button className="button-enter"> <Link to ="./challenge">Inicia un reto </Link></button>
        </div>
        <div className ="button-ejercicio">
          <p><Icon name='heart' />Ejercicios</p>
          <button className="button-enter"><Link to ="./excercise">Selecciona una rutina</Link></button>
        </div>
        <div className="button-shops">
          <p><Icon name='shopping basket' />Tiendas saludables</p>
          <button className="button-enter"> <Link to = "/stores">Busca una tienda</Link></button>
        </div>
        <div className="button-profile">
          <p><Icon name='user circle' />Perfil</p>
          <button className="button-enter"><Link to ="/profile">Entrar</Link></button>
          
        </div>
      </section>
      <div className="sticky-menu">
      <BottomMenu/>
      </div>
      </div>
    )
  }
}
