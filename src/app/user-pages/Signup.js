import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
      const auth = localStorage.getItem("user")
      if(auth)
        navigate("/")
  })

  const singupHandler = async() => {
    let api_res = await fetch('http://localhost:5000/signup', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name,email,password})
     });

     let result = await api_res.json()
     if(result){
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/")
     }
   
  }

  return(
    <div className="signup">
      <h4>Sign Up</h4>
      <input 
        className="signup-input" 
        type="text" 
        value={name} 
        onChange={(e)=>setName(e.target.value)} 
        placeholder="Enter name"/>
      
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
        onClick={singupHandler}
      >
          Sign up
      </button>
    </div>
  )
}

export default Signup