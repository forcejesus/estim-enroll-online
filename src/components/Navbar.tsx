import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/#about' },
    { name: 'Filières', href: '/#tracks' },
    { 
      name: 'Admission', 
      href: '#',
      dropdown: [
        { name: 'Pré-inscription', href: '/pre-registration' },
        { name: 'Inscription complète', href: '/complete-registration' },
        { name: 'Conditions d\'admission', href: '/#admission' }
      ]
    },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header className="relative bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-estim-green to-estim-gold text-white py-3 hidden lg:block">
        <div className="container px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-estim-gold/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+212 522 XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-estim-gold/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@estim-edu.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white/90">Rejoignez-nous :</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative w-14 h-14 mr-4">
              <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                <img
                  src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                  alt="ESTIM Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div>
              <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold group-hover:from-estim-darkGreen group-hover:to-estim-gold transition-all duration-300">ESTIM</span>
              <div className="text-sm text-gray-600 -mt-1 font-medium">École Supérieure de Technologie</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-estim-green font-semibold transition-all duration-300 py-2 px-3 rounded-xl hover:bg-estim-green/5"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {isDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 backdrop-blur-sm"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-6 py-3 text-sm text-gray-700 hover:text-estim-green hover:bg-gradient-to-r hover:from-estim-green/5 hover:to-estim-gold/5 transition-all duration-300 font-medium"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-estim-green font-semibold transition-all duration-300 py-2 px-3 rounded-xl hover:bg-estim-green/5"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/pre-registration">
              <Button variant="outline" className="border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                Pré-inscription
              </Button>
            </Link>
            <Link to="/complete-registration">
              <Button className="bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                S'inscrire maintenant
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-4 text-gray-700 hover:text-estim-green font-semibold transition-all duration-300 rounded-xl hover:bg-estim-green/5"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 pb-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block py-3 px-4 text-sm text-gray-600 hover:text-estim-green transition-all duration-300 rounded-xl hover:bg-estim-green/5 font-medium"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 px-4 text-gray-700 hover:text-estim-green font-semibold transition-all duration-300 rounded-xl hover:bg-estim-green/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200 mt-4">
                <Link to="/pre-registration" className="w-full">
                  <Button variant="outline" className="w-full border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white font-semibold py-3 rounded-xl">
                    Pré-inscription
                  </Button>
                </Link>
                <Link to="/complete-registration" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-3 rounded-xl">
                    S'inscrire maintenant
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;