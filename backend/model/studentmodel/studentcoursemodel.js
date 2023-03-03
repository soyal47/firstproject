const mongoose=require('mongoose');

const course=mongoose.Schema({
    course:{type:Object}
})

module.exports =mongoose.model('course',course)