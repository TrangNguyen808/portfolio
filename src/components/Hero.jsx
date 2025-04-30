// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-[#FFD1DC]/10 to-[#ADD8E6]/10">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Hi, I'm <span className="text-[#FFD1DC]">Trang Nguyen</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700">
            Frontend Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I create beautiful, responsive, and user-friendly web applications with passion and creativity.
          </p>
          <a href="#contact" className="bg-[#FFD1DC] hover:bg-[#ADD8E6] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;