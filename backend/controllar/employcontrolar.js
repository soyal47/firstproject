const employ=require('../model/employmodel')


const getemp=async(req,res)=>{
    const data= await employ.find({});
    res.send(data)
}

const searchemp=async(req,res)=>{
    const data= await employ.findById(req.params._id);
    res.send(data)
}


const postemp= async(req,res)=>{
    try{
   const {employid,employname,employemail,employnumber,employdob,employment,employaddress}=req.body
const data = await employ.create({
    employid,employname,employemail,employnumber,employdob,employment,employaddress
})
res.send(data); 
}
catch(error){
    res.send(error)
}
}

const putemp=async(req,res)=>{
    const data = await employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await employ.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    res.status(201).json(updatedata)
}

const deleteemp= async(req,res)=>{
    const data = await employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    await data.remove()
    res.status(201).json({message:'data is deleted'})
}


module.exports= {getemp,postemp,putemp,deleteemp,searchemp}