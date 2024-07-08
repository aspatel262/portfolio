import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';

// import Experiences from './pages/Experiences.jsx';

import E404 from './pages/404.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/experiences" element={<E404 />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}
