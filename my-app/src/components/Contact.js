import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [refContent, inViewContent] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const dropInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      name="contact"
      className="w-full h-fit sm:h-screen bg-gradient-to-b from-green-400 to-teal-500 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          className="pb-8"
          ref={refContent}
          initial={inViewContent ? "visible" : "hidden"}
          animate={inViewContent ? "visible" : "hidden"}
          variants={dropInVariants}
        >
          <motion.p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </motion.p>
          <motion.p className="py-6">
            Submit the form below to get in touch with me
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form
            action="https://getform.io/f/b22ec582-d9eb-4038-86d5-bb4bcd830a55"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md placeholder-white text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md placeholder-white text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md placeholder-white text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
