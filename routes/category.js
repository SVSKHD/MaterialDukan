const express = require("express")
const Server = express.Router()
const {create , getAll , update , RemoveCategory , getCategory} = require("../controllers/category")

Server.post("/category" , create)
Server.put("/category/:slug" , update)
Server.delete("/category/:slug" , RemoveCategory)
Server.get("/category/:slug" , getCategory)
Server.get("/categories" , getAll)




module.exports = Server