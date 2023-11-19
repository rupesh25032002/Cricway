
import Navbar from '.././Extra/Navbar';
import './Home.css'
const Home = () =>{
  return(
    <>
    
  {/* <div className='container-fluid main-page'>
   <div className='row'>
    <div className='col-6 d-flex justify-content-center align-items-center'>
      <img src="images/mylogo.jpg" className='img-thumbnail mainpageimg h-75' alt='...'/>
    </div>
    <div className='col-6 d-flex justify-content-center align-items-center flex-column second-box mt-40'>
            <h1>WELCOME TO</h1>
            <h2><span>CRIC</span>WAY</h2>
    </div>
   </div>
  </div> */}
    
    <section id='homepage'>
    <div className="container-fluid home_container d-flex justify-content-center align-items-center">
      <div className="homehead">
    <h1>WELCOME TO CRIC<span>WAY</span></h1>
    </div>
    </div>
    </section>
    </>
  )
}

export default Home;