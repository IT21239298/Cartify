const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  images: [String],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);


module.exports = Cart;
