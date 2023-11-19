import contactmodel from "../model/contact.js";

class contactcontroller {
  static createcontactdoc =async (req,res) =>{
  const createdoc = new contactmodel(req.body)
  const result = await createdoc.save();
  res.json({data:"Submited Successfully"})
  }
}

export default contactcontroller