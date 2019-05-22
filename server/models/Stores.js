const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const StoreSchema = new Schema(
    {
        name: String,
        site:String,
        phone:"Number",
        image: String,
        
        
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("Store", StoreSchema)