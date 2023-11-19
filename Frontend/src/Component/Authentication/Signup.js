import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Authenticate.css"
import { useNavigate } from "react-router-dom"


const Singup = () =>{
  const history = useNavigate();
  const [user,setuser]=useState({
    name:'',
    email:'',
    password:''
  })

  const [pass,setpass]=useState("password")

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth)
    history("/")
  },[])
  const passwordtoggle = (e) =>{
    if(pass==="password")
    setpass("text")
    else
    setpass("password")
  }

  let name,value;
  const changeinput = (e) =>{
     name=e.target.name;
     value=e.target.value;
     setuser({...user,[name]:value})
  }

  const handlechange = async() =>{
    
    try {
      const {name,email,password}=user;
     const result = await fetch("http://localhost:5000/authenticate",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,password,email
        })
      })
      const data = await result.json()

      //user user already registered
     if(data=="Already exist"){
      alert("user alreday exist")
     }
     else{
      //send to home page
      localStorage.setItem("user",email)
       history("/")
      console.log("user not exist")
     }
    } 
    catch (error) {
      console.log(error)
    }
  }
 
  return(
    <>
    <div className="loginpage">
      <div className="container login_container row" id="login_container">
        <div className="loginbox1 col-md-6">
        </div>
        <div className="loginbox2 col-md-6 col-sm-12">
    <h1>Welcome to CricWay!</h1>
    <h3>Register new account</h3>
    <form method="POST" onSubmit={(e)=>e.preventDefault()} className="form1">
      <div className="input_div">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" className="input_box"  value={user.name} onChange={changeinput} autoComplete="off" />  
      </div>
      <div className="input_div">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" className="input_box"  value={user.email} onChange={changeinput} autoComplete="off" />  
      </div>
      <div className="input_div">
      <label htmlFor="password">Password</label>
      <input type={pass} name="password"  className="input_box" id="password" value={user.password} onChange={changeinput} autoComplete="off" />
      <div className="mt-3">
      <input type="checkbox" id="showpassword" onClick={passwordtoggle}/>
      <label htmlFor="showpassword" className="d-inline passwordlabel">Show password</label>
      </div>
      </div>
  
      <button className="loginbtn" type="submit" onClick={handlechange}>Register</button>
    </form>
    <div className="new_account text-center">
    <NavLink to="/login" className="navlink">Already have an account?</NavLink>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
//
export default Singup