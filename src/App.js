import logo from './assets/logo.svg';
import './App.css';
import React from "react";
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'


export default function App() {
  return (

    <main>
      <Navbar />
      <Home />
    </main>
  )
}
