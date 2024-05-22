import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Sling as Hamburger } from 'hamburger-react';
import res from '../assets/Aditya_Patel_Resume.pdf';
import navbarLogo from '../assets/logo/logo.png';
import navbarLogoFlip from '../assets/logo/logoFlip.png';
import { Button, Navbar } from "flowbite-react";
import "../App.css";
import './comps.css';

function NavbarMain() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState('0px');
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleScrollToContact = useCallback(() => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          handleScrollToContact();
          location.state.scrollToContact = false;
        }, 500);
      }
    }
  }, [location, handleScrollToContact]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const menuNode = document.getElementById('mobile-menu');
    if (menuOpen && menuNode) {
      setMenuHeight(`${menuNode.scrollHeight}px`);
    } else {
      setMenuHeight('0px');
    }
  }, [menuOpen]);

  // Define navbar styles based on scroll state
  const navbarStyle = {
    transition: 'all 0.3s ease-in-out',
    backgroundColor: isScrolled ? 'rgba(19, 34, 48, 0.85)' : 'transparent',
    borderRadius: isScrolled ? '30px' : '0',
    boxShadow: isScrolled ? '0 4px 8px rgba(0,0,0,0.25)' : 'none',
    border: isScrolled ? '0px solid #ddd' : 'none',
    width: isScrolled ? '75%' : '100%',
    margin: isScrolled ? '20px auto' : '0 auto',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    right: '0'
  };

  const navbarBlur = {
    transition: 'all 0.3s ease-in-out',
    borderRadius: isScrolled ? '30px' : '0',
    border: isScrolled ? '0px solid #ddd' : 'none',
    width: '100%',
    backdropFilter: isScrolled ? 'blur(4px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(4px)' : 'none',
    height: '100%',
    top: 0,
    left: 0
  };

  const linkStyle = location.pathname === '/about-me' && !isScrolled ? 'nav-link-inv' : 'nav-link text-white';
  const buttonStyle = location.pathname === '/about-me' && !isScrolled ? 'contact-btn-inv text-#2c3e50' : 'contact-btn';
  const hmStyle = location.pathname === '/about-me' && !isScrolled ? '#2c3e50' : '#FFFFFF';

  return (
    <Navbar style={navbarStyle} className="fixed top-0 z-50 w-full md:w-auto">
      <div style={navbarBlur} className="flex justify-between items-center w-full">
        {location.pathname !== '/about-me' && <Navbar.Brand href="/#home" className={`flex items-center pl-4 text-white`}>
          <img src={navbarLogo} className="mr-3 h-10 sm:h-12" alt="Aditya Patel Logo" />
          <span className={`self-center whitespace-nowrap text-2xl font-semibold text-white`}>Aditya Patel</span>
        </Navbar.Brand>}
        {location.pathname === '/about-me' && isScrolled && <Navbar.Brand href="/#home" className={`flex items-center pl-4 text-white`}>
          <img src={navbarLogo} className="mr-3 h-10 sm:h-12" alt="Aditya Patel Logo" />
          <span className={`self-center whitespace-nowrap text-2xl font-semibold text-white`}>Aditya Patel</span>
        </Navbar.Brand>}
        {location.pathname === '/about-me' && !isScrolled && <Navbar.Brand href="/#home" className={`flex items-center pl-4 text-white`}>
          <img src={navbarLogoFlip} className="mr-3 h-10 sm:h-12" alt="Aditya Patel Logo" />
          <span className={`self-center whitespace-nowrap text-2xl font-semibold text-[#2c3e50]`}>Aditya Patel</span>
        </Navbar.Brand>}

        <div className="hidden md:flex items-center pr-10">
          <div className="flex list-none items-center px-10">
            <Navbar.Link href="/#home" className={`text-xl px-4 py-2 relative hover:text-[#2c3e50] ${linkStyle}`}>Home</Navbar.Link>
            <Navbar.Link href="/about-me" className={`text-xl px-4 py-2 relative ${linkStyle}`}>About Me</Navbar.Link>
            <Navbar.Link href="/projects" className={`text-xl px-4 py-2 relative ${linkStyle}`}>Projects</Navbar.Link>
            <Navbar.Link href="/experiences" className={`text-xl px-4 py-2 relative ${linkStyle}`}>Experiences</Navbar.Link>
          </div>

          <Button className={`${buttonStyle}`} onClick={handleScrollToContact}>Contact Me</Button>
        </div>

        <div className="md:hidden flex items-center pr-4">
          <Hamburger color={`${hmStyle}`} duration={0.8} toggled={menuOpen} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" ref={menuRef} className={`absolute top-[70px] left-0 w-full flex justify-center lg:hidden transition-all duration-300 ${menuOpen ? 'mobile-menu open' : 'mobile-menu'}`} style={{ height: menuHeight }}>
          <div style={navbarBlur} className="bg-[rgba(0,34,48,0.85)] rounded-lg p-4 w-[90%] max-w-md shadow-lg">
            <ul className="list-none p-0 m-0 space-y-2 px-4">
              <li className="text-white text-xl py-2 text-center hover:bg-[#4d6b94] rounded-lg transition duration-200">
                  <a href="/#home" onClick={toggleMenu}>Home</a>
              </li>
              <li className="text-white text-xl py-2 text-center hover:bg-[#4d6b94] rounded-lg transition duration-200">
                  <a href="/about-me" onClick={toggleMenu}>About Me</a>
              </li>
              <li className="text-white text-xl py-2 text-center hover:bg-[#4d6b94] rounded-lg transition duration-200">
                  <a href="/projects" onClick={toggleMenu}>Projects</a>
              </li>
              <li className="text-white text-xl py-2 text-center hover:bg-[#4d6b94] rounded-lg transition duration-200">
                  <a href="/experiences" onClick={toggleMenu}>Experiences</a>
              </li>
            </ul>
            <div className="mt-4 px-4">
              <Button className="contact-btn w-full" onClick={() => {toggleMenu(); handleScrollToContact();}}>Contact Me</Button>
            </div>
          {/* Social Icons as Squares */}
          <div className="mt-4 grid grid-cols-2 gap-2 pb-4">
              <a className='relative bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-blue-600 hover:to-blue-800 hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='https://www.linkedin.com/in/adityapatel953/' target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center'>LinkedIn</span>
                <FaLinkedin size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-gray-700 to-gray-600 hover:from-[#555555] hover:to-[#333333] hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='https://github.com/aspatel262' target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center'>Github</span>
                <FaGithub size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-[#444444] to-[#999999] hover:from-[#999999] hover:to-[#444444] hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href={res} target="_blank" rel="noopener noreferrer">
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center'>Download Resume</span>
                <BsFillPersonLinesFill size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
              </a>
              <a className='relative bg-gradient-to-r from-[#6fc2b0] to-[#28a79f] hover:from-[#28a79f] hover:to-[#6fc2b0] hover:scale-105 text-white flex items-center justify-center h-12 rounded-md overflow-hidden group transition duration-200 ease-in-out' href='mailto:aspatel262@gmail.com'>
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center'>Send An Email</span>
                <HiOutlineMail size={28} className='group-hover:opacity-0 transition-opacity duration-200' />
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