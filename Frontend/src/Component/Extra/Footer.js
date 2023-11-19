import { FaFacebookF,FaInstagram,FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () =>{
  return(
    <>
    <section id="footer">
    <div className="container-fluid d-flex flex-row  justify-content-center align-items-center footer">
     <div className="socialmedialogobox col-4">
       <FaFacebookF className="logo"/>
       <FaInstagram className="logo"/>
       <FaTwitterSquare className="logo"/>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer