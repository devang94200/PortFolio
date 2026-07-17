import React from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaBolt, FaGithub,
  FaMagic, FaTable, FaRegBell, FaCommentDots, FaCalendarAlt, FaChartBar
} from "react-icons/fa";
import { DiHtml5, DiCss3, DiMongodb } from "react-icons/di";
import {
  SiTailwindcss, SiExpress, SiPostman, SiBootstrap
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Front-End",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-[#5ed3f3]" },
      { name: "HTML5", icon: <DiHtml5 />, color: "text-[#e44d26]" },
      { name: "CSS3", icon: <DiCss3 />, color: "text-[#264de4]" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38bdf8]" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-[#7952b3]" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-[#6cc24a]" },
      { name: "Express.js", icon: <SiExpress />, color: "text-[#6b6560]" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-[#4db33d]" },
      { name: "MySQL", icon: <GrMysql />, color: "text-[#00758f]" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-[#f05032]" },
      { name: "Postman", icon: <SiPostman />, color: "text-[#ff6c37]" },
      { name: "Thunder", icon: <FaBolt />, color: "text-[#ffb703]" },
      { name: "GitHub", icon: <FaGithub />, color: "text-[#181717]" },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "AOS", icon: <FaMagic />, color: "text-[var(--accent-color)]" },
      { name: "DataTables", icon: <FaTable />, color: "text-[#00758f]" },
      { name: "SweetAlert", icon: <FaRegBell />, color: "text-[#f27474]" },
      { name: "Toastify", icon: <FaCommentDots />, color: "text-[#4db33d]" },
      { name: "FullCalendar", icon: <FaCalendarAlt />, color: "text-[#3788d8]" },
      { name: "Highcharts", icon: <FaChartBar />, color: "text-[#8085e9]" },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
            My Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-theme-primary">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Technologies and tools I work with every day to build scalable, performant applications.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clay p-6 sm:p-8 mb-10 bg-[var(--bg-card)] flex items-start gap-4"
        >
          <div className="w-12 h-12 flex-shrink-0 rounded-2xl border border-theme bg-[var(--bg-secondary)] flex items-center justify-center text-xl font-bold text-[var(--accent-color)]">
            S
          </div>
          <div>
            <h3 className="text-theme-primary font-bold text-lg mb-1">Skilled & Passionate Full-Stack Developer</h3>
            <p className="text-theme-muted text-sm leading-relaxed">
              With expertise in the <span className="text-[var(--accent-color)] font-semibold">MERN Stack</span>, I build dynamic, scalable, and high-performance applications.
              From responsive front-end UIs to robust back-end APIs — experienced with React.js, Node.js, Express, MongoDB, MySQL, and modern libraries.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="clay p-6 flex flex-col h-full bg-[var(--bg-card)]"
            >
              {/* Category Header */}
              <div className="inline-flex self-start px-3 py-1 rounded-xl text-xs font-bold border border-theme bg-[var(--bg-secondary)] text-[var(--accent-color)] mb-6">
                {cat.title}
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="skill-card p-3 flex-1 min-w-[90px] flex flex-col items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className={`text-2xl sm:text-3xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-[11px] font-bold text-theme-muted text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
