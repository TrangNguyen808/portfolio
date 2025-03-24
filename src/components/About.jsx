// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About <span className="text-[#ADD8E6]">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#FFD1DC]/5 to-[#ADD8E6]/5 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate frontend developer with 3+ years of experience in creating modern web applications. My journey in tech started with a deep curiosity for design and coding, which has evolved into a fulfilling career crafting digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-[#FFD1DC] font-semibold">3+ Years Experience</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-[#ADD8E6] font-semibold">20+ Projects Completed</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-[#FFD1DC] font-semibold">10+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;