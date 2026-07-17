import React, { useState } from "react";
import {
  FaDownload, FaEye, FaEyeSlash, FaFilePdf,
  FaGraduationCap, FaBriefcase, FaCode,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  { icon: <FaGraduationCap />, label: "Education",   value: "B.Tech in Information Technology" },
  { icon: <FaBriefcase />,     label: "Experience",  value: "2+ Years of Development"          },
  { icon: <FaCode />,          label: "Stack",       value: "Full-Stack MERN Developer"        },
];

const ResumePreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
    className="rounded-3xl overflow-hidden mt-6 border border-theme relative w-full h-[60vh] md:h-[800px] clay bg-[var(--bg-card)] p-2"
  >
    <iframe
      src="/Devang_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
      width="100%"
      height="100%"
      className="rounded-2xl"
      title="Resume Preview"
      style={{ border: "none" }}
    />
  </motion.div>
);

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 flex items-start justify-center">
      <div className="max-w-4xl w-full mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[var(--accent-color)] clay bg-[var(--bg-card)] mb-4">
            My Resume
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-theme-primary">
            Download <span className="gradient-text">CV</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-theme-muted">
            Get a detailed overview of my skills, experience, education, and projects in one document.
          </p>
        </motion.div>

        {/* Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="clay overflow-hidden bg-[var(--bg-card)]"
        >
          {/* Banner */}
          <div className="relative h-32 bg-gradient-to-r from-[#d5ab85] to-[#c4956a] flex items-center px-8 overflow-hidden">
            <FaFilePdf className="text-white/20 absolute right-8 bottom-2" size={80} />
            <div className="relative z-10">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Curriculum Vitae</p>
              <h3 className="text-white text-2xl font-black">Devang Hingladiya</h3>
              <p className="text-white/80 text-sm mt-0.5">Full-Stack MERN Developer</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border-b border-theme divide-theme">
            {highlights.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <span className="text-[var(--accent-color)] text-lg">{icon}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-theme-subtle">{label}</p>
                  <p className="text-sm font-semibold mt-0.5 text-theme-primary">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-6 bg-[var(--bg-secondary)]">
            <p className="text-xs sm:text-sm text-theme-subtle text-center sm:text-left">
              Last updated: <span className="font-bold text-theme-primary">April 2026</span> · Format: <span className="font-bold text-theme-primary">PDF</span>
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
              <button
                onClick={() => setShowPreview(p => !p)}
                className="clay-btn-outline flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                {showPreview ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
                {showPreview ? "Hide Preview" : "Preview CV"}
              </button>
              <a
                href="/Devang_Resume.pdf"
                download="Devang_Hingladiya_Resume.pdf"
                className="clay-btn flex items-center gap-2 px-6 py-2.5 text-sm"
              >
                <FaDownload size={13} />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Preview Frame */}
        <AnimatePresence>
          {showPreview && <ResumePreview />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;
