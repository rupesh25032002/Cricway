import "./Browse.css"
import Batting from "./Batting";
import Bowling from "./Bowling"
import Personal from "./Personal"
import Notfound from "./Notfound";
import Browsestartpage from "./Browsestartpage";
const Player = (props) =>{
  //user search and found result
  if(props.data=="found"){
  return(
    <>
    <div className="container playerstatbox">
     <div className="startinfo">
      <div className="imgbox">
      <img src={props?.stats[0]?.imageurl===undefined?"":props.stats[0].imageurl} className="img-fluid" alt="..."/>
      </div>
      <p className="fw-bold playername text-center mt-3">{props?.stats[0]?.name===undefined?"":props.stats[0].name}</p>
      <p className="playercountry text-center">{props?.stats[0]?.country===undefined?"":props.stats[0].country}</p>
     </div>
     <div className="personalinfobox">
      <Personal stats={props.stats}/>
      <Batting stats={props.stats}/>
      <Bowling stats={props.stats}/>
     </div>

    </div>
    </>
  )
  }

  //user search a player but didnt found any result
  else if(props.data=="not found"){
    return(
      <>
      <Notfound/>
      </>
    )
  }

  //until user didnt search any player
  else{
    return(
      <>
      <Browsestartpage/>
      </>
    )
  }
}

export default Player;