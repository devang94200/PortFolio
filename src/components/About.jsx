import React from "react";
import { FaCode, FaGraduationCap, FaBolt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Years Learning", value: "3+" },
  { label: "GitHub Repos", value: "20+" },
];

const highlights = [
  { icon: <FaCode className="text-[var(--accent-color)]" />, title: "Full-Stack Development", desc: "Building MERN applications with clean REST APIs and JWT auth." },
  { icon: <FaBolt className="text-[var(--accent-color)]" />, title: "Real-Time Systems", desc: "Implementing WebSockets for instant data transfer and live features." },
  { icon: <FaDatabase className="text-[var(--accent-color)]" />, title: "Data-Driven Platforms", desc: "Developing complex platforms with data analytics and external API integrations." },
  { icon: <FaGraduationCap className="text-[var(--accent-color)]" />, title: "Continuous Learning", desc: "Exploring new tech—from modern UI frameworks to cloud deployment strategies." },
];

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-theme-primary">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-14">
          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="clay p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl border border-theme bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-color)] font-bold text-lg">
                    DH
                  </div>
                  <div>
                    <p className="text-xs text-theme-subtle font-bold uppercase tracking-wider">Developer</p>
                    <h3 className="text-xl font-bold text-theme-primary">Devang Hingladiya</h3>
                  </div>
                </div>
                <p className="text-theme-muted leading-relaxed mb-4 text-sm sm:text-base">
                  I'm a passionate <span className="text-[var(--accent-color)] font-semibold">Full-Stack MERN Developer</span> who enjoys building scalable, efficient, and interactive web applications. I focus on turning ideas into real-world solutions using clean code, practical design, and a problem-solving mindset.
                </p>
                <p className="text-theme-muted leading-relaxed text-sm sm:text-base">
                  My journey is fueled by curiosity and purpose. I've worked on projects like <span className="text-theme-primary font-semibold">AgriConnect</span>, where I built features that address real user needs, along with responsive web applications that prioritize performance and usability. I'm comfortable working across the full stack—from designing intuitive frontends in React to building robust backend APIs with Node.js, Express, and MongoDB.
                </p>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { Icon: SiMongodb, label: "MongoDB" },
                  { Icon: SiExpress, label: "Express" },
                  { Icon: SiReact, label: "React.js" },
                  { Icon: SiNodedotjs, label: "Node.js" },
                ].map(({ Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 border border-theme rounded-xl text-xs font-semibold text-theme-muted bg-[var(--bg-secondary)]">
                    <Icon size={13} className="text-[var(--accent-color)]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Quote */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ label, value }) => (
                <div key={label} className="clay p-6 text-center">
                  <p className="text-3xl sm:text-4xl font-black gradient-text mb-1">{value}</p>
                  <p className="text-xs text-theme-subtle font-bold uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="clay p-6 flex flex-col justify-center border-l-4 border-l-[var(--accent-color)] bg-[var(--bg-card)]">
              <p className="text-theme-muted italic text-sm sm:text-base leading-relaxed">
                "My goal is to develop experiences that feel simple, efficient, and purposeful. Currently exploring integrations and real-time features."
              </p>
              <p className="text-[var(--accent-color)] font-bold text-sm mt-3">— Devang Hingladiya</p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="clay p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-theme flex items-center justify-center mb-4 text-base">
                {icon}
              </div>
              <h4 className="text-theme-primary font-bold text-sm mb-2">{title}</h4>
              <p className="text-theme-subtle text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
