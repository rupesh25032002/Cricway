 import contactdata from "./contactdata.js"
 import "./Contact.css"
const Contactbox=()=>{
  
  
  return(
    <>
    <div className="Contactbox container d-flex flex-row justify-content-around align-items-center">
      <div className="row contactbox2">
       
      {
        contactdata.map((curr)=>{
         return(
          <>
          <div className="smallbox col-sm-3 col-6">
            {curr.logo}
            <p className="contactlogoname">{curr.title}</p>
            <p>{curr.para}</p>
            </div>
          </>
         )
        
        
        })
      }
      </div>
    </div>
    </>
  )
}

export default Contactbox;