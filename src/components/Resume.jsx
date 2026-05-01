import React, { useState } from "react";
import {
  FaDownload, FaEye, FaEyeSlash, FaFilePdf,
  FaGraduationCap, FaBriefcase, FaCode,
} from "react-icons/fa";

const highlights = [
  { icon: <FaGraduationCap />, label: "Education",   value: "B.Tech in Information Technology" },
  { icon: <FaBriefcase />,     label: "Experience",  value: "2+ Years of Development"          },
  { icon: <FaCode />,          label: "Stack",       value: "Full-Stack MERN Developer"        },
];

/* ─── Inline Resume Preview ─── */
const ResumePreview = () => (
  <div
    className="rounded-2xl overflow-hidden mt-6 border relative w-full h-[60vh] md:h-[800px]"
    style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    data-aos="fade-up"
  >
    <iframe
      src="/Devang_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
      width="100%"
      height="100%"
      className="absolute inset-0"
      title="Resume Preview"
      style={{ border: "none" }}
    />
  </div>
);

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3">
    <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-subtle)" }}>{children}</h3>
    <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
  </div>
);

/* ─── Main Resume Section ─── */
const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 section-bg">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border mb-4"
            style={{ color: "#818cf8", background: "rgba(99,102,241,0.1)", borderColor: "rgba(99,102,241,0.25)" }}>
            My Resume
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: "var(--text-primary)" }}>
            Download <span className="gradient-text">CV</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "var(--text-subtle)" }}>
            Get a detailed overview of my skills, experience, education, and projects in one document.
          </p>
        </div>

        {/* Card */}
        <div className="glass rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">

          {/* Banner */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 flex items-center px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                  radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <FaFilePdf className="text-white/30 absolute right-8 bottom-2" size={80} />
            <div className="relative z-10">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Curriculum Vitae</p>
              <h3 className="text-white text-2xl font-extrabold">Devang Hingladiya</h3>
              <p className="text-white/70 text-sm mt-0.5">Full-Stack MERN Developer</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "var(--border)" }}>
            {highlights.map(({ icon, label, value }, i) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5"
                data-aos="fade-up" data-aos-delay={100 + i * 80}>
                <span className="text-indigo-400 text-lg">{icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-subtle)" }}>{label}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px mx-6" style={{ background: "var(--border)" }} />

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-7">
            <p className="text-sm text-center sm:text-left mb-4 sm:mb-0" style={{ color: "var(--text-subtle)" }}>
              Last updated: <span style={{ color: "var(--text-primary)" }} className="font-medium">April 2026</span>
              &nbsp;·&nbsp;Format: <span style={{ color: "var(--text-primary)" }} className="font-medium">PDF</span>
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
              {/* Toggle Preview */}
              <button
                onClick={() => setShowPreview(p => !p)}
                className="btn-outline flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                {showPreview ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
                {showPreview ? "Hide Preview" : "Preview CV"}
              </button>
              {/* Download */}
              <a
                href="/Devang_Resume.pdf"
                download="Devang_Hingladiya_Resume.pdf"
                className="btn-glow flex items-center gap-2 px-6 py-2.5 text-sm"
              >
                <FaDownload size={13} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Inline Preview (toggle) */}
        {showPreview && <ResumePreview />}
      </div>
    </section>
  );
};

export default Resume;
