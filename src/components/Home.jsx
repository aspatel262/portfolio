import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import WavingAnimation from './WavingAnimation'; // Import the WavingAnimation component

function Home() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setContentVisible(true);
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(90deg, #000000 0%, #2c3e50 50%, #2c3e50 100%)',
    padding: '100px 0',
    minHeight: '100vh',
  };

  return (
    <div
      style={gradientStyle}
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-[#2c3e50] text-white min-h-screen px-8 md:px-16 xl:px-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl py-0 md:space-x-8 lg:space-x-10">
        <div className={`flex-shrink-0 mb-6 md:mb-0 transition-all duration-1000 ease-in-out transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          {/* Replace static image with WavingAnimation */}
          <WavingAnimation />
        </div>
        <div className={`flex flex-col items-center md:items-start md:w-2/3 space-y-4 text-center md:text-left px-4 md:px-0 transition-all duration-1000 ease-in-out transform ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold">Hello there,</h1>
          <h1
            className="powerful-results text-3xl md:text-4xl font-bold"
            style={{
              background: 'linear-gradient(to right, #4facfe 0%, #87cefa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            I'm Aditya
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            My name is Aditya, and I'm a <span style={{
                background: 'linear-gradient(to right, #98D8C1 0%, #CFFAE8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}>
              {" "}Software Engineer {" "}
            </span>
            with the goal of advancing my career and developing the next generation of technology. Here, I showcase my passion and my obsession for all things Computer Science. Whether you're a recruiter, someone interested in my services, or even a friend just looking around,
            <span
              style={{
                background: 'linear-gradient(to right, #4facfe 0%, #87cefa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              {" "}come check out what I've done.
            </span>
          </p>
          <div className="flex mt-8">
            <Button className="contact-btn" href="/projects">
              Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
