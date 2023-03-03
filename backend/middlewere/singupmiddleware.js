const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const sing = require("../model/singupmodel");

const protect = asynchandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //grt token from header
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.sing = await sing.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not authorized");
    }
    
  }
  if(!token){
    res.status(401)
    throw new Error("not authorized no token")
  }
});

module.exports= {
    protect
}