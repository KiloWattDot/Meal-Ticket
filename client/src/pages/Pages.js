import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Results from "../components/Results"
import Login from '../components/Login';
import Signup from '../components/Signup';
import Choice from '../components/Choice';
import Navbar from '../components/Navbar';



function Pages() {
  return (
      <Router>
          <Navbar />
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/results/:id" element={<Results />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/choice" element={<Choice />} />
        
    </Routes>
    </Router>
  )
}

export default Pages;