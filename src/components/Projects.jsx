import React from "react";
import { projects } from "../utils/projectsData";
import { FiExternalLink } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 section-bg flex items-start justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-400 glass rounded-full border border-indigo-500/20 mb-4">
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-theme-primary">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of real-world applications I've designed, developed, and shipped.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="mt-16 sm:mt-24">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-24 lg:mb-40`}
              data-aos="fade-up"
            >
              {/* Image Presentation Stage */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Ambient glow behind image */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div 
                  className="glass rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-2 sm:p-6 lg:p-8 relative border transition-all duration-700 lg:group-hover:-translate-y-3 lg:group-hover:rotate-1 lg:group-hover:shadow-[0_30px_60px_rgb(99,102,241,0.2)] overflow-hidden" 
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Subtle inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 pointer-events-none" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl relative z-10 transition-transform duration-700 lg:group-hover:scale-[1.03] drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center relative px-2 sm:px-0 mt-4 sm:mt-0">
                {/* Massive Watermark Number */}
                <span 
                  className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black leading-none absolute top-[-3rem] sm:top-[-4rem] lg:top-[-6rem] right-0 lg:right-auto lg:left-[-2rem] opacity-[0.03] pointer-events-none select-none z-0" 
                  style={{ color: "var(--text-primary)" }}
                >
                  0{i + 1}
                </span>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary mb-4 sm:mb-6 relative z-10">
                  {project.title}
                </h3>
                
                <p className="text-theme-muted text-base sm:text-lg leading-relaxed mb-8 relative z-10 max-w-xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border glass transition-all hover:border-indigo-500/50"
                      style={{ 
                        color: "var(--text-primary)", 
                        borderColor: "var(--border)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link / CTA */}
                <div className="relative z-10 flex">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow px-8 py-3.5 text-sm sm:text-base inline-flex items-center gap-3 group/btn"
                    >
                      Explore Project 
                      <FiExternalLink size={18} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border glass text-sm sm:text-base font-semibold text-theme-subtle cursor-not-allowed">
                      <FaLock size={15} /> Confidential Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
