import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navigation = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.clear()
    navigate("/login")
  }

  return(
    <>
      <ul className="nav-ul">
        
        {auth?<li> <Link to="/">Products</Link> </li>:""}
        {auth?<li> <Link to="/add">Add Products</Link> </li>:""}
        {auth?<li> <Link to="/update">Update Products</Link></li>:""}
        {auth?<li> <Link to="/profile">Profile</Link> </li>:<li> <Link to="/login">Login</Link> </li>}
        {auth?<li> <Link onClick={logout} to="/login">Logout</Link> </li>:<li> <Link to="/signup">Sing up</Link> </li>}
      </ul>
    </>
  )
}

export default Navigation