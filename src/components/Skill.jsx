import React from 'react';
import SkillAnimation from './SkillAnimation';
import Navbar2 from './Navbar2';

const Skill = () => {
  const skills = [
    { name: "JAVASCRIPT", progress: 80, color: "#f0db4f", description: "Strong understanding of JavaScript fundamentals and ES6 features. Proficient in writing clean and efficient code, with experience in DOM manipulation and event handling." },
    { name: "REACT", progress: 75, color: "#61dafb", description: "Experienced in building dynamic and responsive user interfaces using React. Familiar with hooks, state management with Redux, and component lifecycle methods." },
    { name: "tailwincss", progress: 75, color: "#61dafb",description: "Proficient in building RESTful APIs and backend services using Express.js. Experienced with middleware, routing, authentication, and integrating databases like MongoDB." },
    { name: "ExpressJs", progress: 75, color: "#61dafb","description": "Proficient in building RESTful APIs and backend services using Express.js. Experienced with middleware, routing, authentication, and integrating databases like MongoDB." },
    { name: "MongoDB", progress: 85, color: "#00ed64",
  description: "Skilled in designing and managing NoSQL databases using MongoDB. Experienced in schema design, indexing, aggregation, and integrating MongoDB with Node.js and Mongoose." },
    { name: "HTML", progress: 90, color: "#e34f26", description: "Solid foundation in HTML5. Capable of creating semantic and accessible markup that improves SEO and enhances user experience." },
    { name: "CSS", progress: 85, color: "#1572b6", description: "Proficient in CSS3, including Flexbox and Grid layouts. Experienced in styling responsive designs and creating visually appealing user interfaces." },
    { name: "REDUX", progress: 80, color: "#764abc", description: "Good grasp of state management with Redux Toolkit. Capable of implementing actions, reducers, and selectors to manage application state effectively." },
    { name: "BOOTSTRAP", progress: 80, color: "#563d7c", description: "Proficient in using Bootstrap to develop responsive layouts quickly. Comfortable with its grid system and components for rapid prototyping." },
    { name: "GITHUB", progress: 60, color: "#333", description: "Familiar with version control using Git and GitHub. Able to manage repositories, branch workflows, and collaborate with teams effectively." },
    { name: "NODEJS", progress: 80, color: "#8cc84b", description: "good knowledge of Node.js and building server-side applications." },
    { name: "C++", progress: 65, color: "#00599c", description: "Solid understanding of C++ programming concepts, including OOP principles. Experience in data structures and algorithms through coursework." },
    { name: "DATA STRUCTURES", progress: 70, color: "#ff9900", description: "Good grasp of data structures like arrays, linked lists, stacks, and queues. Able to implement and manipulate these structures to solve problems." },
    { name: "ALGORITHMS", progress: 75, color: "#ff4b4b", description: "Experienced in algorithm design and analysis. Familiar with sorting, searching, and recursive algorithms, applied in coding challenges." },
    { name: "JQuery", progress: 85, color: "#1572b6", description: "Proficient in using jQuery for DOM manipulation and event handling. Capable of enhancing web applications with animations and AJAX calls." },
    { name: "C", progress: 75, color: "#764abc", description: "Good understanding of C programming fundamentals. Experience in system-level programming and memory management." }
  ];
  
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <div className="skill-container text-center py-5">
        <h1 className="display-1" style={{ backgroundColor: "seashell" }}>
          <em>Let's Dive into My Skills<span className='moving-face'>🤠</span></em>
        </h1>

        <div className="animation-wrapper mb-4">
          <SkillAnimation />
          <h2 className="mt-3 text-success">Skills Which help me Enhance my Projects!</h2>
          <p className="text-muted" style={{ fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
            always love coding !
          </p>
        </div>

        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-md-8 offset-md-2">
              <h2 className="text-primary">🤹 Skills Overview:</h2>
              <p className="lead text-muted">
                <em>
                  I am a passionate and dedicated developer with a solid foundation in front-end technologies, including HTML, CSS, and JavaScript. My journey into web development has equipped me with a strong grasp of ReactJS, allowing me to create dynamic and responsive user interfaces. I have experience with Redux Toolkit for state management and Bootstrap for styling, which enhances the user experience of my projects.
                  Currently, I am expanding my skill set by learning backend development, focusing on Node.js. This will enable me to build full-fledged applications and deepen my understanding of server-side technologies. I am eager to integrate my frontend knowledge with backend capabilities to create robust and efficient web applications.
                </em>
              </p>
            </div>
          </div>

          <h2 className="mt-4" style={{ background: "pink" }}>Skills Chart</h2>
          <div className="row">
            {skills.map((skill, index) => {
              const strokeDashoffset = circumference - (skill.progress / 100) * circumference;
              return (
                <div key={index} className="col-12 col-md-6 d-flex align-items-center mb-4">
                  <div className="skill-info text-start flex-grow-1">
                    <h4>{skill.name}</h4>
                    <p className="text-muted" style={{ maxWidth: '400px' }}>{skill.description}</p>
                  </div>
                  <div className="skill-circle">
                    <svg width="100" height="100">
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#e6e6e6"
                        strokeWidth={strokeWidth}
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={skill.color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                      />
                    </svg>
                    <p className="mt-2 text-center">{skill.progress}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ADDED CSS HERE SO THAT HELP ME TO UNDERSTAD AND MANAGE CODE !*/}
      <style>
        {`
          .skill-container {
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            max-width: 1200px;
            padding: 30px;
          }

          .animation-wrapper {
            padding: 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            max-width: 90%; /* Added max-width for smaller devices */
            margin: 0 auto; /* Center align */
          }

          .animation-wrapper:hover {
            transform: scale(1.02);
          }

          .skill-item {
            transition: transform 0.3s;
          }

          .skill-item:hover {
            transform: scale(1.05);
          }

          .skill-info {
            font-size: 1.1rem;
            color: #333;
          }

          .skill-circle {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          @media (max-width: 768px) {
            .display-1 {
              font-size: 2rem;
              padding: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Skill;
