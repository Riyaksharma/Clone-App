const Register = require("../models/Register");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// const secretKey = "secrettKey";

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const existingUser = await Register.findOne({ email });
    // If user doesnt exits
    if (!existingUser) {
      res
        .status(403)
        .json({ message: "User Doest Exist, Please Register First" });
    } else {
      // If exists -> check password
      if (existingUser.password == req.body.password) {
        const token = jwt.sign(
          { email: existingUser.email },
          process.env.JWT_SECRET
        );
        existingUser.token = token;
        existingUser.isLoggedIn = true;
        await existingUser.save();
        res.status(200).json({ message: "Logged In successFully", token });
      } else {
        res.status(403).json({ message: "Wrong Password!!" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};
