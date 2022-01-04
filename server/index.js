const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

/** Setting up express server */
const app = express();

/** MongoDB connection */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connection Successfull!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json()); // body parser

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at port number 5000`);
});
