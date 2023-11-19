 import { useEffect, useState } from 'react';
 import Navbar from '.././Extra/Navbar';
import Player from './Player';
 import Search from './Search';
//  import Player from './Player';
 const Browse = () =>{

//import { useEffect, useState } from "react";


const [user,setuser] = useState({});
const [name,setname] = useState("");
const [data,setdata]=useState("");
const [isload,setisload]=useState(false);

let API = `http://localhost:5000/?playername=${name}`;
  
   const  fetchApiData = async (url) =>{
     try{
      if(name!==""){
       const res = await fetch(url);
       const data = await res.json();
       setuser(data)
       if(name!==data[0]?.name){
        setdata("not found")
        console.log("jahsjsk")
       }
       else{
         setdata("found")
         console.log(data)
         console.log(user) 
        }
      }
      else{
        setdata("not found") 
      }
     }
     
     catch(error){
      setdata("not found")
      console.log(error)
     }
   }


  const changeit = () =>{
    fetchApiData(API)
  }

   
   return(
     <>
     <Navbar/>
     <section class="browseplayer">
      <Search handleit={changeit} setname={setname} name={name}/>
      <Player stats={user} data={data}/>
      </section>
     </>
   )
   }

 export default Browse;



