import React, { useState } from 'react';
import Avatar from 'avataaars';


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          marginLeft: "10vw",
          width: "90vw",
          padding: "10px"
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", margin: "0 10px" }}
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

        <div style={{ marginLeft: "20px", textAlign: "center", color: "black" }}>
          <p className="fs-3">Hover to scare me!</p>
          <a
  href="/MyResume.pdf"
  download="Rishikesh_CV.pdf"
  style={{
    backgroundColor: "#E1306C",
    color: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "background-color 0.3s ease-in-out",
  }}
>
  Download CV
</a>

        </div>

      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: column"] {
              flex-direction: column;
              align-items: center;
            }
            div[style*="margin-left: 10vw"] {
              width: 100vw;
              margin-left: 0;
            }
            button {
              font-size: 0.9rem;
              padding: 8px 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
