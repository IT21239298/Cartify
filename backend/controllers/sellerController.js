const multer = require("multer");
const path = require("path");
const Item = require("../models/sellerModel");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage }).single("image"); // 'image' is the field name in the form

// Controller method for adding a new item
exports.addItem = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.error("Multer error:", err);
        return res.status(500).json({ error: "Multer error" });
      } else if (err) {
        // An unknown error occurred when uploading.
        console.error("Unknown error:", err);
        return res.status(500).json({ error: "Unknown error" });
      }

      // File uploaded successfully.
      try {
        const { title, description, price, quantity } = req.body;

        // Create a new item
        const newItem = new Item({
          image: req.file.path, // Path to the uploaded file
          title,
          description,
          price,
          quantity,
        });

        // Save the item to the database
        await newItem.save();

        // Respond with success message
        return res.status(201).json({ message: "Item added successfully" });
      } catch (error) {
        // Handle error
        console.error("Error adding item:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  } catch (error) {
    // Handle error
    console.error("Error uploading file:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller method for deleting an item
exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    await Item.findByIdAndDelete(itemId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function for updating seller item details
exports.updateSellerItem = async (req, res) => {
  const { itemId } = req.params;
  const { title, description, price, quantity } = req.body;

  try {
    // Find the seller item by ID
    let sellerItem = await Item.findById(itemId);

    if (!sellerItem) {
      return res.status(404).json({ error: "Seller item not found" });
    }

    // Update the seller item details
    sellerItem.title = title;
    sellerItem.description = description;
    sellerItem.price = price;
    sellerItem.quantity = quantity;

    // Save the updated seller item
    await sellerItem.save();

    // Return the updated seller item
    res.json(sellerItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//get one item
exports.getItemById = async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
