const express = require('express');
const router  = express.Router();
const User  = require ("../models/User")
const passport = require ("../handlers/passport")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/signup", (req,res,next)=>{
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json(user))
    .catch(err => res.json({err: 'Something went wrong'}))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.status(500).json({ err, infoErr })
    if(!user) return res.status(401).json({ err: "This user doesn't exist"})
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
  req.status(200).json({ msg: 'logout backend'})
})

router.get('/profile', isLogged, (req, res, next) => {
  req.status(200).json(req.user)
})


function isLogged (req, res, next) {
  if(!req.isAuthenticated()) return res.status(401).json ({ msg: "Oops! seems like you're not logged" })
}


module.exports = router;
