import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Navbar2 from './components/Navbar2';
import Blog from './components/Blog';
import BlogPageToShow from './components/BlogPageToShow';

function App() {
    return (
        <Router> <div className="container-fluid">
            <Navbar2 />
           
                <Routes>
                    <Route path="/" element={<StartingPage />} />
                    <Route path="/about" element={<Hero />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/skills" element={<Skill />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/BlogPage" element={<BlogPageToShow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
