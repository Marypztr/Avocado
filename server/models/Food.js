const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const foodSchema = new Schema(
    {
        name: String,
        ingredientes:[Object],
        image:String
        
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model ("Foods", foodSchema)