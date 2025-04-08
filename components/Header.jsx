'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './menu/Nav';
import MobileNav from './menu/MobileNav';

const Header = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-black/80 py-4 shadow-md backdrop-blur-md' : 'bg-transparent py-8 xl:pt-12'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Dereck<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav scrollToSection={scrollToSection} />
          <Button onClick={() => scrollToSection('contact')}>Hire Me</Button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav scrollToSection={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
