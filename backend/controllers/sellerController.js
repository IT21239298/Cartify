const { Sellitem } = require("../models/sellerModel");

//add Sellitem details
const addsellItem = async (req, res) => {
  const Sellitem = new Sellitem(req.body);

  console.log("req.body", req.body);

  await Sellitem.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//retrieve Sellitem details
const getsellItems = async (req, res) => {
  await Sellitem.find().exec(function (err, Sellitem) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(Sellitem);
    }
  });
};

//retrieve single Sellitem details
const getsellItem = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const Sellitem = await Sellitem.findById(id);
    if (!Sellitem) {
      return res.status(404).json({ error: "Sellitem not found" });
    }
    res.json(Sellitem);
  } catch (error) {
    console.error("Error retrieving Sellitem:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update Sellitem details
const updatesellItem = async (req, res) => {
  const {
    itemName,
    itemDescription,
    itemImage,
    itemPrice,
    itemStock,
    date,
    time,
  } = req.body;

  const sellitemId = req.params.id;
  let Sellitem;
  try {
    Sellitem = await Sellitem.findById(sellitemId);
  } catch (err) {
    console.log("Error updating");
  }
  if (!Sellitem) {
    return res
      .status(404)
      .json({ success: false, message: "Appointment not found" });
  }

  // Update Sellitem properties
  Sellitem.itemName = itemName;
  Sellitem.itemDescription = itemDescription;
  Sellitem.itemImage = itemImage;
  Sellitem.itemPrice = itemPrice;
  Sellitem.itemStock = itemStock;
  Sellitem.date = date;
  Sellitem.time = time;

  await Sellitem.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete Sellitem details
const deletesellItem = async (req, res) => {
  const sellitemId = req.params.id;

  const Sellitem = await Sellitem.findById(sellitemId);
  if (!Sellitem) {
    console.log("Error deleting" + sellitemId);
  }
  await Sellitem.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addsellItem = addsellItem;
exports.getsellItem = getsellItem;
exports.getsellItems = getsellItems;
exports.updatesellItem = updatesellItem;
exports.deletesellItem = deletesellItem;
