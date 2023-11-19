import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./Authenticate.css"

const Login = () =>{
  const history = useNavigate();
  const [user,setuser]=useState({
    email:'',
    password:''
  }
  )
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth)
    history("/")
  },[])
const [pass,setpass]=useState("password")

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
      const {email,password}=user;
     const result = await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      })
      // console.log("success")
      // console.log(name)
      // console.log(password)
      // console.log(email)
      const data = await result.json()

      //user user already registered
     if(data=="Authorized user"){
      localStorage.setItem("user",email)
      history("/")
     }
     else if(data=="not registered"){
      alert("user are not registerd!")
     }
     else{
      alert("Wrong password!")
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
        <div className="loginbox2 col-md-6 col-sm-12" >
    <h1>Welcome to CricWay!</h1>
    <h3>Login your account</h3>
    <form method="POST" onSubmit={(e)=>e.preventDefault()} className="form1">
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
  
      <button className="loginbtn" type="submit" onClick={handlechange}>Login</button>
    </form>
    <div className="new_account text-center">
    <NavLink to="/Signup" className="navlink">Create new account</NavLink>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login