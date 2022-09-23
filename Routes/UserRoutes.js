const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  UpdateUser,
  DeleteUser,
} = require("../Controllers/UserControllers/User_Controllers");
const { protect } = require("../middleware/authentication");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.put("/:id", protect, UpdateUser);
router.delete("/:id", protect, DeleteUser);

module.exports = router;
