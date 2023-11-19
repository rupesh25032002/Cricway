import { useState } from "react";
import "./Contact.css";
const Contactform = () =>{
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [message,setmessage] = useState("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    setname("")
    setemail("")
    setmessage("")
    console.log(name+email+message);
  }

  const senddata = async() =>{
    try{
  const res = await fetch("http://localhost:5000/contactdata",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,message
    })
  })
  const data = await res.json();
  console.log(data)
  console.log(name,email,message)
}
catch(error){
  console.log(error)
}
  }
  return(
    <>
    <div className="contactformbox container">    
      <h1 className="text-center  mb-3 contactushead">Contact Us</h1>
    <form onSubmit={handlesubmit} className="formcontactus d-flex flex-column justify-content-center align-items-center">
      <h2>Send us a Query!</h2>
        
    <input className="contactinput"  value={name} placeholder="Enter your Name" onChange={(e)=>{setname(e.target.value)}} required/>
    
    <input className="contactinput" value={email} placeholder="Enter your Email id" onChange={(e)=>{setemail(e.target.value)}} required/>
    
    <textarea className="contactinput textareainput" value={message} placeholder="Send Any Query" onChange={(e)=>{setmessage(e.target.value)}} required></textarea>
    <button className="sendbtn" type="submit" onClick={senddata}>Send Now</button>
    </form>
    </div>
   
    </>
  )
}

export default Contactform;