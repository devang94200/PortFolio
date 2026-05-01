import React, { useEffect, useState } from "react";
import { FaArrowDown, FaDownload, FaGithub } from "react-icons/fa";

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

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden section-bg pt-24 sm:pt-0 pb-10 sm:pb-0">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-cyan-600/6 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
          data-aos="fade-down" data-aos-delay="100">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-theme-primary leading-none tracking-tight mb-4"
          data-aos="fade-up" data-aos-delay="200">
          Hi, I'm{" "}
          <span className="gradient-text block sm:inline">Devang</span>
        </h1>

        {/* Typewriter Role */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-theme-muted mb-6 h-10 flex items-center justify-center"
          data-aos="fade-up" data-aos-delay="300">
          <span className="gradient-text-cyan">{displayed}</span>
          <span className="ml-0.5 w-0.5 h-7 bg-indigo-400 inline-block animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-theme-subtle max-w-2xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-up" data-aos-delay="400">
          I craft pixel-perfect, high-performance digital experiences from concept to deployment.
          Specializing in the MERN stack with a passion for clean design and scalable architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          data-aos="fade-up" data-aos-delay="500">
          <button onClick={() => scrollTo("#projects")} className="btn-glow px-8 py-3.5 text-sm sm:text-base flex items-center gap-2">
            <FaGithub size={16} />
            View Projects
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-outline px-8 py-3.5 text-sm sm:text-base flex items-center gap-2">
            <FaDownload size={14} />
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-theme-subtle" data-aos="fade-up" data-aos-delay="700">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <button onClick={() => scrollTo("#about")}
            className="w-8 h-8 flex items-center justify-center rounded-full glass hover:border-indigo-500/40 transition-all duration-300 animate-bounce">
            <FaArrowDown size={12} className="text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
