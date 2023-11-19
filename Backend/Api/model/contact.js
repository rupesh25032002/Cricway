import mongoose from "mongoose";

//define schema
const contactschema = mongoose.Schema({
  name:{type:String},
  email:{type:String},
  message:{type:String}
})

//compile schema
const contactmodel = mongoose.model("contactdata",contactschema);

export default contactmodel