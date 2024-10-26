import React from 'react';
import SkillAnimation from './SkillAnimation';
import Navbar2 from './Navbar2';


const Skill = () => {
  const skills = [
    { name: "JAVASCRIPT", progress: 80, color: "#f0db4f" }, 
    { name: "REACT", progress: 75, color: "#61dafb" }, 
    { name: "HTML", progress: 90, color: "#e34f26" }, 
    { name: "CSS", progress: 85, color: "#1572b6" }, 
    { name: "REDUX", progress: 80, color: "#764abc" }, 
    { name: "BOOTSTRAP", progress: 80, color: "#563d7c" },
    { name: "GITHUB", progress: 60, color: "#333" }, 
    { name: "NODEJS", progress: 50, color: "#8cc84b" }, 
    { name: "C++", progress: 65, color: "#00599c" }, 
    { name: "DATA STRUCTURES", progress: 70, color: "#ff9900" }, 
    { name: "ALGORITHMS", progress: 75, color: "#ff4b4b" },
    { name: "JQuery", progress: 85, color: "#1572b6" }, 
    { name: "C", progress: 75, color: "#764abc" }
  ];

  const radius = 40; // Radius of the circle
  const strokeWidth = 8; // Width of the circle stroke
  const circumference = 2 * Math.PI * radius; // Calculate circumference

  return (
    <>
      
      <h1 class="display-1" style={{backgroundColor:"seashell"}}><em>Let's Dive into My Skills<span className='moving-face'>🤠</span></em></h1>
      <div className="skill-container">
        <div className="skill-header">
          <SkillAnimation />
          <p className='skills-para'>
            <h2>🤹Skills Overview:</h2>
            <em>
              I am a passionate and dedicated developer with a solid foundation in front-end technologies, including HTML, CSS, and JavaScript. My journey into web development has equipped me with a strong grasp of ReactJS, allowing me to create dynamic and responsive user interfaces. I have experience with Redux Toolkit for state management and Bootstrap for styling, which enhances the user experience of my projects.
              Currently, I am expanding my skill set by learning backend development, focusing on Node.js. This will enable me to build full-fledged applications and deepen my understanding of server-side technologies. I am eager to integrate my frontend knowledge with backend capabilities to create robust and efficient web applications.
            </em>
          </p>
        </div>

        <h2 className="text-center">Skills Chart</h2>
        <div className="d-flex justify-content-around flex-wrap">
          {skills.map((skill, index) => {
            const strokeDashoffset = circumference - (skill.progress / 100) * circumference; // Calculate stroke offset for progress
            return (
              <div key={index} className="text-center skill-item mb-4">
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#e6e6e6" // Background circle color
                    strokeWidth={strokeWidth}
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={skill.color} // yeh color use krna h for progress
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} // Animation effect
                  />
                </svg>
                <p>{skill.name} ({skill.progress}%)</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
