const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },

  products: [
    {
      productId: String,
      quantity: Number
    }
  ],

  totalPrice: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
