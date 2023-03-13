const mongoose = require("mongoose")

const addtocard = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add the title"]
    },
    dis:{
        type:String,
        required:[true,"please add the dis"]

    },
    image:{
        type:String,
        required:[true,"please add the image"]
    },
    price:{
        type:String,
        required:[true,"please add the price"]
    },
    rating:{
        type:String,
        required:[true,"please add the rating"]
    },
    color:{
        type:String,
        required:[true,"please add color"]
    },
    size:{
        type:String,
        required:[true,"please add size"]
    },
    quantity:{
        type:String,
        required:[true,"please add quantity"]
    },
    user_id:{
        type:String,
        required:[true,"please add user id"]
    },
});

module.exports = mongoose.model("Addcart",addtocard)