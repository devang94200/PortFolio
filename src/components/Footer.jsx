import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-theme py-10 px-4 sm:px-6 bg-[var(--bg-secondary)]">
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
              { href: "https://www.linkedin.com/in/devanghingladiya/", Icon: FaLinkedinIn, label: "LinkedIn" },
              { href: "https://github.com/devang94200", Icon: FaGithub, label: "GitHub" },
              { href: "https://www.instagram.com", Icon: FaInstagram, label: "Instagram" },
              { href: "https://x.com", Icon: FaXTwitter, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-theme bg-white text-theme-subtle hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-300 hover:scale-105"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-theme mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-theme-subtle text-sm text-center md:text-left">
            &copy; {year} Devang Hingladiya. All rights reserved.
          </p>

          <p className="text-theme-muted text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <span className="text-[var(--accent-color)] font-semibold">Devang</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
