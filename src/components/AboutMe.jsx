import React from 'react';
import '../App.css'; // Ensure your CSS file is linked
import headshot from '../assets/aboutme/headshot.png'

const AboutMe = () => {
  return (
    <div id="about-me" className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="about-me-container pt-20 flex flex-col md:flex-row items-center justify-between w-full min-h-screen md:pl-44 md:pr-20 p-8 overflow-auto">
        <div className="image-container flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 md:mr-6 w-full md:w-2/5 md:-rotate-90 md:hover:-rotate-0 md:transition-all md:ease-in-out md:duration-300">
          <img 
            src={headshot}
            alt="Aditya Patel" 
            className="flex-shrink-0 mb-6 md:mb-0 md:w-full w-3/4 h-auto object-cover"
          />
        </div>
        
        <div className="text-container w-full md:w-3/5 md:pl-5 md:mt-20 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
            I'm Aditya Patel, a Software Engineer
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            I’ve spent the past few years studying the latest and greatest technologies to pursue my passion in the field of Computer Science. Currently, 
            I am a student at the University of Michigan Ann Arbor, but my interest in what I do expands far beyond campus. 
          </p>
          <p className='text-lg lg:text-xl text-gray-700 mb-4'>
            I come fully prepared with professional experiences, working across different areas of software engineering, machine learning, data science engineering,
            front end and back end systems development, with the primarily goal focusing on creating impactful, applicable user experiences.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
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
