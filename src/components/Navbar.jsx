import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import res from '../assets/Aditya_Patel_Resume.pdf';
import navbarLogo from '../assets/logoFlip.png';
import './comps.css';
import { Button, Navbar } from "flowbite-react";
import "../App.css";

function NavbarMain() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navbar styles based on scroll state
  const navbarStyle = {
    transition: 'all 0.3s ease-in-out',
    backgroundColor: isScrolled ? '#132230' : 'transparent', // Adjust the background color to match your page when not scrolled
    borderRadius: isScrolled ? '30px' : '0',  // Smooth round corners when scrolled
    boxShadow: isScrolled ? '0 4px 8px rgba(0,0,0,0.25)' : 'none', // Subtle shadow when scrolled
    border: isScrolled ? '0px solid #ddd' : 'none', // Optional: border to enhance navbar visibility
    width: isScrolled ? '75%' : '100%', // 75% width when scrolled
    margin: isScrolled ? '20px auto' : '0 auto', // Automatically center the navbar horizontally when scrolled
    padding: '10px 0', // Consistent padding
    display: 'flex', // Ensure flexbox is used for the navbar
    justifyContent: 'center', // Center the navbar contents horizontally
    alignItems: 'center', // Center the navbar contents vertically
    left: '0',
    right: '0'
  };
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar style={navbarStyle} className="fixed top-0 z-50 w-full md:w-auto">
      <div className="flex justify-between items-center w-full">
        {/* Navbar Brand */}
        <Navbar.Brand href="/" className="flex items-center pl-4">
          <img src={navbarLogo} className="mr-3 h-10 sm:h-12" alt="Aditya Patel Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">Aditya Patel</span>
        </Navbar.Brand>

        {/* Desktop Links and Button */}
        <div className="hidden md:flex items-center pr-10">
          {/* Navbar Links */}
          <div className="flex list-none items-center px-10">
            <Navbar.Link href="/" className="nav-link text-xl text-white px-4 py-2 relative hover:text-white">Home</Navbar.Link>
            <Navbar.Link href="/about-me" className="nav-link text-xl text-white px-4 py-2 relative">About Me</Navbar.Link>
            <Navbar.Link href="/projects" className="nav-link text-xl text-white px-4 py-2 relative">Projects</Navbar.Link>
            <Navbar.Link href="/experiences" className="nav-link text-xl text-white px-4 py-2 relative">Experiences</Navbar.Link>
          </div>

          {/* Action Button */}
          <Button className="contact-btn" href="/contact">Contact Me</Button>
        </div>


        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full flex justify-center md:hidden">
          <div className="bg-[rgba(0,34,48,0.85)] rounded-lg p-4 w-[90%] max-w-md shadow-lg">
            <ul className="list-none p-0 m-0 space-y-2 px-4">
              {['Home', 'About Me', 'Projects', 'Experiences'].map((item, index) => (
                <li key={index} className="text-white text-xl py-2 hover:bg-[#3b4e68] rounded-lg transition duration-200">
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '')}`} onClick={toggleMenu}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <Button className="contact-btn w-full" href="/contact" onClick={toggleMenu}>Contact Me</Button>
            </div>
          {/* Social Icons as Squares */}
          <div className="mt-4 grid grid-cols-2 gap-2">
              <a className='relative bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-blue-600 hover:to-blue-800 hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200'>LinkedIn</span>
                <FaLinkedin size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-[#555555] to-[#333333] hover:from-gray-700 hover:to-gray-600 hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Github</span>
                <FaGithub size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-[#6fc2b0] to-[#28a79f] hover:from-[#28a79f] hover:to-[#6fc2b0] hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='mailto:aspatel262@gmail.com'>
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Send An Email</span>
                <HiOutlineMail size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-[#444444] to-[#999999] hover:from-[#999999] hover:to-[#444444] hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href={res} target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Download Resume</span>
                <BsFillPersonLinesFill size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className='sidebar-nav'>
        <ul>
          <li className='sidebar-floating-box bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-blue-600 hover:to-blue-800 hover:scale-105'>
            <a className='sidebar-text pl-3' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='sidebar-floating-box bg-gradient-to-r from-gray-700 to-gray-600 hover:from-[#555555] hover:to-[#333333] hover:scale-105'>
            <a className='sidebar-text pl-5' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='sidebar-floating-box bg-gradient-to-r from-[#6fc2b0] to-[#28a79f] hover:from-[#28a79f] hover:to-[#6fc2b0]  hover:scale-105'>
            <a className='sidebar-text pl-6' href='mailto:aspatel262@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='sidebar-floating-box bg-gradient-to-r from-[#444444] to-[#999999] hover:from-[#999999] hover:to-[#444444] hover:scale-105'>
            <a className='sidebar-text pl-4' href={res} target="_blank" rel="noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default NavbarMain;