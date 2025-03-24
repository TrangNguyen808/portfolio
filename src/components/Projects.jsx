// src/components/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Tailwind CSS",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management solution with real-time updates",
      tech: ["React", "Firebase", "Material UI"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-[#ADD8E6]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#FFD1DC]/10 text-[#FFD1DC] px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-[#ADD8E6] hover:text-[#FFD1DC] transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;