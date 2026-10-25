
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inventory Management System");
});

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/products", productRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
