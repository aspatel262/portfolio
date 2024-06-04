import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';


export default function App() {
  return (
    <Router>
       <Navbar />
       <Analytics/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} exact />
          <Route path="/projects" element={<Projects />} exact />
        </Routes>
      <Footer />
    </Router>
  )
}
