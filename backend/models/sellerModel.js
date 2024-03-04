const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SellerItemSchema = new Schema(
  {
    itemName: { type: String },
    itemDescription: { type: String },
    itemImage: { type: String },
    itemPrice: { type: Number },
    itemStock: { type: Number },
    date: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
  }
);

const Sellitem = mongoose.model("sellitem", SellerItemSchema);
module.exports = { Sellitem };
