const express = require("express");
const router = express.Router();
const {
  Products,
  getProducts,
  // updateproducts,
  // Deletecartitem,
} = require("../Controllers/CartControllers/Cart_Controllers");
const { protect } = require("../middleware/authentication");
router.post("/", protect, Products);
router.get("/get", protect, getProducts);
// router.put("/:id", protect, updateproducts);
// router.delete("/:id", protect, Deletecartitem);
module.exports = router;
