const mongoose= require("mongoose");
// 

const connectdb = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL)
    }
    catch(error){
        console.log("eror",error);
        process.exit(1);
    }
}
module.exports = connectdb