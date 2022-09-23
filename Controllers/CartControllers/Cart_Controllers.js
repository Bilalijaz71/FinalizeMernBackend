const User = require("../../model/userModel");
const Cart = require("../../model/CartModel");
const asynchandler = require("express-async-handler");
const Products = asynchandler(async (req, res) => {
  const { price, quantity, Totalquantity, totalprice, description } = req.body;

  const createCart = await Cart.create({
    price,
    quantity,
    Totalquantity,
    totalprice,
    description,
    user: req.user.id,
  });
  if (createCart) {
    res.status(201).json({
      id: createCart.id,
      price: createCart.price,
      quantity: createCart.quantity,
      Totalquantity: createCart.Totalquantity,
      totalprice: createCart.totalprice,
      description: createCart.description,
      user: req.user.id,
    });
  } else {
    res.status(400).send("Your request can not be proceed");
  }
});
const getProducts = asynchandler(async (req, res) => {
  const findproducts = await Cart.find({ user: req.user.id });
  res.send(findproducts);
});
// const updateproducts = asynchandler(async (req, res) => {
//   const params_id_data = await Cart.findById(req.params.id); //cart product
//   const userdata = await User.findById(req.user.id); //user info
//   if (!userdata) {
//     res.json({
//       message: "user not found",
//     });
//   }
//   if (params_id_data.user.toString() === userdata.id) {
//     const updatecartitems = await Cart.findByIdAndUpdate(
//       params_id_data,
//       req.body,
//       { new: true }
//     );
//     res.send(updatecartitems);
//     updatecartitems.save();
//   } else {
//     res.json({
//       message: "User is not authorized",
//     });
//   }
// });
// const Deletecartitem = asynchandler(async (req, res) => {
//   const params_id_data = await Cart.findById(req.params.id); //cart product
//   const userdata = await User.findById(req.user.id); //user info
//   if (!userdata) {
//     res.json({
//       message: "user not found",
//     });
//   }
//   if (params_id_data.user.toString() === userdata.id) {
//     params_id_data.remove();
//     res.status(200).json({ id: req.params.id });
//   } else {
//     res.json({
//       message: "User is not authorized",
//     });
//   }
// });
module.exports = {
  Products,
  getProducts,
  // updateproducts,
  // Deletecartitem,
};
