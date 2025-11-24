import React from "react";

import Hero from "../components/Hero";
import SkillMarquee from "../components/SkillMarquee";
import MyTools from "../components/MyTools";
import MyProjects from "../components/MyProjects";


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
