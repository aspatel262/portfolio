import './App.css';
import React from "react";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
       <Navbar />
      <Routes> {/* Replaces Switch */}
        <Route path="/" element={<> <Home /> <ContactForm /> <ContactForm /> </>} exact /> {/* Note the use of `element` */}
        {/* <Route path="/about" element={<><Navbar /><About /></>} />  */}
        {/* <Route path="/feature" element={<><NavbarFeature /><Feature /></>} /> */}
        {/* More routes can be added here */}
      </Routes>
      <Footer />
    </Router>
  )
}
