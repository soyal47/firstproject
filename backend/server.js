const express = require("express");
const app = express();

app.use(express.json());
const connectdb = require('./config/db')
const multer=require('multer')
const path= require('path')
const env = require("dotenv").config();
const port = process.env.PORT || 5000;
app.use('/api/user',require('./routs/userrouts'))
app.use('/api/product',require('./routs/productrout'))
app.use('/api/auth',require('./routs/authrout'))
app.use('/profile',express.static('backend/image'))
app.use('/api/todo',require('./routs/TudoRoutes'))
app.use('/api/subject',require('./routs/studentrout/studentsubrout'))
app.use('/api/student',require('./routs/studentrout/studentrout'))
app.use('/api/country',require('./routs/studentrout/studentcountryrout'))
app.use('/api/course',require('./routs/studentrout/studentcourserout'))
app.use('/api/singup',require('./routs/singuprout'))
app.use("/api/profile",require("./routs/profileRoutes"))
app.use('/api/employ',require('./routs/employrout'))
app.use('/api/deshboard',require('./routs/DeshbordRoutes'))
app.use('/api/users',require('./routs/usreRoutes'))

const storage = multer.diskStorage({
  destination:'./backend/image',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}.jpg`)
  }
  
})

const upload=multer({
  storage:storage
})

app.get("/", (req, res) => {
  res.send("done");
}); 
app.post('/upload',upload.single('profile'),(req,res)=>{
  console.log(req.file)
  res.json({
    succes:1,
    file_url:`http://localhost:5000/profile/${req.file.filename}`
  })
})
connectdb();
app.listen(port,()=>{
    console.log(port);
})
