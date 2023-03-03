const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const student=new mongoose.Schema({
    name:{
        type:String,
    required:[true,'Please add a name']
    },
    classes:{
        type:String,
    required:[true,'Please add class']
    },
    email:{
        type:String,
    required:[true,'Please add  email']
    },
    subject:{
        type:String,
    required:[true,'Please add a subject']
    },
    number:{
        type:Number,
    required:[true,'Please add a number']
    },
    gender:{
        type:String,
    required:[true,'Please add gender']
    },
    schoolname:{
        type:String,
    required:[true,'Please add  schoolname']
    },
    country:{
        type:String,
    required:[true,'Please add country']
    },
}, 
{timestamps:true}
)
module.exports=mongoose.model('studentdata',student);