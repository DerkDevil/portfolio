"use client";

import React, { createContext, useRef } from 'react';
import Header from './Header';

export const ScrollContext = createContext();

const ScrollManager = ({ children }) => {
  const resumeRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'resume':
        resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'work':
        workRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, resumeRef, servicesRef, workRef, contactRef }}>
      <div>
        {React.Children.map(children, child =>
          React.isValidElement(child) && child.type === Header ?
            React.cloneElement(child, { scrollToSection, resumeRef, servicesRef, workRef, contactRef }) :
            child
        )}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollManager; 