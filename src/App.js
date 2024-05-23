import './App.css';
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
       <Navbar />
       <Analytics/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Home />} /> {/* Points to Home but scrolls to contact */}
          <Route path="/about-me" element={<AboutMe />} exact />
        </Routes>
      <Footer />
    </Router>
  )
}
