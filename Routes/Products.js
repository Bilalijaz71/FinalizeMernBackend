const express = require("express");
const router = express.Router();
const {
  CreateProducts,
  GetProducts,
} = require("../Controllers/ProductsControllers/Products_Controllers");
router.post("/", CreateProducts);
router.get("/getProduct", GetProducts);

module.exports = router;
