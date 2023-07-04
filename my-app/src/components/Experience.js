import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bootstrap from "../assets/icons/bootstrap.png";
import c from "../assets/icons/c.png";
import csharp from "../assets/icons/c#.png";
import cplusplus from "../assets/icons/c++.png";
import css from "../assets/icons/css.png";
import docker from "../assets/icons/docker.png";
import express from "../assets/icons/express.png";
import github from "../assets/icons/github.png";
import golang from "../assets/icons/golang.png";
import heroku from "../assets/icons/heroku.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javafx from "../assets/icons/javafx.png";
import javascript from "../assets/icons/javascript.png";
import jquery from "../assets/icons/jquery.png";
import materialui from "../assets/icons/materialui.png";
import mysql from "../assets/icons/mysql.png";
import node from "../assets/icons/node.png";
import php from "../assets/icons/php.png";
import postgresql from "../assets/icons/postgresql.png";
import postman from "../assets/icons/postman.png";
import react from "../assets/icons/react.png";
import scenebuilder from "../assets/icons/scenebuilder.png";
import tailwind from "../assets/icons/tailwind.png";
import unity from "../assets/icons/unity.png";
import webflow from "../assets/icons/webflow.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: cplusplus,
      title: "C++",
      style: "bg-gradient-to-b from-blue-100 to-blue-900 shadow-blue-500",
    },
    {
      id: 2,
      src: csharp,
      title: "C#",
      style: "bg-gradient-to-b from-purple-100 to-purple-900 shadow-purple-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "bg-gradient-to-b from-sky-100 to-sky-700 shadow-sky-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "bg-gradient-to-b from-orange-100 to-orange-600 shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "bg-gradient-to-b from-blue-100 to-blue-600 shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "bg-gradient-to-b from-yellow-100 to-yellow-400 shadow-yellow-500",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "bg-gradient-to-b from-violet-100 to-violet-900 shadow-violet-500",
    },
    {
      id: 8,
      src: jquery,
      title: "jQuery",
      style: "bg-gradient-to-b from-blue-100 to-blue-800 shadow-blue-500",
    },
    {
      id: 9,
      src: express,
      title: "ExpressJS",
      style: "bg-gradient-to-b from-white to-black shadow-black-xl",
    },
    {
      id: 10,
      src: node,
      title: "NodeJS",
      style: "bg-gradient-to-b from-lime-100 to-lime-500 shadow-lime-500",
    },
    {
      id: 11,
      src: react,
      title: "ReactJS",
      style: "bg-gradient-to-b from-sky-100 to-sky-500 shadow-sky-500",
    },
    {
      id: 12,
      src: materialui,
      title: "MaterialUI",
      style: "bg-gradient-to-b from-blue-100 to-blue-600 shadow-blue-500",
    },
    {
      id: 13,
      src: tailwind,
      title: "TailwindCSS",
      style: "bg-gradient-to-b from-cyan-100 to-cyan-700 shadow-cyan-500",
    },
    {
      id: 14,
      src: mysql,
      title: "MySQL",
      style: "bg-gradient-to-b from-sky-100 to-sky-800 shadow-sky-500",
    },
    {
      id: 15,
      src: postgresql,
      title: "PostgreSQL",
      style: "bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-cyan-500",
    },
    {
      id: 16,
      src: postman,
      title: "Postman",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 17,
      src: docker,
      title: "Docker",
      style: "bg-gradient-to-b from-blue-100 to-blue-600 shadow-blue-500",
    },
    {
      id: 18,
      src: heroku,
      title: "Heroku",
      style:
        "bg-gradient-to-b from-fuchsia-100 to-fuchsia-900 shadow-fuchsia-500",
    },
    {
      id: 19,
      src: github,
      title: "GitHub",
      style: "bg-gradient-to-b from-white to-black shadow-black-xl",
    },
    {
      id: 20,
      src: c,
      title: "C",
      style: "bg-gradient-to-b from-blue-100 to-blue-900 shadow-blue-500",
    },
    {
      id: 21,
      src: golang,
      title: "Golang",
      style: "bg-gradient-to-b from-blue-100 to-blue-600 shadow-blue-500",
    },
    {
      id: 22,
      src: php,
      title: "PHP",
      style: "bg-gradient-to-b from-indigo-100 to-indigo-500 shadow-indigo-500",
    },
    {
      id: 23,
      src: scenebuilder,
      title: "SceneBuilder",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 24,
      src: unity,
      title: "Unity",
      style: "bg-gradient-to-b from-white to-black shadow-black-xl",
    },
    {
      id: 25,
      src: webflow,
      title: "Webflow",
      style: "bg-gradient-to-b from-indigo-100 to-indigo-500 shadow-indigo-500",
    },
    {
      id: 26,
      src: javafx,
      title: "JavaFX",
      style: "bg-gradient-to-b from-sky-100 to-sky-700 shadow-sky-500",
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

  const [gridRef, inViewGrid] = useInView();
  const gridControls = useAnimation();

  useEffect(() => {
    if (inViewGrid) {
      gridControls.start("visible");
    } else {
      gridControls.start("hidden");
    }
  }, [inViewGrid, gridControls]);

  const staggerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-teal-500 to-green-400 w-full h-fit sm:min-h-screen sm:pt-60"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          ref={refContent}
          initial={inViewContent ? "visible" : "hidden"}
          animate={inViewContent ? "visible" : "hidden"}
          variants={dropInVariants}
        >
          <motion.p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </motion.p>
          <motion.p className="py-6">
            These are the technologies I've worked with
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainerVariants}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              variants={staggerItemVariants}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <motion.p className="mt-4 text-white">{title}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
