import React from "react";
import "../styles/MyProjects.css";

const projects = [
  {
    title: "MF Global CRM",
    category: "Full Stack / CRM System",
    img: "/assets/projects/mfglobal.webp",
    link: "https://mfglobalservices.com/crm"
  },
  {
    title: "Coaching Promo",
    category: "Custom Product Designer / MERN",
    img: "/assets/projects/coachingpromo.webp",
    link: "https://coachingpromo.in/"
  },
  {
    title: "Printkee",
    category: "E-commerce + Product Customizer",
    img: "/assets/projects/printkee.webp",
    link: "https://printkee.com/"
  },
  {
    title: "General Trading App",
    category: "Trading / Inventory Management",
    img: "/assets/projects/generaltrading.webp",
    link: "https://general-trading.netlify.app/"
  },
  {
    title: "GearUpCode",
    category: "WordPress Website",
    img: "/assets/projects/gearup.webp",
    link: "https://gearupcode.com/"
  },
  {
    title: "Challenge Tech",
    category: "WordPress Corporate Website",
    img: "/assets/projects/challengetech.webp",
    link: "https://challengetechinc.com/"
  },
];

const MyProjects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* LEFT TITLE */}
        <div className="projects-header">
          <p className="projects-subtitle"><span className="dot"></span> My Portfolio</p>
          <h2 className="projects-title">
            Showcase of my latest projects<br />
            and <span>creative work</span>
          </h2>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="projects-right">
          <p className="projects-desc">
            From concept to completion, these projects reflect my commitment 
            to delivering impactful, high-quality digital solutions.
          </p>

          <a href="#all-projects" className="projects-btn">
            View All Portfolio
          </a>
        </div>

      </div>

      {/* PROJECT CARDS GRID */}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a href={p.link} key={i} className="project-card" target="_blank">
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-category">{p.category}</p>
          </a>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="projects-cta">
        <span className="free-badge">Live</span>
        <p>Let’s build something great together. <a href="#contact">Get Free Quote</a></p>
      </div>
    </section>
  );
};

export default MyProjects;
