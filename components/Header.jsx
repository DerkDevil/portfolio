"use client";

import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './menu/Nav';
import MobileNav from './menu/MobileNav';
import { ScrollContext } from './ScrollManager';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useContext(ScrollContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black/80 py-4 shadow-md backdrop-blur-md' : 'bg-transparent py-8 xl:pt-12'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Dereck<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={() => scrollToSection('contact')}>Hire Me</Button>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;