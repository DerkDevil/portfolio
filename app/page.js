'use client'
import { useContext } from 'react';
import { ScrollContext } from '../components/ScrollManager';
import ContactSection from "../components/sections/ContactSection";
import WorkSection from "../components/sections/WorkComponent";
import ServicesSection from "../components/sections/ServicesComponent";
import ResumeSection from "../components/sections/ResumeComponent";
import HomeSection from "../components/sections/HomeSection";

const Home = () => {
  const { resumeRef, servicesRef, workRef, contactRef, homeRef } = useContext(ScrollContext);

  return (
    <div className='mt-32'>
      <div ref={homeRef} className="scroll-mt-32"><HomeSection /></div>
      <div ref={servicesRef} className="scroll-mt-32"><ServicesSection /></div>
      <div ref={resumeRef} className="scroll-mt-32"><ResumeSection /></div>
      <div ref={workRef} className="scroll-mt-32"><WorkSection /></div>
      <div ref={contactRef} className="scroll-mt-32"><ContactSection /></div>
    </div>
  );
};

export default Home;
