const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getadd,postadd,deletetocart} = require("../controllar/Addtocardcontrollers")
const {protect}=require('../middlewere/authmiddleware')


Router.get("/",protect,getadd);
Router.post("/",protect,postadd)
// Router.get("/me",protect1,getMe)
Router.delete("/:id",deletetocart)

module.exports = Router