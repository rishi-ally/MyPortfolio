import React from 'react'
import Lottie from 'react-lottie';
import skillanimation from '../assets/Animation - 1729945073886.json';
const SkillAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: skillanimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    
    
      return (<>
    
        <div style={{  height: '500px' }}>
          <Lottie options={defaultOptions} />
        </div></>
      );
}

export default SkillAnimation