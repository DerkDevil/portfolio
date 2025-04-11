'use client'
import { useContext } from 'react';
import { ScrollContext } from '../components/ScrollManager';
import ContactSection from "../components/sections/ContactSection";
import WorkSection from "../components/sections/WorkComponent"
import SkillsSection from "../components/sections/SkillsComponent";
import HomeSection from "../components/sections/HomeSection";

const Home = () => {
  const { skillsRef, workRef, contactRef, homeRef } = useContext(ScrollContext);

  return (
    <div className='mt-24 xl:mt-20'>
      <div ref={homeRef} className="scroll-mt-24 xl:scroll-mt-16"><HomeSection /></div>
      <div ref={skillsRef} className="scroll-mt-16"><SkillsSection /></div>
      <div ref={workRef} className="scroll-mt-16"><WorkSection /></div>
      <div ref={contactRef} className="scroll-mt-16"><ContactSection /></div>
    </div>
  );
};

export default Home;
