const express = require("express");
const cartRoute = express.Router();

const controller = require("../controllers/cart.controller");

cartRoute
  .route("/api/cart")
  .post(controller.create_Cart)
  .get(controller.getAllCart);

cartRoute.delete("/cart/:_id", controller.deleteCart);
cartRoute.put("/cart/:_id", controller.updateCart);
cartRoute.get("/cart/:_id", controller.getCartItemById);

module.exports = cartRoute;
