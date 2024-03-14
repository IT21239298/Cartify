const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
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
  quantity: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
