// Import necessary modules and middleware
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/sellerController");

router.post("/add", itemController.addItem);
router.get("/get", itemController.getAllItems);
router.delete("/delete/:itemId", itemController.deleteItem);
router.put("/update/:itemId", itemController.updateSellerItem);
router.get("/get/:itemId", itemController.getItemById);

module.exports = router;


