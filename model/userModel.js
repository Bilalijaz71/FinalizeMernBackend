const express = require("express");
const mongoose = require("mongoose");
const SchemaModel = mongoose.Schema(
  {
    username: {
      require: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
    },
    password: {
      require: true,
      type: String,
    },
  },
  {
    Timetamps: true,
  }
);

module.exports = mongoose.model("User", SchemaModel);
