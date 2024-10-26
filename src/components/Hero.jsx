import React from 'react';
import AnimatedAvatar from './AnimatedAvatar';


const Hero = () => {
  return (
    <>
      <div className="avatar-container" style={{ marginTop: "5vh", display: "flex", alignItems: "center", textAlign: "center" }}>
        <AnimatedAvatar />
        <div style={{ marginTop: "20px", maxWidth: "80%", padding: "0px 10px", position: "relative" }}>
          <h1 className="display-2">
            <em>
              <strong style={{ background: "beige" }}>
                Hello! Visitor
                <span className="waving-hand">👋</span>
              </strong>
              {/* Rotating sun emoji */}
           
            </em>
          </h1>
          <p className="h3" style={{ background: "pink" }}>
            "I'm a web developer with a passion for creating beautiful and functional user experiences."
          </p>
          <div style={{ marginTop: "12vh" }}>
            <h1 className="display-5">
              <p>About <mark>me</mark>😎</p>
            </h1>   
            <p className='about' style={{ width: "100%", maxWidth: "800px", margin: "0 auto", backgroundColor: "wheat", padding: "20px", borderRadius: "10px" }}>
              <strong>Hello!</strong> I'm Rishikesh, a passionate web developer dedicated to creating beautiful and functional user experiences. I am pursuing a Bachelor of Computer Applications (BCA) degree, which has provided me with a solid foundation in programming and software development. I specialize in building responsive websites using React and enjoy learning new technologies while keeping up with the latest trends in web development.
            </p>
            <div style={{ marginTop: "20px", backgroundColor: "#f9f8e7", padding: "15px", borderRadius: "8px" }}>
            <span className="rotating-sun">🌞</span>  <h2>My Interests</h2>
              <p>
                Besides web development, I have a keen interest in design, where I explore different color schemes and layouts to enhance user experience. I enjoy collaborating with others on projects, sharing ideas, and learning from each other's expertise. In my free time, I love reading tech blogs, experimenting with new tools, and staying active through outdoor activities. My goal is to continually improve my skills and contribute to meaningful projects that positively impact users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
