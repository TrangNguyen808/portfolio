// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#FFD1DC]">JD</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#ADD8E6] transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#ADD8E6] transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-700 hover:text-[#ADD8E6] transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-[#ADD8E6] transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-[#ADD8E6] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;