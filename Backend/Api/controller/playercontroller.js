import playermodel from "../model/player.js"
class playercontroller {
//create documents 
static createDoc = async (req,res) =>{
   try{
      const playerdoc = new playermodel({
        name:"Sachin Tendulkar",
        country:"India",
        imageurl:"https://images.news18.com/ibnlive/uploads/2021/04/sachin.jpg",
        born:"April 24,1973",
        birthplace:"Maharashtra, India",
        nickname:"Tendulkar",
        role:"Batsman",
        battingstyle:"Right-hand Batsman",
        bowlingstyle:"Right-arm Spinner",
        t20:{
          batting:{
            matches:1,
            innings:1,
            runs:10,
            avg:10.0,
            highest:10
          },
          bowling:{
            matches:1,
            innings:1,
            wickets:1,
            eco:4.8,
            avg:12.0,
          }
        },
        odi:{
          batting:{
            matches:463,
            innings:452,
            runs:18426,
            avg:44.83,
            highest:200
          },
          bowling:{
            matches:463,
            innings:270,
            wickets:154,
            eco:5.1,
            avg:44.48,
          }
        },
        test:{
          batting:{
            matches:200,
            innings:329,
            runs:15921,
            avg:53.79,
            highest:248
          },
          bowling:{
            matches:200,
            innings:145,
            wickets:46,
            eco:3.53,
            avg:54.17,
          }
        },
        ipl:{
          batting:{
            matches:78,
            innings:78,
            runs:2334,
            avg:33.83,
            highest:100
          },
          bowling:{
            matches:78,
            innings:4,
            wickets:0,
            eco:9.67,
            avg:0.0,
          }
        }
      })

      const result = await playerdoc.save();
      res.send(result)
   }
   catch(error){
    console.log(error)
   }
}
  //get all player data
  static getallplayerdata = async (req,res) =>{
    try{
      const result = await playermodel.find()
      res.status(201).send(result)
      console.log(result)
    }
    catch(error){
      console.log(error)
    }
  }

  //get single player data on the basis of name of player
  static getplayerdata = async (req,res) =>{
    try{
      const result = await playermodel.find({name:req.query.playername})
      res.status(201).send(result)
      console.log(result)
    }
    catch(error){
      console.log(error)
    }
  }

   //delete single player with help of id
   static deleteDocbyid = async(req,res) =>{
      try{
        const result = await playermodel.findByIdAndDelete(req.params.id);
        res.status(204).send(result)
      }
      catch(error){
        console.log(error)
      }
   }

   //delete single player with help of name of player
   static deleteDocbyname = async(req,res) =>{
      try{
        const result = await playermodel.deleteOne({name:req.params.name});
        res.status(204).send(result)
      }
      catch(error){
        console.log(error)
      }
   }
}

export default playercontroller