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
                textArray={['Creative', 'Learning Driven', 'Passion Filled', 'Exploratory', 'Experimental']}
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

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        layoutId={selectedProject.id} 
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-10 pt-12"  // Increased padding to 10
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleBackdropClick}
                    >
                        <motion.div 
                            className="bg-white p-10 rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row overflow-y-auto"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                            }}
                            style={{ maxHeight: '90vh' }} // Ensure the modal doesn't exceed the viewport height
                        >

                            <div className="flex-shrink-0 flex items-center justify-center">
                                <motion.img src={projectImages[imageIdx]} alt={selectedProject.title} className="rounded-lg max-w-full md:max-w-sm m-5" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}/>
                            </div>
                            <div className="flex-1 flex flex-col mb-4 md:mb-0">
                                <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl font-bold mb-4">{selectedProject.title}</motion.h2>
                                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">{selectedProject.details.description}</motion.p>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
                                    <motion.h3 className="text-xl font-bold mb-2">Tech Stack</motion.h3>
                                    <ul className="flex flex-wrap tech-stack-list">
                                        {selectedProject.details.techStack.map((tech, index) => (
                                            <li key={index} className="tech-stack-item">
                                                <a href={tech.link} target="_blank" rel="noopener noreferrer" className="tech-stack-link">
                                                    <img src={techIcons[tech.name]} alt={tech.name} className="tech-stack-icon" />
                                                    <span className="tech-stack-tooltip">{tech.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-end justify-between mb-4">
                                    <div className="flex space-x-4">
                                    <a href={selectedProject.details.github} target="_blank" rel="noopener noreferrer" className="mr-4 px-4 py-2 bg-gray-800 text-white rounded transition-transform duration-300 hover:rotate-12 hover:bg-gray-700">GitHub Repository</a>
                                    <a href={selectedProject.details.liveDemo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded transition-transform duration-300 hover:rotate-12 hover:bg-blue-700">Live Demo</a>
                                    </div>
                                    <motion.button onClick={closeProjectDetails} className="px-4 py-2 bg-red-600 text-white rounded transition-transform duration-300 hover:rotate-12 hover:bg-red-700">Close</motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
