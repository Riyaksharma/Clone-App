const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  url: String,
  posterUrl: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
