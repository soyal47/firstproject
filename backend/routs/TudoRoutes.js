const express= require('express');
const app = express()
const Router = express.Router()
const {gettudo,getMe,updates,deletes,posttudo,logintudo} = require('../controllar/Tudoconteroller')
Router.use(express.json())
const {protect} = require("../middlewere/authmiddleware")
Router.get("/",gettudo);
Router.get("/token",protect,getMe)
Router.post("/",posttudo);
Router.post("/login",logintudo);
Router.put("/:_id",protect,updates);
Router.delete("/:_id",protect,deletes)



module.exports = Router;