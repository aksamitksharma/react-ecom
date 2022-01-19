import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const loginHandler=async()=>{
    let api_res = await fetch('http://localhost:5000/login',
    {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email,password})
     })

     let result = await api_res.json()
     if(result.status===200){
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/")
    }
  }

  return(
    <div className="signup">
      <h4>Login</h4>
      
      <input 
        className="signup-input" 
        type="email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder="Enter email"/>

      <input 
        className="signup-input" 
        type="password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Enter password"/>

      <button 
        className="submit-button"
        onClick={loginHandler}
      >
          Login
      </button>
    </div>
  )
}

export default Login