const jwt = require("jsonwebtoken");
const singup = require("../model/singupmodel");

const getsing = async (req, res) => {
  const data = await singup.findOne({});
};

const postsing = async (req, res) => {
  const { firstname, lastname, email, password, gender } = req.body;
  // let checkemail = email.includes("@gmail.com")
  // if (!checkemail) {
  //     res.status(400)
  //     throw new Error ("please add the @gmail.com")
  // }
  const data = await singup.create({
    firstname,
    lastname,
    email,
    password,
    gender,
  });
  res.status(201).json({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    gender: data.gender,
    token: generateToken(data._id),
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  getsing,
  postsing,
};
