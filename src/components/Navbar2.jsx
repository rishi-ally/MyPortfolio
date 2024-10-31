import React from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="container">
      <header className="nav-bar d-flex justify-content-center py-3">
        <ul className="nav nav-pills flex-column flex-md-row">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
              aria-current="page"
            >
              Home🏡
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
            >
              About Me👤
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
            >
              Projects✍️
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Blog"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
              aria-current="page"
            >
             Blogs📝
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
            >
              Skills🤹
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link custom-nav-link ${isActive ? "active" : ""}`}
            >
              Contact Me📞
            </NavLink>
          </li>
        </ul>
      </header>

      <style>
        {`
          .container {
            max-width: 100%;
            padding: 0 1rem;
          }

          .custom-nav-link {
            color: #000; /* Black color */
            font-weight: 500;
            transition: color 0.3s ease, border-bottom 0.3s ease;
            font-size: 1rem;
          }

          .custom-nav-link:hover {
            color: #333; /* Slightly lighter black on hover */
            border-bottom: 2px solid #333; /* Border on hover */
          }

          .nav-link.active {
            color: #fff !important;
            background-color: #000 !important; /* Black background for active */
            border-radius: 5px;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .nav-bar {
              flex-direction: column;
              align-items: center;
            }

            .nav-pills {
              width: 100%;
              text-align: center;
            }

            .nav-item {
              margin-bottom: 0.5rem;
            }

            .custom-nav-link {
              font-size: 0.9rem; /* Slightly smaller font for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar2;
