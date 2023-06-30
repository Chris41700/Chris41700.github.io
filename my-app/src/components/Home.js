import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/heroImage.JPEG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  const [refContent, inViewContent] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refImage, inViewImage] = useInView({
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

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <div
      name="home"
      className="w-full h-fit sm:h-screen bg-gradient-to-b from-green-400 to-teal-500 pt-40 sm:pt-48 md:pt-72 lg:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <motion.div
          className="flex flex-col justify-center h-full md:mr-10"
          ref={refContent}
          initial={inViewContent ? "visible" : "hidden"}
          animate={inViewContent ? "visible" : "hidden"}
          variants={dropInVariants}
          exit="hidden"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-cyan-500 to-blue-500 text-transparent inline-block bg-clip-text">
            <span className="whitespace-nowrap">Christopher Hui</span> <br />
            <span className="whitespace-nowrap text-white">
              Software Developer
            </span>
          </h2>

          <p className="text-white py-4 max-w-md text-xl">
            Recent computer science undergraduate specializing in full stack
            development with proficiency with Java, C++, React, Tailwind, etc.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={refImage}
          initial="hidden"
          animate={inViewImage ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-3/5 md:w-6/12 my-10 lg:my-0 lg:w-full border-4 border-solid"
          />
        </motion.div>
      </div>
    </div>
  );
}
