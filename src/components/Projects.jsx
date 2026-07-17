import React from "react";
import { projects } from "../utils/projectsData";
import { FiExternalLink } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 flex items-start justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[var(--accent-color)] clay bg-[var(--bg-card)] mb-4">
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-theme-primary">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of real-world applications I've designed, developed, and shipped.
          </p>
        </motion.div>

        {/* Projects Showcase */}
        <div className="mt-16 sm:mt-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } mb-24 lg:mb-32`}
            >
              {/* Image Presentation (Smaller image size container) */}
              <div className="w-full lg:w-5/12 flex justify-center relative group">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="clay p-4 relative overflow-hidden bg-[var(--bg-card)] max-w-sm sm:max-w-md w-full cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-2xl relative z-10 mx-auto"
                  />
                </motion.div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center relative px-2 sm:px-0 mt-4 sm:mt-0">
                {/* Watermark Number */}
                <span className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black leading-none absolute top-[-3rem] sm:top-[-4rem] lg:top-[-5rem] right-0 lg:right-auto lg:left-[-2rem] opacity-[0.03] pointer-events-none select-none z-0 text-theme-primary">
                  0{i + 1}
                </span>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-theme-primary mb-4 relative z-10">
                  {project.title}
                </h3>
                
                <p className="text-theme-muted text-sm sm:text-base leading-relaxed mb-6 relative z-10 max-w-xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-xl border border-theme bg-[var(--bg-secondary)] text-theme-muted cursor-default transition-all hover:border-[var(--accent-color)] hover:text-theme-primary"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="relative z-10 flex">
                  {project.link ? (
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-btn px-8 py-3.5 text-sm sm:text-base inline-flex items-center gap-2 group/btn"
                    >
                      Explore Project 
                      <FiExternalLink size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme text-sm font-semibold text-theme-subtle cursor-not-allowed bg-[var(--bg-secondary)]">
                      <FaLock size={13} /> Confidential Project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
