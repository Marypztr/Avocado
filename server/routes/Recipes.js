const express = require ("express")
const router = express.Router
const Recipe = require("../models/Recipe")
const User = require("../models/User")


router.get("./UserRecipe"), (req,res,next) =>{
  Recipe.find()
  .populate("owner")
  .then(data =>{
    console.log ({ data })
    res.render("/recipes", { data })
  })
}

router.get("./Recipes",(req,res,next)=>{
  Recipe.find()
  .then(Recipe =>(Recipe))
  .catch(err => console.log(err))
})


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