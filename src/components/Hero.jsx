import React from 'react';
import AnimatedAvatar from './AnimatedAvatar';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Hero = () => {
  return (
    <div className="container text-center" style={{ marginTop: "5vh" }}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <AnimatedAvatar />
        </div>
        <div className="col-md-6">
          <h1 className="display-2">
            <em>
              <strong style={{ background: "beige" }}>
                Hello! Visitor
                <span className="waving-hand animate-waving-hand">👋</span>
              </strong>
            </em>
          </h1>
          <p className="h3" style={{ background: "pink" }}>
            "I'm a web developer with a passion for creating beautiful and functional user experiences."
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="display-5">
          About <mark>me</mark> 😎
        </h1>
        <p className='about' style={{ backgroundColor: "wheat", padding: "20px", borderRadius: "10px" }}>
          <strong>Hello!</strong> I'm Rishikesh, a passionate web developer dedicated to creating beautiful and functional user experiences. I am pursuing a Bachelor of Computer Applications (BCA) degree, which has provided me with a solid foundation in programming and software development. I specialize in building responsive websites using React and enjoy learning new technologies while keeping up with the latest trends in web development.
        </p>

        <div className="mt-4 p-3" style={{ backgroundColor: "#f9f8e7", borderRadius: "8px" }}>
          <span className="rotating-sun">🌞</span>
          <h2>My Interests</h2>
          <p>
            Besides web development, I have a keen interest in design, where I explore different color schemes and layouts to enhance user experience. I enjoy collaborating with others on projects, sharing ideas, and learning from each other's expertise. In my free time, I love reading tech blogs, experimenting with new tools, and staying active through outdoor activities. My goal is to continually improve my skills and contribute to meaningful projects that positively impact users.
          </p>
          <p>
            I also enjoy exploring open-source projects, as they provide great learning opportunities and allow me to contribute to the community. I'm currently learning about cloud technologies and how they can be integrated into web applications to create more efficient and scalable solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;