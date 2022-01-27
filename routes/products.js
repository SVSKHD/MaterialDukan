const express = require("express")
const Server = express.Router()
const {create , getAll , getCount , update , Remove} = require("../controllers/product")

Server.post("/product" , create)
Server.get("/product/:count" , getCount)
Server.get("/allproducts" , getAll)
Server.put("/product/:slug" , update)
Server.delete("/product/:slug" , Remove)



module.exports = Server