import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-white font-bold text-2xl tracking-tighter">
              <span className="text-turf-light text-green-500">TURF</span>PLAY
            </a>
          </div>
          <div className="hidden md:ml-10 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full pb-6 pt-2 h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                block="true"
                className="text-gray-200 hover:text-green-400 block px-3 py-4 text-center text-lg font-medium border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-6 block w-full text-center bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
