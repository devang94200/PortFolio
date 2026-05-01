import React, { useEffect } from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaBolt, FaGithub,
  FaMagic, FaTable, FaRegBell, FaCommentDots, FaCalendarAlt, FaChartBar
} from "react-icons/fa";
import { DiHtml5, DiCss3, DiMongodb } from "react-icons/di";
import {
  SiTailwindcss, SiExpress, SiPostman,
  SiVercel, SiNetlify, SiDocker, SiBootstrap, SiShadcnui
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from "aos";

const categories = [
  {
    title: "Front-End",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
      { name: "HTML5", icon: <DiHtml5 />, color: "text-orange-400" },
      { name: "CSS3", icon: <DiCss3 />, color: "text-blue-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-teal-400" },
    ],
  },
  {
    title: "Back-End",
    accent: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-slate-300" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-green-400" },
      { name: "MySQL", icon: <GrMysql />, color: "text-blue-400" },
    ],
  },
  {
    title: "Tools",
    accent: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Thunder", icon: <FaBolt />, color: "text-yellow-400" },
      { name: "GitHub", icon: <FaGithub />, color: "text-blue-400" },
    ],
  },
  {
    title: "Libraries",
    accent: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    skills: [
      { name: "AOS", icon: <FaMagic />, color: "text-theme-primary" },
      { name: "DataTables", icon: <FaTable />, color: "text-blue-400" },
      { name: "SweetAlert", icon: <FaRegBell />, color: "text-pink-400" },
      { name: "Toastify", icon: <FaCommentDots />, color: "text-green-400" },
      { name: "FullCalendar", icon: <FaCalendarAlt />, color: "text-indigo-400" },
      { name: "Highcharts", icon: <FaChartBar />, color: "text-purple-400" },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 section-bg flex items-start justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-400 glass rounded-full border border-indigo-500/20 mb-4">
            My Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-theme-primary">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Technologies and tools I work with every day to build scalable, performant applications.
          </p>
        </div>

        {/* Summary Card */}
        <div
          className="glass rounded-2xl p-6 sm:p-8 border border-indigo-500/10 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20 flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div>
              <h3 className="text-theme-primary font-bold text-lg mb-1">Skilled & Passionate Full-Stack Developer</h3>
              <p className="text-theme-muted text-sm leading-relaxed">
                With expertise in the <span className="text-indigo-400 font-medium">MERN Stack</span>, I build dynamic, scalable, and high-performance applications.
                From responsive front-end UIs to robust back-end APIs — experienced with React.js, Node.js, Express, MongoDB, MySQL, and modern DevOps tools.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-2xl p-5 border ${cat.border} bg-gradient-to-br ${cat.accent}`}
              data-aos="fade-up"
              data-aos-delay={ci * 100}
            >
              {/* Category Header */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cat.badge} mb-5`}>
                {cat.title}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    className="skill-card p-3 flex-1 min-w-[100px] flex flex-col items-center justify-center gap-2"
                    data-aos="zoom-in"
                    data-aos-delay={ci * 100 + si * 60}
                  >
                    <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-xs font-medium text-theme-muted text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
