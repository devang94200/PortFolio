import React from "react";
import { FaCode, FaLightbulb, FaRocket, FaGraduationCap, FaBolt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Years Learning", value: "3+" },
  { label: "GitHub Repos", value: "20+" },
];

const highlights = [
  { icon: <FaCode className="text-indigo-400" />, title: "Full-Stack Development", desc: "Building scalable MERN applications with clean architecture, REST APIs, and JWT auth." },
  { icon: <FaBolt className="text-yellow-400" />, title: "Real-Time Systems", desc: "Implementing WebSockets for instant data transfer and live features, as seen in SharePod." },
  { icon: <FaDatabase className="text-pink-400" />, title: "Data-Driven Platforms", desc: "Developing complex platforms with data analytics and external API integrations like AgriConnect." },
  { icon: <FaGraduationCap className="text-emerald-400" />, title: "Continuous Learning", desc: "Always exploring new tech—from modern UI frameworks to cloud deployment strategies." },
];

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 section-bg flex items-start justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-400 glass rounded-full border border-indigo-500/20 mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-theme-primary">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          {/* Bio */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="glass rounded-2xl p-7 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <div>
                  <p className="text-xs text-theme-subtle font-medium uppercase tracking-wider">Developer</p>
                  <h3 className="text-xl font-bold text-theme-primary">Devang Hingladiya</h3>
                </div>
              </div>
              <p className="text-theme-muted leading-relaxed mb-4">
                I'm a passionate <span className="text-indigo-400 font-semibold">Full-Stack MERN Developer</span> who enjoys building scalable, efficient, and interactive web applications. I focus on turning ideas into real-world solutions using clean code, practical design, and a problem-solving mindset.
              </p>
              <p className="text-theme-subtle leading-relaxed">
                My journey is fueled by curiosity and purpose.I’ve worked on projects like<span className="text-theme-primary font-medium">AgriConnect</span>, where I built features that address real user needs, along with responsive web applications that prioritize performance and usability. I’m comfortable working across the full stack—from designing intuitive frontends in React to building robust backend APIs with Node.js, Express, and MongoDB.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { Icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
                  { Icon: SiExpress, label: "Express", color: "text-slate-300" },
                  { Icon: SiReact, label: "React.js", color: "text-blue-400" },
                  { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
                ].map(({ Icon, label, color }) => (
                  <span key={label} className={`flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-xs font-medium ${color} border border-white/5`}>
                    <Icon size={13} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map(({ label, value }) => (
                <div key={label} className="glass rounded-2xl p-5 text-center border border-white/5 glass-hover">
                  <p className="text-3xl font-extrabold gradient-text mb-1">{value}</p>
                  <p className="text-xs text-theme-subtle font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="glass rounded-2xl p-5 border border-indigo-500/15">
              <p className="text-theme-muted italic text-sm leading-relaxed">
                "My goal is to develop experiences that feel <span className="text-theme-primary font-semibold">alive</span>, <span className="text-theme-primary font-semibold">intelligent</span>, and <span className="text-theme-primary font-semibold">purposeful</span>. Currently exploring AI integrations and real-time web apps."
              </p>
              <p className="text-indigo-400 font-semibold text-sm mt-3">— Devang Hingladiya</p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-5 border border-white/5 glass-hover"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-4 text-lg">
                {icon}
              </div>
              <h4 className="text-theme-primary font-semibold text-sm mb-2">{title}</h4>
              <p className="text-theme-subtle text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
