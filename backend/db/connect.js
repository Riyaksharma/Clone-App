const mongooose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongooose.connect(
      "mongodb://localhost:27017/ShopifyAPP"
    );
    console.log("Successfully Connected to Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
