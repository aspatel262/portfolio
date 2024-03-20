import './App.css';
import React from "react";
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx';


export default function App() {
  return (

    <main>
      <Navbar />
      <Sidebar />
      <Home />
    </main>
  )
}
