const subject = require('../../model/studentmodel/studentsubmodel');




const getsub= async (req,res)=>{
    const data = await subject.find()
    res.send(data)
}

const addsub= async(req,res)=>{
    const {subname}= req.body
    const data = await subject.create({
        subname
    })
    res.send(data)
}

module.exports={
    addsub,getsub
}