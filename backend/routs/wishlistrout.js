const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {protect}= require('../middlewere/authmiddleware')
const {postwishlist,getwishlist,deletewishlist} = require("../controllar/wishlistcontrollar")

Router.get("/",protect,getwishlist);
Router.post("/",protect,postwishlist);
Router.delete('/:id',protect,deletewishlist)


module.exports = Router