const router = require('express').Router()
const Challenge = require("../models/Challenge")

router.get("/",(req,res,next)=>{
  Challenge.find()
  .then(Challenge =>res.status(200).json(Challenge))
  .catch(err => console.log(err))
})

module.exports = router