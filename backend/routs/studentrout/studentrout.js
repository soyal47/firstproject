const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())


const {getstudent,addstudent}= require("../../controllar/studentcontrollar/studentcontrollar")

Router.get("/",getstudent);
Router.post("/",addstudent);

module.exports = Router;