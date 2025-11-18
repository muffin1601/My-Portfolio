import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle, PlayCircle } from "lucide-react";
import profile from "/assets/image.webp";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="sana-hero">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="sana-hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="sana-subtext">Turning Ideas Into Reality</p>

        <h1 className="sana-heading">
          Hi, I'm <span className="sana-highlight">Sana Arif</span><br/>
          Full Stack Developer.
        </h1>

        <p className="sana-description">
          A passionate MERN Stack developer crafting seamless interfaces,
          scalable backends, and production-ready applications.  
          <br/>Let’s build something amazing together.
        </p>

        <motion.div
          className="sana-hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="sana-btn-primary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRightCircle size={18} />
            Get Started
          </motion.button>

          <motion.button
            className="sana-btn-secondary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayCircle size={18} />
            Watch Intro
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="sana-hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Glowing ring */}
        <div className="sana-glow-ring"></div>

        <img src={profile} alt="Sana Arif" className="sana-profile-img" />

        {/* Experience Badge */}
        <motion.div
          className="sana-experience-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
        >
          <h3 className="badge-title">1+</h3>
          <p className="badge-p">Years Experience</p>
        </motion.div>

        {/* Clients Badge */}
        {/* <motion.div
          className="sana-customer-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p>Happy Clients</p>
          <div className="sana-avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
            <div className="sana-add">+10</div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
