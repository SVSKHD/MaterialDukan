const express = require("express")
const Server = express.Router()

const {upload , remove} = require("../controllers/cloudinary")

Server.post("/uploadimages" , upload)
Server.post("/removeimages" , remove)

module.exports = Server