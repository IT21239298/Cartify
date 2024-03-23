const model= require("../models/contactus.model");


//add contact details
async function create_Contactus(req,res){
  if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
  let { name, email, message } = req.body;

  try {
    const create = await new model.Contactus({
      name,
      email,
      message,
    }).save();

    return res.json(create);
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Error while creating product ${err} `});
  }
}

async function get_Contactus(req, res) {
    let data = await model.Contactus.find({});
    return res.json(data);
  }

  module.exports = {
    create_Contactus,
    get_Contactus
  }