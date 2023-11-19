import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home.js";
import About from "./Component/About/About.js";
import Contact from "./Component/Contact/Contact.js";
import Live from "./Component/Live/Live.js";
import News from "./Component/News/News.js";
import Browse from "./Component/Browse/Browse.js";
import Footer from "./Component/Extra/Footer.js";
import Signup from "./Component/Authentication/Signup.js";
import Login from "./Component/Authentication/Login.js";
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from "./Component/Extra/Navbar.js";
import Privatecomponent from "./Component/Extra/Privatecomponent.js";
const App = () =>{
  return(
    <>
    
   
      <Navbar/>
    <Routes>

      <Route element={<Privatecomponent/>}>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route exact path="/Contact" element={<Contact/>}></Route>
      <Route exact path="/Browse" element={<Browse/>}></Route>
      <Route exact path="/Live" element={<Live/>}></Route>
      <Route exact path="/News" element={<News/>}></Route>
      </Route>

      <Route exact path="/Signup" element={<Signup/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      
    </Routes>
  <Footer/>
    </>
  )
}

export default App;