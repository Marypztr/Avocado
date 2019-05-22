const router = require('express').Router()
const HealthStore = require("../models/Stores")


router.get("/",(req,res,next)=>{
  HealthStore.find()
  .then(HealthStore =>res.status(200).json(HealthStore))
  .catch(err => console.log(err))
})

module.exports = router