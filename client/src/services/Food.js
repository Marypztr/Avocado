import axios from "axios"

const baseURL = "http://localhost:3001"

class AuthService {
  constructor(){
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  foodId = food => {
    return this.service
    .get (`/food/${food}`,food)
    .then(({ data }) => data)
    .catch (err => err)
  }

}

export default AuthService