import React, { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBolt,
} from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiMongodb,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiDocker,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const categories = [
    {
      title: "Front-End",
      color: "text-blue-400",
      skills: [
        { name: "React.js", icon: <FaReact size={40} className="text-blue-400" /> },
        { name: "HTML5", icon: <DiHtml5 size={40} className="text-orange-500" /> },
        { name: "CSS3", icon: <DiCss3 size={40} className="text-blue-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      ],
    },
    {
      title: "Back-End",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
        { name: "MongoDB", icon: <DiMongodb size={40} className="text-green-300" /> },
        { name: "MySQL", icon: <GrMysql size={40} className="text-blue-300" /> },
      ],
    },
    {
      title: "Tools & Utilities",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt size={40} className="text-orange-400" /> },
        { name: "Postman", icon: <SiPostman size={40} className="text-orange-300" /> },
        { name: "Thunder Client", icon: <FaBolt size={40} className="text-yellow-400" /> },
      ],
    },
    {
      title: "Deployment & Cloud",
      color: "text-yellow-400",
      skills: [
        { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
        { name: "Netlify", icon: <SiNetlify size={40} className="text-green-300" /> },
        { name: "Docker", icon: <SiDocker size={40} className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-14 tracking-wider">Skills</h2>

      {/* Skill Description Box */}
      <div className="max-w-5xl mx-auto bg-[#1e2b3a] border border-[#2c3e50] rounded-xl p-6 md:p-10 shadow-lg backdrop-blur-md transition-all mb-16">
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify">
          <span className="text-white font-semibold block mb-2 text-2xl">
            Skilled & Passionate Full-Stack Developer
          </span>
          With expertise in the <span className="text-blue-400 font-medium">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js), I build dynamic, scalable, and high-performance web applications.
          From responsive front-end UIs to robust back-end APIs, my experience includes:
        </p>

        <ul className="mt-6 space-y-2 text-gray-400 text-base list-disc list-inside">
          <li><span className="text-white">Front-End:</span> React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript (ES6+)</li>
          <li><span className="text-white">Back-End:</span> Node.js, Express.js, REST APIs, JWT Authentication, Middleware</li>
          <li><span className="text-white">Database:</span> MongoDB, Mongoose ODM, MySQL</li>
          <li><span className="text-white">Dev Tools:</span> Git, GitHub, VS Code, Postman, Docker (basic)</li>
          <li><span className="text-white">Deployment & Cloud:</span> Netlify, Vercel, Heroku, Render, Firebase, AWS (basic)</li>
          <li><span className="text-white">Other:</span> WebSockets, MVC Architecture, Agile/Scrum, Third-party API Integration, Error Handling & Debugging</li>
        </ul>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className={`text-2xl font-semibold mb-6 text-center ${category.color}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="w-28 h-28 bg-[#1e2b3a] hover:bg-[#243447] transition-all duration-300 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-lg"
                >
                  {skill.icon}
                  <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
