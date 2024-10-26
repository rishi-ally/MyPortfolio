import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import Animation from '../assets/Animation - 1729845408019.json';


const AnimatedAvatar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (<>

    <div style={{ width: '500px', height: '500px' }}>
      <Lottie options={defaultOptions} />
    </div></>
  );
};

export default AnimatedAvatar;
