const mongoose = require ("mongoose")
const plm = require("passport-local-mongoose")

const userSchema = new mongoose.Schema(
    {
        name: String,
        email:String,
        photoURL:String,
        form:{
            weigth:Number,
            height:Number,
            age:Number,
            goal:String,
            hips:Number,
            waist:Number
        }
        
    },{
        timestamps:true,
        versionKey:false
    }
)

userSchema.plugin(plm, { usernameField: 'email' })

module.exports = mongoose.model ("User", userSchema)