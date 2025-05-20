
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 mr-2 rounded-full bg-estim-green flex items-center justify-center">
            <span className="text-white font-bold">E</span>
          </div>
          <span className="font-bold text-xl text-estim-green">ESTIM</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link hover:text-estim-green transition-colors">
            Accueil
          </Link>
          <Link to="#tracks" className="nav-link hover:text-estim-green transition-colors">
            Filières
          </Link>
          <Link to="#about" className="nav-link hover:text-estim-green transition-colors">
            À propos
          </Link>
          <Link to="#contact" className="nav-link hover:text-estim-green transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <ScrollLink to="register" smooth={true} duration={500}>
            <Button variant="outline" size="default">
              Pré-inscription
            </Button>
          </ScrollLink>
          <Button 
            variant="default" 
            size="default" 
            id="complete-registration-dialog"
            onClick={() => document.getElementById('complete-registration-trigger')?.click()}
          >
            Inscription complète
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container py-4 flex flex-col space-y-4">
          <Link to="/" className="block py-2 hover:text-estim-green transition-colors" onClick={toggleMobileMenu}>
            Accueil
          </Link>
          <Link to="#tracks" className="block py-2 hover:text-estim-green transition-colors" onClick={toggleMobileMenu}>
            Filières
          </Link>
          <Link to="#about" className="block py-2 hover:text-estim-green transition-colors" onClick={toggleMobileMenu}>
            À propos
          </Link>
          <Link to="#contact" className="block py-2 hover:text-estim-green transition-colors" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <ScrollLink to="register" smooth={true} duration={500} onClick={toggleMobileMenu}>
              <Button variant="outline" size="default" className="w-full">
                Pré-inscription
              </Button>
            </ScrollLink>
            <Button 
              variant="default" 
              size="default" 
              className="w-full"
              onClick={() => {
                document.getElementById('complete-registration-trigger')?.click();
                toggleMobileMenu();
              }}
            >
              Inscription complète
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
