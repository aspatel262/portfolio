import './App.css';
import React from "react";
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
       <Navbar />
      <Routes> {/* Replaces Switch */}
        <Route path="/" element={<Home />} exact /> {/* Note the use of `element` */}
        {/* <Route path="/about" element={<><Navbar /><About /></>} />  */}
        {/* <Route path="/feature" element={<><NavbarFeature /><Feature /></>} /> */}
        {/* More routes can be added here */}
      </Routes>
      {/* You could also add a Footer here that would be included on all pages */}
    </Router>
  )
}
