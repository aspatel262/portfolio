import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Aditya Patel. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/adityapatel953/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size="24" />
          </a>
          <a href="https://github.com/aspatel262" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size="24" />
          </a>
          <a href="mailto:aspatel262@gmail.com" className="hover:text-gray-400">
            <FaEnvelope size="24" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
