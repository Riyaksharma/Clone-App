const express = require("express");
const router = express.Router();

const { registerUser } = require("../controller/register");
const { loginUser } = require("../controller/login");
const { validateRegister } = require("../validators/auth");

router.post("/register", validateRegister, registerUser);
router.post("/login", loginUser);

module.exports = router;
