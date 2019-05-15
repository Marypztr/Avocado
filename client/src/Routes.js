import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Createrecipe from "./components/Createrecipe";
import Recipedetail from "./components/Recipedetail"

const Routes =() =>(
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/signup"} component={Signup}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/profile"} component={Profile}/>
        <Route exact path={"/new"} component={Createrecipe}/>
        <Route exact path={"/details"} component={Recipedetail}/>
    </Switch>
)


export default Routes