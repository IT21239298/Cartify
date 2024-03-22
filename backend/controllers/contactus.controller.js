const model= require("../models/contactus.model");


//add contact details
async function create_Contactus(req,res){
    if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let { 
      name,
      email,
      message
     } = req.body;
  
    const create = await new model.Contactus({
        name,
        email,
        message

    });
  
    create.save(function (err) {
      if (!err) return res.json(create);
      return res
        .status(400)
        .json({ message: `Erro while sending message ${err}` });
    }); 
}

async function get_Contactus(req, res) {
    let data = await model.Contactus.find({});
    return res.json(data);
  }

  module.exports = {
    create_Contactus,
    get_Contactus
  }