const router = require('express').Router()
const Exercise = require("../models/Exercise")


router.get("/",(req,res,next)=>{
  Exercise.find()
  .then(exercise =>res.status(200).json(exercise))
  .catch(err => console.log(err))
})

module.exports = router