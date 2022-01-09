const  Mongoose  = require("mongoose");

const userSchema = new Mongoose.Schema({

},{timestamps:true})

module.exports = Mongoose.model("User", userSchema)