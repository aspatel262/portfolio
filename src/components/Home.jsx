import React from 'react';
import { Button } from 'flowbite-react';
import yourImage from '../assets/me3.png'; // Replace with your actual image import

function Home() {
  // Apply a diagonal gradient for background
  const gradientStyle = {
    background: 'linear-gradient(90deg, #000000 0%, #2c3e50 50%, #2c3e50 100%)',
    padding: '100px 0', // Adds padding at the top and bottom
    minHeight: '100vh', // Ensures full viewport height
  };

  return (
    <div
      style={gradientStyle}
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-[#2c3e50] text-white min-h-screen px-4"
    >
      {/* Content Wrapper */}
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl py-8"
        style={{ gap: '20px' }} // Optional gap between image and text
      >
        {/* Image Section */}
        <div className="flex-shrink-0 md:mr-8">
          <img
            src={yourImage}
            alt="Effortless learning"
            className="w-64 md:w-72 lg:w-80 h-auto rounded-lg" // Adjust width as necessary
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 text-center md:text-left px-4 md:px-0">
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
            My name is Aditya, and I'm a Software Engineer with the goal of advancing my career and developing the next generation of technology. Here, I showcase my passion and my obsession for all things Computer Science. Whether you're a recruiter, someone interested in my services, or even a friend just looking around,
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
            <Button className="try-it-free-btn" href="/projects">
              Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
