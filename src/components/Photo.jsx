import React from 'react';

const Photo = () => {
  return (
    <img 
      src="https://avatar.iran.liara.run/public/24" 
      alt="Avatar" 
      style={{
        borderRadius: "50%",
        width: "100px",       
        height: "100px",      
        objectFit: "cover",  }} 
    />
  );
}

export default Photo;
