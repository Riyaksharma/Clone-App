require("dotenv").config();
const products = require("../constants/data");

const Products = require("../models/Products");

exports.ExportProducts = async () => {
  try {
    await Products.deleteMany({}); //to remove duplicates
    await Products.insertMany(products);
    console.log("Data imported succesfully");
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
