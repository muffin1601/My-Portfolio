import React from "react";
import "../styles/Home.css";
import Hero from "../components/Hero";
import SkillMarquee from "../components/SkillMarquee";
import MyTools from "../components/MyTools";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Hero />
    <SkillMarquee />
    <MyProjects />
    <SkillMarquee />
    <MyTools />
   
  </>
);

export default Home;
