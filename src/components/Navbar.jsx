import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  User,
  Layers,
  FolderKanban,
  FileText,
  Mail,
  Sparkles,
} from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "About Me", icon: <User size={16} /> },
    { name: "Skills", icon: <Layers size={16} /> },
    { name: "Projects", icon: <FolderKanban size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  // Scroll Spy
  useEffect(() => {
    const sectionIds = navItems.map((item) =>
      item.name.toLowerCase().replace(" ", "-")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navItems.find(
              (item) =>
                entry.target.id === item.name.toLowerCase().replace(" ", "-")
            );
            if (matched) setActive(matched.name);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      className={`sana-navbar ${navOpen ? "nav-open" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <motion.div
        className="sana-logo"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <span className="logo-glow"></span>
        <Sparkles size={22} className="logo-icon" />
        Sana Arif
      </motion.div>

      {/* NAV LINKS */}
      <ul className="sana-nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className={active === item.name ? "active-nav" : ""}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.name.toLowerCase().replace(" ", "-"))
                  ?.scrollIntoView({ behavior: "smooth" });
                setActive(item.name);
                setNavOpen(false);
              }}
            >
              {item.icon} {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* RESUME BTN – downloads PDF */}
      <motion.a
        href="/Sana-resume.pdf"
        download="Sana-Arif-Resume.pdf"
        className="sana-resume-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={16} className="resume-icon" />
        Resume
        <span className="resume-shine"></span>
      </motion.a>

      {/* MOBILE MENU TOGGLE */}
      <button
        className="sana-mobile-toggle"
        onClick={() => setNavOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <Menu size={22} />
      </button>
    </motion.nav>
  );
};

export default Navbar;
