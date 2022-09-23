const express = require("express");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    Timetamps: true,
  }
);
module.exports = mongoose.model("Products", ProductSchema);
