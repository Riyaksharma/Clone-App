const { check, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

exports.validateRegister = [
  check("name").notEmpty().withMessage("Name is Required"),
  check("email").isEmail().withMessage("email is Required"),
  check("phoneNumber").isMobilePhone().withMessage("Phone Number is Required"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password Must be 8 Characters Long"),
  check("confirmPassword").custom((value, { req }) => {
    if (value != req.body.password) {
      return false;
    }
    return true;
  }),
];
