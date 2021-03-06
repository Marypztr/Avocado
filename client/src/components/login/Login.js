import React, { Component }from "react"
import AuthService from "../../services/Auth"
// import logo2 from "../../../public/images/logo2.png"
import "./login.css"
import toastr from "toastr"

const service = new AuthService()
 
export default class Login extends Component {
    componentWillMount() {
        const user = localStorage.getItem("loggedUser")
        console.log(user)
        if ( user )  return this.props.history.push("/profile")
    }

    state ={
        form:{
            email:"",
            password:""
        }
    }

    handleInputs = e => {
        const { form } = this.state
        form[e.target.name] = e.target.value
        this.setState (form)
        console.log(this.state.form)
    }

    handleSubmit = () =>{
        const { form } = this.state
        service
        .login(form)
        .then(response => {
            console.log(response.message)
          if(response.message) return toastr.error('Bu. Algo salió mal. Intentalo de nuevo.')
          window.localStorage.setItem('loggedUser',JSON.stringify(response))
          toastr.success('¡Genial! Bienvenido.')
          this.props.history.push('/profile')
        })
        .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo.'))
  
    }

    render() {
        return (
            <div className="login-body">
                <img src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558388016/imgs3P/logo1_wzludh.png" style={{width: 100}} className="logo2" alt="logo2"/>
                <div className="back-image-login"></div>
                <div className="back-color-login"></div>
                <div className="Buttons-login">
                    <input name="email" className="username-button-login" onChange={this.handleInputs} placeholder ="Email" value={this.state.form.email} type="text"></input>
                    <input name="password" className="password-button-login" onChange={this.handleInputs} placeholder ="Password" value={this.state.form.password} type="password"></input>
                    <button className="login-button-login" onClick={this.handleSubmit}>LOGIN</button>
                </div>
            </div>
        )
    }
}
