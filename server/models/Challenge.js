const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const challengeSchema = new Schema(
    {
        name: String,
        duration:"Number",
        link:String,
        
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model ("Challenge", challengeSchema)