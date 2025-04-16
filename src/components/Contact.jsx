import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gpv93qb", "template_4u7uv32", form.current, "WOlur9M9g5vPPYEeb")
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="flex justify-center items-center h-full px-6">
        <div className="max-w-xl w-full px-8 py-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg backdrop-blur-md border-2 border-gray-200 dark:border-gray-700">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-white"
          >
            Contact Me
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 bg-opacity-50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 bg-opacity-50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <motion.textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 bg-opacity-50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="w-full py-3 px-8 bg-black text-white rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
