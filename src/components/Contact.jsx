import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <MdEmail size={20} />,
    label: "Email",
    value: "pateldevang301@gmail.com",
    href: "mailto:pateldevang301@gmail.com",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    value: "in/devanghingladiya",
    href: "https://www.linkedin.com/in/devanghingladiya/",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/devang94200",
    href: "https://github.com/devang94200",
  },
  {
    icon: <MdLocationOn size={20} />,
    label: "Location",
    value: "Gujarat",
    href: null,
  },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_gpv93qb",
        "template_4u7uv32",
        form.current,
        "WOlur9M9g5vPPYEeb"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 flex items-start justify-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[var(--accent-color)] clay bg-[var(--bg-card)] mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-theme-primary">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind? Want to collaborate? Drop a message and I'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="clay p-6 mb-6">
              <h3 className="text-theme-primary font-bold text-lg mb-1">Let's innovate together</h3>
              <p className="text-theme-muted text-sm leading-relaxed">
                I'm currently open to freelance work and full-time opportunities.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="clay px-5 py-4 flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-theme flex items-center justify-center flex-shrink-0 text-[var(--accent-color)]">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-theme-subtle text-xs font-bold uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-primary text-sm font-semibold hover:text-[var(--accent-color)] transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-theme-primary text-sm font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="clay p-6 sm:p-8 bg-[var(--bg-card)]">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-theme-subtle text-xs font-bold uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="form-input font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-theme-subtle text-xs font-bold uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="form-input font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-theme-subtle text-xs font-bold uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project Collaboration"
                    className="form-input font-medium"
                  />
                </div>

                <div>
                  <label className="block text-theme-subtle text-xs font-bold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="form-input resize-none font-medium"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-250 text-emerald-700 text-sm font-semibold">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-50 border border-rose-250 text-rose-700 text-sm font-semibold">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="clay-btn w-full py-3.5 px-8 flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={13} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
