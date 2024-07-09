import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { rightNowData } from '../assets/experience-data/RightNowData';

const CustomPrevButton = (onClickHandler, hasPrev, label) =>
  hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} style={{
          position: 'absolute',
          zIndex: 2,
          top: 'calc(50% - 20px)',
          width: 50,
          height: 50,
          cursor: 'pointer',
          border: 'none',
          background: 'linear-gradient(to left, #4facfe 0%, #87cefa 100%)',
          color: 'white',
          borderRadius: '50%',
          left: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, background-color 0.3s ease'
      }}
      onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.backgroundColor = '#ffffff';
      }}
      onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#007bff';
      }}
      >
          <span style={{ fontSize: 20 }}>‹-</span>
      </button>
  );

const CustomNextButton = (onClickHandler, hasNext, label) =>
  hasNext && (
      <button type="button" onClick={onClickHandler} title={label} style={{
          position: 'absolute',
          zIndex: 2,
          top: 'calc(50% - 20px)',
          width: 50,
          height: 50,
          cursor: 'pointer',
          border: 'none',
          background: 'linear-gradient(to right, #4facfe 0%, #87cefa 100%)',
          color: 'white',
          borderRadius: '50%',
          right: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, background-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.backgroundColor = '#0056b3';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#007bff';
        }}
        >
            <span style={{ fontSize: 20 }}>-›</span>
        </button>
    );

const WhatIAmUpToRightNow = () => {
  
    return (
        <div className="home">
            <div style={{ width: '75%', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    background: 'white',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    What I've been up to lately...
                </h1>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '2rem',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}>
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        interval={5000}
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        dynamicHeight={false}
                        renderArrowPrev={CustomPrevButton}
                        renderArrowNext={CustomNextButton}
                    >
                        {rightNowData.map((item, index) => (
                            <div key={index} style={{ position: 'relative', height: '60vh' }}>
                                <img src={item.image} alt={`Slide ${index}`} style={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '15px'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    width: '100%',
                                    left: '-2.5%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <p className="legend" style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        padding: '1rem',
                                        fontSize: '1.25rem',
                                        textAlign: 'center',
                                        width: '100%',
                                        maxWidth: '95%',
                                        marginBottom: '0'
                                    }}>
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default WhatIAmUpToRightNow;
