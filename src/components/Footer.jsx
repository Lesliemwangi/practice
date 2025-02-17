import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brief Description */}
          <div>
            <h2 className="text-xl font-bold text-blue-400">About Me</h2>
            <p className="mt-3 text-sm">
              I am a former architect turned software engineer. Passionate about creating user-focused digital experiences through design and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-blue-400">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {["Home", "About", "Services", "Projects" ,"Contact"].map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-blue-400 transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-bold text-blue-400">Connect with Me</h2>
            <div className="mt-3 flex justify-center md:justify-start gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="mailto:youremail@example.com" className="text-blue-400 text-2xl hover:scale-110 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Leslie Wambui Mwangi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
