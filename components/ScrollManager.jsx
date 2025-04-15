"use client";

import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

const ScrollManager = ({ children }) => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      home: homeRef,
      skills: skillsRef,
      work: workRef,
      contact: contactRef,
    };

    sections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, homeRef, skillsRef, workRef, contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollManager;