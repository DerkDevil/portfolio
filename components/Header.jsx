import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './menu/Nav';
import MobileNav from './menu/MobileNav';

const Header = ({ scrollToSection }) => {
  return (
    <header className='py-8 xl:py-12 text-white'>  
    <div className="container mx-auto flex justify-between items-center">


      {/* Logo */}
      <Link href="/">
        <h1 className='text-4xl font-semibold'>
          Dereck<span className='text-accent'>.</span>
        </h1>
      </Link>


      {/* Desktop nav & hire me button */}
      <div className="hidden xl:flex items-center gap-8">
        <Nav scrollToSection={scrollToSection} />
        <Link href="/contact">
          <Button>Hire Me</Button>
        </Link>
      </div>

      {/* Mobile nav */}

      <div className="xl:hidden">
        <MobileNav scrollToSection={scrollToSection} />
      </div>
      
    </div>
  </header>
  );
}

export default Header