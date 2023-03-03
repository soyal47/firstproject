const country= require('../../model/studentmodel/studentcountrymodel')


const getcountry= async (req,res)=>{
    const data = await country.find()
    res.send(data)
}

const addcountry= async(req,res)=>{
    const {countrycode,countryname,countryschools}= req.body
    const data = await country.create({
       countrycode,
       countryname,
       countryschools
    })
    res.send(data)
}

const logincountry= async(req,res)=>{
    const data = await country.findOne({})

    JSON.stringify(data)

    if(data.countryname || data.countrycode ){
        res.send({countryschools: data.countryschools})
    }

}
module.exports={
    getcountry,addcountry,logincountry
}