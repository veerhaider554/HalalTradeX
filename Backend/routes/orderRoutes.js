const protect = require("../middleware/authMiddleware");const express = require("express");
const Order = require("../models/Order");

const router = express.Router();


// CREATE ORDER
router.post("/create", protect, async (req, res) => {

  try {

    const newOrder = new Order(req.body);

    await newOrder.save();

    res.json({
      message: "Order placed successfully",
      order: newOrder
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// GET USER ORDERS
router.get("/:userId", async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.params.userId
    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;
