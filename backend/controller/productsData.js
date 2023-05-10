const Products = require("../models/Products");

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
