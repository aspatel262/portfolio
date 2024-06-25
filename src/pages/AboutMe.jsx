import React from 'react';
import AboutLanding from '../components/AboutLanding';
import PhotoGrid from '../components/PhotoGrid';
import '../App.css'; // Ensure your CSS file is linked

const AboutMe = () => {
  return (
    <div id='about-me'>
      <section id='abmeLanding'>
        <div className="abme">
          <AboutLanding />
        </div>
      </section>
      <section id="photo-grid">
          <PhotoGrid />
      </section>

    </div>
  );
};


export default AboutMe;
