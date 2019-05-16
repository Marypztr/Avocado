const passport = require ("passport")


passport.use(User.createStrategy)
passport.serializeUser(user.serializeUser)
passport.deserializeUser(user.deserializeUser)



module.export = passport