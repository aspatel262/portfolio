// ProjectsList.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../assets/project-data/projectStruct';
import '../App.css';

const ProjectsList = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const openProjectDetails = (project) => {
        setSelectedProject(project);
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
                        onClick={() => openProjectDetails(project)}
                    >
                        <div className="card-content">
                            <div className="card-image-container">
                                <img src={project.image} alt={project.alt} className="project-image" />
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
                        onClick={() => openProjectDetails(project)}
                    >
                        <div className="card-content">
                            <div className="card-image-container">
                                <img src={project.image} alt={project.image} className="project-image" />
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
                        className="selected-project-screen"
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
                            style={{ maxHeight: '90vh' }}
                        >
                            <div className="selected-project-image-container">
                                <motion.img src={selectedProject.image} alt={selectedProject.alt} className="selected-project-image" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} />
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
                                                    <img src={tech.img} alt={tech.name} className="tech-stack-icon" />
                                                    <span className="proj-tooltip">{tech.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="selected-project-buttons-container">
                                    <div className="flex md:space-x-4 space-x-1 justify-center">
                                        <a href={selectedProject.details.github} onClick={(e) => { if (selectedProject.details.github === 'priv-repo') { e.preventDefault(); alert('For Privacy Reasons, this Repository cannot be Public. To learn more about this project, Contact Me!'); } }} target="_blank" rel="noopener noreferrer" className="button-github">GitHub Repository</a>
                                        <a href={selectedProject.details.liveDemo} onClick={(e) => { if (selectedProject.details.liveDemo === 'no-demo') { e.preventDefault(); alert('Demo Coming Soon!'); } }} target="_blank" rel="noopener noreferrer" className="button-demo">Live Demo</a>
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
