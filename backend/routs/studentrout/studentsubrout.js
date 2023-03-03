const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())


const {getsub,addsub}= require("../../controllar/studentcontrollar/studentsubcontrollar")

Router.get("/",getsub);
Router.post("/",addsub);

module.exports = Router;
