const jsonwebtoken = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const User = require("../model/userModel");
const protect = asynchandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jsonwebtoken.verify(token, "" + process.env.JSONWEB_TOKEN);
      req.user = await User.findById(decode.id);
      // console.log(req.user);
      next();
    } catch (error) {
      res.json({
        messsage: "user is not authorized",
      });
    }
  } else {
    res.json({ message: "access denied" });
  }
});
module.exports = {
  protect,
};
