const User = require("../../model/userModel");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asynchandler = require("express-async-handler");

const registerUser = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("req.body", req.body);

  if (!username || !email || !password) {
    res.status(400).send("Please enter the Valid Information");
    return;
  }
  const checkuser = await User.findOne({ email });
  if (checkuser) {
    res.status(400).send("User already exsist");
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  const registernewuser = await User.create({
    username,
    email,
    password: hashpassword,
  });
  if (registernewuser) {
    res.status(201).json({
      _id: registernewuser.id,
      name: registernewuser.username,
      email: registernewuser.email,
      password: registernewuser.password,
      token: gettoken(registernewuser.id),
    });
  }
});

const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  const checkemail = await User.findOne({ email });
  if (checkemail && (await bcrypt.compare(password, checkemail.password))) {
    res.json({
      _id: checkemail.id,
      email: checkemail.email,
      password: checkemail.password,
      token: gettoken(checkemail.id),
    });
  } else {
    res.status(401).send("invalid Email or Password");
  }
});
const getMe = asynchandler(async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send("you are not authorized");
  }
});
const UpdateUser = async (req, res) => {
  const userdata = await User.findById(req.user.id); //user info
  //User information entered in the form
  let { username, email, password } = req.body;

  const newpasswordsalt = await bcrypt.genSalt(10);
  const newpassword = await bcrypt.hash(password, newpasswordsalt);

  const userCheck = await User.findOne({ email });
  //if username doesn't entered by the user
  if (!username) {
    username = req.user.username;
  }
  //if email doesn't entered by the user
  if (!email) {
    email = req.user.email;
  }
  //if password doesn't entered by the user

  if (!password) {
    password = req.user.password;
  } else {
    password = newpassword;
  }
  //salt and hash new password

  const requestdata = {
    username,
    email,
    password,
  };

  if (!userdata) {
    res.send("user not found");
  }

  if (req.params.id === userdata.id) {
    //for checking email is already exsist or not
    if (userCheck) {
      res.status(400).send("Email Already Exist");
    } else {
      const updateuserinfo = await User.findByIdAndUpdate(
        userdata,
        requestdata,
        {
          new: true,
        }
      );
      updateuserinfo.save();
      //if data updated
      res.send("information Updated Successfully");
    }
  } else {
    res.send("User is not authorized");
  }
};

const DeleteUser = asynchandler(async (req, res) => {
  const userdata = await User.findById(req.user.id); //user info
  if (!userdata) {
    res.send();
  }
  if (req.params.id === userdata.id) {
    userdata.remove();
    res.status(200).json({ id: req.params.id });
  } else {
    res.send("User is not authorized");
  }
});

const gettoken = id => {
  return jsonwebtoken.sign({ id }, "" + process.env.JSONWEB_TOKEN);
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
  UpdateUser,
  DeleteUser,
};
