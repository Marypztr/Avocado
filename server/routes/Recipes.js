const express = require ("express")
const router = express.Router()
const Recipe = require("../models/Recipe")
const User = require("../models/User")



router.get("/",(req,res,next)=>{
  Recipe.find()
  .then(recipes => res.status(200).json(recipes))
  .catch(err => console.log(err))
})

router.get ("/:id",(req,res,next) =>{
  console.log(req.params.id)
  Recipe.findById(req.params.id,(err, data) =>{
    console.log(err)
    console.log("esto viene de la ruta:" + data)
  } )
  .then(recipe =>res.status(200).json(recipe))
  .catch(err => res.status(304).json(err))
})


module.exports = router