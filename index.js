const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

  const Product = require("./models/Product");

app.get("/seed-product", async (req, res) => {
  try {
    const product = new Product({
      name: "T-Shirt",
      price: 499
    });

    await product.save();
    res.send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error seeding product");
  }
});


app.use("/api/cart", cartRoutes);
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
