import React from 'react';
import Lottie from 'react-lottie';
import Animation from '../assets/Animation - 1730092866482.json';

const AnimatedAvatar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="avatar-container" style={{ width: '100%', maxWidth: '500px', height: 'auto' }}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default AnimatedAvatar;
