import React from 'react';
import AboutLanding from '../components/AboutLanding';
import '../App.css'; // Ensure your CSS file is linked

const AboutMe = () => {
  return (
    <div id='about-me'>
      <section id='abmeLanding'>
        <div className="abme">
          <AboutLanding />
        </div>
      </section>

    </div>
  );
};


export default AboutMe;
