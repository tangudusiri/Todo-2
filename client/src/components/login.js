import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./login.css"
const Login=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
      const  {name,value}=e.target
      setUser({
        ...user,[name]:value
      })
    }
    const handleLogin=()=>{
    const {email,password}=user
    if(email && password){
        axios.post("http://localhost:4000/",user)
        .then(res=>alert(res.data.message))
        navigate("/todo")
    }else{
        alert("all inputs required")
    }
    
    }
    return(
        <div className="main-box">
        <div className="login-wrap">
        <h2>User Login</h2>
        {console.log(user)}
        <input type="text" placeholder="Enter Username" name="email" value={user.email} onChange={handleChange} ></input>
        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange}></input>
        <div className="btn" onClick={handleLogin}>Login</div>
        <div className="or">or</div>
        <div className="btn" onClick={()=>navigate("/register")}>Register</div>

        <p className="text">Forget Password?</p>
        </div>
        </div>
    )
}
export default Login