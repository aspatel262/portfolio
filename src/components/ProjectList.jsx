import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../assets/project-data/projectStruct';
import '../App.css';

import imgStudyBuddy from '../assets/project-data/project-image/studybuddy.jpg';
import imgFreePointer from '../assets/project-data/project-image/freepointer.jpeg';
import imgPortfolio from '../assets/project-data/project-image/portfolio.png';
import imgPostClassifier from '../assets/project-data/project-image/postclassifier.png';
import imgDronePilot from '../assets/project-data/project-image/drone.png';

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
import cppIcon from '../assets/project-data/tech-stack-images/c++.svg';
import mlIcon from '../assets/project-data/tech-stack-images/ml.svg';
import nbIcon from '../assets/project-data/tech-stack-images/classification.svg';
import unityIcon from '../assets/project-data/tech-stack-images/unity.svg';
import unrealIcon from '../assets/project-data/tech-stack-images/unreal.svg';
import numpyIcon from '../assets/project-data/tech-stack-images/numpy.svg';
import matplotlibIcon from '../assets/project-data/tech-stack-images/matplotlib.svg';


const ProjectsList = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [imageIdx, setImageIdx] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    /*  ##### SET THE ORDER OF IMAGES HERE FOR CORRESPONDING PROJECTS #####  */ 
    const projectImages = [imgStudyBuddy, imgPostClassifier, imgFreePointer, imgPortfolio, imgDronePilot ];

    /* ##### BOOL ARRAY IF GITHUB LINK IS AVAILABLE AND DEMO IS AVAILABLE ##### */
    const gitPrivate = [false, true, false, false, true];
    const demoSoon = [true, true, true, true, true];
    
    /*  ##### ADD ALL TECH STACK ICON OBJECTS HERE #####  */
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
        'Naive Bayes Classification Algorithm': nbIcon,
        'Machine Learning': mlIcon,
        'C++': cppIcon,
        'Unity': unityIcon,
        'Unreal Engine': unrealIcon,
        'Matplotlib': matplotlibIcon,
        'Numpy': numpyIcon,
    };

    const openProjectDetails = (project, imgIndex) => {
        setSelectedProject(project);
        setImageIdx(imgIndex);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeProjectDetails();
        }
    };

    const [contentVisible, setContentVisible] = useState(false);
  
    useEffect(() => {
      setContentVisible(true);
    }, []);

    const leftColumnProjects = projects.filter((_, index) => index % 2 === 0);
    const rightColumnProjects = projects.filter((_, index) => index % 2 !== 0);

    return (
        <div className="projects-cards-container">

            <div className={`cards-col-1 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                {leftColumnProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        layoutId={project.id}             
                        className='project-card'
                        style={{ height: (windowWidth < 640 || (windowWidth >= 1024 && windowWidth < 1400)) ? '450px' : '600px', width: (windowWidth < 640 || (windowWidth >= 1024 && windowWidth < 1400)) ? '300px' : '480px' }}
                        onClick={() => openProjectDetails(project, 2 * index)}
                    >
                        <div className="card-content">
                            <div className="card-image-container">
                                <img src={projectImages[2 * index]} alt={project.title} className="project-image" />
                            </div>
                            <div className="card-text-container">
                                <h2 className="text-xl text-center font-bold md:mb-2 mb-1">{project.title}</h2>
                                <p className="text-sm text-center text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className={`cards-col-2 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {rightColumnProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        layoutId={project.id}
                        className={`project-card ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                        style={{ height: (windowWidth < 640 || (windowWidth >= 1024 && windowWidth < 1400)) ? '450px' : '600px', width: (windowWidth < 640 || (windowWidth >= 1024 && windowWidth < 1400)) ? '300px' : '480px' }}
                        onClick={() => openProjectDetails(project, 2 * index + 1)}
                    >
                        <div className="card-content">
                            <div className="card-image-container">
                                <img src={projectImages[2 * index + 1]} alt={project.title} className="project-image" />
                            </div>
                            <div className="card-text-container">
                                <h2 className="text-xl text-center font-bold md:mb-2 mb-1">{project.title}</h2>
                                <p className="text-sm text-center text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        layoutId={selectedProject.id} 
                        className="selected-project-screen"  // Increased padding to 10
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleBackdropClick}
                    >
                        <motion.div 
                            className="selected-project-container"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                            }}
                            style={{ maxHeight: '90vh' }} // Ensure the modal doesn't exceed the viewport height
                        >

                            <div className="selected-project-image-container">
                                <motion.img src={projectImages[imageIdx]} alt={selectedProject.title} className="selected-project-image" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}/>
                            </div>
                            <div className="selected-project-info-container">
                                <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl font-bold mb-4">{selectedProject.title}</motion.h2>
                                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">{selectedProject.details.description}</motion.p>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
                                    <motion.h3 className="text-xl text-center font-bold mb-2">Tech Stack</motion.h3>
                                    <ul className="tech-stack-list">
                                        {selectedProject.details.techStack.map((tech, index) => (
                                            <li key={index} className="tech-stack-item">
                                                <a href={tech.link} target="_blank" rel="noopener noreferrer" className="tech-stack-link">
                                                    <img src={techIcons[tech.name]} alt={tech.name} className="tech-stack-icon" />
                                                    <span className="proj-tooltip">{tech.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="selected-project-buttons-container">
                                    <div className="flex md:space-x-4 space-x-1 justify-center">
                                        <a href={selectedProject.details.github} onClick={(e) => {if (gitPrivate[imageIdx]) {e.preventDefault(); alert('For Privacy Reasons, this Repository cannot be Public. To learn more about this project, Contact Me!'); }}} target="_blank" rel="noopener noreferrer" className="button-github">GitHub Repository</a>
                                        <a href={selectedProject.details.liveDemo} onClick={(e) => {if (demoSoon[imageIdx]) {e.preventDefault(); alert('Demo Coming Soon!'); }}} target="_blank" rel="noopener noreferrer" className="button-demo">Live Demo</a>
                                    </div>
                                    <motion.button onClick={closeProjectDetails} className="button-close">Close</motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    );
};

export default ProjectsList;
