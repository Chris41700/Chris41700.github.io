import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refContent, inViewContent] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const dropDownVariants = {
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

  const dropUpVariants = {
    hidden: { opacity: 0, y: 50 },
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
      name="about"
      className="w-full h-fit sm:h-screen bg-gradient-to-b from-teal-500 to-green-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8"
          ref={refTitle}
          initial="hidden"
          animate={inViewTitle ? "visible" : "hidden"}
          variants={dropDownVariants}
        >
          <motion.p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </motion.p>
        </motion.div>

        <motion.p
          className="text-xl mt-20"
          ref={refContent}
          initial="hidden"
          animate={inViewContent ? "visible" : "hidden"}
          variants={dropUpVariants}
        >
          I am a driven Software Developer based in Staten Island, NY. I
          specialize in languages like C++, Java, and JavaScript, and I have a
          strong proficiency in frameworks such as React.js and Tailwind CSS. My
          experience includes working with databases like PostgreSQL and MySQL,
          allowing me to develop robust and scalable applications. With tools
          like GitHub, Trello, and Postman, I streamline development processes
          and facilitate effective collaboration within agile teams. I hold a
          Bachelor's degree in Computer Science with a minor in Mathematics from
          the City University of New York, College of Staten Island, where I
          achieved a Cum Laude distinction and was consistently recognized on
          the Dean's List. I am eager to apply my skills and passion to
          contribute to impactful software development projects.
        </motion.p>
      </div>
    </div>
  );
}
