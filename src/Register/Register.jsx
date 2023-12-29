import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./register.css";




const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [er,seter]=useState('');
    const navigate = useNavigate();

    const registerUser=(e) => {
        e.preventDefault();
        var passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])[^@]*@[^@]*$/;

        if (!passwordPattern.test(password)) {
          seter(" Password must contain an uppercase letter, a number, and only @ as a special character");
          return;
          
        }
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate("/login");
          })
          .catch((error) => {
            alert();
            console.log(error);
          });

    };

    return (
      
      <div className="register" >
          <div className="container">        
              <img className="logo" src={logo} alt="Logo"  />
              <form  onSubmit={registerUser}>
           
              <input type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
              <input type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
              <p style={{color:"red"}}>{er}</p>
              <button type="submit" className="signUp" value="Sign Up" >Sign Up</button>
              
              </form>
              <p>Already have an account? <Link id="signIn"  to={'/login'}>Sign in</Link></p>
          
          </div>
          
      </div>
    );
  }
  
  
  
  export default Register;