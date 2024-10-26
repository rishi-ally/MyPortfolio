import React from "react";
import screenshotImage from "../assets/Screenshot 2024-10-25 171320.png"; 
import backgroundImage from "../assets/Screenshot 2024-10-25 155728.png"; 
import screenshotimage from "../assets/Screenshot 2024-10-26 095701.png"
import certificate from "../assets/certificate.jpg"; 
import certificate2 from "../assets/1727672267086-certificate (1).png"; 
import Navbar2 from "./Navbar2";

const Project = () => {
  return (
    <>
      <h1 className="display-2 text-center my-5" style={{backgroundColor:"floralwhite"}}>
        🎉 PROJECTS & ACHIEVEMENTS 🏆
      </h1>

      <div className="container mb-5">
        {/* Project 1 */}
        <div className="row g-0 bg-light shadow-sm rounded position-relative mb-4">
          <div className="col-md-6 mb-md-0 p-0">
            <img src={screenshotImage} className="w-100 rounded-start" alt="Screenshot" />
          </div>
          <div className="col-md-6 p-4">
            <h5 className="mt-0 fw-bold text-primary">Responsive E-Commerce Web Application</h5>
            <p>
              Built a responsive e-commerce site using ReactJS and Redux Toolkit, featuring
              dynamic product fetching, shopping cart management, and a mobile-friendly design
              with Bootstrap. Deployed on GitHub Pages.
            </p>
            <a href="https://rishi-ally.github.io/Ecommerce-project/" className="btn btn-outline-primary stretched-link">
              Explore this project ➡️
            </a>
          </div>
        </div>
        <div className="row g-0 bg-light shadow-sm rounded position-relative mb-4">
          <div className="col-md-6 mb-md-0 p-0">
            <img src={screenshotimage} className="w-100 rounded-start" alt="Screenshot" />
          </div>
          <div className="col-md-6 p-4">
            <h5 className="mt-0 fw-bold text-primary">My Portfolio Website</h5>
            <p>
            My interactive portfolio site designed to highlight my skills, projects, and experiences as a web developer. The site features a modern UI with animations and an engaging user experience.
            </p>
            <a href="#" className="btn btn-outline-primary stretched-link">
              Currently You are here
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row g-0 bg-light shadow-sm rounded position-relative mb-4">
          <div className="col-md-6 mb-md-0 p-0">
            <img src={backgroundImage} className="w-100 rounded-start" alt="Background" />
          </div>
          <div className="col-md-6 p-4">
            <h5 className="mt-0 fw-bold text-primary">A Website for AI and ML Product Design Agency</h5>
            <p className="fw-light">(not responsive) Please explore this project on laptops for a better experience, thank you!</p>
            <p>
              Developed a visually engaging website for InnovateAI, an agency specializing in AI
              and machine learning product design. The site showcases smooth animations and
              interactive elements, creating an immersive user experience. Although the website
              is not responsive, it features a modern design aesthetic that effectively communicates 
              the agency's services and expertise in AI and ML.
            </p>
            <a href="https://rishi-ally.github.io/project/" className="btn btn-outline-primary stretched-link">
              Explore this project ➡️
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-black text-center my-5" style={{backgroundColor: "cornsilk", padding: "10px"}}>
        HALL OF FAME
      </h2>

      <div className="d-flex justify-content-around flex-wrap mb-5">
        {/* Certificate 1 */}
        <div className="card shadow" style={{ width: '18rem', height: "70vh" }}>
          <img src={certificate} className="card-img-top" alt="Certificate" style={{ height: "50vh"}} />
          <div className="card-body">
            <h5 className="card-title">Certified for Ranking in Coding Ninjas Tri Color Code Fest</h5>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="card shadow" style={{ width: '18rem', height: "50vh" }}>
          <img src={certificate2} className="card-img-top" alt="Certificate 2" style={{ height: "40vh", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">Certification of Completing a React-Redux Course</h5>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          h1, h2 {
            font-family: 'Arial', sans-serif;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }
          .card {
            transition: transform 0.3s;
          }
          .card:hover {
            transform: scale(1.05);
          }
          .btn-outline-primary {
            border-color: #007bff;
            color: #007bff;
          }
          .btn-outline-primary:hover {
            background-color: #007bff;
            color: #fff;
          }
        `}
      </style>
    </>
  );
};

export default Project;
