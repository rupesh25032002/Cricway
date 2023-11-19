import {NavLink} from 'react-router-dom';
import Navbar from '.././Extra/Navbar';
import Contactbox from './Contactbox';
import Contactform from './Contactform.js';
const Contact = () =>{
  return <>
  <section id="contact">
  <Contactform/>
  <Contactbox/>
  </section>
  </>
}

export default Contact;