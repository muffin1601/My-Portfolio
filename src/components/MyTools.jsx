import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Layers,
  Zap,
  Server,
  Globe,
  ShoppingBag,
  Brush,
} from "lucide-react";
import "../styles/MyTools.css";

const tools = [
  {
    name: "MERN (React / Node / Express / MongoDB)",
    desc: "Full-stack development",
    percent: 98,
    icon: <Code size={28} color="#ff4040" />,
  },
  {
    name: "React, Next.js & Framer Motion",
    desc: "Frontend frameworks & animations",
    percent: 96,
    icon: <Layers size={28} color="#ff4040" />,
  },
  {
    name: "Fabric.js (Canvas Customization)",
    desc: "Product customizers / SVG / PNG",
    percent: 94,
    icon: <Code size={28} color="#ff4040" />,
  },
  {
    name: "GSAP & ScrollTrigger",
    desc: "Scroll-based animations",
    percent: 92,
    icon: <Zap size={28} color="#ff4040" />,
  },
  {
    name: "Tailwind / CSS / HTML",
    desc: "UI styling & layouts",
    percent: 97,
    icon: <Brush size={28} color="#ff4040" />,
  },
  {
    name: "Deployment: VPS, Nginx, Certbot",
    desc: "DevOps & server configuration",
    percent: 99,
    icon: <Server size={28} color="#ff4040" />,
  },
  {
    name: "WordPress / Elementor",
    desc: "Website designing & CMS",
    percent: 91,
    icon: <Globe size={28} color="#ff4040" />,
  },
  {
    name: "Shopify Themes & Integrations",
    desc: "E-commerce setup & customization",
    percent: 93,
    icon: <ShoppingBag size={28} color="#ff4040" />,
  },
  {
    name: "TypeScript & REST APIs",
    desc: "Typed coding & API development",
    percent: 90,
    icon: <Code size={28} color="#ff4040" />,
  },
  {
    name: "Testing & CI/CD",
    desc: "Quality assurance automation",
    percent: 88,
    icon: <Code size={28} color="#ff4040" />,
  },
];

// Counter Animation Hook
const useCounter = (targetValue, duration = 1200) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!started.current) {
        const section = document.querySelector(".tools-section");
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
          started.current = true;

          let start = 0;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3); // smooth easing

            setValue(Math.floor(start + easeOut * (targetValue - start)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetValue, duration]);

  return value;
};

const MyTools = () => {
  return (
    <section className="tools-section">
      <div className="tools-container">
        <p className="tools-subtitle"><span className="dot"></span> My Technical Skills</p>
              <h2 className="tools-title">
                  The technologies that power<br />
                  <span>everything I build</span>
              </h2>

        <div className="tools-grid">
          {tools.map((tool, index) => {
            const animatedValue = useCounter(tool.percent);

            return (
              <div key={index} className="tool-card">
                <div className="tool-left">
                  <div className="tool-icon">{tool.icon}</div>

                  <div className="tool-texts">
                    <h3>{tool.name}</h3>
                    <p>{tool.desc}</p>
                  </div>
                </div>

                <div className="tool-percentage">{animatedValue}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyTools;
