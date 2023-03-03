const mongodb=require('mongodb')
const { ObjectId } = require('mongodb');
const db = require('../config')
const asynchandler=require('express-async-handler');
const user=require('../model/userschema')

const  getusers=async(req,res)=>{
//     const data = await db()
// const result = await data.find({}).toArray();
const data= await user.find({})
// console.log(data)
    res.status(200).json(data);
}

const postuser=asynchandler(async(req,res)=>{
    // const data = await db()
    // const result = await data.insertOne(req.body);
    const data = await user.create(req.body);
    res.status(200).json(data);
})

const putuser=asynchandler(async(req,res)=>{
//     const data = await db()
//     const result = await data.updateOne({name:"gullu"},{$set:{name:"arhan"}});
const findid = await user.findById(req.params.id);
if(!findid){
    res.status(400)
    res.send("user not found")
}
const updateuser= await user.findByIdAndUpdate(req.params.id,req.body,{
    new:true
})
console.log("====>",updateuser);
    res.status(200).json({message:`update data ${req.params.id}`});
})


const deleteuser=asynchandler(async(req,res)=>{
    // const data = await db()
    // const result = await data.deleteOne({name:"sameer"})
    const findid= await user.findById(req.params.id);
    if(!findid){
        res.status(400);
        res.send("user not found")
    }
    await findid.remove();
    res.status(200).json({message:`delete data ${req.params.id}`});
})

module.exports = {
    getusers,
    postuser,
    putuser, 
    deleteuser
}