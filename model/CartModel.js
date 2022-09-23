const mongoose = require("mongoose");
const CartModel = mongoose.Schema(
  {
    price: {
      type: Array,
      require: true,
      default: [],
    },
    quantity: {
      type: Array,
      require: true,
      default: [],
    },
    Totalquantity: {
      type: Number,
      require: true,
    },
    totalprice: {
      type: Number,
      require: true,
    },
    description: {
      type: Array,
      require: true,
      default: [],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    Timetamps: true,
  }
);

module.exports = mongoose.model("Cart", CartModel);
