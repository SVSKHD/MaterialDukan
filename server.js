const express = require("express")
const bodyParser = require("body-parser")
const Mongoose = require("mongoose")
const Cors = require("cors")
require("dotenv").config()
const Morgan = require("morgan")
const {readdirSync} = require("fs")


// middlewares
const App = express()
App.use(bodyParser.json())
App.use(Morgan("dev"))
App.use(Cors())

// serverroutes
readdirSync("./routes").map((r) => App.use("/api", require("./routes/" + r)));


// database
Mongoose.connect(process.env.Database).then(()=>{
    console.log("Database is Connected")
})


// listen
const Port = process.env.PORT
App.listen(Port,()=>{
    console.log(`Server is up at ${Port}`)
})