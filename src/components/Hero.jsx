import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import profile from "/assets/image.webp";

const Hero = () => {
  return (
    <section className="sana-hero">
      <motion.div
        className="sana-hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="sana-subtext">Your Vision, My Tech Expertise</p>
        <h1 className="sana-heading">
          I'm <span className="sana-highlight">Sana Arif</span>,<br />
          full stack developer based in India
        </h1>
        <p className="sana-description">
          Hi, I'm Sana Arif — a solution-driven full stack developer with 1+ year
          of experience. I specialize in building scalable production-grade
          applications using the MERN stack.
        </p>

        <motion.div
          className="sana-hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="sana-btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="sana-btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Watch Intro ▶
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="sana-hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Sana Arif" className="sana-profile-img" />

        <motion.div
          className="sana-experience-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <h3>1+</h3>
          <p>Year Experience</p>
        </motion.div>

        <motion.div
          className="sana-customer-badge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Real Customer</p>
          <div className="sana-avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
            <div className="sana-add">+</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
