import React from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="sana-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="sana-logo">Sana Arif</div>

      <ul className="sana-nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>

      <motion.button
        className="sana-resume-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Resume
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
