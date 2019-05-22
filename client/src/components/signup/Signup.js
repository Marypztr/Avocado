import React, { Component }from "react"
// import logo2 from "../../../public/images/logo2.png"
import AuthService from "../../services/Auth"
import "./signup.css"
import toastr from "toastr"

const service = new AuthService()
 
export default class Signup extends Component {
    state = {
        form: {
          name: '',
          email: '',
          password:''
        },
        navigate: false
      }
      handleInput = e => {
        const { form } = this.state
        form[e.target.name] = e.target.value
        this.setState(form)
        
      }
      handleSubmit = e => {
        e.preventDefault()
        service
          .signup(this.state.form)
          .then(res => {
            if(res.message) return toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣')
            console.log(res)
            toastr.success('Nice!!')
            window.localStorage.setItem('loggedUser', JSON.stringify(res.data))
            //setTimeout(() => this.setState({ navigate: true }), 2000)
            this.props.history.push('/profile')
          })
          .catch(err => console.log(err))
      }
    
  render() {
      return (
          <div className="signup-body">
              <img src="https://res.cloudinary.com/djkjuiyan/image/upload/v1558388015/imgs3P/logo2_af6rww.png" style={{width: 120}} className="logo2" alt="logo2"/>
              <div className="back-image-signup"></div>
              <div className="back-color-signup"></div>
              <div className="Buttons-signup">
                  <input name="name" className="username-button-signup" value={this.state.form.name} onChange={this.handleInput} placeholder ="Username" type="text"></input>
                    <input name="email" className="email-button-signup" value={this.state.form.email} onChange={this.handleInput} placeholder ="Email" type="text"></input>
                    <input name="password" className="password-button-signup" value={this.state.form.password} onChange={this.handleInput} placeholder ="Password" type="password"></input>
                  <button  type="submit" className="signup-button-signup" onClick={this.handleSubmit}>SIGNUP</button>
              </div>
          </div>
      )
  }
}
