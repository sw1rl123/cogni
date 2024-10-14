import './App.css';
import { useState, useEffect } from 'react';
import LoginForm from "./Components/Auth/login/LoginForm"
import RegisterForm from "./Components/Auth/register/RegisterForm"
import Profile from "./Components/Profile/Profile"
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <Routes>
      <Route path="login" element={<LoginForm />}/>
      <Route path="register" element={<RegisterForm />}/>
      <Route path="profile" element={<Profile />}/>
    </Routes>
  );
};

export default App;
