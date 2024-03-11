// Import necessary modules and middleware
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/sellerController");

router.post("/add", itemController.addItem);
router.get("/get", itemController.getAllItems);

module.exports = router;
