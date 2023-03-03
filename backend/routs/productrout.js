// const express=require('express');
// const router= express.Router();
// const {getproduct,postproduct,putproduct,deleteproduct}=require("../controllar/productcontrollar");
//  router.get('',getproduct)

//  router.post('',postproduct)
//  router.put('/:id',putproduct)
//  router.delete('/:id',deleteproduct)

//  module.exports=router

const express= require('express');
const { getproduct, addproduct, updateproduct, deleteproduct } = require("../controllar/productcontrollar");
const Router = express.Router();
Router.use(express.json())


Router.get('/getproduct',getproduct)
    

Router.post('/insertproduct',addproduct)
Router.put('/updateproduct/:_id',updateproduct)
Router.delete('/deleteproduct/:_id',deleteproduct)


module.exports = Router;