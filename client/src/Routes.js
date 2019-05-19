import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Auth from "./components/auth/Auth"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import Menu from "./components/menu/Mainmenu"
import Recipes from "./components/Recipes/Recipes"
import Createrecipe from "./components/createRecipe/Createrecipe";
import Recipedetail from "./components/recipeDetail/Recipedetail"
import HealthStore from "./components/Healthstore/Healthstore"

const Routes =() =>(
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/auth"} component={Auth}/>
        <Route exact path={"/signup"} component={Signup}/>
        <Route exact path = {"/stores"} component ={HealthStore}/>
        <Route exact path = {"/recipes"} component ={Recipes}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/menu"} component={Menu}/>
        <Route exact path={"/profile"} component={Profile}/>
        <Route exact path={"/new"} component={Createrecipe}/>
        <Route exact path={"/details"} component={Recipedetail}/>
    </Switch>
)


export default Routes