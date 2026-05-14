const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// ADD PRODUCT
router.post("/add", protect, adminOnly, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;


