const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const{getcountry,addcountry,logincountry}=require('../../controllar/studentcontrollar/studentcountrycontrollar')

Router.get("/",getcountry);
Router.post("/",addcountry);
Router.post('/login',logincountry)

module.exports = Router;