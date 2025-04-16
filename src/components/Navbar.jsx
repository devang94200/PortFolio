import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Get current location path
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold tracking-wider text-white">
          <Link to="/">Devang</Link>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="relative w-8 h-8 focus:outline-none group">
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 top-3.5" : "top-1"}`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "top-3.5"}`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 bottom-3.5" : "bottom-1"}`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-transparent transition-all duration-300 ease-in-out overflow-hidden transform ${
            isOpen ? "max-h-96 opacity-100 visible translate-y-0" : "max-h-0 opacity-0 invisible translate-y-10"
          } lg:opacity-100 lg:visible lg:max-h-none lg:translate-y-0`}
        >
          {["Home", "Projects", "Skills", "About", "Contact"].map((item) => {
            const path = `/${item === "Home" ? "" : item.toLowerCase()}`;
            const isActive = currentPath === path;

            return (
              <li key={item} className="text-center py-2 lg:py-0">
                <Link
                  to={path}
                  className={`block px-4 py-2 font-medium transition-transform duration-300 ease-in-out ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400" // Active link with underline
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/devanghingladiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
