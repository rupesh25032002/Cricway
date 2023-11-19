import "./Live.css";
const Scorecard = (props) =>{
  return(
    <>
    {
      props.detail.map((curr)=>{
        return(
          <>
          <div className="livescore">
          <div className="Scorecardbox container  d-flex flex-column">
          <p className="matchheading text-center mt-3">{curr.teams[0]+" vs "+curr.teams[1]+" - "+curr.matchType.toUpperCase()}<span>{curr.matchEnded?"":"  (LIVE) "}</span></p>
          <div className="scorebox d-flex flex-row justify-content-around align-items-center mt-3">
          <div className="box1 d-flex flex-row justify-content-around align-items-center">
            
            <div className="box11 d-flex flex-row justify-content-around align-items-center">
              <div className="box111 ">
                <div className="imgbox1">
                <img src={curr.teamInfo[0].img} className="img-thumbnail" alt="..."/>
                </div>
              <p className="text-center mt-2">{curr.teamInfo[0].shortname}</p>
                </div>
               
            <div className="box112">
            <p className="mb-0">{curr?.score[0]?.r ===undefined ? "Yet to Bat":curr.score[0].r+"/"} {curr?.score[0]?.w === undefined ? "":curr.score[0].w}</p> 
            <p>{curr?.score[0]?.o===undefined?"":curr.score[0].o}</p> 
             
             
            </div>
            </div>
            <div className="box12">vs</div>
            <div className="box13 d-flex flex-row justify-content-around align-items-center">
           
            <div className="box131">
             <p className="mb-0">{curr?.score[1]?.r ===undefined ? "Yet to Bat":curr.score[1].r+"/"} {curr?.score[1]?.w === undefined ? "":curr.score[1].w}</p> 

             <p>{curr?.score[1]?.o===undefined?"":curr.score[1].o}</p> 
            
            </div>
            <div className="box132 ">
                <div className="imgbox2">
                <img src={curr.teamInfo[1].img} className="img-thumbnail" alt="..."/>
                </div>
              <p className="text-center mt-2">{curr.teamInfo[1].shortname}</p>
            </div>
          </div>
          </div>
          </div>
          <div className="box2 d-flex flex-column justify-content-center align-items-center">
           
            <p className="status text-center">{curr.status}</p>
            <p className="venue text-start text-center">Venue : {curr.venue}</p>
          </div>
          </div>
          </div>
          </>
        )
        
      })
      
    }
   
    </>
  )
}

export default Scorecard;