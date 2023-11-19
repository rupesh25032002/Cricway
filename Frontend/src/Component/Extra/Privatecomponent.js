import {Outlet, Navigate  } from "react-router"
const Privatecomponent = () =>{
  const auth = localStorage.getItem("user");
  return auth?<Outlet/>:<Navigate to="/Signup"/>
  
}

export default Privatecomponent