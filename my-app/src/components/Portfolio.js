import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import capstoneProject from "../assets/portfolio/capstone_project.png";
import javafxStudyMate from "../assets/portfolio/javafx_studymate.png";
import miniVi from "../assets/portfolio/miniVi.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: capstoneProject,
    },
    {
      id: 2,
      src: javafxStudyMate,
    },
    {
      id: 3,
      src: miniVi,
    },
    {
      id: 4,
      src: capstoneProject,
    },
    {
      id: 5,
      src: javafxStudyMate,
    },
    {
      id: 6,
      src: miniVi,
    },
  ];

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

  const portfolioVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [gridRef, inViewGrid] = useInView();
  const gridControls = useAnimation();

  useEffect(() => {
    if (inViewGrid) {
      gridControls.start("visible");
    } else {
      gridControls.start("hidden");
    }
  }, [inViewGrid, gridControls]);

  const [shuffledPortfolios, setShuffledPortfolios] = useState(portfolios);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shuffleGrid = () => {
    const shuffledArray = shuffledPortfolios.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setShuffledPortfolios(shuffledArray);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-green-400 to-teal-500 w-full text-white h-fit sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8"
          ref={refContent}
          initial={inViewContent ? "visible" : "hidden"}
          animate={inViewContent ? "visible" : "hidden"}
          variants={dropInVariants}
        >
          <motion.p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </motion.p>
          <motion.p className="py-6">
            Check out some of my work right here
          </motion.p>
        </motion.div>

        {isMobile && (
          <div className="flex justify-center">
            <motion.button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mb-4"
              onClick={shuffleGrid}
              initial={inViewContent ? "visible" : "hidden"}
              animate={inViewContent ? "visible" : "hidden"}
              variants={dropInVariants}
            >
              Shuffle
            </motion.button>
          </div>
        )}

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
        >
          {shuffledPortfolios.map(({ id, src }) => (
            <motion.div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              variants={portfolioVariants}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
