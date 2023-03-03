const express= require('express');
const app = express()
const {getemp,postemp,putemp,deleteemp,searchemp} = require("../controllar/employcontrolar")
const Router = express.Router()
Router.use(express.json())


Router.get('/',getemp)
Router.get('/me/:_id',searchemp)

Router.post('/',postemp)
Router.put('/:_id',putemp)
Router.delete('/:_id',deleteemp)

module.exports=Router;