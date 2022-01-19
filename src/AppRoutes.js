import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./app/components/products/Products";
import Auth from "./app/components/auth/Auth";
import Signup from "./app/user-pages/Signup";
import Login from "./app/user-pages/Login";

const AppRoute = () => {
  return(
      <Routes>
        <Route element={<Auth />}>
          <Route path="/" element={<Products />}/>
          <Route path="/add" element={<h1>Add Products</h1>}/>
          <Route path="/update" element={<h1>Update Products</h1>}/>
          <Route path="/logout" element={<h1>Logout</h1>}/>
          <Route path="/profile" element={<h1>Profile</h1>}/>
        </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
  )
}

export default AppRoute