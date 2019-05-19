const express = require ("express")
const router = express.Router
const Recipes = require("../models/Recipes")
const User = require("../models/User")


router.get("./UserRecipe"), (req,res,next) =>{
  Recipes.find()
  .populate("owner")
  .then(data =>{
    console.log ({ data })
    res.render("/recipes", { data })
  })
}

router.get("/createRecipe", ( req,res,next) =>{
  res.render("user/newRecipe")
})


router.get("/User/newRecipe/delete/:id", (req,res,next)=>{
  const { id } = req.params
  Recipes.findByIdAndDelete(id)
  .then(()=> res.redirect("/profile"))
  .catch(err => err)
})

module.exports = router