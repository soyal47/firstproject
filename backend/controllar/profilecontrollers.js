const singup = require("../model/singupmodel");
const profile = require("../model/profilemodel");


const getprofile = async (req, res) => {
  const data = await singup.findById(req.params._id);
  if (!data) {
    res.status(404).json({ error: "not found " });
  }
  res.status(201).json({
    first:data.firstname,
    lastname: data.lastname,
    email: data.email,
    gender: data.gender,
  });
};

const postprofile = async (req, res) => {
  const data = await singup.findById(req.params._id);
  const { firstname, lastname, email, gender, img } = req.body;
console.log(firstname);
  if (
    data.firstname== firstname &&
    data.lastname == lastname &&
    data.email == email &&
    data.gender == gender
  ) {
    const profiles = await profile.create({
      firstname,
      lastname,
      email,
      gender,
      img,
    });
    res.send(profiles);
  } else {
    res.status(400).json({ error: "detail is invalid" });
  }
};

module.exports = {
  getprofile,
  postprofile,
};
