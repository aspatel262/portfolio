import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import WavingAnimation from './WavingAnimation'; // Import the WavingAnimation component
import RadialGradient from './RadialGradient'; // Make sure to import the RadialGradient component
import '../App.css'

function Landing() {
    const [contentVisible, setContentVisible] = useState(false);
  
    useEffect(() => {
      setContentVisible(true);
    }, []);
  
    return (
        <div className="home">

            <RadialGradient scale="scale-100" opacity="opacity-25" position="top-0" overflow="overflow-visible" />

            <div className="landing-page">
            <div className={`home-container ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} >
                <WavingAnimation />
            </div>

            <div className={`home-text-container ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className='landing-main-text items-left'>
                    <h1 className="hello">Hello there,</h1>
                    <h1 className="hello-adi md:pl-20"> I'm Aditya</h1>
                </div>
                <p className="home-text-body">
                    My name is Aditya, and I'm a <span className='swe'>{" "}Software Engineer {" "}</span>with the goal of 
                    advancing my career and developing the next generation of technology. Here, I showcase my passion and
                    my obsession for all things Computer Science. Whether you're a recruiter, someone interested in 
                    my services, or even a friend just looking around,<span className='come-see'>{" "}come check out what I've done.</span>
                </p>
                <div className="flex mt-8 justify-center">
                    <Button className="contact-btn md:w-48 w-96" href="/projects">Projects</Button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Landing;