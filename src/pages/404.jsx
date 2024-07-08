import {React, useEffect} from 'react';
import '../App.css'; // Ensure this file includes your Tailwind CSS setup
import notFoundImage from '../assets/memojis/ohNo.png'; // Ensure you have an image to import

const NotFoundPage = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`; // Stagger the animations
    });
  }, []);

  return (
    <div className="App">
      <div className="home">
        <div className="landing-page flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-4 fade-in">
            <img src={notFoundImage} alt="Page Not Found"  style={{ maxHeight: '400px', width: 'auto' }} />
          </div>
          <div className="home-container md:w-1/2 p-4 fade-in">
            <div className="home-text-container">
              <h1 className="hello-adi">404 Error</h1>
              <p className="home-text-body">
                Oops! It looks like you've found a page that doesn't exist.
              </p>
              <p className="home-text-body swe">
                I'm always learning new things, which means parts of this site are always being worked on. Yes! Even today!
              </p>
              <p className="home-text-body come-see">
                Maybe try heading back to our homepage or check out some of our other cool stuff!
              </p>
              <button className="contact-btn w-1/2" onClick={() => window.location.href = '/'}>
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;