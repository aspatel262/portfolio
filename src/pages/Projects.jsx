import React from 'react';
import AnimatedTyping from '../components/AnimatedTyping';
import ProjectsList from '../components/ProjectList';
import '../App.css';


const Projects = () => {

    return (
        <div className="projects-container">
            <div className="animated-typing-container"> {/* Adjust this value as needed */}
                <AnimatedTyping
                    textArray={['Creative', 'Learning Driven', 'Passion Filled', 'Exploratory', 'Experimental']}
                    preText='My '
                    postText="Projects" 
                    fontSize="text-5xl break-all whitespace-normal"
                    color="text-white"
                    fontWeight="font-extrabold"
                    padding="pt-10"
                    subtext="Come see the work I've created so far"
                    subtextGradient="linear-gradient(to right, #4facfe 0%, #87cefa 100%)"
                    subtextSize="text-xl"
                    subtextPadding="mt-2"
                />
            </div>

            <ProjectsList />

        </div>

    );
};

export default Projects;