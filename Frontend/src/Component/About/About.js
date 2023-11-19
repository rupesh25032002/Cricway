import { Button } from 'bootstrap';
import {NavLink} from 'react-router-dom';
import Navbar from '.././Extra/Navbar';
import "./About.css"
const About = () =>{
  
  return(
    <>
    <Navbar/>
    <section id="Aboutpage">
    <div className="container mt-5 about_container d-flex justify-content-center align-items-center">
      <div className="row mt-5 mb-3">
      <div className="col-md-6 col-sm-12 whyusbox">
      <h2 className="head">Why Us?</h2>
      <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>
      <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>

      <button className="btn btnn">More About</button>
      </div>
      <div className="col-md-6 mt-sm-4 col-sm-12 d-flex flex-column">
      <div className="box box1">
        <h3>Abcdefg</h3>
        <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified</p>
      </div>
      <div className="box box2"> 
      <h3>Abcdefg</h3>
      <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified</p>
      </div>
      <div className="box box3"> 
      <h3>Abcdefg</h3>       
      <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified</p>
      </div>
      </div>
      </div>

    </div>
    </section>
    </>
  ) 
}

export default About;