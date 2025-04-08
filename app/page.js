'use client'

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useRef, useContext } from 'react';
import { ScrollContext } from '../components/ScrollManager';

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import ContactComponent from "./contact/page";
import WorkComponent from "./work/page";
import ServicesComponent from "./services/page";
import ResumeComponent from "./resume/page";

const Home = () => {
  const { resumeRef, servicesRef, workRef, contactRef } = useContext(ScrollContext);

  console.log('Home component rendered');

  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br /> <span className="text-accent">Dereck Muñoz</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a software developer with experience in web development, mobile development and cloud computing. I am passionate about creating software that helps people and solves problems. I am always looking for new challenges and opportunities to learn.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="text-xl">
                  <span>Dowload CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>

            <div className="order-1 xl:order:none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats/>
      </section>

      <div ref={servicesRef}><ServicesComponent /></div>
      <div ref={resumeRef}><ResumeComponent /></div>
      <div ref={workRef}><WorkComponent /></div>
      <div ref={contactRef}><ContactComponent /></div>
    </div>
  )
}

export default Home