
const db = require('../config');
db();
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const product = require('../model/productschema');
const asyncHandler = require('express-async-handler');



const getproduct = async (req, res) => {
    let data = await product.find({});
    console.log("======>", data);
    res.status(200).json(data)
}



const addproduct = asyncHandler(async (req, res) => {

    const { title, dis, price, reting, img, color, name} = req.body
    if (!title && !dis && !price && !reting && !img && !color && !name) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    
    let data = await product.create({
        title,
        dis,
        name,
        img,
        price,
        reting,
        color,
        
    });
    console.log("====>", data);
    res.status(200).json(data)
})

const updateproduct = asyncHandler(async (req, res) => {
    let findid = await product.findById(req.params._id);
    if (!findid) {
        res.status(400);
        res.send("user not found");
    }

    const updateusers = await user.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=====>", updateusers);
    // let data = await db();
    // let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
    // res.status(200).json({result})
    res.status(200).json({ message: `updatedata ${req.params._id}` })
})
const deleteproduct = asyncHandler(async (req, res) => {
    let findid = await product.findById(req.params._id);
    if (!findid) {
        res.status(400);
        res.send("user not found");
    }
    await findid.remove();


    res.status(200).json({ message: `delete data ${req.params._id}` });
})

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
// }

module.exports = {
    getproduct, addproduct, updateproduct, deleteproduct
}
























// const mongodb=require('mongodb')
// const db = require('../config')
// const user=require('../model/productschema')
// const getproduct=async(req,res)=>{
//     let data = await user.find({});
//     res.status(400).json(data);
//      }
//      const postproduct=async(req,res)=>{
//         // let data = await db();
        
//         let result= await user.create(req.body);
//         res.status(400).json(result); 
//      }
//      const putproduct=async(req,res)=>{
//       const findid = await user.findById(req.params.id);
//       if(!findid){
//           res.status(400)
//           res.send("user not found")
//       }
//       const updateuser= await user.findByIdAndUpdate(req.params.id,req.body,{
//           new:true
//       })
//       console.log("====>",updateuser);
//           res.status(200).json({message:`update data ${req.params.id}`});
//       }
      
     
//      const deleteproduct=async(req,res)=>{
//         let findid= await user.findById(req.params.id)
//         if(!findid){
//          res.status(400);
         
//          res.send("user not found")
//         }
//         await findid.remove()
//         res.status(200).json({message:`delete data ${req.params.id}`});


//      }

//      module.exports={
//         getproduct,
//         postproduct,
//         putproduct,
//         deleteproduct
//      }