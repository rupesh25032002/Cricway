import { useEffect, useState } from 'react';
import Navbar from '.././Extra/Navbar';
import Scorecard from './Scorecard';
import "./Live.css";
const Live = () =>{

  //import { useEffect, useState } from "react";
  
     let API = "https://api.cricapi.com/v1/currentMatches?apikey=3c477fb2-6ee9-449d-bc21-0ffdb0667136&offset=0";
  
     const [user,setuser] = useState([]);
     const [load,setload] = useState(true)
    
     const  fetchApiData = async (url) =>{
       try{
         const res = await fetch(url);
         const data = await res.json();
         setload(false)
         setuser(data.data) 
         console.log(data.data)
       }
      
       catch(error){
       console.log(error)
       }
     }
     useEffect(()=>{
     fetchApiData(API)
     },[]);
      if(load){
        return(
          <>
           <div className='loadingbox'>
    <h1 className='text-center mt-5'>Loading....</h1>
    </div>
          </>
        )
      }
     return(
       <>
       <Navbar/>
       <div className='livescore_container'>
       <h1 className='text-center livescorehead'>Live Scorecard</h1>
       <Scorecard detail={user}/>
       </div>
       </>
     )
     }
  
   export default Live;
  
  
  
  