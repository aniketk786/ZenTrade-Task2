import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./login.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

    const handleClick=(e)=> {
      e.preventDefault();
      if (password === 'SmartServTest@123') {
        navigate("/");// navigate to visualization
      } 

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="log">        
          <div className="container">        
          <img className="logo" src={logo} alt="Logo"  />
          <input
            type="email"
            placeholder="Enter your email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lInput"
          />
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lInput"
          />
          <button type="submit" className="signIn" onClick={handleClick} >
            Sign In
          </button>
          
          <p>Don't have an account?<Link id="signUp" to={"/register"} > Sign Up</Link></p>
        </div>
         
       
        
      </div>
    );
  };
  
  
  
  export default Login;