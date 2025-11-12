import React from "react";
import resume from "/Sana_resume.pdf";
import "../styles/Resume.css";

const Resume = () => (
  <section className="resume">
    <h2>My Resume</h2>
    <iframe src={resume} title="Sana Arif Resume" width="100%" height="600px"></iframe>
    <a href={resume} download>
      <button>Download Resume</button>
    </a>
  </section>
);

export default Resume;
