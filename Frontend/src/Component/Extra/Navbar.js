// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { useState } from 'react'
import {NavLink,useNavigate} from 'react-router-dom';

const Navbar = () =>{
const auth = localStorage.getItem("user");
const [active,setactive]=useState(false);
const history = useNavigate();
const dochange = () =>{
setactive(true);
console.log("hello")
}
const Logout = () =>{
  localStorage.clear();
  history("/Signup")
}


  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand brand text-white" >
    <img src="images/mylogo.jpg" alt="xyz" width="30" height="24" className="d-inline-block align-text-top img-fluid"/>
    <span>CRIC</span>WAY</a>
    <button className="navbar-toggler" id={active?"toggle-button":""} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={dochange}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-lg-end " id="navbarNav">
      <ul className="navbar-nav align-items-md-center">
        {auth?<>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" aria-current="page" exact to="/">HOME</NavLink>
        </li>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/About">ABOUT</NavLink>
        </li>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/Browse">BROWSE</NavLink>
        </li>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/News" >NEWS</NavLink>
        </li>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/Live">LIVE </NavLink>
        </li>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/Contact" >CONTACT</NavLink>
        </li>

       <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/Signup" onClick={Logout} >LOG OUT</NavLink>
        </li></>
        :
        <>
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/Signup" >SINGUP</NavLink>
        </li>
       
        <li className="nav-item listbox">
          <NavLink className="nav-link text-white" to="/login" >LOGIN</NavLink>
        </li>
        </>}
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar;