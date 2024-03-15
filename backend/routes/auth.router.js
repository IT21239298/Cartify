const express = require("express");
const authRoute = express.Router();

const controller = require("../controllers/auth.controller");

authRoute.route("/api/signup").post(controller.signup);
authRoute.route("/api/login").post(controller.login);



module.exports = authRoute;
