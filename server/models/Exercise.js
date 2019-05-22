const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const exerciseSchema = new Schema(
    {
        name:String , 
        zone: String,
        image:String,
        level:Number,
        duration:"Number",
        video:String
        
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model ("Exercise", exerciseSchema)