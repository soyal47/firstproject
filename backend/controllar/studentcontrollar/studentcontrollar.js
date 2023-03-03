
const student = require('../../model/studentmodel/studentmodel')


const getstudent= async (req,res)=>{
    const data = await student.find()
    res.send(data)
}

const addstudent= async(req,res)=>{
    const {name, classes, email, subject,number,gender,schoolname,country}= req.body
    const data = await student.create({
        name,
        classes,
        email,
        subject,
        number,
        gender,
        schoolname,
        country
    })
    res.send(data)
}

module.exports={
    addstudent,getstudent
}