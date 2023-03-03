const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const country=new mongoose.Schema({
    countrycode:{
        type:String,
    required:[true,'Please add countycode']

    },
    countryname:{
        type:String,
    required:[true,'Please add countryname']
    },
    countryschools:{
        type:Object,
    required:[true,'Please add countyschools']

    }
}, 
{timestamps:true}
)
module.exports=mongoose.model('country',country);