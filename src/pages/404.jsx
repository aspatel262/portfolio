import React from 'react';

import '../App.css'; // Ensure this file includes your Tailwind CSS setup

const NotFoundPage = () => {
  return (
    <div className="App">
      <div className="home">
        <div className="landing-page">
          <div className="home-container">
            <div className="home-text-container">
              <h1 className="hello-adi">404 Error</h1>
              <p className="home-text-body">
                Oops! It looks like you've found a page that doesn't exist. 
              </p>
              <p className="home-text-body swe">
                I'm always learning new things, which means part of this site are always being worked on. Yes! Even today!
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
