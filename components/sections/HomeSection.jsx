"use client"
import { FiDownload } from "react-icons/fi";
import { Button } from '../ui/button'; 
import Social from '../Social'; 
import Photo from '../Photo'; 
import Stats from '../Stats'; 
import IdentityLabel from '../ui/IdentityLabel';

const HomeSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between xl:pt-20 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <IdentityLabel className="text-xl"/>
          <h1 className="h2 mb-6">
            Yo soy <br /> <span className="text-accent">Dereck Muñoz</span>
          </h1>
          <p className="max-w-[600px] mb-9 text-white/80">
          Soy un programador apasionado por crear soluciones que aporten valor real. Disfruto trabajar en equipo, aprender constantemente y afrontar desafíos con una mentalidad abierta y analítica.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="text-xl">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:mr-20">
          <Photo />
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default HomeSection;