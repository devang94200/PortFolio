import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../themeContext";

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
  const { theme, toggleTheme } = useTheme();

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

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled || isOpen ? "glass shadow-2xl border-b" : "bg-transparent"
        }`}
      style={{ borderColor: scrolled || isOpen ? "var(--border)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl lg:text-2xl font-bold tracking-tight"
          >
            <span className="gradient-text">Devang</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/5"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — CTA + Theme Toggle (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300"
              style={{
                borderColor: "var(--border-hover)",
                color: "var(--text-primary)",
                background: "var(--glass-bg)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              Let's Talk
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-1"
              aria-label="Toggle dark/light mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <span className="theme-toggle-knob">
                {isDark ? "🌙" : "☀️"}
              </span>
            </button>
          </div>

          {/* Mobile — Theme Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <span className="theme-toggle-knob">
                {isDark ? "🌙" : "☀️"}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full glass"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass border-t px-4 py-4 space-y-1" style={{ borderColor: "var(--border)" }}>
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="block w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/5"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="block w-full px-4 py-3 mt-2 text-center rounded-xl text-sm font-semibold transition-all duration-300 border"
            style={{
              color: "var(--bg-primary)",
              backgroundColor: "var(--text-primary)",
              borderColor: "var(--text-primary)"
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
