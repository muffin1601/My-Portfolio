import React from "react";
import "../styles/About.css";

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>
      I'm a Full Stack Developer with 1+ year of experience building scalable web applications using the MERN stack. 
      I specialize in clean UI, secure APIs, and smooth deployment workflows.
    </p>
    <div className="about-info">
      <div>
        <h3>Education</h3>
        <p>B.Tech in Computer Science (2020–2024)</p>
        <p>Chandigarh University</p>
      </div>
      <div>
        <h3>Current Role</h3>
        <p>Full Stack Developer – MF Global Services</p>
      </div>
    </div>
  </section>
);

export default About;
