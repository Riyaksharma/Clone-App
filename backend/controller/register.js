const Register = require("../models/Register");

exports.registerUser = async (req, res) => {
  try {
    const email = req.body.email;
    const existingUser = await Register.findOne({ email });
    // console.log(existingUser, existingUser.email);
    // If user exists ->
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // If user doesnt exits -> check password
    else {
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
      if (password == confirmPassword) {
        const user = new Register({
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
        });

        const userData = await user.save();
        res
          .status(201)
          .json({ messagge: "New User Created Successfully", userData });
      }
      // If passsword not same -> return error
      else {
        res.status(400).json({ err: "Both Pass Doesnt Match" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ err: error });
  }
};
