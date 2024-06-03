import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const ProjectsHeader = ({
    textArray = [],
    preText = '',
    postText = '',
    fontSize = 'text-5xl',
    color = 'text-white',
    fontWeight = 'font-extrabold',
    padding = 'pt-20 px-8',
    subtext = '',
    subtextColor = 'text-gray-400',
    subtextSize = 'text-xl',
    subtextPadding = 'mt-2',
    subtextGradient = ' ', // Add this line
}) => {
    const [text] = useTypewriter({
        words: textArray,
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 75,
        delaySpeed: 2000
    });

    return (
        <div className={`${padding} bg-transparent mb-8`}>
            <div className="text-center mb-8">
                <h1 className={`${fontSize} ${fontWeight} ${color}`}>
                    {preText}
                    {text}
                    <Cursor />
                    {postText}
                </h1>
                <p
                    className={`${subtextSize} ${subtextPadding}`}
                    style={
                        subtextGradient
                            ? {
                                  background: subtextGradient,
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent'
                              }
                            : { color: subtextColor }
                    }
                >
                    {subtext}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project cards here */}
            </div>
        </div>
    );
};

export default ProjectsHeader;
