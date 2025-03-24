// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#FFD1DC]/10 to-[#ADD8E6]/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Get in <span className="text-[#FFD1DC]">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FFD1DC] transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FFD1DC] transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FFD1DC] transition-colors duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFD1DC] hover:bg-[#ADD8E6] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;