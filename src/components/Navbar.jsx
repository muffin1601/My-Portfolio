import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Home, User, Layers, FolderKanban, FileText, Mail, Sparkles } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "About Me", icon: <User size={16} /> },
    { name: "Skills", icon: <Layers size={16} /> },
    { name: "Projects", icon: <FolderKanban size={16} /> },
    { name: "Resume", icon: <FileText size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav
      className="sana-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO WITH ICON */}
      <motion.div
        className="sana-logo"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
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
              className={active === item.name ? "active-nav" : ""}
              onClick={() => setActive(item.name)}
            >
              {item.icon} {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* RESUME BUTTON */}
      <motion.button
        className="sana-resume-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={16} className="resume-icon" />
        Resume
        <span className="resume-shine"></span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
