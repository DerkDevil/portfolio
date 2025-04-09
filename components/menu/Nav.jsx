"use client";

import { useContext } from 'react';
import { ScrollContext } from '../ScrollManager';

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },

]

const Nav = () => {
  const { scrollToSection } = useContext(ScrollContext);

  return (
    <nav className="flex gap-8">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('resume')}>Resume</button>
      <button onClick={() => scrollToSection('work')}>Work</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </nav>
  )
}

export default Nav