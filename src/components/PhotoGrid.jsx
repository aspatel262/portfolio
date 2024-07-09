import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import bolly from '../assets/photo-data/bolly.JPEG';
import car from '../assets/photo-data/car.jpg';
import beach from '../assets/photo-data/beach.JPEG'
import dtw from '../assets/photo-data/dtw.JPEG';
import giraffe from '../assets/photo-data/giraffe.JPEG';
import glaive from '../assets/photo-data/glaive.JPEG';
import minigolf from '../assets/photo-data/minigolf.JPEG';
import pingpong from '../assets/photo-data/pingpong.JPEG';
import poker from '../assets/photo-data/poker.jpg';
import rainwow from '../assets/photo-data/rainwow.JPEG';
import tigers from '../assets/photo-data/tigers.JPEG';



import AnimatedTyping from './AnimatedTyping.jsx';

const PhotoCollage = () => {
  return (
    <ParallaxProvider>
      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-800 py-16">
        <div className="text-center mb-8">
          <AnimatedTyping
            textArray={['My Life As Photos Lately  ', 'Come See What I\'ve Seen  ', 'Look Through My Lens  ']}
            fontSize="text-5xl break-all whitespace-normal"
            color="text-white"
            fontWeight="font-extrabold"
            padding="pt-10"
            subtextGradient="linear-gradient(to right, #4facfe 0%, #87cefa 100%)"
            subtextSize="text-xl"
            subtextPadding="mt-2"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <Parallax className="flex flex-col" y={[-20, 20]}>
            <div className="p-2 bg-white">
              <img src={tigers} alt="1" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={poker} alt="2" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={rainwow} alt="3" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={bolly} alt="10" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
          <Parallax className="flex flex-col" y={[-15, 15]}>
            <div className="p-2 bg-white">
              <img src={pingpong} alt="4" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={giraffe} alt="5" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={glaive} alt="9" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
          <Parallax className="flex flex-col" y={[-10, 10]}>
            <div className="p-2 bg-white">
              <img src={car} alt="6" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={minigolf} alt="7" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={dtw} alt="8" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
            <div className="p-2 bg-white">
              <img src={beach} alt="12" className="w-full sm:w-48 md:w-64 lg:w-80 xl:w-96 object-cover" />
            </div>
          </Parallax>
        </div>
      </div>
      <div class="bg-gradient-to-r from-black via-gray-800 to-gray-800 py-16 text-white font-extrabold pt-10 text-3xl break-all whitespace-normal text-center">
        <a href="https://sites.google.com/umich.edu/aditya-patel-photography/home" target="_blank" rel="noreferrer" class="text-white underline hover:text-gray-400">
            Click to see more of my photography passion!
        </a>
      </div>
    </ParallaxProvider>
    
  );
};

export default PhotoCollage;
