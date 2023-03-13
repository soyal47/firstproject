const Addcart = require("../model/Addtocardmodel");
const asyncHandler = require("express-async-handler");

const getadd =asyncHandler( async (req, res) => {
  try {
    const data = await Addcart.find({ user_id: req.user });
    if (!data.length) {
      res.status(404).json({ status: false, message: "cart is empty" });
    }
    res.status(200).json({ status: true, message: data });
  } catch (error) {
    res.status(404).json(error);
  }
});

const postadd = asyncHandler(async (req, res) => {
  try {
    const { title, image, price, rating, dis, size,color,quantity } = req.body;
    if (
      !title &&
      !image &&
      !price &&
      !rating &&
      !dis &&
      !color &&
      !size &&
      !quantity
    ) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await Addcart.create({
      title,
      price,
      dis,
      rating,
      image,
      color,
      size,
      quantity,
      user_id: req.user,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deletetocart = asyncHandler(async (req, res) => {
    let findid = await Addcart.findById(req.params.id);
    if (!findid) {
        res.status(400);
        res.send("user not found");
    }
    await findid.remove();


    res.status(200).json({ message: `delete data ${req.params.id}` });
})

// const getMe = asyncHandler(async (req, res) => {
//   const { _id, title, price, dis, rating, image, quantity } =
//     await User.findById(req.user.id);

//   res.status(200).json({
//     id: _id,
//     title,
//     price,
//     dis,
//     rating,
//     image,
//     quantity,
//   });
// });

module.exports = { getadd, postadd,deletetocart};
