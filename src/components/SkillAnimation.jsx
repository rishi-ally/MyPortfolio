import React from 'react'
import Lottie from 'react-lottie';
import skillanimation from '../assets/Animation - 1729857818578.json';
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
    
        <div style={{ width: '500px', height: '500px' }}>
          <Lottie options={defaultOptions} />
        </div></>
      );
}

export default SkillAnimation