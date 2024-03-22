const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Contact Us
const Contactus_model = new Schema({
    name:{type:String},
    email:{type:String},
    message:{type:String}
});

const Contactus = mongoose.model("contactus",Contactus_model);

exports.default = Contactus;

module.exports ={
    Contactus,
}