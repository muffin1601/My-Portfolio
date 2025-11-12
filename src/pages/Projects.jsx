import React from "react";
import "../styles/Projects.css";

const projects = [
  { title: "Customized Institute Platform", tech: "React, Node, MongoDB", link: "https://github.com/muffin1601" },
  { title: "Custom CRM for Operations", tech: "React, Express, MongoDB", link: "https://github.com/muffin1601" },
  { title: "Print Order & Inventory System", tech: "React, Node, SVG Canvas", link: "https://github.com/muffin1601" },
  { title: "E-commerce Web App", tech: "MERN Stack", link: "https://github.com/muffin1601" },
  { title: "Blog System", tech: "MERN + Comments", link: "https://github.com/muffin1601" },
  { title: "WordPress Portfolio", tech: "Elementor, VPS, cPanel", link: "https://github.com/muffin1601" },
];

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.tech}</p>
          <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
