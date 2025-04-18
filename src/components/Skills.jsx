// src/components/Skills.jsx
import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-[#FFD1DC]/10 to-[#ADD8E6]/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-[#FFD1DC]">Skills</span>
        </h2>
        Updating...
        {/* <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-[#ADD8E6]">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-[#FFD1DC] to-[#ADD8E6] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Skills;