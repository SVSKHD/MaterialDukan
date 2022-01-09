const Mongoose = require("mongoose")

const categorySchema =new Mongoose.Schema({
    name:"String",
    slug:"String",
    description:{
        type:String,
        maxlength:300
    }
},{timestamps:true})

module.exports = Mongoose.model("Category", categorySchema)