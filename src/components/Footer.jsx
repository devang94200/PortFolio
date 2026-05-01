import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">
              <span className="gradient-text">Devang</span>
              <span className="text-theme-subtle">.</span>
            </p>
            <p className="text-theme-subtle text-sm mt-1">Full-Stack MERN Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "https://www.linkedin.com/in/devanghingladiya/", Icon: FaLinkedinIn, label: "LinkedIn", color: "hover:text-blue-400" },
              { href: "https://github.com/devang-hingladiya", Icon: FaGithub, label: "GitHub", color: "hover:text-theme-primary" },
              { href: "https://www.instagram.com", Icon: FaInstagram, label: "Instagram", color: "hover:text-pink-400" },
              { href: "https://www.twitter.com", Icon: FaXTwitter, label: "Twitter", color: "hover:text-theme-primary" },
            ].map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 flex items-center justify-center rounded-full glass text-theme-subtle ${color} transition-all duration-300 hover:scale-110 hover:border-white/20`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-theme-subtle text-sm text-center md:text-left">
            © {year} Devang Hingladiya. All rights reserved.
          </p>

          <p className="text-theme-muted text-sm text-center md:text-right">
            Designed & Developed with ❤️ by{" "}
            <span className="text-indigo-500 font-medium">Devang</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
