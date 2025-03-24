// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-600 hover:text-[#FFD1DC] transition-colors duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#FFD1DC] transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#FFD1DC] transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;