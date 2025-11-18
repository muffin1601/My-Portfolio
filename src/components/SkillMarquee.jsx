import React, { useEffect } from "react";
import { Code2, Terminal, Database, Layers, Cpu, Globe, GitBranch } from "lucide-react";
import "../styles/SkillMarquee.css";

const SkillMarquee = () => {
  const skills = [
    { name: "React.js", icon: <Code2 size={18} /> },
    { name: "Node.js", icon: <Terminal size={18} /> },
    { name: "MongoDB", icon: <Database size={18} /> },
    { name: "Express.js", icon: <Layers size={18} /> },
    { name: "MERN Stack", icon: <Cpu size={18} /> },
    { name: "Canvas Customizer", icon: <Globe size={18} /> },
    { name: "Git & Version Control", icon: <GitBranch size={18} /> },
  ];

  return (
    <div className="skill-marquee">
      <div className="skill-track">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="skill-chip">
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;
