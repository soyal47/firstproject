const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {allapi} = require("../controllar/Deshbordcontrollers")

Router.get("/",allapi)

module.exports = Router