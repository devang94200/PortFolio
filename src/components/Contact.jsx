import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const contactInfo = [
  {
    icon: <MdEmail className="text-indigo-400" size={20} />,
    label: "Email",
    value: "pateldevang301@gmail.com",
    href: "mailto:[pateldevang301@gmail.com]",
  },
  {
    icon: <FaLinkedinIn className="text-blue-400" size={18} />,
    label: "LinkedIn",
    value: "in/devanghingladiya",
    href: "https://www.linkedin.com/in/devanghingladiya/",
  },
  {
    icon: <FaGithub className="text-slate-300" size={18} />,
    label: "GitHub",
    value: "github.com/devang94200",
    href: "https://github.com/devang94200",
  },
  {
    icon: <MdLocationOn className="text-pink-400" size={20} />,
    label: "Location",
    value: "Gujrat",
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
    <section className="min-h-screen py-20 px-4 sm:px-6 section-bg flex items-start justify-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-400 glass rounded-full border border-indigo-500/20 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-theme-primary">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-theme-subtle mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind? Want to collaborate? I'd love to hear from you. Drop a message and I'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 space-y-4" data-aos="fade-right" data-aos-delay="100">
            <div className="glass rounded-2xl p-6 border border-white/5 mb-6">
              <h3 className="text-theme-primary font-bold text-lg mb-1">Let's innovate together</h3>
              <p className="text-theme-subtle text-sm">
                I'm currently open to freelance work and full-time opportunities.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="glass rounded-xl px-5 py-4 border border-white/5 flex items-center gap-4 glass-hover"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-theme-subtle text-xs font-medium uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-primary text-sm font-medium hover:text-indigo-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-theme-primary text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-theme-subtle text-xs font-medium uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-theme-subtle text-xs font-medium uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-theme-subtle text-xs font-medium uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-theme-subtle text-xs font-medium uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="form-input resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-glow w-full py-3.5 px-8 flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
