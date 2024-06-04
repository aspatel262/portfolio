import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../assets/project-data/projectStruct';
import AnimatedTyping from './AnimatedTyping';
import '../App.css';

import imgStudyBuddy from '../assets/project-data/project-image/studybuddy.jpg';
import imgFreePointer from '../assets/project-data/project-image/freepointer.jpeg';
import portfolio from '../assets/project-data/project-image/portfolio.png';

import beautifulSoupIcon from '../assets/project-data/tech-stack-images/beautiful-soup.svg';
import flaskIcon from '../assets/project-data/tech-stack-images/flask.svg';
import googleGeminiIcon from '../assets/project-data/tech-stack-images/google-gemini.svg';
import nodejsIcon from '../assets/project-data/tech-stack-images/nodejs.svg';
import pythonIcon from '../assets/project-data/tech-stack-images/python.svg';
import reactIcon from '../assets/project-data/tech-stack-images/react.svg';
import seleniumIcon from '../assets/project-data/tech-stack-images/selenium.svg';
import tailwindcssIcon from '../assets/project-data/tech-stack-images/tailwindcss.svg';
import twilioIcon from '../assets/project-data/tech-stack-images/twilio.svg';
import twitterIcon from '../assets/project-data/tech-stack-images/twitter.svg';
import javascriptIcon from '../assets/project-data/tech-stack-images/javascript.svg';
import gmailIcon from '../assets/project-data/tech-stack-images/gmail.svg';
import vercelIcon from '../assets/project-data/tech-stack-images/vercel.svg';
import htmlIcon from '../assets/project-data/tech-stack-images/html-1.svg';
import cssIcon from '../assets/project-data/tech-stack-images/css-3.svg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projectImages = [imgStudyBuddy, imgFreePointer, portfolio];
    const [imageIdx, setImageIdx] = useState(null);
    const techIcons = {
        'Beautiful Soup': beautifulSoupIcon,
        'Flask': flaskIcon,
        'Google Gemini 1.5 API': googleGeminiIcon,
        'Node.js': nodejsIcon,
        'Python': pythonIcon,
        'React': reactIcon,
        'Selenium': seleniumIcon,
        'TailwindCSS': tailwindcssIcon,
        'Twilio API': twilioIcon,
        'Twitter API': twitterIcon,
        'JavaScript': javascriptIcon,
        'HTML': htmlIcon,
        'CSS': cssIcon,
        'Gmail API': gmailIcon,
        'Vercel': vercelIcon,
    };

    const openProjectDetails = (project, imgIndex) => {
        setSelectedProject(project);
        setImageIdx(imgIndex);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeProjectDetails();
        }
    };

    const leftColumnProjects = projects.filter((_, index) => index % 2 === 0);
    const rightColumnProjects = projects.filter((_, index) => index % 2 !== 0);

    return (
        <div className="pt-20 p-8 min-h-screen md:pl-44 md:pr-20 bg-gradient">
            <AnimatedTyping
                textArray={['Creative', 'Learning Driven', 'Passion', 'Meaningful']}
                preText='My '
                postText="Projects" 
                fontSize="text-5xl"
                color="text-white"
                fontWeight="font-extrabold"
                padding="pt-10"
                subtext="Come see the work I've created so far"
                subtextGradient="linear-gradient(to right, #4facfe 0%, #87cefa 100%)"
                subtextSize="text-xl"
                subtextPadding="mt-2"
            />

            <div className="flex flex-col lg:flex-row lg:w-11/12">
                <div className="flex-1 flex flex-col lg:pr-5 items-center">
                    {leftColumnProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={project.id}
                            className="relative w-full md:w-480 bg-white mb-16 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                            style={{ height: '600px', width: '480px' }}
                            onClick={() => openProjectDetails(project, 2 * index)}
                        >
                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <div className="flex justify-center items-center h-auto">
                                    <img src={projectImages[2 * index]} alt={project.title} className="w-full object-contain rounded-t-lg" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-4">
                                    <h2 className="text-xl text-center font-bold mb-2">{project.title}</h2>
                                    <p className="text-sm text-center text-gray-700">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex-1 flex lg:pl-5 flex-col items-center mt-0 md:mt-24">
                    {rightColumnProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={project.id}
                            className="relative w-full md:w-480 bg-white mb-20 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                            style={{ height: '600px', width: '480px' }}
                            onClick={() => openProjectDetails(project, 2 * index + 1)}
                        >
                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <div className="flex justify-center items-center h-auto">
                                    <img src={projectImages[2 * index + 1]} alt={project.title} className="w-full object-contain rounded-t-lg" />
                                </div>
                                <div className="flex flex-col justify-center items-center p-4">
                                    <h2 className="text-xl text-center font-bold mb-2">{project.title}</h2>
                                    <p className="text-sm text-center text-gray-700">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default Projects;
