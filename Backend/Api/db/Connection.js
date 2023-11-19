import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) =>{
  try{
    const DB_OPTION ={
      dbName:"Stats"
    }
   await mongoose.connect(DATABASE_URL,DB_OPTION)
    console.log("succesfully connected db")
  }
  catch(error){
    console.log(error)
  }
}

export default connectdb