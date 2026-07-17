import React, { useEffect, useState } from "react";
import { FaArrowDown, FaDownload, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = ["Full-Stack Developer", "MERN Stack Engineer", "Web Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-24 sm:py-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center px-5 py-2.5 rounded-full clay bg-[var(--bg-card)] border border-white text-[var(--accent-color)] text-xs font-bold uppercase tracking-widest mb-8"
        >
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-theme-primary leading-tight tracking-tight mb-4"
        >
          Hi, I'm <span className="gradient-text block sm:inline">Devang</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div 
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-muted mb-6 h-10 flex items-center justify-center"
        >
          <span className="text-[var(--accent-color)]">{displayed}</span>
          <span className="ml-1 w-0.5 h-6 bg-[var(--accent-color)] inline-block animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-theme-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft clean, high-performance web applications from concept to deployment.
          Specializing in the MERN stack with a focus on simple, functional design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button 
            onClick={() => scrollTo("#projects")} 
            className="clay-btn px-8 py-3.5 text-sm sm:text-base flex items-center gap-2"
          >
            <FaGithub size={16} />
            View Projects
          </button>
          <button 
            onClick={() => scrollTo("#contact")} 
            className="clay-btn-outline px-8 py-3.5 text-sm sm:text-base flex items-center gap-2"
          >
            <FaDownload size={14} />
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-theme-subtle"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
          <button 
            onClick={() => scrollTo("#about")}
            className="w-8 h-8 flex items-center justify-center rounded-full clay bg-white hover:bg-[var(--bg-secondary)] transition-all duration-300 animate-bounce"
          >
            <FaArrowDown size={12} className="text-[var(--accent-color)]" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
