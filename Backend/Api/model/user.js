import mongoose from "mongoose";

//define schema
const userschema = mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String}
})

//compile Schema
const usermodel = mongoose.model("Autentication",userschema)

export default usermodel
