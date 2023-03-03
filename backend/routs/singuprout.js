const express= require('express');
const app = express()
const Router = express.Router()
const {getsing,postsing} = require('../controllar/singupcontrollar')
Router.use(express.json())
const {protect} = require("../middlewere/singupmiddleware");


Router.get('/',getsing);
Router.post('/',postsing);

module.exports= Router