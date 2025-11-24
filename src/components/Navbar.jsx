import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
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

  const handleNavClick = (item) => {
    document
      .getElementById(item.name.toLowerCase().replace(" ", "-"))
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(item.name);
    setNavOpen(false);
  };

  return (
    <>
      {/* TOP NAVBAR (always visible) */}
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

        {/* DESKTOP NAV LINKS */}
        <ul className="sana-nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                className={active === item.name ? "active-nav" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.icon} {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP RESUME BUTTON */}
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

        {/* MOBILE MENU TOGGLE (only visible on small screens via CSS) */}
        <button
          className="sana-mobile-toggle"
          onClick={() => setNavOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* MOBILE SIDEBAR + BACKDROP */}
      <AnimatePresence>
        {navOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="sana-sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavOpen(false)}
            />

            {/* Sliding sidebar */}
            <motion.aside
              className="sana-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <div className="sana-sidebar-header">
                <div className="sidebar-logo">
                  <Sparkles size={20} className="logo-icon" />
                  <span>Sana Arif</span>
                </div>
                <button
                  className="sidebar-close-btn"
                  onClick={() => setNavOpen(false)}
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="sana-sidebar-links">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      className={`sidebar-link-btn ${
                        active === item.name ? "active-nav" : ""
                      }`}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/Sana-resume.pdf"
                download="Sana-Arif-Resume.pdf"
                className="sana-sidebar-resume"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <FileText size={16} className="resume-icon" />
                Download Resume
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
