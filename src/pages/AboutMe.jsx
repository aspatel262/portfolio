import React from 'react';
import '../App.css'; // Ensure your CSS file is linked
import headshot from '../assets/aboutme/headshot.png'

const AboutMe = () => {
  return (
    <div id="about-me" className="abme">
      <div className="abme-page">
        <div className="image-container">
          <img src={headshot} alt="Headshot of Aditya Patel" />
        </div>
        
        <div className="about-content">
          <h1>
            I'm Aditya Patel, a Software Engineer
          </h1>
          <p className="about-text">
            I’ve spent the past few years studying the latest and greatest technologies to pursue my passion in the field of Computer Science. Currently, 
            I am a <span className='about-bolded'>student at the University of Michigan Ann Arbor</span>, but my interest in what I learn expands far beyond campus. 
          </p>
          <p className="about-text">
            Driven by an <span className='about-bolded'>insatiable curiosity</span> and a <span className='about-bolded'>constant thirst for learning</span>, 
            I continually seek to explore new areas and deepen my understanding of the tech world. This curiosity has led me to embrace a variety of 
            professional experiences, working across different areas of software engineering, machine learning, data science engineering, front-end 
            and back-end systems development. <span className='about-bolded'>My primary goal</span> is to create impactful, applicable user 
            oriented solutions to problems that <span className='about-bolded'>make a difference</span>.
          </p>
          <p className="about-text">
            Outside of my IDE, you will find me pursuing my hobbies. I enjoy playing the electric guitar, viewing the world 
            behind the lens of my camera, as well as following and playing sports such as basketball, tennis, and football. 
            Come see more about my life below!
          </p>
        </div>
      </div>
    </div>
  );
};


export default AboutMe;
