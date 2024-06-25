import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import image1 from '../assets/photo-data/image1.jpg';
import image2 from '../assets/photo-data/image2.jpg';
import image3 from '../assets/photo-data/image3.jpg';
import image4 from '../assets/photo-data/image4.jpg';
import image5 from '../assets/photo-data/image5.jpg';
import image6 from '../assets/photo-data/image6.jpg';
import image7 from '../assets/photo-data/image7.jpg';
import image8 from '../assets/photo-data/image8.jpg';

const PhotoCollage = () => {
  return (
    <ParallaxProvider>
      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-800 py-16">
        <div className="flex flex-wrap justify-center items-center">
          <Parallax className="flex flex-col" y={[-20, 20]}>
            <div className="p-2 bg-white">
              <img src={image1} alt="1" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={image2} alt="2" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={image3} alt="3" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
          <Parallax className="flex flex-col" y={[-15, 15]}>
            <div className="p-2 bg-white">
              <img src={image4} alt="4" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={image5} alt="5" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
          <Parallax className="flex flex-col" y={[-10, 10]}>
            <div className="p-2 bg-white">
              <img src={image6} alt="6" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={image7} alt="7" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={image8} alt="8" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default PhotoCollage;
