'use client';

import React, { useState, useContext, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { ScrollContext } from '../ScrollManager';
import MobilePortal from '../utils/MobilePortal'; // Asegúrate de que la ruta sea correcta

const CustomSheet = ({ isOpen, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-300 z-[9999] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Menú lateral con animación */}
      <div
        className={`fixed right-0 top-0 h-full w-3/4 bg-primary p-6 shadow-lg z-[10000] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full'
        }`}
      >
        <button onClick={onClose} className="absolute right-8 top-8">
          <IoMdClose className="text-3xl text-accent" />
        </button>
        {children}
      </div>
    </div>
  );
};

const MobileNav = () => {
  const { scrollToSection } = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botón menú hamburguesa */}
      <button onClick={() => setIsOpen(true)} className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </button>

      {/* Menú lateral montado fuera del header mediante portal */}
      <MobilePortal>
        <CustomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="mt-20 mb-28 text-center text-2xl">
            <h1 className="text-4xl font-semibold">
              Dereck<span className="text-accent">.</span>
            </h1>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8 text-xl">
            <button onClick={() => handleClick('home')}>Home</button>
            <button onClick={() => handleClick('resume')}>Resume</button>
            <button onClick={() => handleClick('work')}>Work</button>
            <button onClick={() => handleClick('contact')}>Contact</button>
          </nav>
        </CustomSheet>
      </MobilePortal>
    </div>
  );
};

export default MobileNav;
