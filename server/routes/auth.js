const router = require('express').Router()
const passport = require("../handlers/passport")
const User = require('../models/User')
const Recipe = require("../models/Recipe")

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.status(500).json({ err, infoErr })
    if(!user) return res.status(401).json({ err: "NO EXISTES"})
    req.logIn(user, err => {
      if(err) return res.status(500).json(err)
      res.status(200).json({ 
        email: user.email,
        name: user.name
      })
    })
  })(req, res, next)
})

router.get('/logout', (req, res, next) => {
  req.logOut()
  req.status(200).json({ msg: 'logout '})
})

router.get('/profile', isLogged, (req, res, next) => {
  req.status(200).json(req.user)
})

function isLogged (req, res, next) {
  if(!req.isAuthenticated()) return res.status(401).json ({ msg: "Oops! no estas loggeado" })
}

router.post('/createRecipe', (req,res,next)=>{
  const recipe = req.body
  Recipe.create(recipe)
    .then(Recipes=>res.send(Recipe)
    .catch(err => next(err)))
})

module.exports = router