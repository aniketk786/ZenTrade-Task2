import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import DetailView from "./Components/DetailView";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;