import React, { useState, useEffect } from 'react';

// Credit to Alpay Cecik for component concept and idea

const RadialGradient = ({ scale, opacity, position, overflow }) => {
  const [mouseXpercentage, setMouseXPercentage] = useState(0);
  const [mouseYpercentage, setMouseYPercentage] = useState(0);

  useEffect(() => {
    const handleMouseMove = event => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round((event.pageY / windowHeight) * 100);

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientRadius = '20%'; // Smaller radius for a more focused gradient effect

  const radialGradientStyle = {
    background: `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, #003366, #2c3e50 ${gradientRadius})`,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  };

  return (
    <div
      className={`absolute ${position} left-0 h-full w-full -z-1 ${opacity} ${scale} ${overflow}`}
      style={radialGradientStyle}
    ></div>
  );
};

export default RadialGradient;
