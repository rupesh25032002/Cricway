import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Browse.css"
const Search = (props) =>{

  
  return(
    <>
    <form onSubmit={(e)=>e.preventDefault()} className="searchform">
      <div className="searchbox">
      <input  placeholder="Search Player Info"
      value={props.name} 
      onChange={(e)=>{props.setname(e.target.value)}}
      />
      <div className="searchicon">
      <BiSearch onClick={()=>{props.handleit()}}/>
      </div>
      </div>
    </form>
  
    </>
  )
}

export default Search;