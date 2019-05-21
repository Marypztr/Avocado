import React, { Component } from 'react';
import './recipe.css';
import { Icon } from 'semantic-ui-react'
import BottomMenu from '../bottom-menu/BottomMenu';
import Recipe from "../../components/JSON/Recetas"

// import  logo2  from '../../../public/images/logoTexto.png';

export default class Recipes extends Component {
  state ={
    details:[]
    
  }
  render() {
    return (
      <div>
          <section>
            <img className="logo-menu" src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558387997/imgs3P/logoTexto_qb6xcr.png" alt="logo"/>
          </section>
          <section className="add-position">
            <div className="add-button"><Icon name='plus circle' />Publica tu propia receta.</div>
          </section>
          {Recipe.map((e,i)=>{
            return <div className="table-position">
              <section className="recipe-list">
                <div>
                  <p className="recipe-title">{e.name}</p>
                  <img className="preview-image" src={e.image} alt="preview" />
                </div>
              </section>
            </div>
          })}
          <div className="sticky-menu">
          <BottomMenu/>
        </div>      
      </div>
    )
  }
}


