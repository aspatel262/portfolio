import logo from './assets/logo.svg';
import './App.css';
import React from "react";
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'


export default function App() {
  return (

    <main>
      <Sidebar />
      <Home />
    </main>
  )
}
