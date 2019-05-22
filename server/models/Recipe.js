const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema(
    {
        recipe: String,
        ingredientes:[Object],
        photoURL:String,
        
    },{
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("Recipe", recipeSchema)