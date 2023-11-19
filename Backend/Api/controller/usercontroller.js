import usermodel from "../model/user.js"
class usercontroller {

//login
  static getuserdata =async (req,res) =>{

    try{
      const {email,password}=req.body;
      const userdata = await usermodel.findOne({email:email})
      if(userdata!=null){
        if(userdata.email===email && userdata.password===password){
          res.json("Authorized user")
        }
        else{
          res.json("wrong password or email")
        }
      }
      else{
        res.json("not registered")
      }
     
    }
    catch (error){
     console.log(error)
    }
  }

//signup
   static insertuserdata =async (req,res) =>{
    try {
      const {name,email,password}=req.body;
      const userdata = await usermodel.findOne({email:email})
      if(!userdata){
        const userdoc = new usermodel({
          name:name,
          email:email,
          password:password
         })
         const result = await userdoc.save()
         res.json("new user")
      }
      else{
        res.json("Already exist")
      }
    } catch (error) {
      console.log(error)
    }
   }

}

export default usercontroller