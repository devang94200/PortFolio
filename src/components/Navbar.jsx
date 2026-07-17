import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <div 
        className={`w-full max-w-6xl rounded-full transition-all duration-300 ${
          scrolled 
            ? "clay py-2 px-6 shadow-md" 
            : "bg-transparent py-4 px-4"
        } flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-lg sm:text-xl font-extrabold tracking-tight"
        >
          <span className="gradient-text">Devang</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-350 text-theme-muted hover:text-theme-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk CTA (Desktop) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={(e) => handleNavClick(e, "#contact")}
            className="clay-btn px-6 py-2.5 text-sm font-semibold"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1 rounded-full border border-theme bg-white shadow-sm"
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} style={{ background: "var(--text-primary)" }} />
            <span className={`w-4 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} style={{ background: "var(--text-primary)" }} />
            <span className={`w-4 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} style={{ background: "var(--text-primary)" }} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 z-[9998] clay p-5 flex flex-col gap-2"
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-theme-muted hover:text-theme-primary hover:bg-[var(--bg-secondary)] transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="clay-btn w-full py-3.5 mt-2 text-sm font-semibold"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
