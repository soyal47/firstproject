const mongoose=require('mongoose');

const employ= mongoose.Schema({
    employid:{type:String},
    employname:{type:String},
    employemail:{type:String},
    employnumber:{type:Number},
    employdob:{type:String},
    employment:{type:String},
    employaddress:{type:String}
})

module.exports =mongoose.model('employ',employ)