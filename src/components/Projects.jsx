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

};

export default Projects;
