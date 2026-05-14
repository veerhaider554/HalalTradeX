const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

// ADD TO CART
router.post("/add", async (req, res) => {

  try {

    const { userId, productId, quantity } = req.body;

    const newCart = new Cart({
      userId,
      productId,
      quantity
    });

    await newCart.save();

    res.json({
      message: "Product added to cart",
      cart: newCart
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

// GET USER CART
router.get("/:userId", async (req, res) => {

  try {

    const cartItems = await Cart.find({
      userId: req.params.userId
    });

    res.json(cartItems);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

module.exports = router;
// REMOVE ITEM
router.delete("/:id", async (req, res) => {

  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});
