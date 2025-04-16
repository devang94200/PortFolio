import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center space-y-12">
        <h2 className="text-4xl font-bold tracking-wide text-gradient bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Hello! I’m <span className="text-white font-semibold">Devang Hingladiya</span>, a full-stack <span className="text-blue-400 font-medium">MERN Developer</span> with a passion for building smart, scalable, and interactive digital experiences.
          Whether it’s a sleek web application, an innovative IoT solution, or a dynamic UI concept — I bring ideas to life through clean code, thoughtful design, and a deep love for technology.
        </p>

        <p className="text-lg text-gray-400 leading-loose max-w-3xl mx-auto">
          With hands-on experience in <span className="text-white">MongoDB</span>, <span className="text-white">Express.js</span>, <span className="text-white">React.js</span>, and <span className="text-white">Node.js</span>, I specialize in crafting seamless user interfaces and building robust backend systems. 
          I love blending logic with creativity — making interfaces intuitive, animations engaging, and systems efficient.
        </p>

        <p className="text-lg text-gray-400 leading-loose max-w-3xl mx-auto">
          My journey is fueled by curiosity and purpose. From developing smart automation projects like <span className="text-white">Smart Curtains</span> with sunlight detection, to designing responsive portfolios with custom animations and interaction effects — I aim to build solutions that are not only functional, but meaningful.
        </p>

        <div className="text-left space-y-16 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-purple-500 mb-4">
              💼 What I Do Best:
            </h3>
            <ul className="text-gray-300 space-y-4 list-disc list-inside">
              <li><strong className="text-white">Full-Stack Web Development</strong> using the MERN stack</li>
              <li><strong className="text-white">UI/UX Integration</strong> with modern frameworks and motion effects</li>
              <li><strong className="text-white">IoT & Smart Tech Projects</strong> combining hardware and web tech</li>
              <li><strong className="text-white">Animated Interfaces</strong> using GSAP & Framer Motion</li>
              <li><strong className="text-white">Clean, Scalable Code</strong> architecture for maintainable solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-purple-500 mb-4">
              🛠 Tech Stack & Tools I Love:
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              React.js • Node.js • Express • MongoDB • Tailwind CSS • Git • Firebase • JavaScript (ES6+) • REST APIs • WebSockets • IoT Sensors
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-purple-500 mb-4">
              🚀 Always Exploring:
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              Currently diving deeper into AI integrations, real-time web apps, and next-gen interfaces that blend technology with creativity. My goal? 
              To develop experiences that feel <span className="text-white">alive</span>, <span className="text-white">intelligent</span>, and <span className="text-white">purposeful</span>.
            </p>
          </div>
        </div>

        <p className="text-center mt-16 text-2xl text-purple-400 font-semibold">
          Let’s innovate and create something remarkable. 🌐✨
        </p>
      </div>
    </section>
  );
};

export default About;
