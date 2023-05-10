require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const connectDB = require("./db/connect");
const userRouter = require("./routes/routers");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome To This page",
  });
});

app.use("/user", userRouter); // -> api will localhost/user/...

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
connectDB();
// ExportProducts();
