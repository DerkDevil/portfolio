'use client'
import { useContext } from 'react';
import { ScrollContext } from '../components/ScrollManager';
import ContactSection from "../components/sections/ContactSection";
import WorkSection from "../components/sections/WorkComponent"
import ResumeSection from "../components/sections/ResumeComponent";
import HomeSection from "../components/sections/HomeSection";

const Home = () => {
  const { resumeRef, workRef, contactRef, homeRef } = useContext(ScrollContext);

  return (
    <div className='mt-20'>
      <div ref={homeRef} className="scroll-mt-16"><HomeSection /></div>
      <div ref={resumeRef} className="scroll-mt-16"><ResumeSection /></div>
      <div ref={workRef} className="scroll-mt-16"><WorkSection /></div>
      <div ref={contactRef} className="scroll-mt-16"><ContactSection /></div>
    </div>
  );
};

export default Home;
