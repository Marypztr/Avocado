import React, { Component } from 'react';
import './recipe.css';
import { Icon } from 'semantic-ui-react'
import BottomMenu from '../bottom-menu/BottomMenu';
import  logo2  from '../../images/logoTexto.png';

export default class Recipes extends Component {
  render() {
    return (
      <div>
          <section>
            <img className="logo-menu" src={logo2} alt="logo"/>
          </section>
          <section className="add-position">
            <div className="add-button"><Icon name='plus circle' />Publica tu propia receta.</div>
          </section>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="table-position">
            <section className="recipe-list">
              <div>
                <p className="recipe-title">Chilaquiles Ovoláctovegetariano.</p>
              </div>
            </section>
          </div>
          <div className="sticky-menu">
          <BottomMenu/>
        </div>      
      </div>
    )
  }
}


