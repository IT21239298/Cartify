const ContactusRouter = require("express").Router();
const controller = require("../controllers/contactus.controller");

//Contact details
ContactusRouter
.route("/api/contactus")
.post(controller.create_Contactus)
.get(controller.get_Contactus);


module.exports = ContactusRouter;