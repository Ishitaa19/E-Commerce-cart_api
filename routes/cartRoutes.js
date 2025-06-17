const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add product to cart
router.post("/add", async (req, res) => {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ products: [] });

    const index = cart.products.findIndex(p => p.productId.toString() === productId);
    if (index > -1) {
        cart.products[index].quantity += quantity;
    } else {
        cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.send(cart);
});

// Remove product
router.post("/remove", async (req, res) => {
    const { productId } = req.body;
    let cart = await Cart.findOne();
    if (!cart) return res.status(404).send("Cart not found");

    cart.products = cart.products.filter(p => p.productId.toString() !== productId);
    await cart.save();
    res.send(cart);
});

// View cart
router.get("/", async (req, res) => {
    const cart = await Cart.findOne().populate("products.productId");
    res.send(cart);
});

// Checkout
router.post("/checkout", async (req, res) => {
    await Cart.deleteMany({});
    res.send("Checkout done. Cart cleared.");
});

module.exports = router;
