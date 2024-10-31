import React, { useState } from 'react';
import Avatar from 'avataaars';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      marginLeft: "10vw",
      width: "90vw",
      padding: "10px"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        margin: "0 10px"
      }}>
    

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ marginRight: "10px" }} 
        >
          {isHovered ? (
            <Avatar
              avatarStyle="Circle"
              topType="Hat"
              accessoriesType="Prescription02"
              facialHairType="Blank"
              clotheType="BlazerShirt"
              eyeType="Surprised"
              eyebrowType="Default"
              mouthType="ScreamOpen"
              skinColor="Light"
            />
          ) : (
            <Avatar
              avatarStyle="Circle"
              topType="Hat"
              accessoriesType="Prescription02"
              facialHairType="Blank"
              clotheType="BlazerShirt"
              eyeType="Hearts"
              eyebrowType="Default"
              mouthType="Smile"
              skinColor="Light"
            />
          )}
        </div>
        
        
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "10px" }}>
        <p className="fs-3">Hover to scare me!</p>
        <a
          href="/MyPortfolio/MyResume.pdf"  
          download="MyResume.pdf" 
          style={{
            backgroundColor: "#E1306C",
            color: "white",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
