import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Auth from "./components/auth/Auth"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import Createrecipe from "./components/createRecipe/Createrecipe";
import Recipedetail from "./components/recipeDetail/Recipedetail"

const Routes =() =>(
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/auth"} component={Auth}/>
        <Route exact path={"/signup"} component={Signup}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/profile"} component={Profile}/>
        <Route exact path={"/new"} component={Createrecipe}/>
        <Route exact path={"/details"} component={Recipedetail}/>
    </Switch>
)


export default Routes