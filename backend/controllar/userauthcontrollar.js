const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userauthschema')
// des  RegisterUser new  users
// routes POST /api/userAuth
//access Public 
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }
    let checkemail= email.includes('@gmail.com')
    if(!checkemail){
        res.status(400)
        throw new Error ("please add @gmail.com")
    }
    //check userExists User Email
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }
    else{
        if(password.length >8 || password.length<8){
            res.status(400)
            throw new Error(" lenght is minimum " )
        }
    }

    //check userExists User password
    // const salt = await bcrypt.getSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)
   
        
    
    const user = await User.create({
        name,
        email,
        password 
        
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
           token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid User  Data')
    }
})


// des  LoginUser new  users
// routes POST /api/userAuth/login
//access Public 
const loginUser = asyncHandler(async (req, res) => {
    //console.log("dsdsds====>", req.text);
    const { email, password } = req.body
    //check the Email
    const user = await User.findOne({ email })
    if (user && (bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    }
    else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// genrate Token 

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
// des  Get  users Data
// routes GET /api/userAuth/me
//access Public 
// const getMe = asyncHandler(async (req, res) => {
//     //console.log("dsdsds====>", req.text);

//     // res.json({ message: "All User data " })
//     let data = await User.find({})
//     res.send(data)
// })
const getMe = asyncHandler(async(req,res)=>{
    const {_id,name,email}=await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})
module.exports = {
    registerUser,
    loginUser,
    getMe
}