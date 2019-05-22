import axios from "axios"

const baseURL = "http://localhost:3000"

class AuthService {
  constructor(){
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  signup = form => {
    return this.service
    .post ("/signup",form)
    .then(({ data }) => data)
    .catch (err => err)
  }

  login = form => {
    return this.service
    .post ("/login", form)
    .then(response => response)
    .catch (err => err)
  }

  loogedOut = () =>{
    return this.service
    .get("/logout")
    .then(response => response)
    .catch ( err => err)
  }

  loggedin = () => {
    return this.service
    .get ("/loggedin")
    .then(response => response)
    .catch ( err => err)
  }
}

export default AuthService