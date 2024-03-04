const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/sellerController");

router.post("/add", sellerController.addsellItem);
router.get("/get", sellerController.getsellItems);
router.get("/get/:id", sellerController.getsellItem);
router.put("/update/:id", sellerController.updatesellItem);
router.delete("/delete/:id", sellerController.deletesellItem);

module.exports = router;
