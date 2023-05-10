const express = require("express");
const router = express.Router();

const { registerUser } = require("../controller/register");
const { loginUser } = require("../controller/login");
const { validateRegister } = require("../validators/auth");
const { getProducts } = require("../controller/productsData");

router.post("/register", validateRegister, registerUser);
router.post("/login", loginUser);
router.get("/products", getProducts);

module.exports = router;
