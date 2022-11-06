import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./register.css"
const Register=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        conformPassword:""
    })
    const handleChange=(e)=>{
      const {name,value}=e.target
      setUser({
        ...user,[name]:value
      })
    }
  const  handleRegister=()=>{
        const {name,email,password,conformPassword}=user
        if(name && email && password && (password===conformPassword)){
            axios.post("http://localhost:4000/register")
            .then(data=>alert(data))
            navigate("/")
            
        }else{
            alert("all inputs are required")
        }
    }
    
    return(
        <div className="main-wrap">
        <div className="register-wrap">
        {console.log(user)}
        <h2>User Regester</h2>
        <input type="text" placeholder="Enter Username" name="name" value={user.name} onChange={handleChange}></input>
        <input type="text" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}></input>
        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange}></input>
        <input type="password" placeholder="Conform Password" name="conformPassword" value={user.conformPassword} onChange={handleChange} ></input>
        <div className="btn" onClick={handleRegister}>Register</div>
        <p className="text">Member Login</p>
        </div>
        </div>
    )
}
export default Register