import React from "react";
import "../styles/MyProjects.css";

const projects = [
  {
    title: "MF Global CRM",
    category: "Full Stack / CRM System (MERN)",
    img: "/assets/projects/mfglobal.webp",
    link: "https://mfglobalservices.com/crm/login",
  },
  {
    title: "Coaching Promo",
    category: "E-commerce + Custom Product Designer / MERN Stack",
    img: "/assets/projects/coachingpromo.webp",
    link: "https://coachingpromo.in/",
  },
  {
    title: "Printkee",
    category: "E-commerce + Product Customizer / MERN Stack",
    img: "/assets/projects/printkee.webp",
    link: "https://printkee.com/",
  },
  {
    title: "General Trading App",
    category: "Trading / Inventory Management (Next.js + TypeScript)",
    img: "/assets/projects/almayar.webp",
    link: "https://general-trading.netlify.app/",
  },
  {
    title: "GearUpCode",
    category: "WordPress + Elementor Pro / Tech Blog",
    img: "/assets/projects/gearup.webp",
    link: "https://gearupcode.com/",
  },
  {
    title: "Challenge Tech",
    category: "WordPress Corporate Website / Elementor Pro",
    img: "/assets/projects/challengetech.webp",
    link: "https://challengetechinc.com/",
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* LEFT TITLE */}
        <div className="projects-header">
          <p className="projects-subtitle">
            <span className="dot"></span> My Portfolio
          </p>
          <h2 className="projects-title">
            Showcase of my latest projects
            <br />
            and <span>production work</span>
          </h2>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="projects-right">
          <p className="projects-desc">
            From concept to completion, these projects reflect my commitment to
            delivering impactful, high-quality digital solutions optimized for
            real business use cases.
          </p>

          <a
            href="/Sana-resume.pdf"
            download="Sana-Arif-Resume.pdf"
            className="projects-btn"
          >
            View My Resume
          </a>
        </div>
      </div>

      {/* PROJECT CARDS GRID */}
      <div id="all-projects" className="projects-grid">
        {projects.map((p, i) => (
          <a
            href={p.link}
            key={i}
            className="project-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-category">{p.category}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
