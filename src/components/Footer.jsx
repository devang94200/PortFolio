import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white">
              © {new Date().getFullYear()} Devang Hingladiya. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/devang-hingladiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/devang-hingladiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="/Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-4 mt-4 text-center text-gray-400">
          <p>Designed & Developed by Devang Hingladiya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
