import axios from "axios"

const baseURL = "http://localhost:3000"

export default class appServices {
  constructor(){
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

challenge= () => {
  return this.service
  .get("/challenge")
  .then(({ data }) => data)
  .catch (err => err)
}

recipes = () =>{
  return this.service
  .get("/recipes")
  .then(({ data })=> data)
  .catch ( err => err)
}

detail = (id) =>{
  return this.service
  .get(`/details/${id}`)
  .then(({ data })=> data ) 
  
  .catch ( err => console.log(err))
}

healthstore = () => {
  return this.service
  .get ("/stores")
  .then(({ data }) => data)
  .catch ( err => err)
}

  exercise = () => {
    return this.service
    .get("/exercise")
    .then(({ data }) => data)
    .catch ( err => err)
}

}
