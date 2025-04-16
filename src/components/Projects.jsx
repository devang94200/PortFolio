import React from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black">
      <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-wide transform translate-y-4">
        My Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#2D3748] dark:bg-[#2A303C] p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-6 transition-transform duration-500 transform hover:scale-110 hover:opacity-90"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                View Project →
              </a>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
