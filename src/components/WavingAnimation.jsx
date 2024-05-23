import React, { useState } from 'react';

// Import frames
import frame1 from '../assets/waving_frames/frame_1.png';
import frame2 from '../assets/waving_frames/frame_2.png';
import frame3 from '../assets/waving_frames/frame_3.png';
import frame4 from '../assets/waving_frames/frame_4.png';
import frame5 from '../assets/waving_frames/frame_5.png';
import frame6 from '../assets/waving_frames/frame_6.png';
import frame7 from '../assets/waving_frames/frame_7.png';
import frame8 from '../assets/waving_frames/frame_8.png';

// Array of frames
const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8];

function WavingAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startAnimation = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          if (prevFrame >= frames.length - 1) {
            clearInterval(id);
            setIntervalId(null);
            return frames.length - 1;
          }
          return prevFrame + 1;
        });
      }, 25); // Speed of frame change
      setIntervalId(id);
    }
  };

  const reverseAnimation = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          if (prevFrame <= 0) {
            clearInterval(id);
            setIntervalId(null);
            return 0;
          }
          return prevFrame - 1;
        });
      }, 25); // Speed of frame change
      setIntervalId(id);
    }
  };

  return (
    <div className="waving-animation"
         onMouseEnter={startAnimation}
         onMouseLeave={reverseAnimation}>
      <img src={frames[currentFrame]} alt="Waving Aditya" />
    </div>
  );
}

export default WavingAnimation;
