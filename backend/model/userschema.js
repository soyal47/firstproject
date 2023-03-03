const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: { type: String, required: [true, "please add a name"] },

  email: { type: String, required: [true, "please add a email"] },
  password: { type: Number, required: [true, "please add a password"] },
  number: { type: Number, required: [true, "please add a number"] },
});
module.exports = mongoose.model("documents", product);
