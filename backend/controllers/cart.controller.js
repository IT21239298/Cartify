const mongoose = require("mongoose");
const Cart = require("../models/cart.model");

async function create_Cart(req, res) {
  try {
    const { title, description, categories, price, images, qty } = req.body;

    // Create a new item
    const newItem = new Cart({
      images: images, // Array of base64 encoded images
      title,
      description,
      categories,
      price,
      qty,
    });

    // Save the item to the database
    await newItem.save();

    // Respond with success message
    return res.status(201).json({ message: "Cart added successfully" });
  } catch (error) {
    // Handle error
    console.error("Error adding item:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function getAllCart(req, res) {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteCart(req, res) {
  const { _id } = req.params;
  try {
    // Ensure that cartId is a valid ObjectId
    if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ error: "Invalid cart ID" });
    }

    // Find and delete the cart by its ObjectId
    await Cart.findByIdAndDelete(_id);

    // Respond with success message
    return res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function updateCart(req, res) {
  const { _id } = req.params;
  const { title, description, categories, price, images, qty } = req.body;

  try {
    // Find the seller item by ID
    let cartItem = await Cart.findById(_id);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // Update the seller item details
    cartItem.title = title;
    cartItem.description = description;
    cartItem.categories = categories;
    cartItem.price = price;
    cartItem.qty = qty;

    // Save the updated seller item
    await cartItem.save();

    // Return the updated seller item
    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getCartItemById(req, res) {
  const { _id } = req.params;

  try {
    const item = await Cart.findById(_id);
    if (!_id) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching cart item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  create_Cart,
  getAllCart,
  deleteCart,
  updateCart,
  getCartItemById,
};
