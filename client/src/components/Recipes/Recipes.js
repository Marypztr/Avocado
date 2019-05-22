import React, { Component } from 'react';
import './recipe.css';
import AppServices from "../../services/AppServices"
import BottomMenu from '../bottom-menu/BottomMenu';
//import Recipe from "../../components/JSON/Recetas"
import {Link} from "react-router-dom";

 const service = new AppServices()

 
 
 export default class Recipes extends Component {
   state ={
     recipes:[]
     
    }
    
    componentDidMount(){
      service
      .recipes()
      .then(response => this.setState({recipes: response}))
      .catch(err => err)
  }
  render() {
    return (
      <div>
          <section>
            <img className="logo-menu" src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558387997/imgs3P/logoTexto_qb6xcr.png" alt="logo"/>
          </section>
          {this.state.recipes.map((e,i)=>{
            return <Link key={i}  to={`/details/${e._id}`}>
            <div className="table-position">
              <section className="recipe-list">
                  <div>
                    <p className="recipe-title">{e.name}</p>
                    <img className="preview-image" src={e.image} alt="preview" />
                  </div>
              </section>
            </div>
                </Link>
          })}
          <div className="sticky-menu">
          <BottomMenu/>
        </div>      
      </div>
    )
  }
}


