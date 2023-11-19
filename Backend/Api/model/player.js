import mongoose from "mongoose";

//define schema
const playerschema =  mongoose.Schema({
  name:{type:String},
  country:{type:String},
  imageurl:{type:String},
  born:{type:String},
  birthplace:{type:String},
  nickname:{type:String},
  role:{type:String},
  battingstyle:{type:String},
  bowlingstyle:{type:String},
  t20:{
    batting:{
      matches:{type:Number},
      innings:{type:Number},
      runs:{type:Number},
      avg:{type:Number},
      highest:{type:Number}
    },
    bowling:{
      matches:{type:Number},
      innings:{type:Number},
      wickets:{type:Number},
      eco:{type:Number},
      avg:{type:Number},
    }
  },
  odi:{
    batting:{
      matches:{type:Number},
      innings:{type:Number},
      runs:{type:Number},
      avg:{type:Number},
      highest:{type:Number}
    },
    bowling:{
      matches:{type:Number},
      innings:{type:Number},
      wickets:{type:Number},
      eco:{type:Number},
      avg:{type:Number},
    }
  },
  test:{
    batting:{
      matches:{type:Number},
      innings:{type:Number},
      runs:{type:Number},
      avg:{type:Number},
      highest:{type:Number}
    },
    bowling:{
      matches:{type:Number},
      innings:{type:Number},
      wickets:{type:Number},
      eco:{type:Number},
      avg:{type:Number},
    }
  },
  ipl:{
    batting:{
      matches:{type:Number},
      innings:{type:Number},
      runs:{type:Number},
      avg:{type:Number},
      highest:{type:Number}
    },
    bowling:{
      matches:{type:Number},
      innings:{type:Number},
      wickets:{type:Number},
      eco:{type:Number},
      avg:{type:Number},
    }
  }

})

//compile schema
const playermodel = mongoose.model("playerstat",playerschema)


export default playermodel