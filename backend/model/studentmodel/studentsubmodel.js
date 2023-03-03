const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const schemasub=new mongoose.Schema({
    subname:{
        type:String,
    required:[true,'Please add a fistname']

    }
}, 
{timestamps:true}
)
module.exports=mongoose.model('studentsub',schemasub);