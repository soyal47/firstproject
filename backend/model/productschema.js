const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    dis: {
      type: String,
      required: [true, "Please add a discription"],
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    reting: {
      type: String,
    },
    color: {
      type: String,
    },
    img: {
      type: String,
      required: [true, "Please add a img"],
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
